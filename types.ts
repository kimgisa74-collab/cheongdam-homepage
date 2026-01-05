
export interface NavItem {
  name: string;
  description: string;
  href: string;
}

export interface SajuInsightRequest {
  birthDate: string;
  birthTime: string;
  isLunar: boolean;
  gender: 'male' | 'female';
  question?: string;
}

export interface SajuInsightResponse {
  summary: string;
  elements: string[];
  advice: string;
}
