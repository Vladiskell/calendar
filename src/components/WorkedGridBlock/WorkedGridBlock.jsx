import React, { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

// ---------------------------------------------------------------------------------------------------------------------
const WorkedGridBlock = ({ isEditPage, rows, columns, children }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div
            className={classnames(
                styles.workedGridBlock,
                focused && styles.focused,
                isEditPage && styles.disabled)}
            style={{ gridRow: rows, gridColumn: columns }}
        >
            <input
                readOnly
                onFocus={() => !isEditPage && setFocused(true)}
                onBlur={() => !isEditPage && setFocused(false)}
            />
            { children }
        </div>
    );
};

export default WorkedGridBlock;
