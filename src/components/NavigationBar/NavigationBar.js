import React from 'react';
import styles from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";


export default function NavigationBar() {

    return (
        <nav className={styles['navigationBar']}>
            <NavLink to="/">
                HOT BUNS LOGO
            </NavLink>

        </nav>
    )
}