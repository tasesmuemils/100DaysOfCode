const openModalButton = document.querySelector('.openModal');
const modal = document.querySelector('.modal');
const createNote = document.querySelector('.createNote');
const listOfNotes = document.querySelector('.notesList');
const notesArray = [];


function notesModal(e) {
    e.preventDefault();
    modal.style.display = 'block';
    modal.firstElementChild.lastElementChild.value = '';
    modal.lastElementChild.previousElementSibling.lastElementChild.value = '';
}

function createNoteCard() {

    let cardsTitle = modal.firstElementChild.lastElementChild.value;
    let cardsText = modal.lastElementChild.previousElementSibling.lastElementChild.value;

    let itemObject = {
        title: cardsTitle,
        text: cardsText
    }

    notesArray.push(itemObject);
    updateCardsList(notesArray, listOfNotes);
    modal.style.display = 'none';
}

function updateCardsList(items, itemsList) {
    itemsList.innerHTML = items.map(function (item) {
        return `
        <div class='card'>
            <h1 contenteditable>${item.title}</h1>
            <p contenteditable>${item.text}</p>
        </div>
        `;  
    }).join('');
}

openModalButton.addEventListener('click', notesModal);
createNote.addEventListener('click', createNoteCard);