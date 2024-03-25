import { uuidv4 } from "./uuid.js";

const todoList = JSON.parse(localStorage.getItem('todos')) || [];
let allDeleteButtons = document.querySelectorAll('.delete-todo');
let allEditButtons = document.querySelectorAll('.edit-todo');
const todoAddBtn = document.getElementById('todoAddBtn');
const todoInput = document.getElementById('todoInput');
const todoUl = document.getElementById('todoUl');

const setItemStorage = (newValue, id) => {
    if (newValue && id) {
        todoList.push({
            id,
            text: newValue
        })
    }

    localStorage.setItem('todos', JSON.stringify(todoList));
}

const editTodoFunc = () => {
    allEditButtons = document.querySelectorAll('.edit-todo')
    let a = document.querySelectorAll('p')
    
    for (const editTodo of allEditButtons) {
        editTodo.addEventListener('click', (e)=> {
            const text = e.target.parentElement.parentElement.firstChild
            text.setAttribute('contenteditable', true)
            text.focus()
        })
    }

    for (const todo of a) {
        todo.onkeydown = e => {
            if (e.keyCode == 13) {
                e.target.setAttribute('contenteditable', false)
                const newValue = e.target.textContent
                const itemId = e.target.dataset.id
                const searchedTodo = todoList.find(todo => todo.id == e.target.dataset.id)
                const index = todoList.indexOf(searchedTodo)
                if (index !== -1) {
                    todoList.splice(index, 1);
                    setItemStorage(newValue, itemId);
                }
            }
        }
    }
}

const deleteTodo = () => {
    allDeleteButtons = document.querySelectorAll('.delete-todo')
    
    for (const deleteBtn of allDeleteButtons) {
        deleteBtn.onclick = (e) => {
            todoUl.removeChild(e.target.parentElement.parentElement);
            const searchedTodo = todoList.find(todo => todo.id == e.target.dataset.id)
            const index = todoList.indexOf(searchedTodo)
            
            if (index !== -1) {
                todoList.splice(index, 1);
                setItemStorage();
            }
        }
    }
}

const getItem = () => {
    todoList.forEach(todo => {
        const todoLi = document.createElement('li');
        todoLi.classList.add('todo-li')
        todoLi.dataset.id = todo.id
        
        const todoP = document.createElement('p');
        todoP.textContent = todo.text;
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
        todoBtnWrapper.appendChild(editBtn);
        todoBtnWrapper.appendChild(deleteBtn);
        
        todoLi.appendChild(todoP);
        todoLi.appendChild(todoBtnWrapper);
        todoUl.appendChild(todoLi);
    });
    deleteTodo()
    editTodoFunc()
}

const addTodo = () => {
    const todoText = todoInput.value.trim();
    
    if (!todoText) {
        alert('Iltimos todo kiriting');
        return '';
    }
    
    if (todoText.length > 50) {
        alert("Iltimos 50 ta so'zdan kamroq yozing!");
        todoInput.value = '';
        return ''
    }
    
    const id = uuidv4()
    
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-li');
    todoLi.dataset.id = id
    
    const todoP = document.createElement('p');
    todoP.textContent = todoText;
    todoP.dataset.id = id
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.textContent = 'Edit';
    editBtn.dataset.id = id
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-todo');
    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.id = id
    
    const todoBtnWrapper = document.createElement('div');
    todoBtnWrapper.appendChild(editBtn);
    todoBtnWrapper.appendChild(deleteBtn);
    
    todoLi.appendChild(todoP);
    todoLi.appendChild(todoBtnWrapper);
    todoUl.appendChild(todoLi);
    
    setItemStorage(todoInput.value, id);
    todoInput.value = '';
    deleteTodo()
    editTodoFunc()
}

todoAddBtn.addEventListener('click', () => {
    addTodo();
});

todoInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

getItem()