import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: WrapperProps): React.ReactElement {
  return <main className="w-full max-w-7xl bg-black min-h-screen">{children}</main>;
}
