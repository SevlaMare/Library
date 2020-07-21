const myLibrary = [];

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  return paragraph;
}

function displayBooks() {
  for (let index = 0; index < myLibrary.length; index += 1) {
    const element = myLibrary[index];
    const div = document.getElementById('cards');
    div.appendChild(createParagraph(element[0]));
    div.appendChild(createParagraph(element[1]));
    div.appendChild(createParagraph(element[2]));
  }
}

function addBookToLibrary() {
  // do stuff here
  const bookName = document.getElementById('bookName').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookPages = document.getElementById('bookPages').value;
  myLibrary.push([bookName, bookAuthor, bookPages]);
  displayBooks();
}

document.getElementById('btnGetBookData').addEventListener('click', addBookToLibrary);