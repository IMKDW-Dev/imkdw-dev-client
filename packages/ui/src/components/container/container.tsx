import { cn } from '@imkdw-dev-client/utils';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props): React.ReactElement {
  return <div className={cn('w-full px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}
