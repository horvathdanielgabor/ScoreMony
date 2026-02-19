// Class
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
// USERS
const users = [new User(1, "e", "ee@gmail.com", "e"), new User(2, "a", "aa@gmail.com", "a")];

// Submit/Login logic

function checkData() {
    let nameIn = document.getElementById("loginName");
    let passIn = document.getElementById("loginPass");
    let matchingBool = false;

    for (const el of users) {
        if (el.name === nameIn.value && el.password === passIn.value) {
            matchingBool = true;
        }
    }

    if (matchingBool) {
        window.location.replace("index.html");
    }
    else{
        document.getElementById("flipCard").reset();
        nameIn.style.border = "2px solid red";
        setTimeout(() => nameIn.style.border = "2px solid rgba(0, 0, 0, 0)", 1500);
        passIn.style.border = "2px solid red";
        setTimeout(() => passIn.style.border = "2px solid rgba(0, 0, 0, 0)", 1500);
        RevealAlert("Helytelen felhasználónév vagy jelszó");
    }
}

function registerDataCheck() {
    let nameIn = document.getElementById("regName");
    let emailIn = document.getElementById("regEmail");
    let passInOnce = document.getElementById("regPass");
    let passInTwice = document.getElementById("regPassThe2nd");

    let hasNumRegExp = /\d/;
    let correctEmailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    try {
        if (nameIn.value.length > 5 && nameIn.value.length <= 20 && isNaN(nameIn.value[0]) && nameIn.value[0].toUpperCase() == nameIn.value[0]) {
            console.log("Name good");
        }
        else{
            RevealAlert("Helytelen felhasználónév formátum");
            nameIn.style.border = "2px solid red";
            setTimeout(() => nameIn.style.border = "2px solid rgba(0, 0, 0, 0)", 1500);
            throw("NAME BAD");
        }
        
        if (emailIn.value.length > 5 && emailIn.value.length < 253 && correctEmailRegExp.test(emailIn.value)) {
            console.log("Email good");
        }
        else{
            RevealAlert("Helytelen email formátum");
            emailIn.style.border = "2px solid red";
            setTimeout(() => emailIn.style.border = "2px solid rgba(0, 0, 0, 0)", 1500);
            throw("EMAIL BAD");
        }

        let passHasUppercase = false
        passInOnce.value.split("").forEach((e) => {
            if (isNaN(e)) {
                if (e.toUpperCase() == e) {
                    passHasUppercase = true
                }
            }
        })
        if (passInOnce.value.length > 5 && passInOnce.value.length < 20 && hasNumRegExp.test(passInOnce.value) && isNaN(passInOnce.value[0]) && passHasUppercase) {
            console.log("Pass good");
        }
        else{
            RevealAlert("Helytelen jelszó formátum");
            passInOnce.style.border = "2px solid red";
            setTimeout(() => passInOnce.style.border = "2px solid rgba(0, 0, 0, 0)", 1500);
            throw("PASS BAD");
        }

        if (passInOnce.value == passInTwice.value) {
            console.log("Pass match good");
        }
        else{
            RevealAlert("Két jelszó nem egyezik");
            passInTwice.style.border = "2px solid red";
            setTimeout(() => passInTwice.style.border = "2px solid rgba(0, 0, 0, 0)", 1500);
            throw("PASS second BAD");
        }

        RevealAlert("Sikeres regisztráció!", false)
        setTimeout(document.getElementById("flipBackID").click(), 500);
        setTimeout(function(){flipCard.reset()}, 1500);
    } catch (error) {
        console.log(error);
        console.log("you done fucked up now");
    }
}

// Alerts
document.getElementById("closebtn").onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
    alertElement.classList.remove("isShakingAnimated");
}

function RevealAlert(errorString, isAlertNotMessage = true){
    let alertElement = document.getElementById("alert");
    document.getElementById("closebtn").nextElementSibling.innerText = errorString;
    alertElement.style.background = (isAlertNotMessage ? "#f44336" : "#50C878");
    alertElement.style.display = "flex";
    alertElement.style.opacity = "1";
    alertElement.classList.add("isShakingAnimated");
}

// Submission override
document.getElementById("flipCard").addEventListener("submit", (event) => {
    event.preventDefault();
    checkData();
});

// Register submission override
document.getElementById("regBtn").addEventListener("click", function (e) {
    e.preventDefault();
    registerDataCheck();
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