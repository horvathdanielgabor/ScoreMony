// Class
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
// USERS
const users = [new User("e", "ee@gmail.com", "e"), new User("a", "aa@gmail.com", "a")]

// Submit/Login logic

function checkData() {
    let nameIn = document.getElementById("loginName").value;
    let passIn = document.getElementById("loginPass").value;
    let matchingBool = false;

    for (const el of users) {
        if (el.name === nameIn && el.password === passIn) {
            matchingBool = true;
        }
    }

    if (matchingBool) {
        window.location.replace("index.html");
    }
    else{
        document.getElementById("flipCard").reset();
        document.getElementById("closebtn").nextElementSibling.innerText = "Helytelen felhasználónév vagy jelszó";
        document.getElementById("alert").style.display = "flex";
        document.getElementById("alert").style.opacity = "1";
    }
}

// Alerts
document.getElementById("closebtn").onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
}

// Submission override
document.getElementById("flipCard").addEventListener("submit", (event) => {
    event.preventDefault();
    checkData();
});

// Password hide button logic

let hideBtns = document.getElementsByClassName("passShowHideBtn");
Array.from(hideBtns).forEach(element => {
    element.addEventListener("click", function (e) {
        if (element.previousElementSibling.type === "password") {
        element.previousElementSibling.type = "text";
        }
        else{
        element.previousElementSibling.type = "password";
        }    
    });
});

// Login/Register flip

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