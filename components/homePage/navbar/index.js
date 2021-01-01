import React from 'react'
import styles from './Navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles['navbar-wrapper']}>
            <div className={styles.container}>
                <img
                    src="/logo.svg"
                    height={60}
                    className={styles['app-logo']}
                />
                <div className={styles['search-container']}>
                    <input placeholder="Movie Search" className={styles.search} spellCheck={false}/>
                    <img src="/search-icon.svg" className={styles["search-icon"]}/>
                </div>
            </div>
        </div>
    )
}
