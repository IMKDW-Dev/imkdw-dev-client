import { ReactNode } from 'react';
import { cn } from '@imkdw-dev-client/utils';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className = '' }: WrapperProps): React.ReactElement {
  return <main className={cn('max-w-[1440px] w-full', className)}>{children}</main>;
}
