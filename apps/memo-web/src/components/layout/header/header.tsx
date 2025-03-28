import { HeaderCreateMemo } from './header-create-memo';
import { HeaderLinks } from './header-links';

export function Header() {
  return (
    <header className="flex w-full gap-10">
      <HeaderCreateMemo />
      <HeaderLinks />
    </header>
  );
}
