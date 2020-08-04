var style = document.getElementById('style');
var classlist = document.getElementById('classlist');

style.onclick = function(){
  this.style.color = 'white';
  this.style.backgroundColor = 'red';
}

classlist.onclick = function(){
    this.classList.add('highlight');
}