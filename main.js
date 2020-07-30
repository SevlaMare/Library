const myLibrary = [];


const Book = (title, author, pages, readStatus) => ({
  title, author, pages, readStatus
})


const render = (book) => {
  const { title, author, pages, readStatus } = book;

  const bookShelf = document.querySelector('.shelf');
  const card = document.createElement('div');
  card.className = "card"

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

const displayElement = () => {
  document.querySelector("#form").className = ""
}

document.querySelector('#submit')
  .addEventListener('click', addBookToLibrary);

document.querySelector('#newBook')
  .addEventListener('click', displayElement)
