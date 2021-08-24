import React from "react";
import Head from "next/head";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>經典讀書會 | 加入我們</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div>Contact Page</div>
      <Footer />
    </>
  );
};

export default Contact;
