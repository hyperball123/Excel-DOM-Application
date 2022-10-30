function initUI() {
    let topRow = document.querySelector(".top_row")
    let leftCol = document.querySelector(".left_col")
    let grid = document.querySelector(".grid")
    // left column cells
    for (let i = 1; i <= 100; i++) {
        // create a cell
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.textContent = i;
        leftCol.appendChild(div);
    }
    // top row cells
    for (let i = 1; i <= 26; i++) {
        // create a cell
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.textContent = String.fromCharCode(i + 64);
        topRow.appendChild(div);
    }

    // grid
    for (let i = 0; i < 100; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", "row");
        for (let j = 0; j < 26; j++) {
            let col = document.createElement("div");
            col.setAttribute("class", "cell");
            // col.textContent = `${i}-${j}`;
            col.setAttribute("contenteditable", "true")
            // we have set two attributes to identify each cell
            // without sshowing any change on ui
            col.setAttribute("rid", i)
            col.setAttribute("cid", j)

            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}
let db = []
function initDB(){
    for (let i = 0; i < 100; i++) {
        let rowArr = [];
        for (let j = 0; j < 26; j++) {
            let cellObj = {
                fontFamily: "Courier New",
                fontSize : "16",
                isBold : false,
                isItalic: false,
                isUnderline: false,
                cAlignment: "center",
                formula:"",
                value:"",
                children:[],
            }
            rowArr.push(cellObj);
        }
        db.push(rowArr);
        
    }
}
initUI();
initDB();
// console.log(db);
