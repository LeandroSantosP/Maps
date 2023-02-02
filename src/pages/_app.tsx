import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import { GlobalStyles } from "styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado - BoilerPlate</title>
        <link rel="shortcut icon" href="/" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />
        <meta
          name="description"
          content="A simple project starter to work with typescript, react, next js and styled components"
        />
      </Head>
      <GlobalStyles />
      <NextNProgress
        options={{
          easing: "ease",
          speed: 500
        }}
        color="#FFD74B"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
