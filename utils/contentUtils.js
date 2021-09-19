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
    const parent = cat.fields.parent.fields;
    const child = cat.fields;
    content = [
      ...content,
      {
        name: `${parent.name} > ${child.name}`,
        parent: parent.slug,
        slug: child.slug,
      },
    ];
  });
  return content;
}

export function getProgressBarText(categories) {
  if (categories.length === 1) {
    return {
      isCross: false,
      data: categories[0].fields.parent.fields.engName.split(" "),
    };
  }
  let parents = [];
  categories.forEach(({ fields }) => {
    parents = [...parents, fields.parent.fields.engName];
  });
  const parentsSet = new Set();
  const result = parents.filter((parent) => {
    const duplicate = parentsSet.has(parent);
    parentsSet.add(parent);
    return !duplicate;
  });
  if (result.length === 1) {
    return {
      isCross: false,
      data: categories[0].fields.parent.fields.engName.split(" "),
    };
  }
  return {
    isCross: true,
    data: result.map((r) => {
      if (r === "Social sciences") return "Social";
      else if (r === "Formal Sciences") return "Formal";
      else if (r === "Natural Sciences") return "Natural";
      else if (r === "Applied Sciences") return "Applied";
      else if (r === "Human- ities") return "Humanities";
      else return r;
    }),
  };
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
