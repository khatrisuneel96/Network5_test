import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'


function Posts(props) {
    const posts = useSelector((state) => state.posts)
    const [Content, setContent] = useState()

    useEffect ( () => {
        if (posts.length === 0) {
            return
        }
        else {
            //IT TAKES A WHILE TO ACTUALLY RENDER (FIX)
            setContent(<>{posts[0].title}<div><img src={posts[0].selectedFile} alt=""></img></div></>)
        }
    },[posts])

    return (
        <div className="posts">
            {Content}
        </div>
    );
}

export default Posts;