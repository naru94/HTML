var checkStatus = document.getElementById('checkStatus');
var checkbox = document.getElementById('checkbox');

checkbox.onchange = function(){ 
  if(this.checked) { 
    checkStatus.innerHTML = "Checked";
  } else {
 		checkStatus.innerHTML = "Not Checked";
  }
}