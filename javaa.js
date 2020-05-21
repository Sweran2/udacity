
/* Summary:-
    1st function: Creat grid + cleans out colors using third function
    2nd function: Color cells according to first function
    3rd function: Reset canvas
*/

function makeGrid() {

    //Clicking the Draw button again clears out colors
    resetElement1();

    //Select elements and save them into variables  
    var eleHeight = document.querySelector("#inputHeight");
    var eleWidth = document.querySelector("#inputHeight");

    //Assign inputs values coming from user 
    var Height = parseInt(eleHeight.value);
    var Width = parseInt(eleHeight.value);

    //Assign pre set criteria values 
    var Maxheight = eleHeight.max;
    var Minheight = eleHeight.min;
    var MaxWidth = eleWidth.max;
    var MinWidth = eleWidth.min;

    //Nesting for loop to make grid (1 - 20) 
    if (MinWidth <= Width && Width <= MaxWidth && Minheight <= Height && Height <= Maxheight) {

        for (var r = 1; r < Height + 1; r++) {
            // create table rows
            var tableRow = document.createElement("TR");
            tableRow.setAttribute("id", "row" + r);
            document.getElementById("pixelCanvas").appendChild(tableRow);


            for (var c = 1; c < Width + 1; c++) {
                // create table columns
                var tableCol = document.createElement("TD");
                tableCol.setAttribute("id", "td" + r + "" + c);
                document.getElementById("row" + r).appendChild(tableCol);


                //Add onclick function to every cell created
                tableCol.setAttribute("onclick", "colorFunction(" + r + "" + c + ")");
            }
        }
    }

    else {
        alert("Your values should be minimum 1 and maximum 20");
    }

}

function colorFunction(idc) {

    //get each cell clicked according to it's number passed
    var tbc = document.getElementById("td" + idc);

    // get colorPicker current value to color cell
    var color = document.getElementById("colorPicker").value;
    tbc.style.backgroundColor = color;

}

function resetElement1() {

    // Delete any previous table
    var element1 = document.getElementById("pixelCanvas");
    element1.remove();

    // Create new table element again
    var table = document.createElement('table');
    table.setAttribute("id", "pixelCanvas");
    var body = document.getElementsByTagName('body');
    document.body.appendChild(table);
}


