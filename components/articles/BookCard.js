import React from "react";

import Image from "next/image";

// styles
import styles from "../../styles/Article.module.scss";

const BookCard = ({
  cardRef,
  hashtag,
  introduction,
  toggleCardOpen,
  cardButtonRef,
  douban,
  thumbnail,
  linksForBook,
}) => {
  return (
    <>
      <div className={styles.img}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          //thumbnail.fields.file.details.image.height
          alt="Picture of the author"
          layout="fill"
          className={styles.nextImg}
          objectFit="cover"
        />
      </div>
      <div ref={cardRef} className={styles.card}>
        <div className={styles.body}>
          <div className={styles.intro}>
            {introduction} Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Iusto voluptate nemo deleniti consequuntur veniam qui cumque
            magni. Illo, debitis ratione quasi quae odit laborum deserunt?
            Temporibus, laboriosam delectus repellat doloribus vitae facilis
            enim magni rem aperiam illo sint! Necessitatibus inventore imp
          </div>
          <ul className={styles.hashtag}>
            {hashtag?.map((i) => (
              <li>{i}</li>
            ))}
          </ul>

          {Object.keys(linksForBook).length !== 0 && (
            <ul className={styles.links}>
              <span>|</span>
              {Object.keys(linksForBook).map(function (key, index) {
                return (
                  <>
                    <a key={key} href={linksForBook[key]} target="_blank">
                      <li>{key}</li>
                    </a>
                    <span>|</span>
                  </>
                );
              })}
            </ul>
          )}
        </div>
        <div className={styles.slider}>
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleCardOpen}
            ref={cardButtonRef}
          >
            <path
              d="M48.5 24.5C48.5 37.7548 37.7548 48.5 24.5 48.5C11.2452 48.5 0.5 37.7548 0.5 24.5C0.5 11.2452 11.2452 0.5 24.5 0.5C37.7548 0.5 48.5 11.2452 48.5 24.5Z"
              stroke="white"
            />
            <path d="M25 16L36 25L25 34" stroke="white" />
            <path d="M13 25H35.5" stroke="white" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default BookCard;
