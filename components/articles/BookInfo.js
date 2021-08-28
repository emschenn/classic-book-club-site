import React from "react";
import { useRouter } from "next/router";

// styles
import styles from "../../styles/Article.module.scss";

// context
import { useCategoryState } from "../../context/categoryState";

const BookInfo = ({
  title,
  author,
  publishYear,
  region,
  subjects,
  difficulties,
  mediumNote,
  podcastYoutube,
  podcastSpotify,
}) => {
  const router = useRouter();

  const [catState, dispatchCats] = useCategoryState();

  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.author} ${styles.row}`}>
        <label>Author</label>
        <div>{author}</div>
      </div>
      <div className={`${styles.yearAndRegion}  ${styles.row}`}>
        <div className={styles.year}>
          <label>Year</label>
          <div> {publishYear}</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.region}>
          <label>Region</label>
          <div>{region}</div>
        </div>
      </div>
      <div className={`${styles.subjects}  ${styles.row}`}>
        <label>Subject</label>
        <ul>
          {subjects.map(({ name, slug, parent }) => (
            <li
              key={`subject-${slug}`}
              onClick={() => {
                dispatchCats({
                  type: "setChildCat",
                  payload: [slug],
                });
                dispatchCats({
                  type: "setParentCat",
                  payload: parent,
                });
                router.push(`/articles?cat=${slug}`);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.difficulty}  ${styles.row}`}>
        <label>Difficulties</label>
        <ul>
          {Array.apply(null, Array(5)).map((_, i) =>
            i < difficulties ? (
              <li key={`star-${i}`} style={{ backgroundColor: "#000" }}></li>
            ) : (
              <li key={`star-${i}`}></li>
            )
          )}
        </ul>
      </div>
      <div className={`${styles.link}  ${styles.row}`}>
        <div className={styles.medium}>
          <label>Medium</label>
          <ul>
            <a href={mediumNote} target="_blank">
              <li>M</li>
            </a>
          </ul>
        </div>
        <div className={styles.podcast}>
          <label>Podcast</label>
          <ul>
            <a href={podcastYoutube} target="_blank">
              <li className={podcastYoutube ? undefined : styles.disable}>Y</li>
            </a>

            <a href={podcastSpotify} target="_blank">
              <li className={podcastYoutube ? undefined : styles.disable}>S</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
