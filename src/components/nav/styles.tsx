import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.nav`
  cursor: pointer;
  position: sticky;
  top: 0;
  padding: 1.2rem 2rem;
  display: flex;
  z-index: 4;
  background: var(--color-00);

  ${mq.fromTabletSm} {
    padding: 1.2rem 4.8rem;
  }

  ${mq.fromDesktopSm} {
    padding: 1.2rem 10%;
  }
`;

export const LabelLogo = styled.div`
  font-family: "Arial";
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--color-80);
  margin-left: 1.2rem;
`;
