// components
import Image from "next/image";
import Link from "next/link";

// styles
import { Container, LabelLogo } from "./styles";

const Nav = () => {
  return (
    <Link href={"/"}>
      <Container>
        <Image width={38} height={24} src="/images/logo.png" alt="Logo" />
        <LabelLogo>Utopia Project</LabelLogo>
      </Container>
    </Link>
  );
};

export default Nav;
