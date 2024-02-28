import React from "react";
import styles from './Footer.module.css';
import instagramLogo from './../../assets/images/instagram-svg.svg';
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <section className={styles.outerContainer}>

            <section className={styles.innerContainer}>
                <footer className={styles.footer}>
                    <NavLink to="/" className={styles.logo}>
                        HOT BUNS <br/>
                        BAKING BLOG
                    </NavLink>

                    <div className={styles.footerBox}>
                        <img src={instagramLogo} alt="Instagram logo" className={styles.instagramLogo}/>
                        <p className={styles.instagramHandle}>@bakkerijhotbuns</p>

                    </div>

                </footer>
            </section>
        </section>
    )
}