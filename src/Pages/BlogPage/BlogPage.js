import React from 'react';
import posts from '../../data/posts.json';
import '../../Pages/BlogPage/BlogPage.css'
import {useParams, Link} from "react-router-dom";

function BlogPage() {
    const {blogId} = useParams();

    const post = posts.find((post) => {
        return post.id === blogId;
    });

    return (
        <>
            <article>
                <h1>{blogId.title}</h1>
                <h3>{blogId.date}</h3>
                <p>{blogId.content}</p>
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>


        </>


    );
}

export default BlogPage;