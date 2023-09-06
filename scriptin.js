let bookTitle = document.querySelector(`#titleBk`);
let bookAuthor = document.querySelector(`#authorBk`);
let bookPages = document.querySelector(`#pageNumber`);
let bookStatus = document.querySelectorAll(`input[type="radio"]`);
let sbmitBtn = document.querySelector(`#submitBtn`);
let cardCont =  document.querySelector(`#bookDisp`);


    let inTitle;
    let inAuthor;
    let inPages;
    let inStatus;

    let myLibrary=[/*{title: `human`,
    author: `JJ Simons`,
    pages: `169`,
    status: `read` },
    {title: `humaasdn`,
    author: `JJ Siasdsadmons`,
    pages: `16944`,
status: `In progress` }*/]

sbmitBtn.addEventListener(`click`, function(event){
    event.preventDefault();
    for(let bookStat of bookStatus){
        if(bookStat.checked){
            inStatus = bookStat.value;
        }
    }
    addBookToLibrary();
    dispBook();
    for(let i = 0; i < myLibrary.length; i++){
    if(myLibrary.length > 0 && myLibrary[i] != undefined){
        let dltBkbtn =  document.getElementsByClassName(`btn`);
        for(let b of dltBkbtn){
            b.addEventListener(`click`,function(){
                let index = this.id;
                deleteBook(index);
            });
        }
    }
    }
    
});

/*if(myLibrary.length > 0){

    let dltBkbtn =  document.getElementsByTagName(`button`);
    for(let b of dltBkbtn){
        b.addEventListener(`click`,deleteBook);
    }
}*/





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
        let dltBtn = document.createElement(`button`);
        cardBox.classList.add(`bookHolder`);
        let txtObj = myLibrary[myLibrary.length-1].toString();
        cardBox.textContent = txtObj;
        dltBtn.textContent =`Delete`;
        dltBtn.classList.add(`btn`);
        dltBtn.setAttribute(`id`,myLibrary.length-1);
        dltBtn.style.width = `50px`;
        dltBtn.style.height = `50px`;
        cardBox.appendChild(dltBtn);
        cardBox.setAttribute(`id`,`box${myLibrary.length-1}`);
        cardBox.style.width =`200px`;
        cardBox.style.height = `200px`;
        cardBox.style.backgroundColor = `lightblue`;
        cardCont.appendChild(cardBox);
}

/*if(myLibrary.length > 0){

    let dltBkbtn =  document.getElementsByTagName(`button`);
    for(let b of dltBkbtn){
        b.addEventListener(`click`,deleteBook);
    }
}*/

function deleteBook(index){
        //let bookLoc = parseInt(index);
        //myLibrary.splice(bookLoc,bookLoc);
        let dispcont = document.getElementById(`box${index}`);
        //cardCont.removeChild(dispcont);
        dispcont.remove();
        delete myLibrary[index];
        
}

