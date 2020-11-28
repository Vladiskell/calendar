import React from 'react';
import styles from './styles.module.scss';

import __mocks__ from '../../__mocks__';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarDates = () => {
    return (
        <div className={styles.calendarDates}>
            { __mocks__.days.map((item) => (
                <div className={styles.calendarDates__item} key={item.day}>
                    <span>{item.title}, {item.day}</span>
                </div>
            )) }
        </div>
    );
};

export default CalendarDates;
