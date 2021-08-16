import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { createClient } from "contentful";
import styles from "../../styles/Archive.module.scss";

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const { items: categories } = await client.getEntries({
//     content_type: "category",
//   });
//   const { items: subCategories } = await client.getEntries({
//     content_type: "categoryChild",
//   });
//   const { items: articles } = await client.getEntries({
//     content_type: "article",
//   });

//   const categories = ["a", "b", "c", "d", "e"];
//   const subCategories = ["a", "b", "c", "d", "e"];
//   const articles = [
//     "柏拉圖理想國",
//     "懺悔錄",
//     "奧之細道／芭蕉之奧羽北陸行腳",
//     "SPQR／璀璨帝國，盛世羅馬元老院與人民的榮光古史",
//     "e",
//     "erfwrwe",
//     "柏拉圖理想國",
//     "懺悔錄",
//     "奧之細道／芭蕉之奧羽北陸行腳",
//     "SPQR／璀璨帝國，盛世羅馬元老院與人民的榮光古史",
//     "e",
//     "erfwrwe",
//     "柏拉圖理想國",
//     "懺悔錄",
//     "奧之細道／芭蕉之奧羽北陸行腳",
//     "SPQR／璀璨帝國，盛世羅馬元老院與人民的榮光古史",
//     "e",
//     "erfwrwe",
//   ];

//   return {
//     props: {
//       categories,
//       subCategories,
//       articles,
//     },
//     revalidate: 10,
//   };
// }

const RightArrow = () => (
  <svg
    width="17"
    height="20"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.380005 0.950195L8.44 5.6002L16.5 10.2602L8.44 14.9102L0.380005 19.5602"
      stroke="black"
      strokeWidth="0.44"
      strokeMiterlimit="10"
    />
  </svg>
);

const Archive = ({}) => {
  // console.log(categories);
  // console.log(subCategories);

  const bookcaseRef = useRef(null);
  const onBookcaseScroll = (e) => {
    const container = bookcaseRef.current;
    const containerScrollPosition = bookcaseRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };
  const articles = [
    "柏拉圖理想國",
    "懺悔錄",
    "奧之細道／芭蕉之奧羽北陸行腳",
    "e",
    "柏拉圖理想國",
    "懺悔錄",
    "奧之細道／芭蕉之奧羽北陸行腳",
    "e",
    "柏拉圖理想國",
    "懺悔錄",
    "奧之細道／芭蕉之奧羽北陸行腳",
    "e",
    "柏拉圖理想國",
    "懺悔錄",
    "奧之細道／芭蕉之奧羽北陸行腳",
    "e",
    "柏拉圖理想國",
    "懺悔錄",
    "奧之細道／芭蕉之奧羽北陸行腳",
    "e",
    "柏拉圖理想國",
    "懺悔錄",
    "奧之細道／芭蕉之奧羽北陸行腳",
    "e",
  ];

  return (
    <div>
      <div className={styles.sortBy}>
        <label>sort by</label>
        <div className={styles.sort}>
          latest
          <RightArrow />
        </div>
      </div>
      <div className={styles.bookcase}>
        <ul ref={bookcaseRef} onWheel={onBookcaseScroll}>
          {articles.map((article) => (
            <li
              key={article} //.sys.id}
              //  href="/articles/[id].js"
              //    as={`/articles/${article.fields.slug}`}
              className={styles.book}
            >
              {article}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Archive;
