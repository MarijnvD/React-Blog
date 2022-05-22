import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function BlogPosts(props) {
    console.log(posts);

    function showBlogs(array) {
        let newArray = array.map(({id, title}) => {
            return <li key={id}><Link exact to={`blogposts/${id}`}>{title}</Link></li>;
        });
        return newArray;
    }

    return (
        <div className="page-container">
            <h2>Blogpost overzicht</h2>
            <p>Aantal blogposts: {posts.length}</p>
            <h2>De volgende blogposts kun je lezen:</h2>
            {showBlogs(posts)}
        </div>
    );
}

export default BlogPosts;