var myButton = document.getElementById("btn")
var myCount = document.getElementById("count")
var counter = 0

myButton.addEventListener("click", function(){

  counter +=1
  myCount.textContent = counter
  
});


