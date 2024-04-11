import React from 'react';
import styles from './AboutMeBox.module.css';

export default function AboutMeBox() {

    return (
        <div className={styles.container}>
            <article className={styles.titleBox}>
            <h2 className={styles.title}>About me</h2>
            </article>
            <p>Hi, I am Lex. For years I used to work as a professional baker, making everything from sourdough bread to croissants to pastries by hand. Recently I switched careers to become a software developer and moved to Paris. My baking passion has not stopped, and I want to share with my fellow baking nerds which recipe’s I am using and what I am learning for them. So follow along in my journey to become an even better baker, and see the successes (and failures) that will follow.</p>
        </div>
    )
}