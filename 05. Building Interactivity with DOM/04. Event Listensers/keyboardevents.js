var h1 = document.querySelector('h1');

document.onkeypress = function(event){
  h1.innerHTML = "Key Down: " + event.key;
}
