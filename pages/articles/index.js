import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

// style
import styles from "../../styles/Archive.module.scss";

// utils
import useMousePosition from "../../utils/useMousePosition";
import { getHeaderCatData, getAllBooks } from "../../utils/api";
import { categorizeBooks } from "../../utils/contentUtils";

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

const Archive = ({ categories, books, categorizedBooks }) => {
  const router = useRouter();
  const bookcaseRef = useRef(null);
  const imgRef = useRef(null);
  const { x, y } = useMousePosition();

  const [showImg, setShowImg] = useState({});

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

  const booksInBookcase = router.query.cat
    ? categorizedBooks[router.query.cat]
    : books;

  return (
    <>
      <Header categories={categories} />
      <div className={styles.sortBy}>
        <DetailBar />
      </div>
      <div className={styles.bookcase}>
        {booksInBookcase ? (
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
