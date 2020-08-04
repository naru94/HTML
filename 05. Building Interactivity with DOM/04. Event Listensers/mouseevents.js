var button = document.querySelector('button');

button.onclick = function(){
    this.innerHTML = "Single clicked!!";
}

button.onmouseenter = function(){
  this.innerHTML = "Mouse entered!";
}

button.onmouseleave = function(){
  this.innerHTML = "Mouse left!";
}

button.ondblclick = function(){
  this.innerHTML = "Double clicked!!";
}