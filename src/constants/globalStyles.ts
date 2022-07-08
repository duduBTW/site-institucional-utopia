import { css } from "@emotion/react";
import { colors } from "./theme";

const globalStyles = css`
  :root {
    --color-00: ${colors.black};
    --color-20: ${colors.color20};
    --color-80: ${colors.white};
  }
`;

export default globalStyles;
