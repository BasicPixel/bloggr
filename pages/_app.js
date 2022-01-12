import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>bloggr</title>
        <meta
          name="description"
          content="a blog where anyone can post anonymously with simplicity and power, supports markdown."
        />
      </Head>

      <Navbar />

      <main className="p-8 pt-16 container mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
