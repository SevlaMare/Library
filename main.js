const myLibrary = [];
const Book = (name, author, pages) => ({ name, author, pages });
const getDataFromElement = idOrClass => document.querySelector(idOrClass).value;


const createElementX = (tag, className, text) => {
  const element = document.createElement(tag);
  text ? element.innerHTML = text : null;
  className ? element.className = className : null;
  return element;
};


const render = (library) => {
  for (let book = 0; book < library.length; book += 1) {
    const shelf = document.querySelector('#shelf');
    const { name, author, pages } = library[book];

    const card = createElementX('div', 'card')
    card.appendChild(createElementX('p', null, name));
    card.appendChild(createElementX('p', null, author));
    card.appendChild(createElementX('p', null, pages));
    shelf.appendChild(card)
  }
};


const addBookToLibrary = () => {
  myLibrary.push(
    Book(
      getDataFromElement('#bookName'),
      getDataFromElement('#bookAuthor'),
      getDataFromElement('#bookPages')
    )
  );
  return render(myLibrary);
};


document
  .querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);

// TODO: export myLibrary to json

// TODO: split render x renderAll
// const renderNew = (dictionary) => {
//   for (let count = 0; count < dictionary.length; count += 1) {
//     const element = myLibrary[count];
//   }
// }