import React from 'react';
import './BlogOverview.css';
import {Link} from "react-router-dom";
import posts from '../../data/posts.json';

function BlogOverview() {
    return (
        <>

<main>
                <section>
                    <h1>Blog Overzichts Pagina</h1>
                    <h3>Aantal Blogposts: {posts.length}</h3>

<br/>
                    <ul>

                            {posts.map((post) => {
                                return <li key={post.id}>
                                    <Link to={'/blogposts/${post.id}'}>
                                        {post.title}
                                    </Link>
                                </li>
                            })}
                    </ul>

                </section>
</main>

        </>
    );
};

export default BlogOverview;