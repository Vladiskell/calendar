import React from 'react';
import styles from './styles.module.scss'

import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import TableGrid from '../TableGrid/TableGrid';
import Calendar from '../Calendar/Calendar';

// ---------------------------------------------------------------------------------------------------------------------
const App = () => {
    return (
        <div className={styles.page}>
            <SideMenu />
            <div className={styles.content}>
                <Header />
                <Calendar />
                {/*<TableGrid />*/}
            </div>
        </div>
    )
}
export default App;
