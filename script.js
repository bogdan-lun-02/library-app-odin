// Library files

const myLibrary = [];

const thisPerfectDay = {
  title: 'This perfect day',
  author: 'Ira Levin',
  pages: '300 pages',
  youRead: 'yes',
}

const theWindUpGirl = {
  title: 'The Windup Girl',
  author: 'Paolo Bacigalupi',
  pages: '400 pages',
  youRead: 'yes',
}

const stainlessSteelRat = {
  title: 'A Stainless Steel Rat is Born',
  author: 'Harry Harrison',
  pages: '250 pages',
  youRead: 'no',
}

myLibrary.push(thisPerfectDay);
myLibrary.push(theWindUpGirl);
myLibrary.push(stainlessSteelRat);


// Elements with listeners

const newBookBtn = document.querySelector('#new-book-btn');
const button = document.getElementById('button');
const form = document.querySelector('form');
const cardContainer = document.querySelector('#card-container');



document.addEventListener("DOMContentLoaded", generateCards);
button.addEventListener('click', addBookToLibrary);
form.addEventListener('submit', (e) => {
  e.preventDefault();
})
newBookBtn.addEventListener('click', () => {
  form.style.display = 'block';
})

// Delete book

function deleteBook(event) {

  let index = event.target.parentElement.dataset.number;
  myLibrary.splice(index, 1);
  generateCards();
}

// Read Book

function changeReadStatus(event) {
  let index = event.target.parentElement.dataset.number;
  myLibrary[index].youRead = 'yes';
  generateCards();
}

// Add new book

function addBookToLibrary() {

  function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.youRead = youRead;
  }

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let youRead = document.querySelector('#youRead').value;

  if (youRead === 'true') {
    youRead = 'yes';
  } else youRead = 'no'


  let book1 = new Book(title, author, pages, youRead);
  myLibrary.push(book1);

  generateCards();
}


// Generate cards

function generateCards() {
  cardContainer.innerHTML = '';
  let numberOfCards = 0;

  myLibrary.forEach((book) => {

    const card = document.createElement('div');
    card.classList.add('card');

    card.setAttribute('data-number', numberOfCards++);

    const button = document.createElement('button');
    button.textContent = 'DELETE';
    button.classList.add('delete-icon');
    card.append(button);

    const button2 = document.createElement('button');
    button2.textContent = 'READ';
    button2.classList.add('read-icon');
    card.append(button2);

    const parTitle = document.createElement('p');
    parTitle.classList.add('card-section');
    parTitle.textContent = 'Title: ' + book.title;
    card.append(parTitle);

    const parAuthor = document.createElement('p');
    parAuthor.classList.add('card-section');
    parAuthor.textContent = 'Author: ' + book.author;
    card.append(parAuthor);

    const parPages = document.createElement('p');
    parPages.classList.add('card-section');
    parPages.textContent = 'Pages: ' + book.pages;
    card.append(parPages);

    const parYouRead = document.createElement('p');
    parYouRead.classList.add('card-section');
    parYouRead.textContent = 'Read: ' + book.youRead;
    card.append(parYouRead);

    cardContainer.append(card);

  })

  numberOfCards = 0;
  const deleteButton = document.querySelectorAll('.delete-icon');
  deleteButton.forEach((button) => {
    button.addEventListener('click', deleteBook);
  })

  const readButton = document.querySelectorAll('.read-icon');
  readButton.forEach((button) => {
    button.addEventListener('click', changeReadStatus);
  })
}
