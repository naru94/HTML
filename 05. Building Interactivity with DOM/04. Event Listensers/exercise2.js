// random color generator 
var randomColor = function(){
    var rvalue = function() {
        return Math.round(Math.random()*255); 
    }
  
       return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
  }
  
  // get button element from DOM
  var button = document.querySelector('button');
  
  // create event listener to change color on button click
  button.onclick = function(){
      var Color = randomColor();
        console.log("font color: " + Color)
        this.style.color = Color;
        this.style.borderColor = Color;
  }