let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let description = document.getElementById("description");
let collector = [];
let imageSource = null;

let toggleM = document.getElementById("metronomeToggle");
let metronom = null;

function loadIn(Details, pfLink) {
    let detailsObject = JSON.parse(Details);
    console.log(detailsObject);
    
    for (const key in detailsObject) {
        if (Object.prototype.hasOwnProperty.call(detailsObject, key)) {
            try
            {
                document.getElementById(key).innerText = detailsObject[key];
                console.log(detailsObject[key]);
            }
            catch
            {
                console.log(detailsObject[key])
                imageSource = detailsObject[key]
            }
        }
    }

    do
    {
        console.log(imageSource);
        try
        {
            let newImage = document.createElement("img");
            newImage.src = imageSource.;
            console.log(newImage);
            sheet.appendChild(newImage);
        }
        catch
        {
            
        }
    }
    while (collector.length)
}

async function beat(){
    if (metronom != null)
    {
        console.log("beat",+document.getElementById("metronomeSpeedSlider").value);
        toggleM.style.boxShadow = "0px 0px 0px 5px rgba(0, 0, 0, 0.5)";
        await setTimeout(()=>{console.log("beat",(600000/+document.getElementById("metronomeSpeedSlider").value))},10000);
        toggleM.style.boxShadow = null;
        metronom = setTimeout(()=> {beat()},(600000/+document.getElementById("metronomeSpeedSlider").value));
    }
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

loadIn(localStorage.selectedScore)