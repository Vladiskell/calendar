import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import classnames from 'classnames';

import { clearCurrentCalendarDataItem, setCurrentCalendarDataItem } from '../../redux/actions';
import { getCalendarDataSelector, getIsEditPageSelector } from '../../redux/selectors';
import { getFirstColumnValue, getFirstRowValue, getLastRowValue } from '../../utils';

import SelectedArea from "../SelectedArea/SelectedArea";
import TableGridColumn from '../TableGridColumn/TableGridColumn';
import TableGridBlock from '../TableGridBlock/TableGridBlock';

import __mocks__ from '../../__mocks__/index.json';

// ---------------------------------------------------------------------------------------------------------------------
const TableGrid = () => {
    const dispatch = useDispatch();
    const isEditPage = useSelector(getIsEditPageSelector);
    const tableGridBlocks = useSelector(getCalendarDataSelector);

    const [firstRow, setFirstRow] = useState('');
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');

    const [isChangeSelectArea, setIsChangeSelectArea] = useState(false);

    const createSelectedArea = (e) => {
        const rowStart = getFirstRowValue(e);
        const columnStart = getFirstColumnValue(e);

        const rows = `${rowStart} / ${+rowStart + 1}`;
        const columns = `${columnStart} / ${+columnStart + 1}`;

        setIsChangeSelectArea(true);
        setFirstRow(rowStart);

        setRows(rows);
        setColumns(columns);
    }

    const changeSelectedArea = (e) => {
        const lastRow = getLastRowValue(e);
        const rows = `${firstRow} / ${lastRow}`;;

        setRows(rows);
    }

    const completeCreatedSelectedScope = () => {
        dispatch(setCurrentCalendarDataItem({ rows, columns }));

        setRows('0 / 0');
        setColumns('0 / 0');

        dispatch(clearCurrentCalendarDataItem());

        setIsChangeSelectArea(false);
    }

    return (
        <div
            className={classnames(styles.tableGrid, isChangeSelectArea && styles.select)}
            onMouseDown={(e) => isEditPage && createSelectedArea(e)}
            onMouseMove={(e) => isChangeSelectArea && changeSelectedArea(e)}
            onMouseUp={() => isEditPage && completeCreatedSelectedScope()}
        >

            { __mocks__.days.map((item, index) => (
                <TableGridColumn
                    column={+index + 1}
                    key={item.title}
                />
            )) }

            { tableGridBlocks.map((item) => (
                <TableGridBlock
                    isEditPage={isEditPage}
                    rows={item.gridPosition.rows}
                    columns={item.gridPosition.columns}
                    key={item.id}
                />
            )) }

            { isEditPage && (
                <SelectedArea rows={rows} columns={columns} done={!isChangeSelectArea} />
            ) }

        </div>
    );
}

export default TableGrid;
