import React from "react";
import Link from "next/link";
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
        <Link
          key={article.sys.id}
          href="/articles/[id].js"
          as={`/articles/${article.fields.slug}`}
        >
          {article.fields.title}
        </Link>
      ))}
    </div>
  );
};

export default Archive;
