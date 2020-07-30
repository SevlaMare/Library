const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function render(book) {
  const bookShelf = document.querySelector('.cards');
  const card = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const cardReadStatus = document.createElement('p');
  cardTitle.innerHTML = book.title;
  cardAuthor.innerHTML = book.author;
  cardPages.innerHTML = book.pages;
  cardReadStatus.innerHTML = book.readStatus ? 'you have read this book' : 'you haven\'t read this book yet';
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardReadStatus);
  bookShelf.appendChild(card);
}

function addBookToLibrary() {
  const newBook = new Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('#readStatus').checked,
  );
  myLibrary.push(newBook);
  render(newBook);
}

document.querySelector('#submit').addEventListener('click', addBookToLibrary);
