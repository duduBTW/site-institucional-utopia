import { Variants } from "framer-motion";

// styles
import {
  Title,
  Description,
  Container,
  EffectDesktop,
  TitleLetter,
  TitleLetterContainer,
} from "./styles";

const PersonInfo = ({ name }: { name: string }) => {
  const titleLetters = name.split("");

  return (
    <Container variants={containerVars} initial="initial" animate="animate">
      <Title>
        {titleLetters.map((letter, index) => (
          <TitleLetterContainer key={index}>
            <TitleLetter variants={titleLetterVars}>{letter}</TitleLetter>
          </TitleLetterContainer>
        ))}
      </Title>
      <Description variants={descriptionVars}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Description>

      <EffectDesktop />
    </Container>
  );
};

const containerVars: Variants = {
  initial: {},
};

const titleLetterVars: Variants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0",
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const descriptionVars: Variants = {
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

export default PersonInfo;
