const defaultColor = '#000000';
const defaultMode = 'colorMode';
const defaultSize = 33;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

function setCurrentColor(newColor) {
    currentColor = newColor;
};

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
};

function setCurrentSize(newSize) {
    currentSize = newSize;
};

const colorSelector = document.getElementById('colorselectorinput');
const colorModeBtn = document.getElementById('colormode');
const rainbowModeBtn = document.getElementById('rainbowmode');
const eraserBtn = document.getElementById('eraser');
const shakeBtn = document.getElementById('shakebutton');
const sizeLabel = document.getElementById('gridsizelabel');
const sizeValue = document.getElementById('gridsizeslider');
const grid = document.getElementById('grid');

colorSelector.addEventListener('input', (e) => setCurrentColor(e.target.value));
colorModeBtn.addEventListener('click', () => setCurrentMode('colorMode'));
rainbowModeBtn.addEventListener('click', () => setCurrentMode('rainbowMode'));
eraserBtn.addEventListener('click', () => setCurrentMode('eraser'));
shakeBtn.addEventListener('click', () => reloadGrid());
sizeValue.addEventListener('change', (e) => changeSize(e.target.value));
sizeValue.addEventListener('input', (e) => updateSizeLabel(e.target.value));

let mouseDown = false;
grid.addEventListener('mousedown', () => (mouseDown = true));
grid.addEventListener('mouseup', () => (mouseDown = false));

function changeSize(value) {
    setCurrentSize(value);
    updateSizeLabel(value);
    reloadGrid();
}

function updateSizeLabel(value) {
    sizeLabel.innerHTML = `Grid Size: ${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 1; i <= size * size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseover', changeColor);
        grid.appendChild(cell);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'colorMode') {
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === 'rainbowMode') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#FFFFFF';
    }
}

function activateButton(newMode) {
    if (currentMode === 'colorMode') {
        colorModeBtn.classList.remove('active')
    } else if (currentMode === 'rainbowMode') {
        rainbowModeBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    };

    if (newMode === 'colorMode') {
        colorModeBtn.classList.add('active')
    } else if (newMode === 'rainbowMode') {
        rainbowModeBtn.classList.add('active')
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    };
}

window.onload = () => {
    setupGrid(defaultSize);
    activateButton(defaultMode);
  }