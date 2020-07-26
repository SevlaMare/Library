const myLibrary = [];
const Book = (name, author, pages) => ({ name, author, pages });
const getValueFromElement = idOrClass => document.querySelector(idOrClass).value;


const createElementX = (tag, className, text) => {
  const element = document.createElement(tag);
  text ? element.innerHTML = text : null;
  className ? element.className = className : null;
  return element;
};

// render without loop
const render = (book) => {
  const shelf = document.querySelector('#shelf');
  const { name, author, pages } = book;

  const card = createElementX('div', 'card')
  card.appendChild(createElementX('p', null, name));
  card.appendChild(createElementX('p', null, author));
  card.appendChild(createElementX('p', null, pages));
  shelf.appendChild(card)
};

// call on load, render all books thought loop using render()
const renderAll = (library) => {
  for (let book = 0; book < library.length; book += 1) {
    const { name, author, pages } = library[book];
  }
}


const addBookToLibrary = () => {
  book = Book(
      getValueFromElement('#bookName'),
      getValueFromElement('#bookAuthor'),
      getValueFromElement('#bookPages')
    )
  myLibrary.push(book);
  return render(book);
};


document
  .querySelector('#btn-submit')
  .addEventListener('click', addBookToLibrary);

// TODO: export myLibrary to json
