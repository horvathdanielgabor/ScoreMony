let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let description = document.getElementById("description");
let collector = [];

async function loadIn(Details, Description) {
    collector = ;
    let path = "IKT_kották\\" + Details.filter().reduce((accumulator, item) => accumulator + "\\" + item);
    console.log(path);
    console.log(fileName);

    collector = new FileList((path + "//"));

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

    description.children[0].innerText = await Description;
}

loadIn(["Név","Stílus","Zeneszerző","Hangszer","Kulcs","Kezdő"],"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia.")