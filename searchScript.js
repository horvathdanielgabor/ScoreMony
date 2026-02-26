function filterDropDownTrigger(el){
    holderParent = el.parentElement.nextSibling.nextSibling;
    console.log(holderParent);
    if (!el.classList.contains("spinEffect")) {
        el.classList.add("spinEffect");
        setTimeout(() => {
            el.style.transform = "rotate(-90deg)";
        }, 500)
    }
    else{
        el.classList.remove("spinEffect");
        setTimeout(() => {
            el.classList.add("spinEffectBack");
        }, 10)
        setTimeout(() => {
            el.style.transform = "none";
            el.classList.remove("spinEffectBack");
        }, 500)
    }
}