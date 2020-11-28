// constants
const rowHeight = 40;

// get top grid coordinate and mouse Y coordinate relative grid;
export function getCoordinates (event) {
    const grid = event.currentTarget;

    const gridCoordinateY = grid.getBoundingClientRect().top;
    const mouseEventCoordinateY = event.clientY;

    const coordinateY = mouseEventCoordinateY - gridCoordinateY;

    return { gridCoordinateY, coordinateY };
}

// get first column value as column data index
export function getFirstColumnValue (event) {
    const columnStart = event.target.dataset.index;

    return columnStart;
}

// get first row value
export function getFirstRowValue (event) {
    const coordinateY = getCoordinates(event).coordinateY;
    const firstRowValue = Math.ceil(coordinateY / rowHeight);

    return firstRowValue;
}

// get last row value
export function getLastRowValue (event) {
    const gridCoordinateY = getCoordinates(event).gridCoordinateY;
    const mouseCoordinateY = event.clientY;

    const mouseMoveDistance = (mouseCoordinateY - gridCoordinateY) / rowHeight;

    const lastRowValue = Math.ceil(mouseMoveDistance + 1);

    return lastRowValue;
}
