import React, { useState } from 'react';
import styles from './styles.module.scss';
import gridBg from '../../assets/grid-item.png';

import SelectedScope from "../SelectedScope/SelectedScope";
import { getFirstGridValues, getLastGridValues, getNextRowLine } from "../../utils";

// ---------------------------------------------------------------------------------------------------------------------
const TableGrid = () => {
    const [gridItemValues, setGridItemValues] = useState({});
    const [mouseMove, setMouseMove] = useState(false);

    const onMouseDown = (e) => {
        const { firstRowValue, firstColumnValue } = getFirstGridValues(e);

        setGridItemValues({
            rowStart: firstRowValue,
            rowEnd: firstRowValue + 1,
            columnStart: firstColumnValue,
            columnEnd: firstColumnValue + 1,
        })

        setMouseMove(true);
    }

    const onMouseMove = (e) => {
        const nextLine = getNextRowLine(e, gridItemValues.rowStart) + gridItemValues.rowStart;

        setGridItemValues({
            rowStart: gridItemValues.rowStart,
            rowEnd: nextLine,
            columnStart: gridItemValues.columnStart,
            columnEnd: gridItemValues.columnEnd,
        })
    }

    const onMouseUp = (e) => {
        const { lastRowValue } = getLastGridValues(e);

        setGridItemValues({
            rowStart: gridItemValues.rowStart,
            rowEnd: lastRowValue,
            columnStart: gridItemValues.columnStart,
            columnEnd: gridItemValues.columnStart,
        })

        setMouseMove(false);
    }

    return (
        <div className={styles.tableGrid__container}>
            <div className={styles.tableGrid__bg} style={{ backgroundImage: `url('${gridBg}')`}}></div>

            <div
                className={styles.tableGrid}
                onMouseDown={(e) => onMouseDown(e)}
                onMouseUp={(e) => onMouseUp(e)}
                onMouseMove={(e) => mouseMove && onMouseMove(e)}
            >
                <SelectedScope gridItemValues={gridItemValues} done={!mouseMove}></SelectedScope>
            </div>
        </div>
    )
}

export default TableGrid;
