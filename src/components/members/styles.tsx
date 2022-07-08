import styled from "@emotion/styled";
import { mq } from "constants/theme";
import { motion } from "framer-motion";

export const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0.1rem;

  ${mq.fromTabletSm} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0rem;

    &:before {
      content: "";
      position: absolute;
      width: calc(100% - 4rem);
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, -50%);
      height: 0.1rem;
      border-radius: inherit;
      background: rgb(73, 206, 94);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        var(--color-80) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 2;
    }

    &:after {
      content: "";
      position: absolute;
      width: 0.1rem;
      height: calc(100% - 20rem);
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      border-radius: inherit;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        var(--color-80) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 2;
    }
  }

  ${mq.fromDesktopSm} {
    margin: 4vh 10% 0;
    border-bottom: 1px solid white;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: calc(90vh - 4.8rem);

    &:before {
      bottom: -0.2rem;
    }

    &:after {
      display: none;
    }
  }
`;

export const Member = styled(motion.img)`
  position: relative;
  object-fit: contain;
  object-position: bottom;
  width: 100%;
  height: 48rem;
  z-index: 2;

  ${mq.fromDesktopSm} {
    height: calc(90vh - 4.8rem);
    object-fit: cover;
    object-position: top;
  }

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 50%;
    background: red;
  }
`;

export const MemberContainer = styled.div`
  cursor: pointer;
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
      display: none;
    }
  }

  ${mq.fromDesktopSm} {
    height: calc(90vh - 4.8rem);
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 0.1rem;
      height: calc(100% - 20rem);
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-radius: inherit;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        var(--color-80) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 3;
    }
  }
`;
