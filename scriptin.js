let bookTitle = document.querySelector(`#titleBk`);
let bookAuthor = document.querySelector(`#authorBk`);
let bookPages = document.querySelector(`#pageNumber`);
let bookStatus = document.querySelectorAll(`input[type="radio"]`);
let sbmitBtn = document.querySelector(`#submitBtn`);
const cardCont =  document.querySelector(`#bookDisp`);


    let inTitle;
    let inAuthor;
    let inPages;
    let inStatus;



sbmitBtn.addEventListener(`click`, function(event){
    event.preventDefault();
    for(let bookStat of bookStatus){
        if(bookStat.checked){
            inStatus = bookStat.value;
        }
    }
    addBookToLibrary();
    dispBook();
});

let myLibrary=[{title: `human`,
                author: `JJ Simons`,
                pages: `169`,
                status: `read` },
                {title: `humaasdn`,
                author: `JJ Siasdsadmons`,
                pages: `16944`,
                status: `In progress` }]



function Book(title, author,pages,status){
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.status =  status;

}

Book.prototype.toString = function(){
    return `The title of the book is: ` + this.title + ` Written by: ` + this.author + ` Number of pages ` + this.pages + ` Current Status ` + this.status; 
}

bookTitle.addEventListener(`input`, function(){
    inTitle = bookTitle.value;
} );

bookAuthor.addEventListener(`input`, function(){
    inAuthor = bookAuthor.value;
});

bookPages.addEventListener(`input`, function(){
    inPages =  bookPages.value;
});




function addBookToLibrary(bookTitle,bookAuthor,bookPages,bookStatus){

    

    let book = new Book(inTitle,inAuthor,inPages,inStatus);

    myLibrary.push(book);
}

let bookHldr1 = document.querySelector(`bookHolder1`);



function checkstuff(){
    if(number > 0){
        return drawCard(number);
    }
}

function dispBook(){
    //for(let i = 0; i < myLibrary.length; i++){
        let cardBox = document.createElement(`div`);
        cardBox.classList.add(`bookHolder`);
        cardBox.setAttribute(`id`,`bookHolder`);
        //cardBox.style.width =`200px`;
        //cardBox.style.height = `200px`;
        cardBox.style.backgroundColor = `lightblue`
        cardCont.appendChild(cardBox);
        let txtObj = myLibrary[myLibrary.length-1].toString();
        cardBox.textContent = txtObj;
    
}




