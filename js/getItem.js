import { deleteTodoFunc } from "./delete.js";
import { editTodoFunc } from "./editTodo.js";

const todoList = JSON.parse(localStorage.getItem('todos')) || [];
let allDeleteButtons = document.querySelectorAll('.delete-todo');
let allEditButtons = document.querySelectorAll('.edit-todo');
const todoAddBtn = document.getElementById('todoAddBtn');
const todoInput = document.getElementById('todoInput');
const todoUl = document.getElementById('todoUl');

const getItemStorage = () => {
    todoList.forEach(todo => {
        
        const todoLi = document.createElement('li');
        todoLi.classList.add('todo-li')
        todoLi.dataset.id = todo.id
        
        const todoP = document.createElement('p');
        todoP.textContent = todo.todoText;
        todoP.dataset.id = todo.id
        
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-todo');
        editBtn.textContent = 'Edit';
        editBtn.dataset.id = todo.id
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-todo');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = todo.id
        
        const todoBtnWrapper = document.createElement('div');
        todoBtnWrapper.appendChild(editBtn);0
        todoBtnWrapper.appendChild(deleteBtn);
        
        todoLi.appendChild(todoP);
        todoLi.appendChild(todoBtnWrapper);
        todoUl.appendChild(todoLi);
    });
    deleteTodoFunc()
    editTodoFunc()
}

export {
    getItemStorage
}
