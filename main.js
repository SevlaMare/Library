const myLibrary = [];

const book = (bookName, bookAuthor, bookPages) => ({ bookName, bookAuthor, bookPages });

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  return paragraph;
}

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

document.getElementById('btnGetBookData').addEventListener('click', addBookToLibrary);