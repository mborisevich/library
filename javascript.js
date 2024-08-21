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
}

function checkLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        return myLibrary[i];
    }
}
const metro = new Book("Metro 2033", "D. Glukhovsky", "350", "2009");
const picnic = new Book("Roadside Picnic", "Unknown", "300", "1981");
const generic = new Book("Murder at the Oasis", "Unknown", "300", "1931");
addBookToLibrary(metro)
addBookToLibrary(picnic)
addBookToLibrary(generic)
console.log(myLibrary)

