function headerDropDown(myBlock, offBlock) {
  var x = document.getElementById(myBlock);
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("home").style.display = "block"
  } else {
    x.style.display = "block";
    document.getElementById("home").style.display = "none"
    document.getElementById(offBlock).style.display = "none"
  }
}



document.getElementById("flipID").addEventListener("click", function (e) {
    console.log("before flip");
    document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+180+"deg)";
    logRegFlipBool = true;
    console.log("flip complete");
});

document.getElementById("flipBackID").addEventListener("click", function (e) {
  console.log("before flip back");
  document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+0+"deg)";
  logRegFlipBool = true;
  console.log("flip back complete");
});