import { Logo } from '../common';
import { Container } from '../container';

interface Props {
  /**
   * Title of header
   */
  title: 'BRAIN' | 'BLOG';
}
export function Header({ title }: Props) {
  return (
    <header className="w-full bg-gray-200 h-[70px]">
      <Container className="flex items-center h-full">
        <div>
          <Logo />
        </div>
        <div>SearchBar</div>
        <div>Icons</div>
        <div>Profile</div>
      </Container>
    </header>
  );
}
