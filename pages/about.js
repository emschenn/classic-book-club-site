import React from "react";
import Head from "next/head";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>經典讀書會 | 關於我們</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div>About Page</div>
      <Footer />
    </>
  );
};

export default About;
