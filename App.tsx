
import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Instagram, 
  Youtube, 
  MessageSquare,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Map,
  Clock,
  UserCheck,
  Zap,
  Users,
  Video,
  Target,
  GraduationCap,
  Baby,
  Briefcase,
  History,
  Linkedin,
  Mail,
  Globe,
  MessageCircle
} from 'lucide-react';
import { Header, SubNavigation } from './components/Navigation';

const BLOG_MAIN_LINK = "https://blog.naver.com/fortune_consultant";
const INFO_LINK = "https://blog.naver.com/fortune_consultant/224038852119";
const LINKEDIN_LINK = "https://www.linkedin.com/in/john-choi-61760a177";
const KAKAO_LINK = "https://open.kakao.com/o/sLnHar1h";
const CONTACT_EMAIL = "luckycsj@gmail.com";
const YOUTUBE_LINK = "https://www.youtube.com/@June-%EC%82%AC%EC%A3%BC%EB%AA%85%EB%A6%AC%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8";

const App: React.FC = () => {
  const writings = [
    {
      title: '입문교육',
      subtitle: '명리학의 현대적 해석',
      desc: '사주명리학의 기초 원리를 현대 비즈니스와 심리학적 관점에서 쉽게 풀어 설명합니다.',
      icon: <GraduationCap size={24} />,
      link: "https://blog.naver.com/PostList.naver?blogId=fortune_consultant&from=postList&categoryNo=1&parentCategoryNo=1"
    },
    {
      title: '자녀진로',
      subtitle: '타고난 기질과 잠재력',
      desc: '아이의 오행 구성을 분석하여 가장 잘 어울리는 학업 방향과 미래 직업군을 제안합니다.',
      icon: <Baby size={24} />,
      link: "https://blog.naver.com/PostList.naver?blogId=fortune_consultant&from=postList&categoryNo=8"
    },
    {
      title: '일반인진로',
      subtitle: '성공을 위한 최적의 시기',
      desc: '이직, 창업, 투자 등 인생의 중요한 결정을 앞둔 분들을 위한 전략적 타이밍 가이드입니다.',
      icon: <Briefcase size={24} />,
      link: "https://blog.naver.com/PostList.naver?blogId=fortune_consultant&from=postList&categoryNo=16"
    },
    {
      title: '상담결과',
      subtitle: '변화와 성장의 기록',
      desc: '실제 컨설팅 사례를 통해 운의 흐름을 활용하여 위기를 기회로 바꾼 생생한 후기입니다.',
      icon: <History size={24} />,
      link: "https://blog.naver.com/PostList.naver?blogId=fortune_consultant&from=postList&categoryNo=11"
    }
  ];

  const videos = [
    {
      title: '1분 사주',
      subtitle: '숏폼으로 만나는 인사이트',
      desc: '복잡한 명리학 지식을 1분 안에 핵심만 요약하여 전달해 드리는 숏폼 콘텐츠입니다.',
      icon: <Clock size={24} />,
      link: `${YOUTUBE_LINK}/shorts`
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 scroll-smooth">
      {/* Top Header */}
      <Header />

      {/* Cinematic Hero Section */}
      <section className="relative w-full aspect-[4/3] md:aspect-[16/5] overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80" 
            alt="Sailboat at Sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 md:bg-transparent md:bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 p-6 md:p-8 lg:p-12">
          <div className="inline-block bg-[#5B7B92]/80 backdrop-blur-sm text-white px-4 py-1 text-[10px] md:text-sm font-light tracking-wide rounded-sm shadow-sm">
            청담사주 컨설턴트 준
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col h-full justify-center md:justify-end pb-8 lg:pb-12">
          <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 text-center md:text-right max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg break-keep">
              삶의 파도를 넘는 <br />
              지혜로운 전략, <br />
              청담사주 컨설턴트 준과 <br />
              함께합니다.
            </h2>
          </div>

          <div className="mt-8 md:mt-auto text-left max-w-xl">
            <p className="text-white text-[10px] md:text-base lg:text-lg font-light mb-1 drop-shadow-md">
              "높은 파도 속에서도 길을 잃지 않는 법, 그것이 명리학의 핵심입니다."
            </p>
            <p className="text-white text-[10px] md:text-base lg:text-lg font-light drop-shadow-md opacity-90">
              25년 전략 기획의 눈으로 당신의 인생 항로를 설계합니다.
            </p>
          </div>
        </div>
      </section>

      <SubNavigation />

      {/* Consulting Section */}
      <section id="상담안내" className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">Consultation Guide</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-neutral-800">컨설팅 프로세스</h2>
            <div className="w-16 h-0.5 bg-amber-200 mx-auto mb-8"></div>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed text-lg font-light">
              "당신의 인생 항로를 가장 명확하게 설계하는 방법." <br />
              청담 준의 상담은 철저한 사전 분석과 깊이 있는 소통을 통해 이루어집니다.
            </p>
          </div>

          <div className="mb-20">
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-neutral-100 z-0"></div>
              {[
                { icon: <Calendar />, title: 'Step 01', desc: '예약 및 일정 확정' },
                { icon: <Map />, title: 'Step 02', desc: '기초 데이터 전달' },
                { icon: <Clock />, title: 'Step 03', desc: '준 컨설턴트 사전 분석' },
                { icon: <UserCheck />, title: 'Step 04', desc: '1:1 심층 상담 (대면/Zoom)' },
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white border-2 border-neutral-50 rounded-full flex items-center justify-center text-amber-600 mb-6 shadow-xl shadow-neutral-100 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-100">
                    {step.icon}
                  </div>
                  <h5 className="text-xs font-bold text-neutral-400 mb-2 uppercase tracking-widest">{step.title}</h5>
                  <p className="text-neutral-800 font-bold text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24 flex items-center justify-center">
            <a 
              href={INFO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-neutral-800 transition-all shadow-2xl shadow-neutral-300 group"
            >
              상담안내 및 예약 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="수강안내" className="py-32 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">Education Program</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-neutral-800">사주 강의 및 교육</h2>
            <div className="w-16 h-0.5 bg-amber-200 mx-auto mb-8"></div>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed text-lg font-light">
              기초부터 실전까지, 체계적인 명리학 교육을 통해 <br />
              스스로의 삶을 해석하고 타인에게 선한 영향력을 전하는 법을 배웁니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase border border-neutral-100 px-3 py-1 rounded-full">Customized</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-neutral-800">① 사주 강의</h3>
              <p className="text-neutral-500 mb-8 font-light">특정 주제나 소규모 모임을 위한 맞춤형 오프라인 특강 프로그램입니다.</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 size={18} className="text-amber-600" /></div>
                  <div>
                    <h5 className="text-sm font-bold text-neutral-800">유연한 진행 방식</h5>
                    <p className="text-xs text-neutral-400 mt-1">주제·시간·장소에 따라 강의료 협의 가능</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 size={18} className="text-amber-600" /></div>
                  <div>
                    <h5 className="text-sm font-bold text-neutral-800">소규모 강의 가능</h5>
                    <p className="text-xs text-neutral-400 mt-1">프라이빗한 스터디 및 그룹 강의 (Case by Case)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-900 text-white p-12 rounded-[3rem] shadow-2xl shadow-amber-900/10 hover:shadow-amber-900/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                  Coming Soon
                </span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 mb-10 group-hover:scale-110 transition-transform backdrop-blur-md">
                <Video size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-6">② 사주 교육</h3>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-sm font-bold text-white">총 16회 (주 2회)</p>
                  <p className="text-[10px] text-amber-100/50">회당 1시간 30분</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mb-1">Method</p>
                  <p className="text-sm font-bold text-white">ZOOM 실시간 강의</p>
                  <p className="text-[10px] text-amber-100/50">온라인 비대면 진행</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target size={18} className="text-amber-400" />
                  <span className="text-xs font-bold tracking-widest uppercase">Target Audience</span>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm text-amber-50/80 font-light">• 체계적인 사주명리학 입문을 원하시는 분</li>
                  <li className="text-sm text-amber-50/80 font-light">• 독학 중 체계가 잡히지 않아 포기하셨던 분</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="작성글" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div>
              <span className="text-amber-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">Insights & Column</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800">청담사주 컨설턴트 준</h2>
            </div>
            <a 
              href={BLOG_MAIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-neutral-400 hover:text-amber-600 transition-colors flex items-center gap-2 group"
            >
              전체보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {writings.map((writing, i) => (
              <a 
                key={i} 
                href={writing.link || '#'} 
                target={writing.link && writing.link !== '#' ? "_blank" : undefined}
                rel={writing.link && writing.link !== '#' ? "noopener noreferrer" : undefined}
                className="bg-neutral-50 p-8 rounded-[2.5rem] border border-neutral-100 hover:shadow-xl hover:bg-white transition-all duration-500 group flex flex-col h-full text-left"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform shadow-sm border border-neutral-100">
                  {writing.icon}
                </div>
                <div className="flex-grow">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{writing.subtitle}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-neutral-800">{writing.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    {writing.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 mt-auto">
                  <div className="text-[11px] font-bold text-neutral-400 group-hover:text-amber-600 tracking-widest uppercase transition-colors flex items-center gap-2">
                    Read Post <ExternalLink size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="유튜브" className="py-32 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div>
              <span className="text-amber-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">Insights & Video</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800">청담사주 컨설턴트 준</h2>
            </div>
            <a 
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-neutral-400 hover:text-amber-600 transition-colors flex items-center gap-2 group"
            >
              채널 방문하기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="max-w-md mx-auto md:mx-0">
            {videos.map((video, i) => (
              <a 
                key={i} 
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 md:p-8 rounded-[2rem] border border-neutral-100 hover:shadow-xl hover:bg-neutral-50 transition-all duration-500 group flex flex-col min-h-fit"
              >
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform shadow-sm border border-neutral-100">
                  {video.icon}
                </div>
                <div className="flex-grow">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{video.subtitle}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-neutral-800">{video.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {video.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 mt-auto">
                  <div className="text-[11px] font-bold text-neutral-400 group-hover:text-amber-600 tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer">
                    Watch Video <ExternalLink size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-16">
            <div className="max-w-sm">
              <span className="text-2xl font-bold tracking-tight mb-8 block text-neutral-800">
                청담사주 컨설턴트 <span className="text-amber-600">준</span>
              </span>
              <p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
                격랑의 현대 사회에서 명리학적 통찰은 단순한 운세 풀이를 넘어 <br />
                최선의 의사결정을 돕는 비즈니스 인텔리전스입니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BLOG_MAIN_LINK} target="_blank" rel="noopener noreferrer" title="Naver Blog">
                  <Globe size={22} className="text-neutral-400 hover:text-green-600 transition-colors cursor-pointer" />
                </a>
                <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin size={22} className="text-neutral-400 hover:text-blue-700 transition-colors cursor-pointer" />
                </a>
                <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer" title="KakaoTalk">
                  <MessageSquare size={22} className="text-neutral-400 hover:text-amber-600 transition-colors cursor-pointer" />
                </a>
                <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" title="YouTube">
                  <Youtube size={22} className="text-neutral-400 hover:text-red-600 transition-colors cursor-pointer" />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} title="Email">
                  <Mail size={22} className="text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Navigation</h5>
                <ul className="space-y-3 text-sm text-neutral-400 font-light">
                  <li>
                    <a href={INFO_LINK} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:text-amber-700 transition-colors">
                      상담안내
                    </a>
                  </li>
                  <li>
                    <a href="#수강안내" className="hover:text-amber-600 transition-colors">
                      수강안내
                    </a>
                  </li>
                  <li>
                    <a href="#작성글" className="hover:text-amber-600 transition-colors">
                      작성글
                    </a>
                  </li>
                  <li>
                    <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
                      유튜브
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Contact & Office</h5>
                <div className="space-y-4">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    <span className="block font-bold text-neutral-600 mb-1">Office Address</span>
                    서울 강남구 청담동 12-3 <br />
                    4F Private Suite <br />
                    Fortune Strategy Lab
                  </p>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    <span className="block font-bold text-neutral-600 mb-1">Email</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-amber-600 underline underline-offset-4 decoration-neutral-200">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-400 tracking-[0.2em] uppercase font-medium">
            <p>© 2025 청담사주 컨설턴트 준. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
