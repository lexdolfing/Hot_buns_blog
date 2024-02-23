import React from 'react';
import styles from './NavigationBar.module.css';
import stylesIndex from '../../index.module.css'
import {NavLink} from "react-router-dom";


export default function NavigationBar() {

    return (
        <section className={`${styles['navigationBar']} ${stylesIndex.outerContainer}`}>
        <nav className={`${stylesIndex.innerContainer} ${styles.bigLinkContainer}`}>
            <NavLink to="/" className={styles.logo}>
                HOT BUNS <br/>
                BAKING BLOG
            </NavLink>
           <div className={styles.smallLinkContainer}>
            <NavLink to="/" className={styles.menuLink}>
                Home
            </NavLink>
            <NavLink to="/" className={styles.menuLink}>
                Blog posts
            </NavLink>
            <NavLink to="/" className={styles.menuLink}>
                About
            </NavLink>
        </div>
        </nav>
        </section>
    )
}