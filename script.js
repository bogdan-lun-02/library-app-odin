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

const button = document.getElementById('button');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

document.addEventListener("DOMContentLoaded", generateCards);

// Add new book

button.addEventListener('click', addBookToLibrary);

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

  let book1 = new Book(title, author, pages, youRead);
  myLibrary.push(book1);
  generateCards();
}


// Generating cards
const cardContainer = document.querySelector('#card-container');



function generateCards() {
  cardContainer.innerHTML = '';

  myLibrary.forEach((book) => {
  const card = document.createElement('div');
  card.classList.add('card');

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
}

// Button 'NEW BOOK'

const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', () => {
  form.style.display = 'block';
})
