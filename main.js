const myLibrary = [];
const Book = (name, author, pages) => ({ name, author, pages });
const getDataFromInput = (idOrClass) => document.querySelector(idOrClass).value;

// TODO: class as argument
const createElement = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};

const render = (dictionary) => {
  const div = document.body;
  const { name, author, pages } = dictionary[0];

  div.appendChild(createElement('p', name));
  div.appendChild(createElement('p', author));
  div.appendChild(createElement('p', pages));
};

const addBookToLibrary = () => {
  myLibrary.push(Book(
    getDataFromInput('#bookName'),
    getDataFromInput('#bookAuthor'),
    getDataFromInput('#bookPages'),
  ));
  return render(myLibrary);
};


// TODO: split render x renderAll
// const renderNew = (dictionary) => {
//   for (let count = 0; count < dictionary.length; count += 1) {
//     const element = myLibrary[count];
//   }
// }

document.querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);

// TODO: export myLibrary to json
