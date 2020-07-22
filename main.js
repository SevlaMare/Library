const myLibrary = [];

const Book = (name, author, pages) => ({ name, author, pages });

const createElement = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};

function displayBooks() {
  for (let index = 0; index < myLibrary.length; index += 1) {
    const element = myLibrary[index];
    const div = document.getElementById('cards');
    const { bookName, bookAuthor, bookPages } = element;
    div.appendChild(createParagraph(bookName));
    div.appendChild(createParagraph(bookAuthor));
    div.appendChild(createParagraph(bookPages));
  }
}

const elementValue = (id) => document.getElementById(id).value;

function addBookToLibrary() {
  const newbook = book(elementValue('bookName'), elementValue('bookAuthor'), elementValue('bookPages'));
  myLibrary.push(newbook);
  displayBooks();
}

document.querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);

