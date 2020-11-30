import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import classnames from 'classnames';
import __mocks__ from '../../__mocks__';

import { getGridData, getIsEditPage, getIsSelectedArea } from '../../redux/selectors';
import { getCoordinateY, getInitGridAreaValues, getRow } from '../../utils';
import { renderSelectedArea, setCurrentGridItem } from '../../redux/actions';

import WorkedGridBlock from '../WorkedGridBlock/WorkedGridBlock';
import SelectedGridSArea from '../SelectedGridArea/SelectedGridSArea';


// ---------------------------------------------------------------------------------------------------------------------
const CalendarGrid = () => {
    const dispatch = useDispatch();

    const isEditPage = useSelector(getIsEditPage);
    const isSelectedArea = useSelector(getIsSelectedArea);
    const gridBlocks = useSelector(getGridData);

    const [isChangeSelectArea, setIsChangeSelectArea] = useState(false);

    // ---------------------------------------------------------------------------------------------
    const initialGrid = useRef(null);
    const [rowStart, setRowStart] = useState(0);
    const [rowEnd, setRowEnd] = useState(0);
    const [columnStart, setColumnStart] = useState(0);
    const [columnEnd, setColumnEnd] = useState(0);

    const gridArea = `${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd}`;

    const [firstCoordinateY, setFirstCoordinateY] = useState(0);

    // ---------------------------------------------------------------------------------------------
    // init selected area
    const createSelectedArea = (e) => {
        dispatch(renderSelectedArea());
        setIsChangeSelectArea(true);

        const coordinateY = getCoordinateY(e);
        setFirstCoordinateY(coordinateY);

        const initValues = getInitGridAreaValues(e);

        const { rowStart, rowEnd, columnStart, columnEnd } = initValues;
        initialGrid.current = initValues;

        setRowStart(rowStart);
        setRowEnd(rowEnd);
        setColumnStart(columnStart);
        setColumnEnd(columnEnd);
    }

    // ---------------------------------------------------------------------------------------------
    // change selected area
    const changeSelectedArea = (e) => {
        const mouseEventCoordinateY = getCoordinateY(e);

        if (mouseEventCoordinateY > firstCoordinateY) {
            const lastRow = getRow(e) + 1;

            setRowEnd(lastRow);
            setRowStart(initialGrid.current.rowStart);
        } else if (mouseEventCoordinateY < firstCoordinateY) {
            const firstRow = getRow(e);

            setRowStart(firstRow);
            setRowEnd(initialGrid.current.rowEnd);
        }
    }

    // ---------------------------------------------------------------------------------------------
    // complete selected area
    const completeCreatedSelectedScope = () => {
        dispatch(setCurrentGridItem(gridArea));

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
                <div
                    className={styles.calendarGrid__column}
                    data-index={index + 1}
                    key={item.title}
                />
            )) }

            { gridBlocks.map((item) => (
                <WorkedGridBlock
                    isEditPage={isEditPage}
                    gridArea={item.gridArea}
                    key={item.id}
                />
            ))}

            { isSelectedArea && (
                <SelectedGridSArea gridArea={gridArea} />
            ) }
        </div>
    );
};

export default CalendarGrid;
