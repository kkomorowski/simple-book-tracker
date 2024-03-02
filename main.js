import './style.css'

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let shelf = [
  new Book("The Last Kingdom", "Bernard Cornwell"),
  new Book("Later", "Stephen King"),
  new Book("Brave New World", "Aldous Huxley"),
  new Book("Foundation", "Isaac Asimov"),
  new Book("The Shipping News", "Annie Proulx")
]

function bookComponent(book) {
  return `<div class="book">
    <b>${book.title}</b> 
    by ${book.author}
  </div>`
}

function shelfComponent(shelf) {
  return `${shelf.map(bookComponent).join('')}`;
}

function addBook() {
  shelf.push(new Book("AAA", "BBB"));
  document.querySelector("#shelf").innerHTML = 
    `${shelfComponent(shelf)}`
}

function setupAddButton(button) {
  button.addEventListener('click', () => addBook())
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Simple Book Tracker</h1>
    <div id="shelf">
      ${shelfComponent(shelf)}
    </div>
    <button id="add_button">Add</button>
  </div>
`

setupAddButton(document.querySelector("#add_button"))