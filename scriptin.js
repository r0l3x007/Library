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

    let myLibrary=[]



    //Submit button on click will add the book to the array while adding the buttons 
sbmitBtn.addEventListener(`click`,function(event){
    event.preventDefault();
    for(let bookStat of bookStatus){
        if(bookStat.checked){
            inStatus = bookStat.value;
        }
    }
    addBookToLibrary();
    dispBook();
});


    //Handles the eventlistener on the parent container as in the previous code the eventlisteners bubbledup

cardCont.addEventListener(`click`, function(event){
    let clickedElement = event.target;
    let bookContainer = clickedElement.closest(`.bookHolder`);

    if(bookContainer){
        if(clickedElement.classList.contains(`btn`)){
            let index = clickedElement.id;
            deleteBook(index);
        }else if(clickedElement.classList.contains(`tgBtn`)){
            let index = clickedElement.id;
            changeStatus(index);
        }
    }
})



function Book(title, author,pages,status){
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.status =  status;

}
//changing the default toString value so the information is displayed correctly
Book.prototype.toString = function(){
    return `The title of the book is: ` + this.title + ` Written by: ` + this.author + ` Number of pages ` + this.pages + ` Current Status ` + this.status; 
}

//eventlisteners for user input
bookTitle.addEventListener(`input`, function(){
    inTitle = bookTitle.value;
} );

bookAuthor.addEventListener(`input`, function(){
    inAuthor = bookAuthor.value;
});

bookPages.addEventListener(`input`, function(){
    inPages =  bookPages.value;
});

//creates a new book objects add adds it to the array

function addBookToLibrary(){

    

    let book = new Book(inTitle,inAuthor,inPages,inStatus);

    myLibrary.push(book);
}

let bookHldr1 = document.querySelector(`bookHolder1`);



//Dynamically generates div`s and button`s for the books where they will be displayed, each div is assigned to the book object index.
function dispBook(){
    //for(let i = 0; i < myLibrary.length; i++){
        let cardBox = document.createElement(`div`);
        let dltBtn = document.createElement(`button`);
        let toggleBtn = document.createElement(`button`);
        let txtHolder =  document.createElement(`div`);
        txtHolder.classList.add(`textHolder`);
        cardBox.classList.add(`bookHolder`);
        let txtObj = myLibrary[myLibrary.length-1].toString();
        txtHolder.textContent = txtObj;
        toggleBtn.textContent = `Change Status`;
        dltBtn.textContent =`Delete`;
        dltBtn.classList.add(`btn`);
        toggleBtn.classList.add(`tgBtn`);
        txtHolder.setAttribute(`id`,`txt${myLibrary.length-1}`)
        dltBtn.setAttribute(`id`,myLibrary.length-1);
        toggleBtn.setAttribute(`id`,myLibrary.length-1);
        toggleBtn.style.width = `50px`;
        toggleBtn.style.height =`50px`;
        dltBtn.style.width = `50px`;
        dltBtn.style.height = `50px`;
        cardBox.appendChild(txtHolder);
        cardBox.appendChild(toggleBtn);
        cardBox.appendChild(dltBtn);
        cardBox.setAttribute(`id`,`box${myLibrary.length-1}`);
        cardBox.style.width =`200px`;
        cardBox.style.height = `200px`;
        cardBox.style.backgroundColor = `lightblue`;
        cardCont.appendChild(cardBox);
}


//Deletes the book based on the assigned index
function deleteBook(index){
        //let bookLoc = parseInt(index);
        //myLibrary.splice(bookLoc,bookLoc);
        let dispcont = document.getElementById(`box${index}`);
        //cardCont.removeChild(dispcont);
        if(dispcont != null ){
        dispcont.remove();
        delete myLibrary[index];
        }
        
}

//changes the status of the book object from read to not read

function changeStatus(index){
    let statusUp = myLibrary[index].status;
    let dispCont = document.getElementById(`txt${index}`);

    if(statusUp == `Read`){
        myLibrary[index].status = `Not read`;
        dispCont.textContent = ` `;
        dispCont.textContent = myLibrary[index].toString();
    } else if(statusUp == `Not read`){
        myLibrary[index].status = `Read`;
        dispCont.textContent = ` `;
        dispCont.textContent = myLibrary[index].toString();
    }
}
