import React from 'react';
import styles from './styles.module.scss';

import TableGrid from '../TableGrid/TableGrid';
import CalendarDates from '../CalendarDates/CalendarDates';
import CalendarTimes from '../CalendarTimes/CalendarTimes';

// ---------------------------------------------------------------------------------------------------------------------
const Calendar = () => {

    return (
        <div className={styles.calendar}>
            <div className={styles.calendar__grid}>

                <div className={styles.calendar__dates}>
                    <CalendarDates />
                </div>

                <div className={styles.calendar__times}>
                    <CalendarTimes />
                </div>

                <div className={styles.calendar__table}>
                    <TableGrid />
                </div>

            </div>
        </div>
    );
};

export default Calendar;
