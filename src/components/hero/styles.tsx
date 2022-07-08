import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.header`
  position: relative;

  ${mq.fromDesktopSm} {
    width: 100%;
    display: flex;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: url("/images/background.png");
    opacity: 0.4;
    z-index: -1;

    ${mq.fromDesktopSm} {
      z-index: 1;
    }

    ${mq.fromDesktopSm} {
      left: 30%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.fromDesktopSm} {
    flex: 1;
    flex-grow: 1;
    align-items: flex-start;
    min-width: 64rem;
    z-index: 2;
    padding-left: 10%;
    padding-right: 12rem;
  }

  ${mq.fromDesktopLg} {
    padding-right: 8%;
    box-sizing: content-box;
    height: 80vh;
    justify-content: center;
  }
`;

export const EffectMobile = styled.div`
  position: absolute;
  bottom: -0.1rem;
  background: #5aff74;
  height: 0.1rem;
  width: calc(100% - 8rem);
  margin: 0 4rem;
  z-index: 3;

  &:before {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    width: 7.8rem;
    height: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: #5aff74;
  }

  ${mq.fromTabletSm} {
    display: none;
  }
`;

export const EffectTabletLeft = styled.div`
  display: none;

  ${mq.fromTabletSm} {
    display: block;
    position: absolute;
    width: 24rem;
    height: 0.1rem;
    left: 0;
    background: #5aff74;
    bottom: -0.1rem;
    z-index: 3;

    &:before {
      content: "";
      position: absolute;
      bottom: -0.2rem;
      width: 7.8rem;
      height: 0.5rem;
      left: 0;
      background: #5aff74;
    }
  }

  ${mq.fromDesktopSm} {
    display: none;
  }
`;

export const EffectTabletRight = styled.div`
  display: none;

  ${mq.fromTabletSm} {
    display: block;
    position: absolute;
    width: 24rem;
    height: 0.1rem;
    right: 0;
    background: #5aff74;
    bottom: -0.1rem;
    z-index: 3;

    &:before {
      content: "";
      position: absolute;
      bottom: -0.2rem;
      width: 7.8rem;
      height: 0.5rem;
      right: 0;
      background: #5aff74;
    }
  }

  ${mq.fromDesktopSm} {
    display: none;
  }
`;

export const EffectDesktop = styled.div`
  display: none;

  ${mq.fromDesktopSm} {
    z-index: 3;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.4rem;
    height: 100%;
    background: #5aff74;
  }
`;

export const Title = styled.h1`
  margin-top: 12rem;
  font-size: 3.2rem;
  line-height: 4.2rem;
  padding: 0 2rem;

  ${mq.fromTabletSm} {
    margin-top: 19.2rem;
    font-size: 6.4rem;
    line-height: 8rem;
  }

  ${mq.fromDesktopSm} {
    text-align: left;
    padding-left: 0rem;
  }

  ${mq.fromDesktopLg} {
    font-size: 7.4rem;
    line-height: 9rem;
  }
`;

export const SubTitle = styled.h3`
  margin-top: 1.6rem;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.6rem;
  text-align: center;
  padding: 0 2rem;

  ${mq.fromTabletSm} {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  ${mq.fromDesktopSm} {
    text-align: left;
    padding: 0;
  }

  ${mq.fromDesktopLg} {
    font-size: 3rem;
    line-height: 4.2rem;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  background: var(--color-00);
  width: calc(100% - 4rem);
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-80);
  margin: 14rem 0;
  padding: 0.8rem 1.8rem;
  position: relative;
  border-radius: 0.6rem;

  ${mq.fromTabletSm} {
    width: auto;
  }

  ${mq.fromDesktopSm} {
    margin-left: 0;
    margin-bottom: 12rem;
  }

  ${mq.fromDesktopLg} {
    font-size: 1.8rem;
    line-height: 2.4rem;
    padding: 1rem 2.8rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -0.1rem;
    border-radius: inherit; /* !importanté */
    background: rgb(73, 206, 94);
    background: linear-gradient(
      24deg,
      rgba(73, 206, 94, 1) 0%,
      rgba(148, 68, 202, 1) 75%
    );
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  object-fit: cover;
  object-position: center;
  inset: 0;

  width: 100%;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  z-index: -1;
  opacity: 0.08;

  ${mq.fromDesktopSm} {
    left: 30%;
    opacity: 0.2;
  }
`;
