window.onload = function(){
  document.querySelectorAll(".section").forEach(item =>{
    item.addEventListener("click", toggleSection);
  });
}
function toggleSection(){
  var coll = "collapsed";
  if (this.classList.contains(coll)){
    this.classList.remove(coll);
  }
  else{
    this.classList.add(coll);
  }
}

