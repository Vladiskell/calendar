import React from 'react';
import styles from './styles.module.scss';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarTimes = () => {
    const elements = [];
    for (let i = 0; i < 96; i++) {
        elements.push(i)
    }

    return (
        <div className={styles.calendarTimes}>
            {elements.map((index) => (
                <div className={styles.calendarTimes__item} key={`item-${index}`}>
                    <span>8:00 AM</span>
                </div>
            ))}
        </div>
    );
};

export default CalendarTimes;
