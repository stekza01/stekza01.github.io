
addtodo = function(){
  var myp, mysize, mystr, btn, mine, checkbox;
  myp = document.querySelector("#myul");
  mytext = document.querySelector("#mytext");
  mypriority = string(document.querySelector("#priority").value);
  mine = document.createTextNode(mytext);
  checkbox = document.createElement("INPUT");
  btn = checkbox = document.createElement("li");
  
  myp.setAttribute("style", "list-style: none;");
  
  
  
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onclick", "doneTask()");

  checkbox.classList.add(priority);
  
  checkbox.appendChild(mine);
  
  myp.appendChild(checkbox);
  
  localSave(myp);
}


doneTask = function() {
  if (this.checked){
    this.parentNode.classList.add("done")}
  else{
    this.parentNode.classList.remove("done")
  }
}


localSave = function(saveList) {
    res = []
    var i;
    allEntries = document.querySelectorAll('#'+saveList+' li')
    for(i=0; i < allEntries.length; i++) {
        // if the task is not checked off
        if (! allEntries[i].classList.contains("done") ) {
            res.push({text: allEntries[i].innerText, priority: allEntries[i].classList });
        }
    }

    localStorage.setItem("todoDatabase",JSON.stringify(res))
}

restoreList = function(savelist,donefunc) {
  allTasks = JSON.parse(localStorage.getItem('todoDatabase'))
  taskList = document.querySelector("#"+savelist);
  for(i = 0; i < allTasks.length; i++) {
      taskText = allTasks[i].text;
      priorityValue = allTasks[i].priority;
      newli = document.createElement('li');
      console.log(priorityValue);
      for(j = 0; j < priorityValue.length; j++) {
          newli.classList.add(priorityValue[j]);
      }
      newcb = document.createElement('input');
      newcb.type = 'checkbox';
      newcb.onclick = donefunc;
      newli.appendChild(newcb);
      t = document.createTextNode(taskText);
      newli.appendChild(t);
      taskList.appendChild(newli);
  }
}
