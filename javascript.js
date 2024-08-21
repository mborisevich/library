const myLibrary = [];

function Book(name, author, pages, year) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.year = year;
};


function addBookToLibrary (book){
    myLibrary.push(book);
};

Book.prototype.getInfo = function() {
    return `${this.name} was written by ${this.author} in ${this.year}. It is ${this.pages} pages long.`
};


const metro = new Book("Metro 2033", "D. Glukhovsky", "350", "2009");
const picnic = new Book("Roadside Picnic", "Unknown", "300", "1981");
const generic = new Book("Murder at the Oasis", "Unknown", "300", "1931");
addBookToLibrary(metro);
addBookToLibrary(picnic);
addBookToLibrary(generic);
console.log(myLibrary);

const table = document.querySelector("table");
const rowNames = document.querySelector(".name-row");
const rowAuthors = document.querySelector(".author-row");
const rowYears= document.querySelector(".year-row");
const rowPages= document.querySelector(".page-row");
const dialog = document.querySelector("dialog");
const dialogOpenButton = document.querySelector("dialog + button");
const dialogCloseButton = document.querySelector("dialog > button");
const addBook = document.querySelector('input[type="submit"]');


dialogOpenButton.addEventListener("click", () => {
    dialog.showModal();
})
dialogCloseButton.addEventListener("click", () => {
    dialog.close();

})
addBook.addEventListener("click", (event) =>{
    event.preventDefault();
    const inputName = document.querySelector('#title');
    const inputAuthor = document.querySelector('#author');
    const inputYear = document.querySelector('#year');
    const inputPages = document.querySelector('#pages');
    const addedBook = new Book(inputName.value,
        inputAuthor.value,
        inputPages.value,
        inputYear.value
    )
    addBookToLibrary(addedBook);
    addBookTable(addedBook);
    inputName.value = ""
    inputAuthor.value = ""
    inputPages.value = ""
    inputYear.value = ""
})
function checkLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        const bookName = document.createElement("th");
        const bookAuthor = document.createElement("td");
        const bookYear = document.createElement("td");
        const bookPages = document.createElement("td");

        bookName.textContent = `${myLibrary[i].name}`;
        bookAuthor.textContent = `${myLibrary[i].author}`;
        bookYear.textContent = `${myLibrary[i].year}`;
        bookPages.textContent = `${myLibrary[i].pages}`;

        bookName.classList.add("generated")
        bookAuthor.classList.add("generated")
        bookYear.classList.add("generated")
        bookPages.classList.add("generated")

        rowNames.appendChild(bookName);
        rowAuthors.appendChild(bookAuthor);
        rowYears.appendChild(bookYear);
        rowPages.appendChild(bookPages);
    }
}
checkLibrary()

function addBookTable(book){
    const bookName = document.createElement("th");
    const bookAuthor = document.createElement("td");
    const bookYear = document.createElement("td");
    const bookPages = document.createElement("td");

    bookName.textContent = `${book.name}`;
    bookAuthor.textContent = `${book.author}`;
    bookYear.textContent = `${book.year}`;
    bookPages.textContent = `${book.pages}`;

    rowNames.appendChild(bookName);
    rowAuthors.appendChild(bookAuthor);
    rowYears.appendChild(bookYear);
    rowPages.appendChild(bookPages);

}


