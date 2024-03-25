const todoList = JSON.parse(localStorage.getItem('todos')) || [];

const setItemStorage = (id, todoText) => {
    if (id && todoText) {
        todoList.push(
            {
                id,
                todoText:todoText
            })
        }
        localStorage.setItem('todos', JSON.stringify(todoList));
    }
    
    export {
        setItemStorage
    }
    