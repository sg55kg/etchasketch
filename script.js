//DOM references to the buttons and the drawpad/grid container
const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirtytwo');
const sixtyFour = document.getElementById('sixtyfour');
const drawpad = document.getElementById('drawpad');
const picker = document.getElementById('picker');

let defaultColor = '#000000';
let currentColor = defaultColor;

function setColor(newColor) {
    currentColor = newColor;
}

function changeColor(e) {
    e.target.style.backgroundColor = currentColor;
}
//start the page with a default grid
createGrid(16);

/*
When the specific button is clicked:
Clear the grid of all cell elements, then call create grid again to replace
the removed one. Could not figure out how to clear/rest the grid for a day 
& any time these were clicked, a new grid was added to the old one. Also
didn't set max width/height properly so 32/32 and 64/64 spilled over.
*/
sixteen.addEventListener('click', function() {
    clearGrid();
    createGrid(16);
})

thirtyTwo.addEventListener('click', function() {
    clearGrid();
    createGrid(32);
})

sixtyFour.addEventListener('click', function() {
    clearGrid();
    createGrid(64);
})
//right now this does not change currentColor
picker.addEventListener('change', setColor(e.target.value));

//makes a new grid with items being cells/rows
function createGrid(items) {
    drawpad.style.setProperty('--grid-rows', items);
    drawpad.style.setProperty('--grid-cols', items);

    for(let i = 0; i < (items * items); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        drawpad.appendChild(cell).className = 'cell';
    }
    
}

//only called when a button is clicked to remove the old grid so new grids
//aren't continuously added below the previous ones.
function clearGrid() {
    while (drawpad.firstChild){
        drawpad.removeChild(drawpad.firstChild);
    }
}
