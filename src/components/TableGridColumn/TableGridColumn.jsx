import React from 'react';
import styles from './styles.module.scss';

// ---------------------------------------------------------------------------------------------------------------------
const TableGridColumn = ({ column }) => {
    return (
        <div className={styles.tableGrid__column} data-index={column} />
    )
};

export default TableGridColumn;
