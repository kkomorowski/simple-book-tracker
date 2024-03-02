import './style.css'

class Book {
  constructor(title, author) {
    this.bookId = "#book-"+crypto.randomUUID();
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
  return `<div class="book" id="${book.bookId}">
    <b>${book.title}</b> 
    ${book.author}
  </div>`
}

function shelfComponent(shelf) {
  return `${shelf.map(bookComponent).join('')}`;
}

function addBook() {
  const book = new Book("AAA", "BBB")
  shelf.push(book);
  refreshShelf();
}

function refreshShelf() {
  document.querySelector("#shelf").innerHTML = 
    `${shelfComponent(shelf)}`;
  setupDeleteListeners();
}

function deleteBook(bookId) {
  console.log("Book delete: " + bookId)
  shelf = shelf.filter(book => book.bookId != bookId)
  refreshShelf()
}

function setupAddButton(button) {
  button.addEventListener('click', () => addBook())
}

function setupDeleteListeners() {
  shelf.forEach(book => 
    document.getElementById(book.bookId)
      .addEventListener('click', () => deleteBook(book.bookId))
  );
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
setupDeleteListeners()