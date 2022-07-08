// components
import { SocialType } from "constants/members";

// styles
import { Container } from "./styles";

const getSocialInfo = (type: SocialType) => {
  switch (type) {
    case SocialType.twitter:
      return {
        icon: "",
        label: "Twitter",
      };
    case SocialType.youtube:
      return {
        icon: "",
        label: "Youtube",
      };
    case SocialType.discord:
      return {
        icon: "",
        label: "Discord",
      };
    case SocialType.tiktok:
      return {
        icon: "",
        label: "TikTok",
      };
    case SocialType.twitch:
      return {
        icon: "",
        label: "Twitch",
      };
  }

  return {
    label: "",
    icon: "",
  };
};

const SocialButton = ({ type, value }: { type: SocialType; value: string }) => {
  const { label, icon } = getSocialInfo(type);

  return (
    <Container href={value} target="_blank">
      {label}
    </Container>
  );
};

export default SocialButton;
