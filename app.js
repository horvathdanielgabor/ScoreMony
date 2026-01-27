var containOriginal;

function headerDropDown(myBlock, offBlock) {
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
});

/*  -----------------------------------  */
/* class for later */
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

let users = [new User("e", "ee@gmail.com", "e"), new User("a", "aa@gmail.com", "a")]

/* Password hide button logic */
let hideBtns = document.getElementsByClassName("passShowHideBtn");
Array.from(hideBtns).forEach(element => {
  element.addEventListener("click", function (e) {
    console.log("e");
  });
});


function Submit(){
  console.log("Submit");
}
/* Login/Register flip */

document.getElementById("flipID").addEventListener("click", function (e) {
    console.log("before flip");

    document.getElementsByClassName("flipCardFront")[0].style.animation = "cardFlipFade 0.3s 0.3s forwards";

    setTimeout(() => {
      document.getElementsByClassName("flipCardFront")[0].style.background = "#4D4B88";
    }, 300);

    setTimeout(() => {
      document.getElementsByClassName("flipCardBack")[0].style.display = "flex";
      document.getElementsByClassName("flipCardBack")[0].style.background = "#4D4B88";
      document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+180+"deg)";
      document.getElementsByClassName("flipCardFront")[0].style.background = "none";
      setTimeout(() => {
        document.getElementsByClassName("flipCardFront")[0].style.display = "none";
        document.getElementsByClassName("flipCardBack")[0].style.animation = "cardFlipFadeBack 0.3s 0.3s forwards";

        setTimeout(() => {
          document.getElementsByClassName("flipCardBack")[0].style.background = "none";
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
      document.getElementsByClassName("flipCardBack")[0].style.background = "#4D4B88";
    }, 300);

    setTimeout(() => {
      document.getElementsByClassName("flipCardFront")[0].style.display = "flex";
      document.getElementsByClassName("flipCardFront")[0].style.background = "#4D4B88";
      document.getElementsByClassName("flipCardInner")[0].style.transform = "rotateY("+0+"deg)";
      document.getElementsByClassName("flipCardBack")[0].style.background = "none";
      document.getElementsByClassName("flipCardFront")[0].style.display = "flex";
      setTimeout(() => {
        document.getElementsByClassName("flipCardBack")[0].style.display = "none";
        document.getElementsByClassName("flipCardFront")[0].style.animation = "cardFlipFadeBack 0.3s 0.3s forwards";

        setTimeout(() => {
          document.getElementsByClassName("flipCardFront")[0].style.background = "none";
          document.getElementsByClassName("flipCardBack")[0].style.animation = "none";
          document.getElementsByClassName("flipCardFront")[0].style.animation = "none";
          
          console.log("flip back complete");
        }, 500)
      }, 500)
    }, 500);
});