//DOM references to the buttons and the drawpad/grid container
const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirtytwo');
const sixtyFour = document.getElementById('sixtyfour');
const drawpad = document.getElementById('drawpad');
const picker = document.getElementById('picker');


let currentColor = 'black';


function colorPicker(event) {
    picker.addEventListener('change', () => {
        currentColor = event.target.value;
    });
}

function changeColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => 
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = currentColor;
    }));
   
}
//start the page with a default grid
createGrid(16);


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

//makes a new grid with items being cells/rows
function createGrid(items) {
    drawpad.style.setProperty('--grid-rows', items);
    drawpad.style.setProperty('--grid-cols', items);

    for(let i = 0; i < (items * items); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor); //potentially move this to a global variable
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
