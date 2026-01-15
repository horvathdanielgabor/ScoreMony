document.getElementById("flipID").addEventListener("click", function (e) {
    console.log("before flip");

    document.getElementsByClassName("flipCardFront")[0].style.animation = "cardFlipFade 0.3s 0.3s forwards";

    setTimeout(() => {
      document.getElementsByClassName("flipCardFront")[0].style.background = "#53629E";
    }, 300);

    setTimeout(() => {
      document.getElementsByClassName("flipCardBack")[0].style.display = "flex";
      document.getElementsByClassName("flipCardBack")[0].style.background = "#53629E";
      document.getElementsByClassName("flipCardBack")[0].style.color = "white";
      document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+180+"deg)";
      document.getElementsByClassName("flipCardFront")[0].style.background = "none";
      setTimeout(() => {
        document.getElementsByClassName("flipCardFront")[0].style.display = "none";
        document.getElementsByClassName("flipCardBack")[0].style.animation = "cardFlipFadeBack 0.3s 0.3s forwards";

        setTimeout(() => {
          document.getElementsByClassName("flipCardBack")[0].style.background = "rgba(255,255,255,0.3)";
          document.getElementsByClassName("flipCardBack")[0].style.color = "black";
          document.getElementsByClassName("flipCardFront")[0].style.animation = "none";
          document.getElementsByClassName("flipCardBack")[0].style.animation = "none";

          console.log("flip complete");
        }, 500)
      }, 500)
    }, 500);
});

document.getElementById("flipBackID").addEventListener("click", function (e) {
  console.log("before flip back");

  document.getElementsByClassName("flipCardBack")[0].style.animation = "cardFlipFade 0.3s 0.3s forwards";

    setTimeout(() => {
      document.getElementsByClassName("flipCardBack")[0].style.background = "#53629E";
    }, 300);

    setTimeout(() => {
      document.getElementsByClassName("flipCardFront")[0].style.display = "flex";
      document.getElementsByClassName("flipCardFront")[0].style.background = "#53629E";
      document.getElementsByClassName("flipCardFront")[0].style.color = "white"; 
      document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+0+"deg)";
      document.getElementsByClassName("flipCardBack")[0].style.background = "none";
      document.getElementsByClassName("flipCardFront")[0].style.display = "flex";
      setTimeout(() => {
        document.getElementsByClassName("flipCardBack")[0].style.display = "none";
        document.getElementsByClassName("flipCardFront")[0].style.animation = "cardFlipFadeBack 0.3s 0.3s forwards";

        setTimeout(() => {
          document.getElementsByClassName("flipCardFront")[0].style.background = "rgba(255,255,255,0.3)";
          document.getElementsByClassName("flipCardFront")[0].style.color = "black";
          document.getElementsByClassName("flipCardBack")[0].style.animation = "none";
          document.getElementsByClassName("flipCardFront")[0].style.animation = "none";
          
          console.log("flip back complete");
        }, 500)
      }, 500)
    }, 500);
});