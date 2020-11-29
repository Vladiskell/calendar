import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

import { addGridItem, openEditPageAction, renderSelectedArea } from '../../redux/actions';
import { getCurrentGridItem, getIsEditPage } from '../../redux/selectors';

import { Button, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddIcon from '@material-ui/icons/Add';

// ---------------------------------------------------------------------------------------------------------------------
const CalendarHeader = () => {
    const dispatch = useDispatch();
    const currentGriItem = useSelector(getCurrentGridItem);
    const isEditPage = useSelector(getIsEditPage);

    const onEdit = () => {
        dispatch(openEditPageAction(true));
    };

    const onSave = () => {
        currentGriItem && dispatch(addGridItem(currentGriItem));
        dispatch(openEditPageAction(false));
    };

    const onCancel = () => {
        dispatch(openEditPageAction(false));
    }

    return (
        <div className={styles.calendarHeader}>

            <div className={styles.calendarHeader__title}>
                <Typography variant="h5" component="span">
                    { isEditPage ? 'Edit schedule' : 'Visits' }
                </Typography>
            </div>

            <div className={styles.calendarHeader__dates}>
                <IconButton className={styles.navigateButton}>
                    <ChevronLeftIcon />
                </IconButton>
                <Button
                    className={styles.calendarButton}
                    startIcon={<DateRangeIcon color="primary" />}
                >
                    May 8-14, 2020
                </Button>
                <IconButton className={styles.navigateButton}>
                    <ChevronRightIcon />
                </IconButton>
            </div>

            <div className={styles.calendarHeader__edit}>
                { isEditPage ? (
                    <React.Fragment>
                        <Button
                            className={styles.addButton}
                            startIcon={<AddIcon color="primary" />}
                        >
                            Add
                        </Button>
                        <Button
                            className={styles.cancelButton}
                            startIcon={<DoneIcon color="primary" />}
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={styles.saveButton}
                            startIcon={<DoneIcon color="primary" />}
                            onClick={onSave}
                        >
                            Save
                        </Button>
                    </React.Fragment>
                ) : (
                    <Button
                        className={styles.editButton}
                        startIcon={<EditIcon color="primary"/>}
                        onClick={onEdit}
                    >
                        Edit schedule
                    </Button>
                ) }
            </div>
        </div>
    );
};

export default CalendarHeader;
