document.getElementById("flipID").addEventListener("click", function (e) {
    console.log("before flip");

    document.getElementsByClassName("flipCardFront")[0].style.animation = "cardFlipFade 1s 1s forwards";

    setTimeout(() => {
      document.getElementsByClassName("flipCardFront")[0].style.background = "blue";
    }, 1000);

    setTimeout(() => {
      document.getElementsByClassName("flipCardBack")[0].style.background = "blue";
      document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+180+"deg)";
      document.getElementsByClassName("flipCardFront")[0].style.background = "none";
      setTimeout(() => {
        document.getElementsByClassName("flipCardFront")[0].style.display = "none";
        document.getElementsByClassName("flipCardBack")[0].style.animation = "cardFlipFadeBack 1s 1s forwards";

        setTimeout(() => {
          document.getElementsByClassName("flipCardBack")[0].style.background = "rgba(255,255,255,0.3)";
          document.getElementsByClassName("flipCardBack")[0].style.color = "black";
          document.getElementsByClassName("flipCardFront")[0].style.animation = "none";
          document.getElementsByClassName("flipCardBack")[0].style.animation = "none";

          console.log("flip complete");
        }, 2000)
      }, 1000)
    }, 2000);
});

document.getElementById("flipBackID").addEventListener("click", function (e) {
  console.log("before flip back");

  document.getElementsByClassName("flipCardBack")[0].style.animation = "cardFlipFade 1s 1s forwards";

    setTimeout(() => {
      document.getElementsByClassName("flipCardBack")[0].style.background = "blue";
    }, 1000);

    setTimeout(() => {
      document.getElementsByClassName("flipCardFront")[0].style.background = "blue";
      document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+0+"deg)";
      document.getElementsByClassName("flipCardBack")[0].style.background = "none";
      document.getElementsByClassName("flipCardFront")[0].style.display = "flex";
      setTimeout(() => {
        document.getElementsByClassName("flipCardBack")[0].style.display = "none";
        document.getElementsByClassName("flipCardFront")[0].style.animation = "cardFlipFadeBack 1s 1s forwards";

        setTimeout(() => {
          document.getElementsByClassName("flipCardFront")[0].style.background = "rgba(255,255,255,0.3)";
          document.getElementsByClassName("flipCardFront")[0].style.color = "black";
          document.getElementsByClassName("flipCardBack")[0].style.animation = "none";
          document.getElementsByClassName("flipCardFront")[0].style.animation = "none";
          
          console.log("flip back complete");
        }, 2000)
      }, 1000)
    }, 2000);
});