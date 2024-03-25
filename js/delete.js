import { setItemStorage } from "./setItem.js";

let allDeleteButtons = document.querySelectorAll('.delete-todo');
const todoList = JSON.parse(localStorage.getItem('todos')) || [];
const todoUl = document.getElementById('todoUl');   

const deleteTodoFunc = () => {
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

export {
    deleteTodoFunc
}
