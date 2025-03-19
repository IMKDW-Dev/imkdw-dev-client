import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: WrapperProps): React.ReactElement {
  return <main className="min-h-screen w-full bg-black text-white">{children}</main>;
}
