const myLibrary = [];
const Book = (name, author, pages) => ({ name, author, pages });
const getDataFromElement = idOrClass => document.querySelector(idOrClass).value;

const createElement = (tag, text, className) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  element.className = className;
  return element;
};

const render = dictionary => {
  const placeHere = document.querySelector("#shelf");
  const { name, author, pages } = dictionary[0];

  placeHere.appendChild(createElement('p', name, 'card'));
  placeHere.appendChild(createElement('p', author, 'card'));
  placeHere.appendChild(createElement('p', pages, 'card'));
};

const addBookToLibrary = () => {
  myLibrary.push(
    Book(
      getDataFromElement('#bookName'),
      getDataFromElement('#bookAuthor'),
      getDataFromElement('#bookPages'),
    ),
  );
  return render(myLibrary);
};

// TODO: split render x renderAll
// const renderNew = (dictionary) => {
//   for (let count = 0; count < dictionary.length; count += 1) {
//     const element = myLibrary[count];
//   }
// }

document
  .querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);

// TODO: export myLibrary to json
