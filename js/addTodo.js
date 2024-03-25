import { uuidv4 } from "./uuid.js";
import { setItemStorage } from "./setItem.js";
import { deleteTodoFunc } from "./delete.js";
import { editTodoFunc } from "./editTodo.js";

const todoList = JSON.parse(localStorage.getItem('todos')) || [];
let allDeleteButtons = document.querySelectorAll('.delete-todo');
let allEditButtons = document.querySelectorAll('.edit-todo');
const todoAddBtn = document.getElementById('todoAddBtn');
const todoInput = document.getElementById('todoInput');
const todoUl = document.getElementById('todoUl');

const addTodo = () => {
    const todoText = todoInput.value.trim();
    
    if (!todoText) {
        alert('Iltimos todo kiriting!')
        return ''
    }
    
    if (todoText.length > 50) {
        alert("Iltimos 50 ta so'zdan kam yozing!")
        todoInput.value = ''
        return ''
    }
    
    const id = uuidv4()
    
    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-li')
    todoLi.dataset.id = id
    
    const todoP = document.createElement('p')
    todoP.textContent = todoText
    todoP.dataset.id = todoLi.id
    
    const editTodo = document.createElement('button')
    editTodo.textContent = 'Edit'
    editTodo.classList.add('edit-todo')
    editTodo.dataset.id = todoLi.id
    
    const deleteTodo = document.createElement('button')
    deleteTodo.textContent = 'Delete'
    deleteTodo.classList.add('delete-todo')
    deleteTodo.dataset.id = todoLi.id
    
    const todoBtnsWrapper = document.createElement('div')
    todoBtnsWrapper.appendChild(editTodo)
    todoBtnsWrapper.appendChild(deleteTodo)
    
    todoLi.appendChild(todoP)
    todoLi.appendChild(todoBtnsWrapper)
    
    todoUl.appendChild(todoLi)
    
    todoInput.value = ''
    setItemStorage(id, todoText)
    
    deleteTodoFunc()
    editTodoFunc()
}

export {
    addTodo
}
