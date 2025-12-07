"use strict";

const Library = [];
const libraryElement = document.querySelector(".library");
const bookElement = document.querySelector(".book");

const newBookForm = document.getElementById("book-modal");
const submitButton = newBookForm.querySelector(".submit-button");

document.addEventListener("submit", (e) => {
  e.preventDefault();

  createAddBookToLibrary(
    //title
    newBookForm.querySelector(".input-title").value,
    //author
    newBookForm.querySelector(".input-author").value,
    //pages
    parseInt(newBookForm.querySelector(".input-pages").value),
    //id
    parseInt(newBookForm.querySelector(".input-id").value)
    //currentLibrary
  );
  populateLibrary(Library);
  console.log(Library);
});
console.log(submitButton);
console.log(newBookForm);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = 123456;
}

function createAddBookToLibrary(bookTitle, bookAuthor, bookPages) {
  const newBook = new Book(bookTitle, bookAuthor, bookPages);
  Library.push(newBook);
}

populateLibrary(Library);

function populateLibrary(currentLibrary) {
  for (const child of libraryElement.children) {
    if (child.classList.contains("book")) {
      libraryElement.removeChild(child);
    }
  }
  currentLibrary.forEach((element) => {
    const newBookElement = bookElement.cloneNode(true);
    newBookElement.classList.remove("hidden");
    newBookElement.querySelector(".title").textContent = element.title;
    newBookElement.querySelector(".author").textContent = element.author;
    newBookElement.querySelector(".pages").textContent = element.pages;
    newBookElement.querySelector(".id").textContent = element.id;

    //remove Book
    newBookElement
      .querySelector(".remove-book")
      .addEventListener("click", (e) => {
        e.preventDefault();
        newBookElement.remove();
      });
    //add book to parent library container
    libraryElement.appendChild(newBookElement);
  });
}

// libraryElement.appendChild(bookElement.cloneNode(true));
