import React from 'react';
import styles from './styles.module.scss'

// ---------------------------------------------------------------------------------------------------------------------
const SelectedArea = ({ rows, columns }) => {
    return (
        <div
            className={styles.selectedArea}
            style={{ gridRow: rows, gridColumn: columns }}
        />
    )
}

export default SelectedArea;
