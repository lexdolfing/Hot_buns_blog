import React from 'react'
import styles from './Home.module.css'
import stylesIndex from '../../index.module.css'

export default function Home() {

    return(
        <>

            <section> // is de page body
                // add menu-bar component
                <section> // outer container
                    <article> //inner container
                        <section className={styles['heroSection']}> // de hero section
                            <div className={styles['heroContent']}>
                                <p className={styles['heroTitle']}>The diary of a plant-based baker and software engineer</p>
                                <p className={styles['heroParagraph']}>Follow me as I write about my weekly bakes from my small Parisian kitchen. Here you find the recipes that I baked. It’s my way to keep track of what I baked, and what I learned and want to Improve. I’ll include recipe’s so you fellow baking nerds can follow along.</p>

                            </div>
                        </section>

                    </article>

                </section>
            </section>

        </>

    )

}