'use client';

import { ArrowUpward } from '@mui/icons-material';

export default function TopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="back to top"
      className="fixed bottom-3 right-3 h-[50px] w-[50px] rounded-[100px] bg-[#FF6481] hover:bg-black"
      onClick={handleClick}
    >
      <ArrowUpward sx={{ color: 'white' }} />
    </button>
  );
}
