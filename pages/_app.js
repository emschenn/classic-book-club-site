import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  // const routes = router.pathname.split("/");
  // const isArticle = routes[1] === "articles"; // && routes.length > 2;

  return <Component {...pageProps} />;
}

export default MyApp;
