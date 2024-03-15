import React from "react";
import styles from './Footer.module.css';
import stylesIndex from './../../index.module.css'
import instagramLogo from './../../assets/images/instagram-svg.svg';
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <section className= {`${stylesIndex.outerContainer} ${styles.outerContainer}`}>

            <section className={stylesIndex.innerContainer} >
                <footer className={styles.footer}>
                    <NavLink to="/" className={styles.logo}>
                        Hot Buns <br/>
                        Baking Blog
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