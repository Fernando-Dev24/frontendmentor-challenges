import { Logo } from "../../logo/logo";

interface Props {
  className: React.HTMLAttributes<HTMLElement>["className"];
}

export const NavbarMobile = ({ className }: Props) => {
  return (
    <nav className={`${className} p-5`}>
      <Logo />
    </nav>
  );
};
