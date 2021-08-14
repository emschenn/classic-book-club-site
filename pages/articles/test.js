import React, { useState } from "react";
import Image from "next/image";
// import img from "../../public/test.png";

import styles from "../../styles/Article.module.scss";

const Article = () => {
  const [isCardOpen, setCardOpen] = useState(false);
  const article = {
    title: "SPQR：璀璨帝國，盛世羅馬元老院與人民的榮光古史",
    author: "瑪莉‧畢爾德",
    publishYear: "2015",
    updateDate: "08-mar-21",
    difficulty: 3,
    hashtag: ["hello", "fssd"],
    region: "歐洲 > 西歐 > 英國",
    content:
      "書中提到參選執政官需要花費大筆金錢，甚至到了難以與行賄區分的程度。思及目前台灣的選舉，同樣也需要選舉金費的支撐，除了發杯子、衛生紙、口罩等像是給民眾利益但實際上也不算有很大幫助的方式，選舉金費該怎麼花才會讓民眾有感但又不至於讓人覺得雞肋？",
    publisher: "Yu Po",
    subjects: ["人文 > 歷史與考古學", "社會 > 政治學"],
  };
  const {
    title,
    publisher,
    author,
    publishYear,
    difficulty,
    hashtag,
    updateDate,
    region,
    content,
    subjects,
  } = article;
  return (
    <div className={styles.article}>
      <section className={styles.category}>
        {/* <div className={styles.outline}>
          Human- <br />
          ities
        </div>
        <div className={styles.text}>
          Human- <br />
          ities
        </div> */}
        <div className={`${styles.mydiv} ${styles.outline}`}>
          Human- <br />
          ities
        </div>
        <div className={`${styles.mydiv} ${styles.text}`}>
          Human- <br />
          ities
        </div>
        <span className={styles.scrollProgress}></span>
      </section>

      <section className={styles.body}>
        <section className={styles.info}>
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
              {subjects.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.difficulty}  ${styles.row}`}>
            <label>Difficulties</label>
            <ul>
              {Array.apply(null, Array(5)).map((_, i) =>
                i < difficulty ? (
                  <li style={{ backgroundColor: "#000" }}></li>
                ) : (
                  <li></li>
                )
              )}
            </ul>
          </div>
          <div className={`${styles.link}  ${styles.row}`}>
            <div className={styles.medium}>
              <label>Medium</label>
              <ul>
                <li>M</li>
              </ul>
            </div>
            <div className={styles.podcast}>
              <label>Podcast</label>
              <ul>
                <li>P</li> <li>S</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.book}>
          <div className={styles.img}>
            <Image
              src="/test.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            className={`${isCardOpen ? styles.swipeOut : styles.swipeIn} ${
              styles.card
            }`}
          >
            <div className={styles.body}>
              <div className={styles.intro}>
                羅馬離我們有多遙遠？
                <br />
                <br />
                知名歷史學者瑪莉‧畢爾德告訴我們：羅馬其實離我們很近，近得讓人訝異。
                羅馬人雖然已逝，但留給我們許多影響現代社會的概念，包括自由、公民、帝國的剝削，還有一整套現代政治的語言....。
              </div>
              <div className={styles.hashtag}>#fff</div>
            </div>
            <div className={styles.slider}>
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setCardOpen(!isCardOpen)}
                className={
                  isCardOpen
                    ? styles.svgSwipeOut
                    : `${styles.toggleSwipe} ${styles.svgSwipeIn}`
                }
              >
                <path
                  d="M48.5 24.5C48.5 37.7548 37.7548 48.5 24.5 48.5C11.2452 48.5 0.5 37.7548 0.5 24.5C0.5 11.2452 11.2452 0.5 24.5 0.5C37.7548 0.5 48.5 11.2452 48.5 24.5Z"
                  stroke="white"
                />
                <path d="M26 17L37 26L26 35" stroke="white" />
                <path d="M14 26H36.5" stroke="white" />
              </svg>
            </div>
          </div>
        </section>
        <section className={styles.share}>share</section>
        <section className={styles.note}>
          <div className={styles.tag}>Meeting minutes</div>
          <div className={styles.detail}>
            <div className={`${styles.publisher} ${styles.row}`}>
              <label>Publisher</label>
              <div>{publisher}</div>
            </div>
            <div className={`${styles.updateDate} ${styles.row}`}>
              <label>Update Date</label>
              <div>{updateDate}</div>
            </div>
          </div>
        </section>

        <section className={styles.content}>{content}</section>
      </section>
    </div>
  );
};

export default Article;
