import React from 'react';
import styles from './styles.module.scss'

import Calendar from '../Calendar/Calendar';

// ---------------------------------------------------------------------------------------------------------------------
const App = () => {
    return (
        <div className={styles.page}>
            <aside className={styles.sideMenu}></aside>
            <main className={styles.content}>
                <Calendar />
            </main>
        </div>
    )
}
export default App;
