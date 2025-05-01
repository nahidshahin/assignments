"use strict";


function addBook(books, title, author, ID) {
    let newBook = {
        title, author, ID
    };
    if( !books.some(b => b.title === title && b.author === author && b.ID === ID ) ) {
        books.push(newBook);
    }
    return newBook;
}

function getTitles(books) {
    return books.map(b => b.title).sort();
}

function findBooks(keyword, books) {
    return books.filter(b => b.title.includes(keyword)).sort((b1, b2) => b1.ID - b2.ID);
}

let libraryBooks = [ 
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 }, 
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 }, 
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 }, 
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 } 
    ];

addBook(libraryBooks, "The Road Ahead", "Bill Gates", 1234)
console.log( libraryBooks );

console.log( getTitles(libraryBooks));

console.log( findBooks("The", libraryBooks));
