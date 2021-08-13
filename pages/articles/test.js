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
        <p>
          Human- <br />
          ities
        </p>
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
          <div className={styles.card}></div>
        </section>
        <section className={styles.share}>d</section>
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
