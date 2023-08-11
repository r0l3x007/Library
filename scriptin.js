let bookTitle = document.querySelector(`#titleBk`).value ;
let bookAuthor = document.querySelector(`authorBk`).value;
let bookPages = document.querySelector(`#pageNumber`).value;
let bookStatus;

if(document.getElementById(`read`).checked == true){
    return bookStatus = document.querySelector(`#read`).value;
} else if(document.getElementById(`ntread`).checked == true){
    return bookStatus =  document.querySelector(`#ntread`).value;
}



let myLibrary=[ ]



function Book(title, author,pages,read){
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.read =  read;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}  read yet.`;
    }
}


function addBookToLibrary(){

    let book = new Book(bookTitle,bookAuthor,bookPages,bookStatus);

    return myLibrary.push(book);

}
