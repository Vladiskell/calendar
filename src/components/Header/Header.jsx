import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Button, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { addCalendarDataItem, openEditPageAction } from '../../redux/actions';
import { getCalendarDataItemSelector } from '../../redux/selectors';

// ---------------------------------------------------------------------------------------------------------------------
const Header = () => {
    const dispatch = useDispatch();
    const currentCalendarDataItem = useSelector(getCalendarDataItemSelector);

    const [isEdit, setIsEdit] = useState(false);

    const onEdit = () => {
        setIsEdit(true);
        dispatch(openEditPageAction(true));
    };

    const onSave = () => {
        dispatch(addCalendarDataItem(currentCalendarDataItem));

        dispatch(openEditPageAction(false));
        setIsEdit(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                    <Typography variant="h5" component="span">Visits</Typography>
                </div>
                <div className={styles.header__dates}>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <Button>May 8-14, 2020</Button>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <div className={styles.header__edit}>
                    { isEdit ? (
                        <Button
                            color='primary'
                            variant='contained'
                            disableElevation
                            startIcon={<SaveIcon />}
                            onClick={onSave}>
                            Save Schedule
                        </Button>
                    ) : (
                        <Button
                            startIcon={<EditIcon />}
                            onClick={onEdit}>
                            Edit Schedule
                        </Button>
                    ) }
                </div>
            </div>
        </header>
    );
};

export default Header;
