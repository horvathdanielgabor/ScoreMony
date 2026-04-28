let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let description = document.getElementById("description");
let collector = [];

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

loadIn(["Név","Stílus","Zeneszerző","Hangszer","Kulcs","Kezdő"])