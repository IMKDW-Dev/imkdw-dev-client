'use client';

import { ArrowUpward } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      type="button"
      aria-label="back to top"
      className="fixed bottom-3 right-3 h-[50px] w-[50px] translate-y-full scale-50 transform rounded-[100px] bg-[#FF6481] opacity-0 transition duration-500 ease-in-out hover:bg-black"
      style={{ opacity: 1, transform: 'scale(1) translateY(0)' }}
      onClick={handleClick}
    >
      <ArrowUpward sx={{ color: 'white' }} />
    </button>
  ) : null;
}
