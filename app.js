function headerDropDown(myBlock, offBlock) {
  var x = document.getElementById(myBlock);
  if (x.style.display === "flex") {
    x.style.display = null;
    document.getElementById("home").style.display = "flex";
    document.getElementById(offBlock).style.display = null;
    document.getElementsByClassName(offBlock)[0].style.display = null;
  } else {
    x.style.display = "flex";
    document.getElementById("home").style.display = "none";
    document.getElementById(offBlock).style.display = "none";
    document.getElementsByClassName(offBlock)[0].style.display = "none";
  }
}

window.addEventListener("resize", function(){
  for (let element of document.getElementsByClassName("head"))
  {
    element.style.display = null
  };
});

//  -----------------------------------