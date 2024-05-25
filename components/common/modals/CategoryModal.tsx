/* eslint-disable @typescript-eslint/indent */

import Image from 'next/image';
import ReactDOM from 'react-dom';

export const portalSelector = '#portal';

interface Props {
  title: string;
  children: React.ReactNode;
  selector: string;
  onClose: () => void;
}

export default function CategoryModal({ children, selector, onClose, title }: Props) {
  const element = typeof window !== 'undefined' && document.querySelector(selector);
  return element && children
    ? ReactDOM.createPortal(
        <div className="fixed z-[100] flex h-full w-full items-center justify-center bg-black bg-opacity-30">
          <div className="flex w-[500px] flex-col rounded-md bg-white">
            <div className="flex justify-between border-b border-gray-300 p-4">
              <h3 className="text-xl">{title}</h3>
              <button type="button">
                <Image src="/images/icon/close-black.svg" alt="close" width={28} height={28} onClick={onClose} />
              </button>
            </div>
            {children}
          </div>
        </div>,
        document.getElementById('portal') as HTMLElement,
      )
    : null;
}
