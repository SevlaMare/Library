console.log("RUNNING E1");
// const array1 = []
document.getElementById("btn").addEventListener("click", get_input_fx);

function get_input_fx() {
  var x = document.getElementById("give-us-the-data").value;
  console.log(x);
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "test";
  paragraph.className = "card";
  let div = document.getElementById("cards");
  div.appendChild(paragraph);
}
