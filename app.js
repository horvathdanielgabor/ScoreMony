var containOriginal;

function headerSlidePush(onBlock) {
  var allFound = document.getElementsByClassName(onBlock);
  var turnOn = Array(...allFound).find(item => item.className.includes("slide"));
  var change = Array(...allFound).find(item => item.className.includes("icon")).children[0];

  if (turnOn.style.width == "") {
    containOriginal = change.src;
    change.src = "images/CloseIcon.png";

    for (const element of document.getElementsByClassName("topnav")[0].children)
    {
      if (!element.className.includes(onBlock))
      {
        element.style.width = "0%";
      }
      else
      {
        for (const innerElement of element.children)
        {
          if (!innerElement.className.includes(onBlock) && innerElement.tagName != "IMG")
          {
            innerElement.style.width = "0%";
            innerElement.style.order = 1
          }
        }
      }
    }

    document.getElementsByClassName("topnav")[0].children[1].style.width = "80%"
    turnOn.style.order = onBlock == "search"? 2 : 0
    turnOn.style.width = "80%";
  }
  else
  {
    change.src = containOriginal;
    document.getElementsByClassName("topnav")[0].children[1].style.width = "60%"

    for (const element of document.getElementsByClassName("topnav")[0].children)
    {
      element.style.width = null;
      for (const innerElement of element.children)
      {
        innerElement.style.width = null;
        for (const child of innerElement.children) {child.style.width = null};
        innerElement.style.order = null;
      }
    }
  }
}

window.addEventListener("resize", function(){
  if (this.screen.width > 768)
  {
    console.log("resize");
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
    document.getElementsByClassName("icon")[0].children[0].src = "images/SearchIcon.png"
    document.getElementsByClassName("icon")[1].children[0].src = "images/UserIcon.png"
  }
});

//  -----------------------------------