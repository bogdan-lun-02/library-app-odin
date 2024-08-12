// Library files

const myLibrary = [];

const thisPerfectDay = {
  title: 'This perfect day',
  author: 'Ira Levin',
  pages: 300,
  youRead: 'yes',
}

const theWindUpGirl = {
  title: 'The Windup Girl',
  author: 'Paolo Bacigalupi',
  pages: 400,
  youRead: 'yes',
}

myLibrary.push(thisPerfectDay);
myLibrary.push(theWindUpGirl);



const button = document.getElementById('button');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

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
}

// Generating table

const button2 = document.querySelector('#button2');
button2.addEventListener('click', generateTable);

function generateTable() {
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');

  for (let i = 0; i < myLibrary.length + 1; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 2; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
}





