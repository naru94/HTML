var mainHeading = document.querySelector('#mainHeading');
var button = document.querySelector('.btn');

button.onclick = function() {
    mainHeading.innerHTML = "Access an element with an id attribute using <code>document.querySelector()</code>"
}