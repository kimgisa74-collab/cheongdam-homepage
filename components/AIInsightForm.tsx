
import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCcw } from 'lucide-react';
import { getAIInsight } from '../services/geminiService';
import { SajuInsightResponse } from '../types';

export const AIInsightForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<SajuInsightResponse | null>(null);
  // Fix: Explicitly type gender to 'male' | 'female' to allow state updates for both genders
  const [formData, setFormData] = useState({
    birthDate: '',
    birthTime: '',
    gender: 'male' as 'male' | 'female',
    isLunar: false,
    question: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getAIInsight(formData);
      setInsight(result);
    } catch (err) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setInsight(null);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 p-8 md:p-12 border border-neutral-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
      
      {!insight ? (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          <div className="text-center mb-10">
            <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-2xl mb-4">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">AI 실시간 운세 분석</h3>
            <p className="text-sm text-neutral-500 mt-2">간단한 정보 입력으로 당신의 오늘을 확인하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">생년월일</label>
              <input 
                type="date" 
                required
                className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                value={formData.birthDate}
                onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">태어난 시간 (선택)</label>
              <input 
                type="time" 
                className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                value={formData.birthTime}
                onChange={(e) => setFormData({...formData, birthTime: e.target.value})}
              />
            </div>
          </div>

          <div className="flex gap-8 items-center justify-center p-4 bg-neutral-50 rounded-2xl">
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => setFormData({...formData, gender: 'male'})}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${formData.gender === 'male' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-400 border border-neutral-100'}`}
              >남성</button>
              <button 
                type="button"
                // Fix: Updating state with 'female' now valid because type is 'male' | 'female'
                onClick={() => setFormData({...formData, gender: 'female'})}
                // Fix: Comparing with 'female' now valid because type has overlap
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${formData.gender === 'female' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-400 border border-neutral-100'}`}
              >여성</button>
            </div>
            <div className="h-4 w-px bg-neutral-200"></div>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox"
                checked={formData.isLunar}
                onChange={(e) => setFormData({...formData, isLunar: e.target.checked})}
                className="w-4 h-4 rounded border-neutral-300 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900">음력 입력</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">궁금한 점</label>
            <textarea 
              placeholder="예: 올해의 금전운이 궁금합니다."
              className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all min-h-[100px]"
              value={formData.question}
              onChange={(e) => setFormData({...formData, question: e.target.value})}
            />
          </div>

          <button 
            disabled={loading}
            className="w-full py-5 bg-amber-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-700 transition-all disabled:opacity-50 shadow-xl shadow-amber-100"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            AI 인사이트 분석하기
          </button>
        </form>
      ) : (
        <div className="relative z-10 text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
          <div className="inline-flex p-3 bg-green-50 text-green-600 rounded-2xl mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-amber-900">"{insight.summary}"</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {insight.elements.map((el, i) => (
              <span key={i} className="px-4 py-1.5 bg-neutral-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase">
                {el}
              </span>
            ))}
          </div>

          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 text-left">
            <p className="text-neutral-700 leading-relaxed italic">
              {insight.advice}
            </p>
          </div>

          <div className="pt-6">
            <button 
              onClick={reset}
              className="px-8 py-4 text-neutral-400 hover:text-neutral-900 font-bold text-sm transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCcw size={16} /> 다시 분석하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
