let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let description = document.getElementById("description");

async function loadIn(SheetSoucre, Details, Description) {
    sheet.src = await SheetSoucre;
    
    for (let i = 0; i < Details.length; i++) {
        if (/\w{2,}/.test(Details[i]))
        {
            details.children[i].children[1].innerText = Details[i];
            console.log(Details[i]);
        }
        
    }

    description.children[0].innerText = await Description;
}

loadIn("IKT_kották\\Gitár\\Jazz\\Kezdő\\Képek\\Love_for_sale\\Love_for_sale.jpg",["da","da","da","da","da","Az micsoda?"],"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi, atque laborum similique quas laboriosam adipisci illum quaerat, aperiam odio ut repellat id optio corrupti deleniti impedit quidem nisi officia.")