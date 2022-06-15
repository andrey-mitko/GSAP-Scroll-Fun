import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component id="root" {...pageProps} />;
}

export default MyApp;
