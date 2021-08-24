import Head from "next/head";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  console.log("home");
  return (
    <>
      <Head>
        <title>經典讀書會</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div>Home Page</div>
      <Footer />
    </>
  );
};

export default HomePage;
