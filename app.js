var containOriginal = null;
let searchIn = document.getElementById("search").children[0];
let searchBtn = document.getElementById("search").children[1];

// Search bar

// Set username
try {
  document.getElementById("username").innerText = JSON.parse(localStorage.getItem("currentUser")).name;
}
catch {
  document.getElementById("username").innerText = "Anonymous12345";
}

searchIn.addEventListener("keypress", key => {
  if (key.code == "Enter") {
    enterSearchWithQuery();
  }
});

searchBtn.addEventListener("click", () => {
  enterSearchWithQuery();
})

function enterSearchWithQuery() {
  window.location.href = `search.html?query=${searchIn.value}`;
  console.log(`search.html?query=${searchIn.value}`)
}

// Header

function headerSlidePush(onBlock) {
  var allFound = document.getElementsByClassName(onBlock);
  var slide = Array(...allFound).find(item => item.className.includes("slide"));
  var icon = Array(...allFound).find(item => item.className.includes("icon")).children[0];

  console.log(slide)
  console.log(document.getElementsByClassName("topnav")[0].children)

  if (icon.innerText != "close") {
    containOriginal = icon.innerText;
    icon.innerText = "close";

    Array(...document.getElementsByClassName("topnav")[0].children).forEach(element => {
      console.log(element)
      if (!element.className.includes(onBlock))
      {
        element.classList.add("closeDown");
      }
      else if (element.className.includes("icon")) {}
      else
      {
        element.classList.add("openUp");
      }
    });

    Array(...document.getElementsByClassName("topnav")[0].children[1].children).forEach(element => {
      console.log(element)
      if (element.id == onBlock)
      {
        element.classList.add("openUp");
      }
      else
      {
        element.classList.add("closeDown");
      }
    });
  }
  else
  {
    icon.innerText = containOriginal;

    Array(...document.getElementsByClassName("topnav")[0].children).forEach(element => {
      element.classList.remove("openUp");
      element.classList.remove("closeDown");
    });

    Array(...document.getElementsByClassName("topnav")[0].children[1].children).forEach(element => {
      element.classList.remove("openUp");
      element.classList.remove("closeDown");
    });
  }
}

window.addEventListener("resize", function(){
  if (this.screen.width > 768)
  {
    for (let element of document.getElementsByClassName("topnav"))
    {
      element.style = null;
      for (const innerElement of element.children)
      {
        innerElement.style = null;
        for (const child of innerElement.children) {child.style = null};
        innerElement.style = null;
      }
    };
    document.getElementsByClassName("icon")[0].children[0].src = "images/searchIcon.svg"
    document.getElementsByClassName("icon")[1].children[0].src = "images/UserIcon.png"
  }
});