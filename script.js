//DOM references to the buttons and the drawpad/grid container

const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirtytwo');
const sixtyFour = document.getElementById('sixtyfour');
const drawpad = document.getElementById('drawpad');
const picker = document.getElementById('picker');




//start the page with a default grid
createGrid(16);



//change grid size with buttons
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



//Makes new grids, and a clear function so they don't spill over
function createGrid(items) {
    drawpad.style.setProperty('--grid-rows', items);
    drawpad.style.setProperty('--grid-cols', items);

    for(let i = 0; i < (items * items); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        drawpad.appendChild(cell).className = 'cell';
    }
}

function clearGrid() {
    while (drawpad.firstChild){
        drawpad.removeChild(drawpad.firstChild);
    }
}



// drawing/color changing functions
let currentColor = 'black';

picker.onchange = (e) => setColor(e.target.value);

function setColor(newColor) {
    currentColor = newColor;
}

function changeColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => 
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = currentColor;
    })); 
}
