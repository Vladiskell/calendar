// get grid item start value
function getGridItemStartValue (coordinate, value) {
    let startValue = 1;

    if (coordinate > value) {
        startValue = Math.ceil(coordinate / value);
    }

    return startValue;
}

// get grid item sizes
function getGridItemSizes(event) {
    const gridWidth = event.target.getBoundingClientRect().width;

    const rowHeight = 40;
    const columnWidth = gridWidth / 7;

    return { rowHeight, columnWidth }
}

// get mouse event coordinates relative to the grid
function getMouseEventCoordinate (event) {
    // get the left and right grid coordinates relative to the window
    const {
        x: gridCoordinateX,
        y: gridCoordinateY,
    } = event.target.getBoundingClientRect();

    // get the left and right mouse event coordinates
    const mouseEventCoordinateX = event.clientX;
    const mouseEventCoordinateY = event.clientY;

    // get the left and right mouse event coordinates relative to the grid
    const coordinateX = mouseEventCoordinateX - gridCoordinateX;
    const coordinateY = mouseEventCoordinateY - gridCoordinateY;

    return { coordinateX, coordinateY }
}

// get first row and column line values
export function getFirstGridValues (event) {
    const { coordinateX, coordinateY } = getMouseEventCoordinate(event);
    const { rowHeight, columnWidth } = getGridItemSizes(event);

    const firstRowValue = getGridItemStartValue(coordinateY, rowHeight);
    const firstColumnValue = getGridItemStartValue(coordinateX, columnWidth);

    return { firstRowValue, firstColumnValue, coordinateY }
}

// get last row and column line values
export function getLastGridValues (event) {
    const { coordinateY } = getMouseEventCoordinate(event);
    const { rowHeight } = getGridItemSizes(event);

    const lastRowValue = getGridItemStartValue(coordinateY, rowHeight) + 1;
    const lastColumnValue = getFirstGridValues(event).firstColumnValue + 1;

    return { lastRowValue, lastColumnValue }
}

// get next row line based on row height
export function getNextRowLine (event, rowStart) {
    const mouseMoveDistance = (event.clientY - 176) - (rowStart * 40);


    if ( mouseMoveDistance < 5) {
        return 1
    } else {
        return Math.ceil(mouseMoveDistance / 40) + 1
    }
}
