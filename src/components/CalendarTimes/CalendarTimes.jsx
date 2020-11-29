import React from 'react';
import styles from './styles.module.scss';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarTimes = () => {
    const timesElements = [];
    let hours = 8;
    let minutes = 0;
    let td = 'AM';

    for (let i = 0; i < 96; i++) {
        if (i % 2 === 0 && minutes === 0) {
            timesElements.push(`${hours}:${minutes}0 ${td}`);
            minutes = 3;
        } else if (i % 2 == 0 && minutes === 3) {
            timesElements.push(`${hours}:${minutes}0 ${td}`);
            minutes = 0;
            hours++;
        } else {
            timesElements.push('');
        }
    }

    return (
        <div className={styles.calendarTimes}>
            {timesElements.map((item, index) => (
                <div className={styles.calendarTimes__item} key={`item-${index}`}>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};

export default CalendarTimes;
