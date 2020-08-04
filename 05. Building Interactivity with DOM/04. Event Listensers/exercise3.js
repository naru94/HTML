var todoList = document.getElementById('todoList');
var addTodo = document.getElementById('addTodo');
var todo = document.getElementById("todo");

addTodo.onclick=function(){
  var li=document.createElement('li');
  li.innerHTML = todo.value;
  todoList.appendChild(li);
  todo.value = "";
}