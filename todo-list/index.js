//The javascript

const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addToDoBtn = document.getElementById("addToDoBtn");

addToDoBtn.addEventListener('click', function(){

   const newToDoText = newTodoInput.value;

   if(newToDoText!==""){
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newToDoText;
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.innerText = "X";

    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.addEventListener("click", function(){
        newTodoItem.remove();
    });

    newTodoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(newTodoItem);
    newTodoInput.value = "";
    
}
})