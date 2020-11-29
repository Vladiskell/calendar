import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

import { getCurrentGridItem, getGridData, getIsEditPage, getIsSelectedArea } from '../../redux/selectors';

import WorkedGridBlock from '../WorkedGridBlock/WorkedGridBlock';
import SelectedGridSArea from '../SelectedGridArea/SelectedGridSArea';
import { getCoordinates, getFirstColumnValue, getFirstRowValue, getLastRowValue } from '../../utils';
import { clearCurrentGridItem, renderSelectedArea, setCurrentGridItem } from '../../redux/actions';
import classnames from 'classnames';
import __mocks__ from '../../__mocks__';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarGrid = () => {
    const dispatch = useDispatch();

    const isEditPage = useSelector(getIsEditPage);
    const isSelectedArea = useSelector(getIsSelectedArea);
    const gridBlocks = useSelector(getGridData);

    const [firstMouseCoordinateY, setFirstMouseCoordinateY] = useState();
    const [lastMouseCoordinateY, setLastMouseCoordinateY] = useState();
    const [selectedAreaHeight, setSelectedAreaHeight] = useState(0);

    const gridRef = useRef();

    const [firstRow, setFirstRow] = useState('');
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');

    const [isChangeSelectArea, setIsChangeSelectArea] = useState(false);

    const createSelectedArea = (e) => {
        const { coordinateY } = getCoordinates(e);
        setFirstMouseCoordinateY(coordinateY);

        dispatch(renderSelectedArea());

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

        const { coordinateY } = getCoordinates(e);
        setLastMouseCoordinateY(coordinateY);

        console.log('-----', lastMouseCoordinateY - firstMouseCoordinateY);

        setRows(rows);
    }

    const completeCreatedSelectedScope = () => {
        dispatch(setCurrentGridItem(rows, columns));

        setIsChangeSelectArea(false);
    }

    return (
        <div
            ref={gridRef}
            className={classnames(styles.calendarGrid, isChangeSelectArea && styles.select)}
            onMouseDown={(e) => isEditPage && createSelectedArea(e)}
            onMouseMove={(e) => isChangeSelectArea && changeSelectedArea(e)}
            onMouseUp={() => isEditPage && completeCreatedSelectedScope()}
        >

            { __mocks__.days.map((item, index) => (
                <div
                    className={styles.calendarGrid__column}
                    data-index={index + 1}
                    key={item.title}
                />
            )) }

            <WorkedGridBlock rows="1 / 10" columns="1 / 2" isEditPage={isEditPage} />
            <WorkedGridBlock rows="1 / 10" columns="2 / 3" isEditPage={isEditPage} />


            { gridBlocks.map((item) => (
                <WorkedGridBlock
                    isEditPage={isEditPage}
                    rows={item.gridValues.rows}
                    columns={item.gridValues.columns}
                    key={item.gridValues.rows}
                />
            ))}

            { isSelectedArea && (
                <SelectedGridSArea
                    rows={rows}
                    columns={columns}
                    // height={lastMouseCoordinateY - firstMouseCoordinateY}
                />
            ) }
        </div>
    );
};

export default CalendarGrid;
