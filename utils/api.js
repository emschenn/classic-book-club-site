import { createClient } from "contentful";
import { itemizeCategories } from "./contentUtils";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getHeaderCatData() {
  const { items: rawCategories } = await client.getEntries({
    content_type: "category",
  });
  const { items: rawSubCategories } = await client.getEntries({
    content_type: "categoryChild",
  });

  const categories = rawCategories.map(({ fields }) => ({ ...fields }));
  const subCategories = rawSubCategories
    .map(({ fields }) => ({ ...fields }))
    .map(({ parent, ...others }) => {
      return {
        ...others,
        parent: parent.fields.name,
      };
    });

  return itemizeCategories(categories, subCategories);
}

export async function getAllArticles() {
  const { items: rawArticles } = await client.getEntries({
    content_type: "article",
  });
  return rawArticles.map(({ fields }) => ({ ...fields }));
}

export async function getAllBooks() {
  const { items: rawArticles } = await client.getEntries({
    content_type: "book",
    include: 10,
  });
  return rawArticles.map(({ fields }) => ({ ...fields }));
}

export async function getArticle(slug) {
  const { items: rawArticles } = await client.getEntries({
    content_type: "article",
    limit: 1,
    include: 10,
    "fields.slug": slug,
  });
  return rawArticles[0].fields;
}
