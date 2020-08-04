var content = document.querySelector('body');
var button = document.querySelector('button');

button.onclick = function() {
    var p = document.createElement('p');
    p.innerHTML = "Clicked!";

    content.appendChild(p);
}