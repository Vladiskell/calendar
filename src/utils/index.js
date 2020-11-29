// constants
const rowHeight = 40;

// get top grid coordinate and mouse Y coordinate relative grid;
export function getCoordinateY (e) {
    const gridCoordinateY = e.currentTarget.getBoundingClientRect().top;
    const eCoordinateY = e.clientY;

    const coordinateY = eCoordinateY - gridCoordinateY;

    return coordinateY;
}

// get first column value
function getColumn (e) {
    const column = e.target.dataset.index;

    return column;
}

export function getRow (e) {
    const coordinateY = getCoordinateY(e);
    const row = Math.ceil(coordinateY / rowHeight);

    return row;
}

// get grid item area values
export function getInitGridAreaValues (e) {
    const rowStart = getRow(e);
    const rowEnd = getRow(e) + 1;
    const columnStart = getColumn(e);
    const columnEnd = Number(getColumn(e)) + 1;

    const gridValues = { rowStart, rowEnd, columnStart, columnEnd };

    return gridValues;
}
