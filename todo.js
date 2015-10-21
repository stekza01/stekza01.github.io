var myol;
myol = document.querySelector("#myol");

addtodo = function(){
  var myp, mysize, mystr, btn, mine;
  myp = document.querySelector("#myul");
  mytext = document.querySelector("#mytext");
  mypriority = document.querySelector("#priority").value;
  mine = document.createTextNode(mytext);
  checkbox = document.createElement("INPUT");
  btn = checkbox = document.createElement("li")
  
  myp.setAttribute("style", "list-style: none;");
  
  
  
  checbox.setAttribute("type", "checkbox");
  mine.setAttribute("class", mypriority);
  
  btn.appendChild(mine);
  
  myp.appendChild(btn);
}


doneTask = function() {
  if (this.checked){
    this.parentNode.classList.add("done")}
  else{
    this.parentNode.classList.remove("done")
  }
}
