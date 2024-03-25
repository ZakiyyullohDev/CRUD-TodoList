import { setItemStorage } from "./setItem.js";
let allEditButtons = document.querySelectorAll('.edit-todo');
const todoList = JSON.parse(localStorage.getItem('todos')) || [];

const editTodoFunc = () => {
    allEditButtons = document.querySelectorAll('.edit-todo');
    let todoTextP = document.querySelectorAll('p')
    
    for (const editBtn of allEditButtons) {
        editBtn.addEventListener('click', (e) => {
            const text = e.target.parentElement.parentElement.firstChild
            text.setAttribute('contenteditable', true)
            text.focus()

            for (const todo of todoTextP) {
                text.addEventListener('keydown', (e) => {
                    if (e.key == 'Enter') {
                        text.setAttribute('contenteditable', false)
                        const newValue = e.target.textContent
                        const itemId = e.target.dataset.id
                        const searchedTodo = todoList.find(todo => todo.id == e.target.dataset.id)
                        const index = todoList.indexOf(searchedTodo)
                        if (index !== -1) {
                            todoList.splice(index, 1)
                            setItemStorage(itemId, newValue)
                        }        
                    }
                })
            }
        })
    }
}

export {
    editTodoFunc
}
