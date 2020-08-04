var mainHeading = document.getElementById('mainHeading');
var button = document.getElementById('btn')

button.onclick = function() {
    mainHeading.innerHTML = "Access an element with an id attribute using <code>document.getElementById()</code>";
}