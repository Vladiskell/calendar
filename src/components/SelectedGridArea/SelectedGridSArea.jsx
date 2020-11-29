import React from 'react';
import styles from './styles.module.scss'
import classnames from 'classnames'

// ---------------------------------------------------------------------------------------------------------------------
const SelectedGridSArea = ({ gridArea }) => {
    return (
        <div
            className={classnames(styles.selectedGridArea)}
            style={{ gridArea: gridArea }}
        />
    );
}

export default SelectedGridSArea;
