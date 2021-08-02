const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirtytwo');
const sixtyFour = document.getElementById('sixtyfour');
const drawpad = document.getElementById('drawpad');

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

function createGrid(items) {
    drawpad.style.setProperty('--grid-rows', items);
    drawpad.style.setProperty('--grid-cols', items);
    for(let i = 0; i < (items * items); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = 'black';
        })
        drawpad.appendChild(cell).className = 'cell';
    }
    
}

function clearGrid() {
    while (drawpad.firstChild){
        drawpad.removeChild(drawpad.firstChild);
    }
}
