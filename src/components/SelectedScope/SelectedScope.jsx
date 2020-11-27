import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss'

// ---------------------------------------------------------------------------------------------------------------------
const SelectedScope = ({ rows, columns, done }) => {
    return (
        <div
            className={classnames(styles.selectedScope, done && styles.selectedScopeDone)}
            style={{ gridRow: rows, gridColumn: columns }}
        />
    )
}

export default SelectedScope;
