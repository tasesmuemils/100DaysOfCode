//Capture necessery elements
const openModalButton = document.querySelector('.openModal');
const modal = document.querySelector('.modal');
const createNote = document.querySelector('.createNote');
const listOfNotes = document.querySelector('.notesList');

//Function to get zeros before date and month if string value consists only form one value
const todaysDate = new Date();
if (todaysDate.getMonth().toString().split('').length === 1) {
    var month = '0' + todaysDate.getMonth();
} else if (todaysDate.getDate().toString().split('').length === 1) {
    var date = '0' + todaysDate.getDate();
};

const dateMsg = todaysDate.getDate() + '.' + month + '.' + todaysDate.getFullYear();

//Create an empty array where values will be stored
//If there are something in local storage (in this case - objects),
//It will appear on page, if local storage is empty - array is empty 
const notesArray = JSON.parse(localStorage.getItem('notesArray')) || [];


//Opens modal
function notesModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.firstElementChild.lastElementChild.value = '';
    modal.lastElementChild.previousElementSibling.lastElementChild.value = '';
}


function createNoteCard(e) {
    console.log(e);
    //Store input fields values
    let cardsTitle = modal.firstElementChild.lastElementChild.value;
    let cardsText = modal.lastElementChild.previousElementSibling.lastElementChild.value;
    
    //Creates an object with stored values
    let itemObject = {
        title: cardsTitle,
        text: cardsText
    }

    //Push object to array
    notesArray.push(itemObject);
    updateCardsList(notesArray, listOfNotes);
    localStorage.setItem('notesArray', JSON.stringify(notesArray));

    //Hide modal
    modal.style.display = 'none';
}


//Adds content to page (in this case it takes array with objects and elemnt in witch content will apear)
function updateCardsList(items, itemsList) {
    //New card content (The map() method calls the provided function once for each element in an array, in order.)
    //It will take every item form array and create content for page, where array content will apear
    itemsList.innerHTML = items.map(function (item) {
        return `
        <div class='card'>
            <h1 contenteditable>${item.title}</h1>
            <p contenteditable>${item.text}</p>
            <p>${dateMsg}</p>
        </div>
        `;  
    }).join(''); //.join() by default will add ' , ', this will join them togather
}

openModalButton.addEventListener('click', notesModal);
createNote.addEventListener('click', createNoteCard);

//Updates page content everytime when refresh happens
updateCardsList(notesArray, listOfNotes);
