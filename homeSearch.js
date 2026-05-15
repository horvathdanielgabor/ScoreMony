function moveCar(direction) {
    let checkedItemIndex;
    for (let i = 1; i < 4; i++) {
        const carItem = document.getElementById("item-" + i);
        console.log(carItem);
        if (carItem && carItem.checked) {
            checkedItemIndex = i;
            break;
        }
    }
    if (checkedItemIndex + direction > 3) {
        checkedItemIndex = 0;
    }
    else if (checkedItemIndex + direction < 1) {
        checkedItemIndex = 4;
    }
    document.getElementById("song-" + (checkedItemIndex + direction)).click();
}

function moveKiemeltCar(direction) {
    let checkedItemIndex;
    for (let i = 1; i < 5; i++) {
        const kiemeltItem = document.getElementById("kiemelt-item-" + i);
        if (kiemeltItem && kiemeltItem.checked) {
            checkedItemIndex = i;
            break;
        }
    }
    let nextIndex = checkedItemIndex + direction;
    if (nextIndex > 4) {
        nextIndex = 1;
    } else if (nextIndex < 1) {
        nextIndex = 4;
    }
    document.getElementById("kiemelt-item-" + nextIndex).click();
}