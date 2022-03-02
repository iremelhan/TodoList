//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//Event listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);



//Functions
function addTodo(event) {

    //prevent form from submiting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create -> li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // button -> checked
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);

    // button -> delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);


    //append to list
    todoList.appendChild(todoDiv);

    //clear todoinput value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });

    }


    // check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "Uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }

    });
}

function saveLocalTodos(todo) {

}