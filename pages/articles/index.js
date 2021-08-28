import React, { useRef, useState, useEffect, useReducer } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import Head from "next/head";

// style
import styles from "../../styles/Archive.module.scss";

// utils
import useMousePosition from "../../utils/useMousePosition";
import { getHeaderCatData, getAllBooks } from "../../utils/api";
import { categorizeBooks, removeDuplicateBook } from "../../utils/contentUtils";

// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailBar from "../../components/archive/DetailBar";
import Bookcase from "../../components/archive/Bookcase";
import EmptyCase from "../../components/archive/EmptyCase";

export async function getStaticProps() {
  const categories = await getHeaderCatData();
  const books = await getAllBooks();
  return {
    props: {
      categories,
      books,
      categorizedBooks: categorizeBooks(books),
    },
    revalidate: 10,
  };
}

const ACTIONS = {
  TOGGLE_CAT: "toggleCat",
  INIT_CAT: "initCat",
  SET_CAT: "setCat",
  CLEAR_CAT: "clearCat",
};

const Archive = ({ categories, books, categorizedBooks }) => {
  if (!books || !categorizedBooks) {
    return <div>Loading</div>;
  }

  const router = useRouter();
  const bookcaseRef = useRef(null);
  const imgRef = useRef(null);
  const { x, y } = useMousePosition();

  const [showImg, setShowImg] = useState({});

  const reducer = (cats, action) => {
    switch (action.type) {
      case ACTIONS.TOGGLE_CAT: {
        const cat = action.payload.subCat;
        return cats.includes(cat)
          ? cats.filter((i) => i !== cat)
          : [...cats, cat];
      }
      case ACTIONS.INIT_CAT: // all subCats
        return categories
          .filter(({ slug }) => slug === action.payload.cat)[0]
          .children.map(({ slug }) => slug);
      case ACTIONS.SET_CAT: // set specific subCat
        return [action.payload.subCat];
      case ACTIONS.CLEAR_CAT: // clear cat filter
        return [];
      default:
        return cats;
    }
  };

  const [cats, dispatchCats] = useReducer(reducer, []);

  const onBookcaseScroll = (e) => {
    const container = bookcaseRef.current;
    const containerScrollPosition = bookcaseRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    // if (showImg.isOpen) {
    //   gsap.to(imgRef.current, 0.01, {
    //     ease: "power3.inOut",
    //     top: y - imgRef.current.clientHeight / 2,
    //     left: x - imgRef.current.clientWidth / 2,
    //   });
    // }
  }, [x, y]);

  const getTheFilteredBooks = () => {
    let results = [];
    cats.forEach((cat) => {
      const books = categorizedBooks[cat];
      if (books) {
        results = [...results, ...books];
      }
    });
    return results;
  };

  const booksInBookcase = removeDuplicateBook(
    router.query.cat ? getTheFilteredBooks() : books
  );

  return (
    <>
      <Head>
        <title>經典讀書會 | 文章列表</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header categories={categories} dispatchCats={dispatchCats} />
      <div className={styles.sortBy}>
        <DetailBar
          currentCats={cats}
          dispatchCats={dispatchCats}
          childCats={
            router.query.cat
              ? categories.filter(({ slug }) => slug === router.query.cat)
              : undefined
          }
        />
      </div>
      <div className={styles.bookcase}>
        {booksInBookcase.length > 0 ? (
          <Bookcase
            bookcaseRef={bookcaseRef}
            onBookcaseScroll={onBookcaseScroll}
            books={booksInBookcase}
            setShowImg={setShowImg}
            imgRef={imgRef}
            showImg={showImg}
          />
        ) : (
          <EmptyCase />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Archive;
