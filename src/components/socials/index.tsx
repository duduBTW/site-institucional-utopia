import { SocialType } from "constants/members";

// components
import SocialButton from "components/socialButton";

// styles
import { Container } from "./styles";

const Socials = ({
  socials,
}: {
  socials?: Partial<Record<SocialType, string>>;
}) => (
  <Container>
    {Object.entries(socials ?? {})?.map(([type, value]) => (
      <SocialButton value={value} type={type as SocialType} key={type} />
    ))}
  </Container>
);

export default Socials;
