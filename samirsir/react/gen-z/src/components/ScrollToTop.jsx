import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-gray-900 text-amber-400 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-bounce-short"
          title="Go to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}
