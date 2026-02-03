
import React from 'react';
import { RamadanDay } from '../types';
import { PRAYER_LABELS } from '../constants';

interface DayRowProps {
  day: RamadanDay;
  isToday: boolean;
}

const DayRow: React.FC<DayRowProps> = ({ day, isToday }) => {
  return (
    <div className={`flex flex-col md:grid md:grid-cols-10 gap-2 p-4 border-b border-slate-700/50 items-center transition-all hover:bg-slate-800/40 ${isToday ? 'bg-amber-500/10 border-amber-500/30 ring-1 ring-amber-500/20' : ''}`}>
      
      {/* Day and Date Section */}
      <div className="w-full md:col-span-2 flex justify-between md:flex-col items-center md:items-start mb-3 md:mb-0">
        <div className="flex items-center gap-2">
           <span className={`text-xl font-bold ${isToday ? 'text-amber-400' : 'text-slate-100'}`}>
            {day.ramadanDay} رەمەزان
          </span>
          {isToday && <span className="text-[10px] px-2 py-0.5 bg-amber-500 text-slate-900 rounded-full font-bold animate-pulse">ئەڤڕۆ</span>}
        </div>
        <span className="text-xs text-slate-400 font-medium">{day.dayName} - {day.gregorianDate}</span>
      </div>

      {/* Times Section - Scrollable on Mobile, Grid on Desktop */}
      <div className="w-full md:col-span-8 overflow-x-auto no-scrollbar">
        <div className="flex md:grid md:grid-cols-7 gap-4 md:gap-2 min-w-max md:min-w-0 pb-2 md:pb-0">
          
          {/* Imsak */}
          <div className="text-center px-2">
            <span className="block text-[10px] text-slate-500 mb-1">{PRAYER_LABELS.imsak}</span>
            <span className="font-mono font-medium text-slate-300 text-sm">{day.times.imsak}</span>
          </div>

          {/* Fajr */}
          <div className="text-center px-2">
            <span className="block text-[10px] text-amber-500/70 mb-1 font-bold">{PRAYER_LABELS.fajr}</span>
            <span className="font-mono font-bold text-amber-200 text-sm">{day.times.fajr}</span>
          </div>

          {/* Sunrise */}
          <div className="text-center px-2">
            <span className="block text-[10px] text-slate-500 mb-1">{PRAYER_LABELS.sunrise}</span>
            <span className="font-mono text-slate-400 text-sm">{day.times.sunrise}</span>
          </div>

          {/* Dhuhr */}
          <div className="text-center px-2">
            <span className="block text-[10px] text-slate-500 mb-1">{PRAYER_LABELS.dhuhr}</span>
            <span className="font-mono text-slate-300 text-sm">{day.times.dhuhr}</span>
          </div>

          {/* Asr */}
          <div className="text-center px-2">
            <span className="block text-[10px] text-slate-500 mb-1">{PRAYER_LABELS.asr}</span>
            <span className="font-mono text-slate-300 text-sm">{day.times.asr}</span>
          </div>

          {/* Maghrib - Highlighted for Iftar */}
          <div className="text-center px-4 bg-amber-500/10 py-1 rounded-xl border border-amber-500/20">
            <span className="block text-[10px] text-amber-500 font-bold mb-1">فتار</span>
            <span className="font-mono font-black text-amber-400 text-lg">{day.times.maghrib}</span>
          </div>

          {/* Isha */}
          <div className="text-center px-2">
            <span className="block text-[10px] text-slate-500 mb-1">{PRAYER_LABELS.isha}</span>
            <span className="font-mono text-slate-300 text-sm">{day.times.isha}</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DayRow;
