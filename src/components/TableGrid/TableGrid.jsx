import React, { useState } from 'react';
import styles from './styles.module.scss';

import SelectedScope from "../SelectedScope/SelectedScope";
import {
    getFirstColumnValue,
    getFirstRowValue,
    getLastRowValue,
} from '../../utils';
import TableGridColumns from '../TableGridColumns/TableGridColumns';

// ---------------------------------------------------------------------------------------------------------------------
const TableGrid = () => {
    const [firstRow, setFirstRow] = useState('');
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');
    const [mouseMove, setMouseMove] = useState(false);

    const createSelectedScope = (e) => {
        const rowStart = getFirstRowValue(e);
        const columnStart = getFirstColumnValue(e);

        const rows = `${rowStart} / ${+rowStart + 1}`;
        const columns = `${columnStart} / ${+columnStart + 1}`;

        setMouseMove(true);
        setFirstRow(rowStart);

        setRows(rows);
        setColumns(columns);
    }

    const changeSelectedScope = (e) => {
        const lastRow = getLastRowValue(e);
        const rows = `${firstRow} / ${lastRow}`;;

        setRows(rows);
    }

    return (
        <div
            className={styles.tableGrid}
            onMouseDown={(e) => createSelectedScope(e)}
            onMouseMove={(e) => mouseMove && changeSelectedScope(e)}
            onMouseUp={(e) => setMouseMove(false)}
        >
            <TableGridColumns />

            <SelectedScope rows={rows} columns={columns} done={!mouseMove}></SelectedScope>
        </div>
    );
}

export default TableGrid;
