// query selectors 

const cardContainer = document.querySelector('.card-container');
const newBookBtn = document.querySelector('.button');
const form = document.querySelector('form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputReadStatus = document.querySelector('#youRead');
const addBtn = document.querySelector('#button');


// event listeners

document.addEventListener('DOMContentLoaded', displayBooks);

newBookBtn.addEventListener('click', () => {
  form.classList.toggle('show-form');
})

addBtn.addEventListener('click', addBookToLibrary);


// Book class

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (readStatus) {
      this.readStatus = 'read it'
    } else this.readStatus = 'not read yet'
  }

  toggleReadStatus() {
    if (this.readStatus === 'read it') {
      this.readStatus = 'not read yet'
    } else {
      this.readStatus = 'read it'
    };
    cardContainer.innerHTML = '';
    displayBooks();
  }
}

// Hobbit file

const myLibrary = [];
let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 255, true);

myLibrary.push(theHobbit);

// add book to library

function addBookToLibrary(event) {
  event.preventDefault();

  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let readStatus = '';
  if (inputReadStatus.value === 'true') {
    readStatus = true;
  } else readStatus = false;



  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
  cardContainer.innerHTML = '';
  displayBooks();
}

// display books

function displayBooks() {

  let index = 0;

  myLibrary.forEach(book => {

    const card = document.createElement('div');
    card.setAttribute('data-index-number', index);
    card.classList.add('card');
    cardContainer.appendChild(card);

    index++;

    const del = document.createElement('button');
    del.classList.add('delete-icon');
    del.textContent = 'DELETE';
    card.appendChild(del);

    const read = document.createElement('button');
    read.classList.add('read-icon');
    read.textContent = 'READ';
    card.appendChild(read);

    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Title: ${book.title}`;
    bookTitle.classList.add('card-section');
    card.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;
    bookAuthor.classList.add('card-section');
    card.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`;
    bookPages.classList.add('card-section');
    card.appendChild(bookPages);

    const bookReadStatus = document.createElement('p');
    bookReadStatus.textContent = `Read status: ${book.readStatus}`;
    bookReadStatus.classList.add('card-section');
    card.appendChild(bookReadStatus);

    // delete book

    card.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-icon")) {

        myLibrary.splice(event.target.parentElement.dataset.indexNumber, 1);
        cardContainer.innerHTML = '';
        displayBooks();
      }
    });

    // change read status

    card.addEventListener("click", (event) => {
      if (event.target.classList.contains("read-icon")) {
        myLibrary[event.target.parentElement.dataset.indexNumber].toggleReadStatus();
      }
    });
  })
}