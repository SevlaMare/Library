const myLibrary = [];

const Book = (title, author, pages, readStatus) => ({
  title, author, pages, readStatus
})


// TODO: accepts more args, form innerHTML.<property>
const createCustomElement = (tag, className, writeText) => {
  const element = document.createElement(tag);
  // text ? element.innerHTML = text : null;
  // className ? element.className = className : null;
  return element;
};

card.appendChild(createElementX('p', null, name)); 

const render = (book) => {
  const { title, author, pages, readStatus } = book;

  const bookShelf = document.querySelector('.shelf');
  const card = document.createElement('div');

  const cardTitle = document.createElement('h2');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const cardReadStatus = document.createElement('p');

  cardTitle.innerHTML = title;
  cardAuthor.innerHTML = author;
  cardPages.innerHTML = pages;
  cardReadStatus.innerHTML = readStatus ? 'you have read this book' : 'you haven\'t read this book yet';

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardReadStatus);

  bookShelf.appendChild(card);
}

const addBookToLibrary = () => {
  const newBook = Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('#readStatus').checked,
  );
  myLibrary.push(newBook);
  render(newBook);
}

document
  .querySelector('#submit')
  .addEventListener('click', addBookToLibrary);
