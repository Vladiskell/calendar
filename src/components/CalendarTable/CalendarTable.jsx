import React from 'react';
import styles from './styles.module.scss';

import CalendarDates from '../CalendarDates/CalendarDates';
import CalendarTimes from '../CalendarTimes/CalendarTimes';
import CalendarGrid from '../CalendarGrid/CalendarGrid';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarTable = () => {

    return (
        <div className={styles.calendarTable} >
            <div className={styles.calendarTable__dates}>
                <CalendarDates />
            </div>
            <div className={styles.calendarTable__times}>
                <CalendarTimes />
            </div>
            <div className={styles.calendarTable__grid}>
                <CalendarGrid />
            </div>
        </div>
    );
};

export default CalendarTable;
