const grid = document.querySelector('#grid-container');
var squares = [];
let sideLength = null;
let squareSize = null;



const button = document.querySelector('#submit-button');
const textField = document.querySelector('#input-text');

button.addEventListener('click', () => {
    grid.innerHTML = "";
    sideLength = Number(textField.value);
    reloadGrid(sideLength);
})

function reloadGrid(sideLength) {
    clearGrid();
    squareSize = 700/sideLength;
    createSquares(sideLength * sideLength);
    appendChildren(grid,squares);
}

function appendChildren(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

function createSquares(number) {
    for(let i = 0; i < number; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('hover')
        });
        squares.push(newDiv);
    }
}

function clearGrid() {
    grid.innerHTML = '';
    squares = [];
}