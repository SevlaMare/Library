const myLibrary = [];
const Book = (name, author, pages) => ({ name, author, pages });


const getDataFromInput = (idOrClass) => {
  return document.querySelector(idOrClass).value
};


const addBookToLibrary = () => {
  myLibrary.push(Book(
    getDataFromInput("#bookName"),
    getDataFromInput("#bookAuthor"),
    getDataFromInput("#bookPages")
  ));
  return render(myLibrary)
};


// TODO: class as argument
const createElement = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};


const render = (dictionary) => {
  div = document.body
  const { name, author, pages } = dictionary[0];

  div.appendChild(createElement('p', name))
  div.appendChild(createElement('p', author))
  div.appendChild(createElement('p', pages))
};


document.querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);
