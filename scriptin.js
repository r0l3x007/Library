let bookTitle = document.querySelector(`#titleBk`);
let bookAuthor = document.querySelector(`authorBk`);
let bookPages = document.querySelector(`#pageNumber`);
let bookStatus;
let sbmitBtn = document.querySelector(`#submitBtn`);
const cardCont =  document.querySelector(`#bookDisp`);

/*if(document.getElementById(`read`).checked == true){
    return bookStatus = document.querySelector(`#read`).value;
} else if(document.getElementById(`ntread`).checked == true){
    return bookStatus =  document.querySelector(`#ntread`).value;
}*/


//sbmitBtn.addEventListener(`click`,addBookToLibrary);


let myLibrary=[{title: `human`,
                author: `JJ Simons`,
                pages: `169`,
                read: false },
                {title: `humaasdn`,
                author: `JJ Siasdsadmons`,
                pages: `16944`,
                read: true }]



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

    myLibrary.push(book);
}

let bookHldr1 = document.querySelector(`bookHolder1`);



function checkstuff(){
    if(number > 0){
        return drawCard(number);
    }
}

function dispBook(){
    for(let i = 0; i < myLibrary.length; i++){
        let cardBox = document.createElement(`div`);
        cardBox.classList.add(`bookHolder`);
        cardBox.setAttribute(`id`,`bookHolder`);
        cardBox.style.width =`200px`;
        cardBox.style.height = `200px`;
        cardBox.style.backgroundColor = `lightblue`
        cardCont.appendChild(cardBox);
        let txtObj = JSON.stringify(myLibrary[i]);
        cardBox.textContent = txtObj;
    }
}




