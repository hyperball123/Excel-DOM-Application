// address bar implementation
let cells = document.querySelectorAll(".grid .cell");
// 1. cell eventlistener -> on click
for (let i = 0; i < cells.length; i++) {
    // 2. when a cell is clicked -> element
    cells[i].addEventListener("click", function () {
        // console.log("Event happend");
        let cCell = cells[i];
        console.log(cCell);
        // console.log(cCell);
        // 3. get rid,cid-> address me convert
        let rid = Number(cCell.getAttribute("rid"));
        let cid = Number(cCell.getAttribute("cid"));
        let address = String.fromCharCode(cid + 65) + (rid + 1);
        // console.log(address);
        // 4.  put it into address bar
        addressBar.value = address;

        // step 3 menu bar -> set
        setMenuBar(rid, cid);
    })
}
// setting menu bar as per ui 
// first storing details in db and using them to set menu.
function setMenuBar(rid, cid) {
    let cellObj = db[rid][cid];
    // boldButton
    if (cellObj.isBold) {
        boldButton.classList.add("selected");
    } else {
        boldButton.classList.remove("selected");
    }

    // italicButton
    if (cellObj.isItalic) {
        italicButton.classList.add("selected");
    } else {
        italicButton.classList.remove("selected");
    }
    // underlineButton
    if (cellObj.isUnderline) {
        underlineButton.classList.add("selected");
    } else {
        underlineButton.classList.remove("selected");
    }
    // console.log(cellObj);

    // font size
    fontSizeSelector.value = cellObj.fontSize;
    // font family
    fontFamilySelector.value = cellObj.fontFamily;
    for (let j = 0; j < alignButtons.length; j++) {
        alignButtons[j].classList.remove("selected");
    }
    for (let j = 0; j < alignButtons.length; j++) {
        let iscurrent = alignButtons[j].classList[2];
        if (iscurrent == cellObj.cAlignment) {
            alignButtons[j].classList.add("selected");
        }
    }
    //set formula in sync
    // hiding formula after the work is done
    let formula = cellObj.formula;
    formulaBar.value = formula;

}