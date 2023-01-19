import React from 'react';
import { useSelector } from 'react-redux'


function Posts(props) {
    const posts = useSelector((state) => state.posts)

    console.log(posts)
            
    return (
        <div>
            Post
        </div>
    );
}

export default Posts;