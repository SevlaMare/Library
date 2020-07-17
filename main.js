const myLibrary = [];

const collect_form_data = () => {
  const author = document.querySelector("#author")
  const title = document.querySelector("#title")
  const pages = document.querySelector("#pages")

  myLibrary.push( [author, title, pages] )

  
  console.log( myLibrary[0][0] )
};


document.getElementById("btn-submit")
  .addEventListener("click", collect_form_data)

  console.log("working")