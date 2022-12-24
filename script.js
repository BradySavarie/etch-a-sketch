// Started by setting up input range slider that stores a value between 1-100, defaulting to 50
const gridSize = document.getElementById('gridsizeslider');

// Update gridSize value and text content of label on change
gridSize.addEventListener('change', function() {
    gridSize.setAttribute('value', gridSize.value);
});
// Replace text content of grid size label on input update
gridSize.addEventListener('input', function() {
    document.getElementById('gridsizelabel').textContent = `Grid Size: ${gridSize.value} x ${gridSize.value}`;
});

// Once I have that functioning I need to rework my HTML to include the remaining features that I want included in this app

// color mode button on the bottom left. this is the default behaviour. It should have a color picker input above it
//



// Remaining features are a color mode with a color selector of some sort, a "rainbow" mode (think of a cool variation on this concept), a "shake" button to clear the divs, and an eraser. MAYBE a shading option with adjustable opacity values per pass
// After that I can use the gridSize variable to create the actual divs
// once the divs are hooked up i will add in the click listener functionality to change background color. I think the best route forward is for the colors to change when the mouse is clicked down and once released the functionality ends (?). hover is too frustrating to control. 
