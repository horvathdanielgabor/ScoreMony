let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let description = document.getElementById("description");

async function loadIn(SheetSoucre, Details, Description) {
    sheet.href = await SheetSoucre;
    
    for (let i = 0; i < Details.length; i++) {
        if (/\w{2,}/.test(Details[i]))
        {
            details.children[i].children[1].innerText = Details[i];
            console.log(Details[i]);
        }
        
    }

    description.children[0].innerText = await Description;
}

loadIn("D:\IKT\ScoreMony\IKT_kották\Gitár\Jazz\Kezdő\Képek\Love_for_sale\Love_for_sale.jpg",["da","da","da","da","da","Az micsoda?"]," Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh! Lorem my bruh!")