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
