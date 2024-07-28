// Create a LibraryItem class with properties title and author.
// Extend it with Book and Magazine classes.
// Add methods to display details specific to books and magazines.

class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

}

class Book extends LibraryItem {
    constructor(title, author, genre) {
        super(title, author);
        this.genre = genre;
    }

    showInfo() {
        return `The ${this.title} from genre ${this.genre} is written by${this.author}`
    }
}

class Magazine extends LibraryItem {
    constructor(title, author, sales) {
        super(title, author);
        this.sales = sales;
    }

    showInfo() {
        return `The ${this.title} from ${this.author} has ${this.sales} sales`
    }
}

const libraryItem = new LibraryItem('Find a job','Plamen Kostov');
console.log(libraryItem);

const book = new Book('Job matters', 'Ikena', 'Histoty');
console.log(book);
console.log(book.showInfo());

const magazine = new Magazine('Job matters', 'Ikena', 3000);
console.log(magazine);
console.log(magazine.showInfo());