import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

// ---------------------------------------------------------------------------------------------------------------------
const TableGridBlock = ({ isEditPage, rows, columns }) => {
    return (
        <div
            className={classnames(styles.tableGrid__block, isEditPage && styles.disabled)}
            style={{ gridRow: rows, gridColumn: columns }}
        />
    );
};

export default TableGridBlock;
