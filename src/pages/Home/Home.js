import React from 'react'
import styles from './Home.module.css'
import stylesIndex from '../../index.module.css'
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import strawberriePies from './../../assets/images/hero/Aardbeientaartjes.jpeg'

export default function Home() {

    return(
        <>

            <section className = {stylesIndex['pageBody']}>
                <NavigationBar />
                <section className={styles['outerContainer']} style={{backgroundImage: `url(${strawberriePies})`}}>
                    <article className={styles['innerContainer']}>
                        <section className={styles['heroSection']}>
                            <div className={styles['heroContent']}>
                                <p className={styles['heroTitle']}>The diary of a plant-based baker and software engineer</p>
                                <p className={styles['heroParagraph']}>Follow me as I write about my weekly bakes from my small Parisian kitchen. Here you find the recipes that I baked. It’s my way to keep track of what I baked, and what I learned and want to Improve. I’ll include recipe’s so you fellow baking nerds can follow along.</p>
                                <div className={styles['buttonContainer']}><button>Read about me</button> <button>See all posts</button></div>
                            </div>
                        </section>

                    </article>

                </section>
            </section>

        </>

    )

}