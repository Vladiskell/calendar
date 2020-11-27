import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss'

const SelectedScope = ({ gridItemValues, done }) => {
    return (
        <div
            className={classnames(styles.selectedScope)}
            id='selected-scope'
            style={{
                gridRow: `${gridItemValues.rowStart} / ${gridItemValues.rowEnd}`,
                gridColumn: `${gridItemValues.columnStart} / ${gridItemValues.columnEnd}`
            }}
        />
    )
}

export default SelectedScope;
