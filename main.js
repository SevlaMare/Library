const myLibrary = [];
const Book = (name, author, pages) => ({ name, author, pages });
const getDataFromElement = idOrClass => document.querySelector(idOrClass).value;


const createElement2 = (tag, className, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  element.className = className;
  return element;
};


const render = (dictionary) => {
  for (let count = 0; count < dictionary.length; count += 1) {
    console.log(dictionary[count])

    const shelf = document.querySelector('#shelf');
    const { name, author, pages } = dictionary[count];

    const card = document.createElement('div')
    card.className = "card"
  
    card.appendChild(createElement2('p', null, name));
    card.appendChild(createElement2('p', null, author));
    card.appendChild(createElement2('p', null, pages));
  
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