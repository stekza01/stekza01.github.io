window.onload = function() {
    restoreList("myul", doneTask);}

addtodo = function(){
  var myp, mysize, mystr, myli, mine, checkbox, mypriority;
  myp = document.querySelector("#myul");
  mytext = document.querySelector("#mytext").value;
  mypriority = (document.querySelector("#priority").value);
  mine = document.createTextNode(mytext);
  checkbox = document.createElement("INPUT");
  myli  = document.createElement("li");
  
  myp.setAttribute("style", "list-style: none;");
  
  checkbox.type = "checkbox"; 
  checkbox.onclick = doneTask; 

  myli.className = mypriority;
  
  myli.appendChild(checkbox);
  myli.appendChild(mine);
  
  myp.appendChild(myli);
  
  localSave("myul");
}


doneTask = function() {
  if (this.checked){
    this.parentNode.classList.add("done");
    localSave("myul");}
  else{
    this.parentNode.classList.remove("done");
    localSave("myul");
  }
}
