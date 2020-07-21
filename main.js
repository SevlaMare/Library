function getInputFx() {
  const input = document.getElementById('give-us-the-data').value;
  const paragraph = document.createElement('p');
  paragraph.innerHTML = input;
  paragraph.className = 'card';
  const div = document.getElementById('cards');
  div.appendChild(paragraph);
}

document.getElementById('btn').addEventListener('click', getInputFx);
