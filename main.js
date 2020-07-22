const myLibrary = [];

const Book = (name, author, pages) => ({ name, author, pages });

const getDataFromInput = (idOrClass) => {
  return document.querySelector(idOrClass).value
};
  
const createElement = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};

const addBookToLibrary = () => {
  myLibrary.push(Book(
    getDataFromInput("#bookName"),
    getDataFromInput("#bookAuthor"),
    getDataFromInput("#bookPages")
  ));
  return render(myLibrary)
};


const elementValue = (id) => document.getElementById(id).value;

function addBookToLibrary() {
  const newbook = book(elementValue('bookName'), elementValue('bookAuthor'), elementValue('bookPages'));
  myLibrary.push(newbook);
  displayBooks();
}

document.querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);

