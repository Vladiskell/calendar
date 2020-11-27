import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux';
import { setCurrentCalendarDataItem } from '../../redux/actions';

// ---------------------------------------------------------------------------------------------------------------------
const SelectedArea = ({ rows, columns, done }) => {
    return (
        <div
            className={classnames(styles.selectedArea, done && styles.selectedAreaDone)}
            style={{ gridRow: rows, gridColumn: columns }}
        />
    )
}

export default SelectedArea;
