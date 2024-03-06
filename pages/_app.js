import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type='image/png' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>The 911</title>
        <meta name="description" content="Porsche 911" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
