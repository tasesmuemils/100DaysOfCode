//This will be JS code for my TODO list.
//I will try few things with this:
/* 1. ADD ITEM
    2. Remove ITEM
    3. Edit ITEM */

var firstInput = document.getElementById('firstInput');
var toDoList = document.getElementById('toDo');
var inputArray = [];

function addItem() {
    inputArray.unshift(firstInput.value);
    firstInput.value = '';
    var toDoItem = document.createElement('li');
    var toDoEdit = document.createElement('INPUT');
    toDoEdit.value = inputArray[0];
    //toDoItem.textContent = inputArray[0];
    if (toDoList.childElementCount = 0) {
        toDoList.appendChild(toDoItem);
    } else {
        toDoList.insertBefore(toDoItem, toDoList.firstChild);
    }
    toDoItem.appendChild(toDoEdit);
    var deleteItem = document.createElement('button');
    deleteItem.textContent = 'Delete';
    deleteItem.type = 'button';
    toDoItem.appendChild(deleteItem);
    var editItem = document.createElement('button');
    editItem.type = 'button';
    editItem.textContent = 'Edit';
    toDoItem.appendChild(editItem);

    function deleteToDoItem() {
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === toDoEdit.value) {
                inputArray.splice(i, 1);
            }
        }
        toDoList.removeChild(toDoItem);
    }

    
    var clickState = 0;

    function editToDoItem() {
        if (clickState === 0) {
            editItem.textContent = 'Close Edit';
            toDoEdit.type = 'text'
            toDoEdit.focus();
            clickState = 1;
        } else {
            for (let i = 0; i < inputArray.length; i++) {
                inputArray[i] = toDoEdit.value;
            }
            editItem.textContent = 'Edit';
            clickState = 0;
        }
    }
    deleteItem.addEventListener('click', deleteToDoItem, false);
    editItem.addEventListener('click', editToDoItem, false);
}


var addItemButton = document.getElementById('addItemButton');
addItemButton.addEventListener('click', addItem, false);