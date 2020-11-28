import React from 'react';
import styles from './styles.module.scss'
import classnames from 'classnames'

// ---------------------------------------------------------------------------------------------------------------------
const SelectedGridSArea = ({ rows, columns }) => {
    return (
        <div
            className={classnames(styles.selectedGridArea)}
            style={{ gridRow: rows, gridColumn: columns }}
        />
    )
}

export default SelectedGridSArea;
