var gridSize;
function createGrid(size) {
    let newRow;
    let newCol;
    let squareSize = 960 / size - 4;
    for (let r = 0; r < size; r++) {
        newRow = document.createElement('div');
        newRow.setAttribute('id', 'row-' + r);
        newRow.setAttribute('class', 'squarerow');
        document.getElementById('gridbox').appendChild(newRow);
        console.log('Row ' + r + ' created')
        for (let c = 0; c < size; c++) {
            newCol = document.createElement('div');
            newCol.setAttribute('id', 'col-' + c);
            newCol.setAttribute('class', 'square');
            newCol.style.width = squareSize + 'px';
            newCol.style.height = squareSize + 'px';
            document.getElementById('row-' + r).appendChild(newCol);
            console.log('Column ' + c + ' created')
        }
    }
}

function getGridSize() {
    gridSize = window.prompt('What size do you want the square grid to be?', '8')
    if (isNaN(gridSize)) {
        window.alert('Please enter a number');
        getGridSize();
    }

}

document.addEventListener('mouseover', function(e) {console.log(e);});

getGridSize();
createGrid(gridSize);