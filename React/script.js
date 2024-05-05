const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "fiction",
      "novels",
      "adventure",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
// Object Destructuring:
const book = getBook(2);
book;
//const title = book.title;
//const author = book.author;
// It is very important the variables names to be exsactly as the properties ib the Object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
console.log(book.genres[2]);

// rest and spread Operator in array
const [primaryGenre, secondaryGenre, ...rest] = genres;
console.log(rest);
console.log(primaryGenre, secondaryGenre);
console.log(primaryGenre);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property.
  moviePublicationDate: "2002-12-08",
  // Overrvwriting an exsiting property.
  pages: 1210,
};
console.log(updatedBook);

// Arrow Functions
// function getYear(string) {
//   return string.split("-")[0];
// }
// Arrow Function
// const getYear = (string) => string.split("-")[0];
// console.log(getYear(publicationDate));
const getYear = (string) => string.split("-")[0];
console.log(getYear(publicationDate));
// Template Literal
const summury = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a moive`;
console.log(summury); //(``) this backticks indicates that this is a Template Literal
summury;

//Ternary Operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages.`);

//Logical Operators - And Operator &&
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");
// falsy value: 0, '', null, undefined
console.log("Dimitar" && "Some friends"); // is truty value and it retruns the info after the truty value
console.log(0 && "Dimitar"); // it returns 0 because it is a falsy value
//Logical Operators - Or Operator ||
// It returns the first true value.
console.log("Dimitar" || "some string");
console.log(null || "some string");
console.log(book.translations.spanish);

const spanishTranlation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranlation);

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";

// Nullish coalescing operator (??)
// if the result is 0 it will return 0 or another number
// const countWrong1 = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(countWrong1);

// function getTotalReviesCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything.ratingsCount;

//   return goodreads + librarything;
// }
// console.log(getTotalReviesCount(book));

// Optional chaining Operator (?.)
//We ask that JS to only keep what comes before this property if it acctually exsists.
function getTotalReviesCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // the chain here continues only if librarything is not undefined!
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviesCount(book));
*/

//Map method:
const books = getBooks();
books;
const arr = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(arr);

function getTotalReviesCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // the chain here continues only if librarything is not undefined!
  librarything;
  return goodreads + librarything;
}

const titles = books.map((book) => book.title);
console.log(titles);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviesCount(book),
}));

essentialData;
// Filter Method:
const longBooks = books.filter((book) => book.pages > 500);
// The filter function will be called for ech element of the array.
// If the condition statement returns true(book.pages > 500) the array will go into the new Array longBooks!!!
console.log(longBooks);
// on this array we can call another filer.
// we can chain mulitple filters
const longBooks1 = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks1);

// filter with genres 'adventure' - includes() always return either true or false and this is our condition
// -  book.genres.includes("adventure")
const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
);
console.log(adventureBooks);
// let chain filter method with map method:
const adventureBooks1 = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks1);

// Reduce Method with numbers
// If we want to read all the books in the array, and we want to know how many pages we will have to read
// The solution is to add all together all of the pages proerties of all the books we use for that the Reduce Method.
const pagesOfAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// sum - accumulator, 0 is a starterValue
console.log(pagesOfAllBooks);
