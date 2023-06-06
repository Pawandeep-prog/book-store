var idx = 0;

const bookimage = document.querySelector(".book-image");
const bookauthor = document.querySelector(".book-author");
const booktitle = document.querySelector(".book-title");
const bookpages = document.querySelector(".book-pages");
const bookgenre = document.querySelector(".book-genre");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

function setDetail(idx) {
  const book = books[idx];
  bookimage.src = book.image;
  bookauthor.textContent = `Author: ${book.author}`;
  booktitle.textContent = `${book.title}`;
  bookpages.textContent = `Pages: ${book.pages}`;
  bookgenre.textContent = `Genre: ${book.genre}`;
}

function prev() {
  idx = (idx - 1 + books.length) % books.length;
  setDetail(idx);
}
function next() {
  idx = (idx + 1 + books.length) % books.length;
  setDetail(idx);
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

setDetail(0);
// const bookData = [
//   {
//     cover: "book1.jpg",
//     title: "Book 1",
//     author: "Author 1",
//     genre: "Genre 1",
//     pages: 100,
//   },
//   {
//     cover: "book2.jpg",
//     title: "Book 2",
//     author: "Author 2",
//     genre: "Genre 2",
//     pages: 150,
//   },
//   // Add more book objects here...
// ];

// let currentIndex = 0;
// const bookCover = document.querySelector(".book-cover");
// const bookTitle = document.querySelector(".book-title");
// const bookAuthor = document.querySelector(".book-author");
// const bookGenre = document.querySelector(".book-genre");
// const bookPages = document.querySelector(".book-pages");
// const previousButton = document.querySelector("#previous-btn");
// const nextButton = document.querySelector("#next-btn");

// function displayBookDetails(index) {
//   const book = bookData[index];
//   bookCover.src = `./image/${book.cover}`;
//   bookTitle.textContent = book.title;
//   bookAuthor.textContent = `Author: ${book.author}`;
//   bookGenre.textContent = `Genre: ${book.genre}`;
//   bookPages.textContent = `Number of Pages: ${book.pages}`;
// }

// function showPreviousBook() {
//   currentIndex = (currentIndex - 1 + bookData.length) % bookData.length;
//   displayBookDetails(currentIndex);
// }

// function showNextBook() {
//   currentIndex = (currentIndex + 1) % bookData.length;
//   displayBookDetails(currentIndex);
// }

// previousButton.addEventListener("click", showPreviousBook);
// nextButton.addEventListener("click", showNextBook);

// displayBookDetails(currentIndex);
