// font-size
let fontSizeSelector = document.querySelector(".select_f_size");
let fontFamilySelector = document.querySelector(".select_f_family");
// bui container
let boldButton = document.querySelector(".fa-bold");
let underlineButton = document.querySelector(".fa-underline");
let italicButton = document.querySelector(".fa-italic");
let addressBar = document.querySelector(".address_bar")
// alignment container
let alignButtons = document.querySelectorAll(".alignment_container i")


fontSizeSelector.addEventListener("change", function () {
    // ****************UI*****************   
    let fontSize = fontSizeSelector.value;
    //1.  set -> address get  from address bar
    let cellTobeChanged = getCell();
    //3.  style set
    cellTobeChanged.style.fontSize = fontSize + "px";
    // ****************DB********************
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    dbCellObj.fontSize = fontSize;
})
fontFamilySelector.addEventListener("change", function () {
    let fontFamily = fontFamilySelector.value;
    //1.  set -> address get  from address bar
    let cellTobeChanged = getCell();
    //3.  style set
    cellTobeChanged.style.fontFamily = fontFamily;

    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    dbCellObj.fontFamily = fontFamily;

})

// make a text bold in dom -> (fontWeight)bold / normal
// select bold -> togge wala logic
// 2-> similar
boldButton.addEventListener("click", function () {
    // get the change
    let isSelected = boldButton.classList[2];
    // where to change - getting rid,cid
    let cellTobeChanged = getCell();
    // do the change
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];

    if (isSelected == "selected") {
        boldButton.classList.remove("selected");
        cellTobeChanged.style.fontWeight = "normal"
         // db cell isbold property update
         dbCellObj.isBold = false;
    } else {
        boldButton.classList.add("selected");
        cellTobeChanged.style.fontWeight = "bold";
        // db cell isbold property update
        dbCellObj.isBold = true;
    }
})
// make a text italic in dom -> (fontstyle) italic/normal

italicButton.addEventListener("click", function () {
    let isSelected = italicButton.classList[2];
    let cellTobeChanged = getCell();
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    if (isSelected == "selected") {
        italicButton.classList.remove("selected");
        cellTobeChanged.style.fontStyle = "normal"
        dbCellObj.isItalic = false;
    } else {
        italicButton.classList.add("selected");
        cellTobeChanged.style.fontStyle = "italic"
        dbCellObj.isItalic = true;
    }
})
// make a text underline in dom -> (textDecoration) underline/none
underlineButton.addEventListener("click", function () {
    let isSelected = underlineButton.classList[2];
    let cellTobeChanged = getCell();
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    if (isSelected == "selected") {
        underlineButton.classList.remove("selected");
        cellTobeChanged.style.textDecoration = "none"
        dbCellObj.isUnderline = false;
    } else {
        underlineButton.classList.add("selected");
        cellTobeChanged.style.textDecoration = "underline"
        dbCellObj.isUnderline = true;
    }
})
for (let i = 0; i < alignButtons.length; i++) {
    alignButtons[i].addEventListener("click",function(){
        // step 1
        let curEle = alignButtons[i];
        // remove selected from every elem
        for (let j = 0; j < alignButtons.length; j++) {
            alignButtons[j].classList.remove("selected");            
        }
        curEle.classList.add("selected");
        let alignment = curEle.classList[2];

        // ui pe changes
        let cellToBeChanged = getCell();
        // console.log("cellToBeChanged", cellToBeChanged);
        cellToBeChanged.style.textAlign = alignment;
        // db update
        let {rid , cid} = getRidCidFromAddressBar();
        let dbCellObj = db[rid][cid];
        dbCellObj.cAlignment = alignment;
    })
}
//********************helper functions***************
function getCell() {
    let { rid, cid } = getRidCidFromAddressBar();
    //2.  address -> ui cell get (html)
    let cell = document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`)
    return cell;
}
function getRidCidFromAddressBar() {
    let address = addressBar.value;
    // -> D2-> rid-> 1 ,cid-> 3
    let ciChar = address.charCodeAt(0);
    let rowid = address.substr(1);
    let cid = Number(ciChar) - 65;
    let rid = Number(rowid) - 1;
    return { "rid": rid, "cid": cid }
    // console.log(ciChar + "  " + rowid);
}
