let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let description = document.getElementById("description");
let collector = [];

let toggleM = document.getElementById("metronomeToggle");
let metronom = null;

async function loadIn(Details, Description) {
    //let path = "IKT_kották\\" + Details.filter().reduce((accumulator, item) => accumulator + "\\" + item);

    do
    {
        try
        {
            
        }
        catch
        {
            
        }
    }
    while (collector.length)

    collector.forEach((data) => {
        let img = document.createElement();
        img.src = path + "\\Képek\\" + fileName + "\\" + fileName + fileType;
        sheet.append()
    });
    
    for (let i = 0; i < Details.length; i++) {
        if (/\w{2,}/.test(Details[i]))
        {
            details.children[i].children[1].innerText = Details[i];
            console.log(Details[i]);
        }
    }

    //description.children[0].innerText = await Description;
}

async function beat(){
    if (metronom == null)
    {
        break;
    }

    await setTimeout(()=>{console.log("beat",+document.getElementById("metronomeSpeedSlider").value)},5000);
    toggleM.style.boxShadow = "0px 0px 0px 5px rgba(0, 0, 0, 0.5)";
    await setTimeout(()=>{console.log("beat",(600000/+document.getElementById("metronomeSpeedSlider").value))},5000);
    toggleM.style.boxShadow = null;
    metronom = setTimeout(()=> {beat()},(600000/+document.getElementById("metronomeSpeedSlider").value));
}

function metronomeFlipflop(play){
    if (play)
    {
        metronom = setTimeout(()=> {beat()},(600000/+document.getElementById("metronomeSpeedSlider").value));
        toggleM.setAttribute("onclick","metronomeFlipflop(false)");
        toggleM.children[0].src = "images/pause.svg";
    }
    else
    {
        clearTimeout(metronom);
        toggleM.setAttribute("onclick","metronomeFlipflop(true)");
        toggleM.children[0].src = "images/start.svg";
    }
}

loadIn(["Név","Stílus","Zeneszerző","Hangszer","Kulcs","Kezdő"])