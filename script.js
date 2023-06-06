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
