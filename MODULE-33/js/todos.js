function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container')
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <p>Userid: ${todo.userId}</p>
            <p>User: ${todo.id}</p>
            <h3>Title: ${todo.title}</h3>
            <p>Is Completed: ${todo.completed === true}</p>
            

        `
        
        todoContainer.appendChild(todoDiv); 
        
    }
}



loadTodos()
