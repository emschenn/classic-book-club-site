import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// style
import styles from "../../styles/Archive.module.scss";

const Bookcase = ({
  bookcaseRef,
  onBookcaseScroll,
  books,
  setShowImg,
  imgRef,
  showImg,
}) => {
  const router = useRouter();
  const onBookClick = ({ hasArticle, slug }) => {
    console.log(hasArticle);
    console.log(slug);
    if (hasArticle) {
      router.push(`/articles/${slug}`);
    }
  };
  return (
    <>
      <ul ref={bookcaseRef} onWheel={onBookcaseScroll}>
        {books.map(({ name, slug, hasArticle }, index) => (
          <>
            <div
              className={styles.book}
              onMouseEnter={() => setShowImg({ name, isOpen: true })}
              onMouseLeave={() => setShowImg({ name, isOpen: false })}
            >
              <span className={styles.dividerLeft}></span>
              <li key={slug} onClick={() => onBookClick({ hasArticle, slug })}>
                {name}
              </li>
              {showImg.isOpen && showImg.name === name && (
                <div className={styles.img} ref={imgRef}>
                  {/* <Image
                    src="/test.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="contain"
                  /> */}
                </div>
              )}
              <span className={styles.dividerRight}></span>
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default Bookcase;
