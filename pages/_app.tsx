import "../styles/globals.css";
import "locomotive-scroll/src/styles/_base.scss";
import "locomotive-scroll/src/styles/_scrollbar.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <div id="main-container" data-scroll-section>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
