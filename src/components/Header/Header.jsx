import React from 'react';
import styles from './styles.module.scss';

import { Button, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';

// ---------------------------------------------------------------------------------------------------------------------
const Header = () => {

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
                    <Button startIcon={<EditIcon />}>Edit Schedule</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
