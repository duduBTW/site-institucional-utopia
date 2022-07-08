import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 4.8rem -4rem 0;
  grid-row-gap: 0.8rem;

  ${mq.fromTabletSm} {
    grid-template-columns: 1fr 1fr;
    margin-top: 12.4rem;
    margin: 12.4rem -4rem 0;
  }

  ${mq.fromDesktopSm} {
    margin-right: -12rem;
    grid-template-columns: 1fr 1fr;
    margin-top: 16.4rem;
  }
`;
