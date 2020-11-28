import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

// ---------------------------------------------------------------------------------------------------------------------
const WorkedGridBlock = ({ isEditPage, rows, columns }) => {
    return (
        <div
            className={classnames(styles.workedGridBlock, isEditPage && styles.disabled)}
            style={{ gridRow: rows, gridColumn: columns }}
        />
    );
};

export default WorkedGridBlock;
