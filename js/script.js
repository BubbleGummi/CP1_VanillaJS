let todoList = [];

function renderList() {
    const listElement = document.getElementById('todo-list');
    listElement.innerHTML = '';
    todoList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${item}</span>
        <button class="edit" onclick="editItem(${index})">Edit</button>
        <button class="delete" onclick="deleteItem(${index})">Delete</button>
        `;
        listElement.appendChild(listItem);
    });
}
function addItem() {
    const newItem = document.getElementById('new-todo').value;
    if (newItem) {
        todoList.push(newItem);
        document.getElementById('new-todo').value = '';
        renderList();
    }
}

function editItem(index) {
    const newItem = prompt('Edit item:', todoList[index]);
    if (newItem) {
        todoList[index] = newItem;
        renderList();
    }
}

function deleteItem(index) {
    todoList.splice(index, 1);
    renderList();
}

document.addEventListener('DOMContentLoaded', renderList);
