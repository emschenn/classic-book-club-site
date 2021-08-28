import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Head from "next/head";

// styles
import styles from "../../styles/Article.module.scss";

// components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ArticleContent from "../../components/articles/ArticleContent";
import ProgressBarTitle from "../../components/articles/ProgressBarTitle";
import BookCard from "../../components/articles/BookCard";
import BookInfo from "../../components/articles/BookInfo";
import MeetingMinutes from "../../components/articles/MeetingMinutes";

// utils
import { getHeaderCatData, getAllArticles, getArticle } from "../../utils/api";
import {
  getRegionContent,
  getSubjectContent,
  getProgressBarText,
  getFormattedDate,
} from "../../utils/contentUtils";

export const getStaticPaths = async () => {
  const articles = await getAllArticles();

  const paths = articles.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const headerData = await getHeaderCatData();
  const article = await getArticle(params.slug);

  return {
    props: {
      headerData,
      article,
    },
    revalidate: 10,
  };
}

const Article = ({ headerData, article }) => {
  if (!article) {
    return <div>Loading</div>;
  }
  const [isCardOpen, setCardOpen] = useState(null);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef(null);
  const cardButtonRef = useRef(null);
  const progressBarRef = useRef(null);

  const toggleCardOpen = () => {
    setCardOpen(!isCardOpen);
  };

  useEffect(() => {
    // if (isCardOpen === null) {
    //   gsap.to(cardRef.current, 0.6, {
    //     x: 10,
    //     ease: "back.inOut(1.7)",
    //     repeat: -1,
    //     yoyo: true,
    //   });
    // }
  }, []);

  const cardSliceAnimation = (isStart) => {
    const opacity = 0.32;
    const width = cardRef.current.offsetWidth;
    gsap.to(cardRef.current, 2, {
      x: isStart ? width - 70 : 0,
      ease: "power3.inOut",
      background: `linear-gradient( 90deg, rgba(0, 0, 0, ${opacity}) 85%, rgba(0, 0, 0, ${
        isStart ? opacity : 0
      }) 100% )`,
    });
  };

  const cardSliceButtonAnimation = (isStart) => {
    gsap.to(cardButtonRef.current, 1, {
      delay: 0.5,
      rotation: isStart ? 180 : 0,
      ease: "power3.inOut",
    });
  };

  const progressBarAnimation = () => {
    gsap.to(progressBarRef.current, 0.001, {
      ease: "power3.inOut",
      background: `linear-gradient(to top, #000000 ${progress}, #00000000 ${progress})`,
    });
  };

  const progressBarHandler = (e) => {
    const totalScroll = e.target.scrollTop;
    const windowHeight = e.target.scrollHeight - e.target.clientHeight;
    const scroll = `${(totalScroll / windowHeight).toFixed(2) * 100}%`;
    setProgress(scroll);
  };

  useEffect(() => {
    progressBarAnimation();
  }, [progress]);

  useEffect(() => {
    if (isCardOpen) {
      cardSliceAnimation(true);
      cardSliceButtonAnimation(true);
    } else if (isCardOpen === false) {
      cardSliceAnimation(false);
      cardSliceButtonAnimation(false);
    }
  }, [isCardOpen]);

  const {
    publisher,
    book,
    content,
    difficulties,
    douban,
    hashtag,
    mediumNote,
    podcastYoutube,
    podcastSpotify,
    slug,
    title,
    updateDate,
    introduction,
  } = article;

  const {
    publishYear,
    region: rawRegion,
    categories,
    author,
    country,
  } = book.fields;

  const subjects = getSubjectContent(categories);

  const region = getRegionContent(rawRegion, country);

  const progressBarText = getProgressBarText(categories);

  return (
    <>
      <Head>
        <title>經典讀書會 | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header categories={headerData} />
      <div className={styles.article}>
        <section className={styles.category}>
          <ProgressBarTitle
            progressBarRef={progressBarRef}
            firstLine={progressBarText[0]}
            secondLine={progressBarText[1]}
          />
        </section>
        <section className={styles.body} onScroll={progressBarHandler}>
          <section className={styles.info}>
            <BookInfo
              title={title}
              author={author}
              publishYear={publishYear}
              region={region}
              subjects={subjects}
              difficulties={difficulties}
              mediumNote={mediumNote}
              podcastSpotify={podcastSpotify}
              podcastYoutube={podcastYoutube}
            />
          </section>
          <section className={styles.book}>
            <BookCard
              cardRef={cardRef}
              cardButtonRef={cardButtonRef}
              hashtag={hashtag}
              douban={douban}
              introduction={introduction}
              toggleCardOpen={toggleCardOpen}
            />
          </section>
          <section className={styles.share}>share</section>
          <section className={styles.note}>
            <MeetingMinutes
              publisher={publisher}
              updateDate={getFormattedDate(updateDate)}
            />
          </section>
          <section className={styles.content}>
            <ArticleContent content={content} />
          </section>
          <section className={styles.footer}>
            <Footer />
          </section>
        </section>
      </div>
    </>
  );
};

export default Article;
