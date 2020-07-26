// create example to use onload!
const myLibrary = [{name: "asd", author: "sdfgsd", pages: "321"}];
// const myLibrary = [];

const Book = (name, author, pages) => ({ name, author, pages });
const getValueFromElement = idOrClass => document.querySelector(idOrClass).value;


const createElementX = (tag, className, text) => {
  const element = document.createElement(tag);
  text ? element.innerHTML = text : null;
  className ? element.className = className : null;
  return element;
};


const render = (book) => {
  // console.log(myLibrary)
  const shelf = document.querySelector('#shelf');
  const { name, author, pages } = book;

  const card = createElementX('div', 'card')
  card.appendChild(createElementX('p', null, name));
  card.appendChild(createElementX('p', null, author));
  card.appendChild(createElementX('p', null, pages));
  shelf.appendChild(card)
};


const renderAll = (library) => {
  // console.log("running ya")

  for (let book = 0; book < library.length; book += 1) {
    console.log(library)
    render(library[book])
  }
}


const addBookToLibrary = () => {
  const book = Book(
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


document.body.onload = renderAll(myLibrary)
// TODO: export myLibrary to json on cache
