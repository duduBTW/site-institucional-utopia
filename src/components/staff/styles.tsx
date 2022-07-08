import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: 12rem;
  text-align: center;
`;

export const MemberList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.1rem;
  margin-top: 2.4rem;

  ${mq.fromTabletSm} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0rem;
  }

  ${mq.fromDesktopSm} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: none;
    width: min-content;
    margin: 0 auto;
  }
`;

export const Member = styled.img`
  object-fit: contain;
  object-position: bottom;
  height: 48rem;
  z-index: 2;
  width: 100%;
  height: 100%;

  ${mq.fromDesktopSm} {
    width: 40rem;
    object-fit: cover;
    object-position: top;
  }
`;

export const MemberContainer = styled.div`
  height: 48rem;
  width: 100%;
  background: linear-gradient(180deg, var(--color-00) 0%, #0f0f0f);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: calc(100% - 4rem);
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.1rem;
    height: 0.1rem;
    border-radius: inherit;
    background: rgb(73, 206, 94);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      var(--color-80) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: -1;
  }

  ${mq.fromTabletSm} {
    &:before {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: 100%;
      top: 0;
      left: 100%;
      border-radius: inherit;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        var(--color-80) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 2;
    }

    &:nth-child(3) {
      &:before {
        display: none;
      }
    }
  }

  ${mq.fromDesktopSm} {
    width: 40rem;
  }
`;
