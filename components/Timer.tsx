
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('ku-IQ', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="glass-card rounded-3xl p-6 text-center shadow-xl border-amber-500/20 mb-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.42V7z"/></svg>
      </div>
      <h3 className="text-amber-400 font-medium mb-2 tracking-wide uppercase text-sm">دەمی نوکە ل دویڤ دەمژمێرا تە</h3>
      <div className="text-5xl md:text-6xl font-black text-white font-mono tracking-tighter mb-2">
        {formattedTime}
      </div>
      <p className="text-slate-400 text-sm">یا خودێ تو رەمەزانێ ب گەهینیە مە و مە هاریکار بی لسەر ڕۆژی و نڤێژان</p>
    </div>
  );
};

export default Timer;
