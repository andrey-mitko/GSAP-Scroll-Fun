import "../styles/globals.css";
import "locomotive-scroll/src/styles/_base.scss";
import "locomotive-scroll/src/styles/_scrollbar.scss";

import type { AppProps } from "next/app";
import useLocoScroll from "../hooks/useLocoScroll";

function MyApp({ Component, pageProps }: AppProps) {
  // useLocoScroll();
  return (
    <div id="main-container">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
