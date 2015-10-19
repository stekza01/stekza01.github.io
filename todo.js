var myol;
myol = document.querySelector("#myol");

addtodo = function(){
  var myp, mysize, mystr, btn, mine;
  myp = document.querySelector("#myol");
  mytext = document.querySelector("#mytext");
  mypriority = document.querySelector("#priority");
  btn = document.createElement("LI");
  mine = document.createTextNode(mytext);
  btn.appendChild(mine);
  myp.appendChild(btn);
}
