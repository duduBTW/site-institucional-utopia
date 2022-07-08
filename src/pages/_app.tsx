import type { AppProps } from "next/app";

// components
import { Global } from "@emotion/react";
import Nav from "components/nav";

// styles
import globalStyles from "../constants/globalStyles";
import "sanitize.css";
import "./styles.scss";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Nav />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
