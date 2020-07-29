import * as Nodes from './createNodes.js';
import * as Styles from './styles.js';

const myLibrary = [];

const book = (bookName, bookAuthor, bookPages) => ({ bookName, bookAuthor, bookPages });

function render(_newBook) {
  const div = document.getElementById('cards');
  const { bookName, bookAuthor, bookPages } = _newBook;
  const card = Nodes.createElement('article', null, Styles.card);
  card.appendChild(Nodes.createElement('h3', bookName));
  card.appendChild(Nodes.createElement('p', bookAuthor));
  card.appendChild(Nodes.createElement('p', bookPages));
  div.appendChild(card);
}

const elementValue = (id) => document.getElementById(id).value;

function addBookToLibrary() {
  const newBook = book(elementValue('bookName'), elementValue('bookAuthor'), elementValue('bookPages'));
  myLibrary.push(newBook);
  render(newBook);
}

document.getElementById('btnGetBookData').addEventListener('click', addBookToLibrary);