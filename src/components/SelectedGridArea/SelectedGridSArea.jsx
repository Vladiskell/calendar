import React from 'react';
import styles from './styles.module.scss'
import classnames from 'classnames'

// ---------------------------------------------------------------------------------------------------------------------
const SelectedGridSArea = ({ rows, columns, height }) => {
    return (
        <div
            className={classnames(styles.selectedGridArea)}
            style={{ gridRow: rows, gridColumn: columns, height: `${height}px` }}
        />
    );
}

export default SelectedGridSArea;
