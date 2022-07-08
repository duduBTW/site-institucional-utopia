import { Variants } from "framer-motion";

// styles
import {
  EffectMobile,
  EffectTabletLeft,
  EffectTabletRight,
} from "components/hero/styles";
import { Container, Content } from "./styles";

const PersonImage = ({ src }: { src: string }) => {
  return (
    <Container variants={containerVars} initial="initial" animate="animate">
      <Content
        variants={contentVars}
        src={src}
        width={1080}
        height={1920}
        alt="Person"
      />
      <EffectMobile />
      <EffectTabletLeft />
      <EffectTabletRight />
    </Container>
  );
};

const containerVars: Variants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0",
    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const contentVars: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.8,
    },
  },
};

export default PersonImage;
