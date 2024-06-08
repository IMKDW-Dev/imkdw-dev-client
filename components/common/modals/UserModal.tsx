/* eslint-disable @typescript-eslint/indent */

import Image from 'next/image';
import ReactDOM from 'react-dom';

export const portalSelector = '#portal';

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function UserModal({ children, onClose, title }: Props) {
  const element = typeof window !== 'undefined' && document.querySelector(portalSelector);
  return element && children
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-30">
          <div className="mobile:w-[90%] relative mx-auto w-[500px] rounded-md bg-white">
            <div className="flex justify-between border-b border-gray-300 p-4">
              <h3 className="text-xl">{title}</h3>
              <button type="button">
                <Image src="/images/icon/close-black.svg" alt="close" width={28} height={28} onClick={onClose} />
              </button>
            </div>
            <div className="p-4">{children}</div>
          </div>
        </div>,
        document.getElementById('portal') as HTMLElement,
      )
    : null;
}
