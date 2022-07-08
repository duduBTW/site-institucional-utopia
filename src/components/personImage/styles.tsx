import styled from "@emotion/styled";
import { mq } from "constants/theme";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  height: 56rem;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);

  ${mq.fromTabletSm} {
    height: 86rem;
    min-height: 56rem;
    max-height: calc(84vh - 6rem);
  }

  ${mq.fromDesktopSm} {
    width: 44rem;
    min-width: 44rem;
    height: calc(100vh - 4.8rem);
    max-height: calc(100vh - 4.8rem);
  }
`;

export const Content = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;

  ${mq.fromDesktopSm} {
    object-fit: cover;
    object-position: center;
  }
`;
