export function itemizeCategories(parent, child) {
  let result = parent,
    catKey = {};
  parent.forEach(({ name }, i) => {
    catKey[name] = i;
  });
  result = result.map((a) => ({ ...a, children: [] }));
  child.forEach(({ parent, ...others }) => {
    result[catKey[parent]].children = [
      ...result[catKey[parent]].children,
      others,
    ];
  });
  return result;
}

export function getRegionContent(region, country) {
  const parent = region.fields.parent.fields.name;
  const child = region.fields.name;
  const content = `${parent} > ${child}${country ? ` > ${country}` : ""}`;
  return content;
}

export function getSubjectContent(categories) {
  let content = [];
  categories.forEach((cat) => {
    const parent = cat.fields.parent.fields.name;
    const child = cat.fields.name;
    content = [...content, `${parent} > ${child}`];
  });
  return content;
}

export function getProgressBarText(categories) {
  const category = categories[0].fields.parent.fields.engName;
  return category.split(" ");
}

export function getFormattedDate(updateDate) {
  const [year, month, day] = updateDate.split("-");
  const MONTH_FORMAT = {
    "01": "jan",
    "02": "feb",
    "03": "mar",
    "04": "apr",
    "05": "may",
    "06": "jun",
    "07": "jul",
    "08": "aug",
    "09": "sep",
    10: "oct",
    11: "nov",
    12: "dec",
  };
  return `${day}-${MONTH_FORMAT[month]}-${year.slice(2)}`;
}

export function categorizeBooks(books) {
  let result = {};
  books.forEach(({ name, slug, hasArticle, categories }) => {
    categories.forEach(({ fields }) => {
      const bookInfo = { name, slug, hasArticle };
      const childCat = fields.slug;
      const parentCat = fields.parent.fields.slug;
      result[childCat] = result[childCat]
        ? [...result[childCat], { ...bookInfo }]
        : [{ ...bookInfo }];
      // result[parentCat] = result[parentCat]
      //   ? [...result[parentCat], { ...bookInfo }]
      //   : [{ ...bookInfo }];
    });
  });
  return result;
}

export function removeDuplicateBook(books) {
  const seenBooks = new Set();

  const result = books.filter((book) => {
    const duplicate = seenBooks.has(book.slug);
    seenBooks.add(book.slug);
    return !duplicate;
  });

  return result;
}
