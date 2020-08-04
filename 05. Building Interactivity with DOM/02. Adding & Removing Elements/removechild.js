var content = document.querySelector('#content');
var contentParagraph = document.querySelector('#content > p');
var button = document.querySelector('button')

button.onclick = function() {
    var oldElement = content.removeChild(contentParagraph);
    console.log(oldElement.innerHTML);
}