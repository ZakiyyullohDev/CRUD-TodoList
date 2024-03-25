import { addTodo } from "./addTodo.js";
import { getItemStorage } from "./getItem.js";

const todoList = JSON.parse(localStorage.getItem('todos')) || [];
let allDeleteButtons = document.querySelectorAll('.delete-todo');
let allEditButtons = document.querySelectorAll('.edit-todo');
const todoAddBtn = document.getElementById('todoAddBtn');
const todoInput = document.getElementById('todoInput');
const todoUl = document.getElementById('todoUl');

todoAddBtn.addEventListener('click', ()=> {
    addTodo()
})

todoInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addTodo()
    }
})

getItemStorage()