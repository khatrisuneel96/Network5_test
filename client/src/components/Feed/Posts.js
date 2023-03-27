import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'


function Posts(props) {
    const current_user = JSON.parse(localStorage.getItem('user'))
    const posts = useSelector((state) => state.posts)
    const [Content, setContent] = useState()

    useEffect ( () => {
        if (posts.length === 0) {
            return
        }
        else {
            console.log(posts)
            let post_array = []
            for (let i = posts.length-1; i >= 0; i--) {
                post_array.push(<div className='feed_item' key={i}>
                <div className='feed_title'>
                    <img src={current_user.profile_pic} alt=""></img>
                    <div>{posts[i].creator}</div>
                </div>
                <div className='post'>
                    <img src={posts[i].selectedFile} alt=""></img>
                    <div className='post_caption'>{posts[i].message}</div>
                </div>
                </div>)
            }
            setContent(post_array)
        }
    },[posts])

    return (
        <div className='feed'>
            {Content}
        </div>
    );
}

export default Posts;