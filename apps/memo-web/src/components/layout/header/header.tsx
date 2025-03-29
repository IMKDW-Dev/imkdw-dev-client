import { HeaderCreateMemoButton } from './header-create-memo-button';
import { HeaderLinks } from './header-links';

export function Header() {
  return (
    <header className="flex w-full gap-10">
      <HeaderCreateMemoButton />
      <HeaderLinks />
    </header>
  );
}
