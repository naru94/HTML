// Write code here!
var ul = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');

li1.innerHTML = "List Item 1";
li2.innerHTML = "List Item 2";
li3.innerHTML = "List Item 3";

var content = document.querySelector('body');
content.appendChild(ul);
var list = document.querySelector('ul');
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);