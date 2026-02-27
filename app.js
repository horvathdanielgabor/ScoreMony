var containOriginal;

function headerSlidePush(myBlock, offBlock) {
  var turnOn = document.getElementById(myBlock);
  var change1 = document.getElementsByClassName(myBlock)[0].children[0];
  var turnOff = document.getElementById(offBlock);
  var change2 = document.getElementsByClassName(offBlock)[0];
  if (turnOn.style.display === "flex") {
    turnOn.style.display = null;
    change1.src = containOriginal;
    document.getElementById("home").style.display = "flex";
    turnOff.style.display = null;
    change2.style.display = null;
  } else {
    turnOn.style.display = "flex";
    containOriginal = change1.src;
    change1.src = "images/CloseIcon.png";
    document.getElementById("home").style.display = "none";
    turnOff.style.display = "none";
    change2.style.display = "none";
  }
}

window.addEventListener("resize", function(){
  for (let element of document.getElementsByClassName("head"))
  {
    element.style.display = null
  };
  document.getElementsByClassName("icon")[0].children[0].src = "images/SearchIcon.png"
  document.getElementsByClassName("icon")[1].children[0].src = "images/UserIcon.png"
});

//  -----------------------------------