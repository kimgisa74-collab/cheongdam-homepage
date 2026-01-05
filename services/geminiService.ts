
import { GoogleGenAI, Type } from "@google/genai";
import { SajuInsightRequest } from "../types";

export const getAIInsight = async (params: SajuInsightRequest) => {
  // Fix: Use direct process.env.API_KEY for initialization as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    사주 명리학 전문가로서 다음 정보를 바탕으로 짧고 강렬한 인생 통찰을 제공해주세요.
    
    생년월일: ${params.birthDate}
    태어난 시: ${params.birthTime}
    달력 종류: ${params.isLunar ? '음력' : '양력'}
    성별: ${params.gender === 'male' ? '남성' : '여성'}
    질문사항: ${params.question || '전반적인 운세'}

    다음 JSON 형식으로 응답해주세요:
    {
      "summary": "한 줄 요약",
      "elements": ["강조할 오행 요소 3개"],
      "advice": "구체적인 조언 (3-4문장)"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            elements: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            advice: { type: Type.STRING }
          },
          required: ["summary", "elements", "advice"]
        },
        systemInstruction: "당신은 한국 최고의 명리학 컨설턴트 '준'의 AI 비서입니다. 품격 있고 전문적이며 따뜻한 어조를 유지하세요."
      }
    });

    // Fix: Access .text property directly (not as a method) and handle potential undefined
    const text = response.text || "{}";
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("AI 분석 중 오류가 발생했습니다.");
  }
};
