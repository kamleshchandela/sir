import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Default to true for faster start
  const [scrollProgress, setScrollProgress] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef(null);
  const location = useLocation();

  const tracks = {
    '/': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Reverted to a more standard/reliable source
    '/about': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    '/carrer': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    '/support': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  };

  const [currentTrack, setCurrentTrack] = useState(tracks['/']);

  // Handle browser autoplay restriction on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (isPlaying && audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  useEffect(() => {
    const newTrack = tracks[location.pathname] || tracks['/'];
    if (currentTrack !== newTrack) {
      setCurrentTrack(newTrack);
      setAudioProgress(0);
    }
  }, [location.pathname]);

  // Scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = heightWin > 0 ? scrollTotal / heightWin : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update audio playback progress
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress || 0);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          // If browser blocks, it's fine, it will start on click
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrack, isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  // SVG Circle Progress Constants
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (audioProgress / 100) * circumference;

  return (
    <>
      <audio 
        ref={audioRef} 
        src={currentTrack} 
        onTimeUpdate={handleTimeUpdate}
        preload="auto"
        autoPlay
        loop 
      />
      
      {/* Dynamic Scroll Progress Positioning */}
      <div 
        className="fixed right-6 sm:right-12 z-[90] pointer-events-none transition-all duration-700"
        style={{
          top: `calc(12% + ${scrollProgress * 68}%)`, 
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <button
          onClick={togglePlay}
          className="relative pointer-events-auto w-16 h-16 rounded-full bg-gray-900 text-amber-400 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-black hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          title={isPlaying ? "Mute Rhythm" : "Play Rhythm"}
        >
          {/* Progress Ring (SVG) */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-gray-800"
            />
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.3s ease' }}
              className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"
              strokeLinecap="round"
            />
          </svg>

          {/* Animated Wave Bars */}
          <div className="flex items-end justify-center gap-[3px] h-5 z-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-[3px] bg-amber-400 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-wave' : 'h-1.5'
                }`}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  height: isPlaying ? '100%' : '6px'
                }}
              ></div>
            ))}
          </div>

          {!isPlaying && <FaVolumeMute className="absolute text-xs bottom-3 right-3 opacity-50" />}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 20px; }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}} />
    </>
  );
}
