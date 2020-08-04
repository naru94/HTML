var h1 = document.querySelector('h1');
var input = document.querySelector('input[type=text]');
var button = document.querySelector('button');

button.onclick = function() {
    input.setAttribute('type', "checkbox");
    input.removeAttribute('placeholder');
    console.log(input.getAttributeNames());
}
