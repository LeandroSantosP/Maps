import Link from "next/link";
import * as C from "./styles";

interface LinkWapperProps {
  href: string;
  children: React.ReactNode;
}

export const LinkWarper = ({ children, href = "" }: LinkWapperProps) => {
  return (
    <C.Wrapper>
      <Link href={href}>{children}</Link>
    </C.Wrapper>
  );
};
