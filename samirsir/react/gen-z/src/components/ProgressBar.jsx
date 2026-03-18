import React, { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [scrollWidth, setScrollWidth] = useState('0%');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Calculate percentage, default avoiding NaN if heightWin is 0
      const scrollPercent = heightWin > 0 ? (scrollTotal / heightWin) * 100 : 0;
      setScrollWidth(`${scrollPercent}%`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-transparent z-[100] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 transition-all duration-150 ease-out shadow-sm shadow-amber-500/50" 
        style={{ width: scrollWidth }}
      ></div>
    </div>
  );
}
