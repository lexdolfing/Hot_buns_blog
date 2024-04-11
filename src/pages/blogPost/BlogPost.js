import React, {useEffect, useState} from 'react';
import styles from './BlogPost.module.css';
import stylesIndex from './../../index.module.css'
import NavigationBar from "../../components/navigationBar/NavigationBar";
import AboutMeBox from "../../components/aboutMeBox/AboutMeBox";
import {useParams} from "react-router-dom";
import blogData from "./../../data/BlogData"

export default function BlogPost() {
    // get blog ID from url
    const {blogId} = useParams();
    const [blogPost, setBlogPost] = useState(null);


    // get blog data from BlogData folder
    useEffect( () => {
       const selectedBlogPost = blogData.find(post => post.id === parseInt(blogId));
    if (selectedBlogPost) {
        setBlogPost(selectedBlogPost)
    }
    }, [blogId]
    )

    if (!blogPost) {
        return <div>Loading...</div>
    }

    return (
        <>
            <NavigationBar />
        <section className={stylesIndex.outerContainer}>
            <section className={stylesIndex.innerContainer}>
                <article className={styles.titleBox}>
                    <p className={styles.date}>{blogPost.date}</p>
                    <h1 className={styles.title}>{blogPost.title}</h1>
                    <p>Jump to recipe (make this a link)</p>
                </article>
                <AboutMeBox />

            </section>



        </section>
        </>
    )
}