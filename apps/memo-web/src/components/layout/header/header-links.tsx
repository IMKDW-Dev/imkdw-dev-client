import { Icon } from '@iconify/react';
import { ReactNode } from 'react';

function HeaderLink({ children }: { children: ReactNode }) {
  return <button className="flex items-center p-2 rounded-lg bg-gray-100">{children}</button>;
}

export function HeaderLinks() {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-primary">
      <HeaderLink>
        <Icon icon="mdi:github" className="text-gray-600" fontSize={24} />
      </HeaderLink>
      <HeaderLink>
        <Icon icon="material-symbols:dark-mode-outline" className="text-gray-600" fontSize={24} />
      </HeaderLink>
    </div>
  );
}
