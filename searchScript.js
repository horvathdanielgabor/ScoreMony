function filterDropDownTrigger(el){
    holderParent = el.parentElement.nextSibling.nextSibling;
    console.log(holderParent);
    if (!el.classList.contains("spinEffect")) {
        el.classList.add("spinEffect");
        holderParent.style.maxHeight = 0;
        setTimeout(() => {
            el.style.transform = "rotate(-90deg)";
        }, 500)
    }
    else{
        el.classList.remove("spinEffect");
        holderParent.style.maxHeight = holderParent.scrollHeight + "px";
        setTimeout(() => {
            el.classList.add("spinEffectBack");
        }, 10)
        setTimeout(() => {
            el.style.transform = "none";
            el.classList.remove("spinEffectBack");
        }, 500)
    }
}

function menuOpenClose(){
    let menuEl = document.getElementById("filterCont");
    console.log("btn");
    if (!menuEl.classList.contains("activeMenu")) {
        menuEl.style.display = "block";
        menuEl.style.width = 0;
        setTimeout(() => {
            menuEl.style.width = 100 + "vw";
        }, 10);
        menuEl.classList.add("activeMenu");
    }
    else {
        menuEl.classList.remove("activeMenu");
        menuEl.style.width = 0;
        setTimeout(() => {
            menuEl.style.display = "none";
        }, 500);
    }
}

window.addEventListener("resize", () => {
    console.log("resize");
    if (document.body.clientWidth > 1180) {
        let menuEl = document.getElementById("filterCont");
        menuEl.style.display = "block";
        menuEl.classList.remove("activeMenu");
        menuEl.style.width = '';
    }
});