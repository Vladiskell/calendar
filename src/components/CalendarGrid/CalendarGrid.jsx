import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

import { getCurrentGridItem, getGridData, getIsEditPage } from '../../redux/selectors';

import WorkedGridBlock from '../WorkedGridBlock/WorkedGridBlock';
import SelectedGridSArea from '../SelectedGridArea/SelectedGridSArea';
import { getFirstColumnValue, getFirstRowValue, getLastRowValue } from '../../utils';
import { clearCurrentGridItem, setCurrentGridItem } from '../../redux/actions';
import classnames from 'classnames';
import __mocks__ from '../../__mocks__';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarGrid = () => {
    const dispatch = useDispatch();

    const isEditPage = useSelector(getIsEditPage);
    const gridBlocks = useSelector(getGridData);

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
        const rows = `${firstRow} / ${lastRow}`;

        setRows(rows);
    }

    const completeCreatedSelectedScope = () => {
        dispatch(setCurrentGridItem(rows, columns));

        setIsChangeSelectArea(false);
    }

    return (
        <div
            className={classnames(styles.calendarGrid, isChangeSelectArea && styles.select)}
            onMouseDown={(e) => isEditPage && createSelectedArea(e)}
            onMouseMove={(e) => isChangeSelectArea && changeSelectedArea(e)}
            onMouseUp={() => isEditPage && completeCreatedSelectedScope()}
        >

            { __mocks__.days.map((item, index) => (
                <div className={styles.calendarGrid__column} data-index={index + 1} key={item.title} />
            )) }

            { gridBlocks.map((item) => (
                <WorkedGridBlock
                    isEditPage={isEditPage}
                    rows={item.gridValues.rows}
                    columns={item.gridValues.columns}
                />
            ))}

            { isEditPage && (
                <SelectedGridSArea
                    rows={rows}
                    columns={columns}
                />
            ) }
        </div>
    );
};

export default CalendarGrid;
