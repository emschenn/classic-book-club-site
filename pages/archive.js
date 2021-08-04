import React from "react";
import { useRouter } from "next/router";

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "article" });

  return {
    props: {
      articles: res.items,
    },
    revalidate: 10,
  };
}

const Archive = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map((article) => (
        <div key={article.sys.id}>{article.fields.title}</div>
      ))}
    </div>
  );
};

export default Archive;
