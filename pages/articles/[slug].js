import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "article" });

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
    props: {
      article: items[0],
    },
    revalidate: 10,
  };
}

const Article = ({ article }) => {
  console.log(article);
  if (!article) return <div>loading</div>;

  const { title, content } = article.fields;
  return (
    <div>
      <h2> {title}</h2>
      <div>{documentToReactComponents(content)}</div>
    </div>
  );
};

export default Article;
