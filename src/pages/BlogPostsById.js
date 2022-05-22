import React from 'react';
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";


function BlogPostsById() {
    const {id} = useParams();
    const post = posts.filter(post => post.id === id);
    return (

        <div className="page-container">
            <h2>{post[0].title}</h2>
            <article>{post[0].content} {id}</article>
        </div>
    );
}

export default BlogPostsById;