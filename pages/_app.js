import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    // <Layout>
    <>
      <Header currentRoute={router.pathname} />
      <Component {...pageProps} />
      <Footer />
    </>
    // </Layout>
  );
}

export default MyApp;
