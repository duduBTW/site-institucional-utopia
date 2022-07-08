import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.section`
  padding: 0 2rem 6rem;
  background: var(--color-20);
  position: relative;

  ${mq.fromTabletSm} {
    padding: 0 4.8rem 6rem;
  }

  ${mq.fromDesktopSm} {
    padding: 0 10% 17rem;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.4;

    pointer-events: none;
    background-image: url(/images/effect.png);
    background-position-x: 40%;
    background-position-y: 20%;
    background-repeat: no-repeat;

    ${mq.fromTabletSm} {
      background-position-y: 20%;
      background-position-x: 60%;
    }

    ${mq.fromDesktopSm} {
      background-position-y: 40%;
      background-position-x: -10%;
    }
  }
`;

export const Title = styled.h2`
  padding-top: 12rem;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 3rem;

  ${mq.fromTabletSm} {
    font-size: 3rem;
    line-height: 3.2rem;
  }

  ${mq.fromDesktopSm} {
    padding-top: 19.2rem;
    font-size: 3.2rem;
    line-height: 3.4rem;
  }
`;

export const Description = styled.p`
  font-family: "Nunito";

  margin-top: 2.4rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.82);

  ${mq.fromTabletSm} {
    font-weight: 400;
    margin-top: 4rem;
    font-size: 2.2rem;
    line-height: 4rem;
  }

  ${mq.fromTabletSm} {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.2rem;
  }
`;
