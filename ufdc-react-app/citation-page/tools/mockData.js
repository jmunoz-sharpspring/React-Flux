const collections = [
  {
    id: 1,
    title: "The 3 little kittens",
    slug: "the-3-little-kittens",
    creatorId: 1,
    publicationDate: "c1980",
    language: "English",
  },
  {
    id: 2,
    title: "Afrique Spherodiale",
    slug: "afrique-spherodiale",
    creatorId: 2,
    publicationDate: "1860",
    language: "French",
  },
  {
    id: 3,
    title: "The Age of Einstein",
    slug: "the-age-of-einstein",
    creatorId: 2,
    publicationDate: "2003",
    language: "English",
  },
  {
    id: 4,
    title: "Cultura cubana (La provincia de Matanzas y su evolución)",
    slug: "cultura-cubana-la-provincia-de-matanzas-y-su-evolución",
    creatorId: 4,
    publicationDate: "1919",
    language: "Spanish",
  },
  {
    id: 5,
    title: "Acupuncture for Small Animal Neurologic Disorders",
    slug: "the-3-little-kittens",
    creatorId: 5,
    publicationDate: "2018-01-31",
    language: "English",
  },
  {
    id: 6,
    title: "The African American heritage of Florida",
    slug: "the-african-american-heritage-of-florida",
    creatorId: 6,
    publicationDate: "2017",
    language: "English",
  },
];

const creators = [
  { id: 1, name: "McLoughlin Bros., inc ( Publisher )" },
  { id: 2, name: "Garnier, F. A., 1803-1863" },
  { id: 3, name: "Firk, Frank W. K." },
  { id: 4, name: "Dollero, Adolfo" },
  { id: 5, name: "Xie, Huisheng" },
  { id: 6, name: "Colburn, David R." },
];

const citation = [
  {
    heading: "Material Information-1",
    permanentLink: { item: "AA0076866/00001" },
  },
  {
    heading: "Material Information-2",
    permanentLink: { item: "AA0076866/00002" },
    title: { x: "abc" },
    abbreviatedTitle: { x: "other title" },
    creator: {
      x: {
        name: "creator of type binder",
        role: "binder",
      },
    },
    donor: {
      x: {
        name: "donor name",
        url: "http://abc",
      },
    },
    pubPlace: {
      x: [
        {
          loc: "pub loc 1",
          u: "href",
        },
        {
          loc: "pub loc 2",
          u: "url href",
        },
        {
          loc: "location 2",
          u: "url href for location 2",
        },
        {
          loc: "location 3",
          u: "url href for location 3",
        },
      ],
    },
    publisher: {
      x: {
        name: "publisher name",
        u: "url href",
      },
    },
  },
  {
    heading: "Material Information-3",
    permanentLink: { item: "AA0076866/00003" },
  },
];

const newCollection = {
  id: null,
  title: "",
  creatorId: null,
  publicationDate: "",
  language: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCollection,
  collections,
  creators,
  citation,
};
