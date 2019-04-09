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

    let noteCard = `
        <div class='card'>
            <h1 contenteditable>${cardsTitle}</h1>
            <p>${cardsText}</p>
        </div>
    `;
    
    notesArray.push(noteCard);
    listOfNotes.innerHTML = noteCard;
    modal.style.display = 'none';
}


openModalButton.addEventListener('click', notesModal);
createNote.addEventListener('click', createNoteCard);
