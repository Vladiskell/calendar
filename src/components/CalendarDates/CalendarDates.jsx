import React, { useMemo } from 'react';
import styles from './styles.module.scss';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarDates = () => {

    const days = useMemo(() => (
        [
            {
                'title': 'Sun',
                'day': 8
            },
            {
                'title': 'Mon',
                'day': 9
            },
            {
                'title': 'Tue',
                'day': 10
            },
            {
                'title': 'Wed',
                'day': 11
            },
            {
                'title': 'Thu',
                'day': 12
            },
            {
                'title': 'Fri',
                'day': 13
            },
            {
                'title': 'Sat',
                'day': 14
            },

        ]
    ), [])

    return (
        <div className={styles.calendarDates}>
            <div></div>
            { days.map((item) => (
                <div className={styles.calendarDates__item} key={item.day}>
                    <span>{item.title}, {item.day}</span>
                </div>
            )) }
        </div>
    );
};

export default CalendarDates;
