var todoItems = document.querySelectorAll('body > h1');
var button = document.querySelector('button')

button.onclick = function(){
    for(var i = 0; i < todoItems.length; i++) {
        todoItems[i].innerHTML = "To do Item #" + (i+1);
    }
}