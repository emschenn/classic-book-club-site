import "../styles/globals.scss";
import Head from "next/head";

import { CategoryStateProvider } from "../context/categoryState";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CategoryStateProvider>
        <Head>
          <link
            rel="preload"
            href="/fonts/GenShinGothic-ExtraLight.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GenShinGothic-Light.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GenShinGothic-Normal.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GenShinGothic-Medium.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GenShinGothic-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GenShinGothic-Heavy.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <Component {...pageProps} />
      </CategoryStateProvider>
    </>
  );
}

export default MyApp;
