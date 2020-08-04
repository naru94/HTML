var classred = document.getElementsByClassName('red');
var paragraphs = document.getElementsByTagName('p');
var idblue = document.getElementById('blue');

for(var i = 0; i < classred.length; i++){
    classred[i].style.color = "red";
}

for(var i = 0; i < paragraphs.length; i++){
  paragraphs[i].style.color = "green";
}

idblue.style.color = "blue";