import { HeaderCreateKnowledge } from './header-create-knowledge';
import { HeaderLinks } from './header-links';

export function Header() {
  return (
    <header className="flex w-full gap-10">
      <HeaderCreateKnowledge />
      <HeaderLinks />
    </header>
  );
}
