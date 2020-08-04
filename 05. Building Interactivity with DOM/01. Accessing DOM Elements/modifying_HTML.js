var h1 = document.querySelector('h1');
var button = document.querySelector('button');

button.onclick = function() {
    h1.innerHTML = "We just modified HTML using Javascript!";
  }