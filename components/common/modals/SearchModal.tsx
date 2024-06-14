/* eslint-disable @typescript-eslint/indent */

import ReactDOM from 'react-dom';

export const portalSelector = '#portal';

interface Props {
  children: React.ReactNode;
}

export default function SearchModal({ children }: Props) {
  const element = typeof window !== 'undefined' && document.querySelector(portalSelector);
  return element && children
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70">
          <div className="flex w-full max-w-[600px] flex-col gap-10 mobile:w-[80%]">
            <h3 className="w-full text-center text-4xl font-bold tracking-wide text-white mobile:hidden">
              Press ESC to close
            </h3>
            {children}
          </div>
        </div>,
        document.getElementById('portal') as HTMLElement,
      )
    : null;
}
