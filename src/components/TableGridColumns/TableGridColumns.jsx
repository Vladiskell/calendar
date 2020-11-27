import React from 'react';
import styles from './styles.module.scss';

// ---------------------------------------------------------------------------------------------------------------------
const TableGridColumns = () => {
    let columnItems = [];

    for (let i = 0; i < 7; i++) {
        columnItems.push(i + 1)
    }

    return (
        <React.Fragment>
            {columnItems.map((column) => (
                <div className={styles.tableGrid__column} data-index={column} key={column} />
            ))}
        </React.Fragment>
    )
};

export default TableGridColumns;
