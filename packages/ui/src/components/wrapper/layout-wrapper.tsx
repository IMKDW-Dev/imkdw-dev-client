import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function LayoutWrapper({ children }: Props): React.ReactElement {
  return <div className="w-full max-w-[1440px]">{children}</div>;
}
