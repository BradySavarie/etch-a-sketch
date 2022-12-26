const gridSize = document.getElementById('gridsizeslider');
const grid = document.getElementById('grid');
populateGrid(gridSize);

// Update gridSize value on change
gridSize.addEventListener('change', function() {
    gridSize.setAttribute('value', gridSize.value);
    populateGrid(gridSize);
});
// Replace text content of grid size label on input update
gridSize.addEventListener('input', function() {
    document.getElementById('gridsizelabel').textContent = `Grid Size: ${gridSize.value} x ${gridSize.value}`;
});

// Create cells based on gridSize and append to grid
function populateGrid(gridSize) {
    clearGrid();
    for (let i = 1; i <= gridSize.value; i++) {
        const row = document.createElement('div');
        grid.appendChild(row);

        for (let j = 1; j <= gridSize.value; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', 'cell');
            const height = grid.clientHeight;
            const width = grid.clientWidth;
            cell.style.width = `${width / gridSize.value}px`;
            cell.style.height = `${height / gridSize.value}px`;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
        }
    }
}

function clearGrid() {
    grid.innerHTML = "";
}


// once the divs are hooked up i will add in the click listener functionality to change background color. I think the best route forward is for the colors to change when the mouse is clicked down and once released the functionality ends (?). hover is too frustrating to control. 
