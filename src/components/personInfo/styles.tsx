import styled from "@emotion/styled";
import { mq } from "constants/theme";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
`;

export const EffectDesktop = styled.div`
  position: absolute;
  top: 0;
  right: -6rem;
  height: 100%;
  width: 0.4rem;
  background: #5aff74;
  display: none;

  ${mq.fromDesktopSm} {
    display: block;
  }

  ${mq.fromDesktopLg} {
    right: -12rem;
  }
`;

export const Title = styled(motion.h1)`
  display: flex;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 3.2rem;
  margin-bottom: 2.4rem;

  ${mq.fromTabletSm} {
    font-size: 6.4rem;
    line-height: 8rem;
  }

  ${mq.fromDesktopLg} {
    font-size: 7.6rem;
    line-height: 9.2rem;
    margin-bottom: 4rem;
  }
`;

export const TitleLetterContainer = styled(motion.div)`
  overflow: hidden;
`;

export const TitleLetter = styled(motion.div)``;

export const Description = styled(motion.p)`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: rgba(255, 255, 255, 0.62);

  ${mq.fromTabletSm} {
    font-size: 2.4rem;
    line-height: 4rem;
  }

  ${mq.fromDesktopLg} {
    font-size: 3.2rem;
    line-height: 5.4rem;
  }
`;
