//This will be JS code for my TODO list.
//I will try few things with this:
/* 1. ADD ITEM
    2. Remove ITEM
    3. Edit ITEM */

var firstInput = document.getElementById('firstInput');
var inputArray = [];
var toDoList = document.getElementById('toDo');

function addItem() {
    inputArray.unshift(firstInput.value);
    firstInput.value = '';
    var toDoItem = document.createElement('li');
    toDoItem.textContent = inputArray[0];
    toDoList.appendChild(toDoItem);
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
            if (inputArray[i] === toDoItem.firstChild.textContent) {
                inputArray.splice(i, 1);
            }
        }
        toDoList.removeChild(toDoItem);
    }

    var clickState = 0;

    function editToDoItem() {
        var toDoEdit = document.createElement('INPUT');
        if (clickState === 0) {
            editItem.textContent = 'Close Edit';
            toDoEdit.type = 'text'
            toDoEdit.value = toDoItem.firstChild.textContent;
            toDoEdit.appendChild(toDoItem.firstChild);
            toDoItem.insertBefore(toDoEdit, toDoItem.firstChild);
            clickState = 1;
        } else {
            editItem.textContent = 'Edit';
            for (let i = -1; i < inputArray.length; i++) {
                if (inputArray[i] !== toDoEdit.value) {
                    inputArray[i] === toDoEdit.value;
                }
            }
            clickState = 0;
        }

    }
    deleteItem.addEventListener('click', deleteToDoItem, false);
    editItem.addEventListener('click', editToDoItem, false);

}


var addItemButton = document.getElementById('addItemButton');
addItemButton.addEventListener('click', addItem, false);