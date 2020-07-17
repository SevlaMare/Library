const myLibrary = [];

const collect_form_data = () => {
  let author = document.getElementById("author").value
  let title = document.getElementById("title").value
  let pages = document.getElementById("pages").value

  myLibrary.push( [ author, title, pages] )

  render()

}



document.getElementById("btn-submit")
  .addEventListener("click", collect_form_data)

  function makeCard(myLibrary) {
    let card = document.createElement("div");
    card.className = "card";
 
    card.textContent = `title: ${myLibrary[0]}`;
    card.textContent = `author: ${myLibrary[1]}`;
    card.textContent = `pages: ${myLibrary[2]}`;
   
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    return card;
  }

  function render() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';
      const card = document.createElement('div');
  
      card.id = `book-${idx}`;
      card.className = 'card mt-3 mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-3';
      card.innerHTML = "<h5>Testing</h5>";
      booksContainer.appendChild(card);
  }