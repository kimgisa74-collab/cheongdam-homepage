
import React from 'react';
import { Search } from 'lucide-react';

const INFO_LINK = "https://blog.naver.com/fortune_consultant/224038852119";

export const Header: React.FC = () => {
  return (
    <div className="w-full bg-white py-4 px-6 md:px-12 relative flex items-center justify-center border-b border-neutral-100 sticky top-0 z-50">
      <div className="text-center">
        <a href="#" className="inline-block group">
          <h1 className="text-lg font-bold tracking-tight text-neutral-800 transition-colors group-hover:text-amber-600">
            청담사주 컨설턴트 <span className="text-amber-600">준</span>
          </h1>
        </a>
      </div>
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex items-center border-b border-neutral-800 pb-1">
        <input 
          type="text" 
          placeholder="search..." 
          className="bg-transparent border-none outline-none text-sm w-40 italic font-light"
        />
        <Search size={18} className="text-neutral-400" />
      </div>
    </div>
  );
};

export const SubNavigation: React.FC = () => {
  const menus = [
    { name: '상담안내', href: INFO_LINK, isExternal: true, highlight: true },
    { name: '수강안내', href: '#수강안내' },
    { name: '작성글', href: '#작성글' },
    { name: '유튜브', href: '#유튜브' },
  ];
  
  return (
    <nav className="w-full bg-white border-b border-neutral-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a 
                href={menu.href} 
                target={menu.isExternal ? "_blank" : undefined}
                rel={menu.isExternal ? "noopener noreferrer" : undefined}
                className={`text-sm tracking-tight transition-all ${
                  menu.highlight 
                  ? "font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4 decoration-amber-200" 
                  : "font-medium text-neutral-700 hover:text-amber-600"
                }`}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
