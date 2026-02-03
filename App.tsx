
import React, { useMemo } from 'react';
import Timer from './components/Timer';
import DayRow from './components/DayRow';
import { RAMADAN_DAYS, PRAYER_LABELS } from './constants';
import { MoonIcon, LanternIcon } from './components/RamadanIcon';

const App: React.FC = () => {
  // Logic to find if "today" is a Ramadan day in 2026 (simplified for demo)
  const todayIndex = useMemo(() => {
    const now = new Date();
    // For 2026 Ramadan simulation:
    // If we are in Feb/Mar 2026, we could match. For now, let's just show Day 1 as active if it were the case.
    // In production, this would compare actual dates.
    return -1; // Set to -1 to not highlight anything during development
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-amber-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-16 pb-10 px-4 text-center">
        <div className="flex justify-center mb-6 animate-bounce duration-[3000ms]">
          <LanternIcon />
        </div>
        <h1 className="text-5xl md:text-7xl font-amiri font-bold gold-text mb-4 drop-shadow-2xl">
          ئیمساکیا رەمەزانێ ١٤٤٧ هـ
        </h1>
        <p className="text-slate-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          تەقویما تەمام یا ٣٠ رۆژێن مەها رەمەزانا پیرۆز بۆ سالا <span className="text-amber-500 font-bold border-b border-amber-500/30">٢٠٢٦ م</span>
        </p>
        <div className="flex items-center justify-center gap-3 mt-8 text-sm md:text-base text-slate-400 bg-slate-900/50 w-fit mx-auto px-6 py-2 rounded-full border border-slate-800">
          <MoonIcon />
          <span>هەمی دەمێن نڤێژان و پاشیڤ و فتارێ</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Countdown/Timer Card */}
        <Timer />

        {/* Info Helper for Mobile */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-4 text-xs text-slate-500 italic">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          بۆ دیتنا هەمی دەمان، بەر ب چەپێ بکێشە
        </div>

        {/* Calendar Card */}
        <div className="glass-card rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800/60 transition-all duration-500">
          {/* Table Header - Desktop Only */}
          <div className="hidden md:grid grid-cols-10 gap-2 p-6 bg-slate-900/80 border-b border-slate-700/50 text-xs font-bold uppercase tracking-widest text-slate-400 text-center items-center">
            <div className="col-span-2 text-right pr-4">رۆژ و مێژوو</div>
            <div>{PRAYER_LABELS.imsak}</div>
            <div className="text-amber-500">{PRAYER_LABELS.fajr}</div>
            <div>{PRAYER_LABELS.sunrise}</div>
            <div>{PRAYER_LABELS.dhuhr}</div>
            <div>{PRAYER_LABELS.asr}</div>
            <div className="text-amber-400 font-black scale-110">{PRAYER_LABELS.maghrib}</div>
            <div>{PRAYER_LABELS.isha}</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-800/40 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {RAMADAN_DAYS.map((day, index) => (
              <DayRow 
                key={day.ramadanDay} 
                day={day} 
                isToday={index === todayIndex}
              />
            ))}
          </div>

          {/* Footer of card */}
          <div className="p-6 bg-slate-900/50 text-center text-slate-500 text-xs md:text-sm">
            <span className="text-amber-500/70">●</span> ئەڤ دەمە یێن تەخمینی نە و ل دویڤ ئاسۆیا گشتی هاتینە دانان. هیڤیە ل دویڤ بانگێ مزگەفتێن خۆ بن.
          </div>
        </div>

        {/* Dua/Reminders Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl border-t-4 border-t-amber-500 hover:translate-y-[-5px] transition-transform">
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-3 text-xl">
              <div className="p-2 bg-amber-500/10 rounded-lg">⭐</div>
              دوعایا فتارێ
            </h4>
            <p className="text-slate-200 font-amiri text-2xl leading-relaxed italic text-center md:text-right">
              "ذهب الظمأ وابتلت العروق، وثبت الأجر إن شاء الله"
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-3xl border-t-4 border-t-blue-500 hover:translate-y-[-5px] transition-transform">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-3 text-xl">
               <div className="p-2 bg-blue-500/10 rounded-lg">📜</div>
              بیرهینان
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              خێر و کارێن باش د ڤێ مەهێ دا هند بەرامبەر د مەزنن. هەول بدە پتر دوعا بکەی و هاریکاریا کەسێن پێدڤی بکەی.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border-t-4 border-t-emerald-500 hover:translate-y-[-5px] transition-transform">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-3 text-xl">
               <div className="p-2 bg-emerald-500/10 rounded-lg">🌙</div>
              فەرموودە
            </h4>
            <p className="text-slate-300 text-base italic leading-relaxed">
              "هەر کەسێ رەمەزانێ ب ڕۆژی بیت ژبەر باوەریێ و ب هیڤیا خێرێ، گونەهێن وی یێن بوری دێ هێنە غەفراندن."
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t border-slate-800/50 pt-12 text-center text-slate-500">
        <div className="mb-4 flex justify-center gap-4 grayscale opacity-50">
          <LanternIcon />
          <MoonIcon />
        </div>
        <p className="text-sm tracking-widest uppercase">رمضان كريم • کل عام وأنتم بخیر</p>
        <p className="mt-2 text-xs opacity-50">هاتیە دروستکرن بۆ خزمەتا باوەرداران ٢٠٢٦</p>
      </footer>

      {/* Custom Scrollbar Styles for the list */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.4);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
