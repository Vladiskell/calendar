import React from 'react';

import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarTable from '../CalendarTable/CalendarTable';

// ---------------------------------------------------------------------------------------------------------------------
const Calendar = () => {
    return (
        <React.Fragment>
            <CalendarHeader />
            <CalendarTable />
        </React.Fragment>
    );
};

export default Calendar;
