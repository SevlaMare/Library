const myLibrary = [];
let id = 0;

const Book = (title, author, pages, readStatus) => ({
  title, author, pages, readStatus,
});

const displayElement = () => {
  document.querySelector('#form').className = '';
};

const hideElement = () => {
  document.querySelector('#form').className = 'hide';
};

const deleteBook = () => {
  window.event.target.parentNode.remove();
};

const changeReadStatus = () => {
  const elem = window.event.currentTarget;
  const elemParent = elem.parentNode;
  if (elem.checked) {
    document.querySelector(`#readStatus${elemParent.id}`).innerHTML = 'You have read this book';
    myLibrary[elemParent.id].readStatus = true;
  } else {
    myLibrary[elemParent.id].readStatus = false;
    document.querySelector(`#readStatus${elemParent.id}`).innerHTML = 'You haven\'t read this book yet';
  }
};

const render = (book) => {
  const {
    title, author, pages, readStatus,
  } = book;

  const bookShelf = document.querySelector('.shelf');
  const card = document.createElement('div');

  const button = document.createElement('button');
  const checkbox = document.createElement('input');
  const cardTitle = document.createElement('h2');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const cardReadStatus = document.createElement('p');

  button.className = 'deleteBtn';
  card.className = 'card';

  checkbox.innerHTML = 'read it already?';
  checkbox.checked = false;
  checkbox.type = 'checkbox';
  button.innerHTML = 'delete';
  cardTitle.innerHTML = title;
  cardAuthor.innerHTML = author;
  cardPages.innerHTML = pages;
  cardReadStatus.innerHTML = readStatus ? 'You have read this book' : 'You haven\'t read this book yet';
  cardReadStatus.id = `readStatus${id}`;

  button.addEventListener('click', deleteBook);
  checkbox.addEventListener('click', changeReadStatus);

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardReadStatus);
  card.appendChild(button);
  card.appendChild(checkbox);
  card.id = id;
  id += 1;

  bookShelf.appendChild(card);
};

const addBookToLibrary = () => {
  const newBook = Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('#readStatus').checked,
  );
  myLibrary.push(newBook);
  render(newBook);
};

document.querySelector('#submit')
  .addEventListener('click', addBookToLibrary);

document.querySelector('#submit')
  .addEventListener('click', hideElement);

document.querySelector('#newBook')
  .addEventListener('click', displayElement);
