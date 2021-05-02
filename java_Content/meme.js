for(var i=0;i<document.querySelectorAll("button").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
var a=this.innerHTML;
com(a);
});
}

function com(value){
  switch (value) {
    case '<img src="images/2.jpg" alt="a" class="butti">':
    var audio=new Audio("sound/1.mp3");
    audio.play();
      break;
      case '<img src="images/2.jpg" alt="b" class="butti">':
      var audio=new Audio("sound/2.mp3");
      audio.play();
      break;
      case '<img src="images/3.jpg" alt="c" class="butti">':
       var audio=new Audio("sound/3.mp3");
      audio.play();
      break;
      case '<img src="images/3.jpg" alt="d" class="butti">':
      var audio=new Audio("sound/4.mp3");
      audio.play();
      break;
      case '<img src="images/1.jpg" alt="e" class="butti">':
       var audio=new Audio("sound/5.mp3");
      audio.play();
      break;
    default:
    console.log(value);
  }
}
