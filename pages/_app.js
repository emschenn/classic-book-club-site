import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
  const routes = router.pathname.split("/");
  const isArticle = routes[1] === "articles" && routes.length > 2;
  return (
    // <Layout>
    <>
      <Header currentRoute={router.pathname} />
      <Component {...pageProps} />
      {!isArticle && <Footer />}{" "}
    </>
    // </Layout>
  );
}

export default MyApp;
