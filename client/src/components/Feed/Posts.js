import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../../actions/posts'

function Posts(props) {
    const dispatch = useDispatch()
    const current_user = JSON.parse(localStorage.getItem('user'))
    const posts = useSelector((state) => state.posts)
    const [Content, setContent] = useState()

    let delete_posts = (id) => {
        console.log(id)
    }

    useEffect ( () => {
        if (posts.length === 0) {
            return
        }
        else {
            console.log(posts) 
            let post_array = []
            for (let i = posts.length-1; i >= 0; i--) {//add post deletion here
                if (posts[i].creator === current_user.email) {
                    post_array.push(<div className='feed_item' key={i}>
                    <div className='feed_title'>
                        <img src={posts[i].profile_pic} alt=""></img>
                        <div>{posts[i].creator}</div>
                    </div>
                    <div className='post'>
                        <img src={posts[i].selectedFile} alt=""></img>
                        <div className='post_caption'>
                            {posts[i].message}
                            <div onClick={() => dispatch(deletePost(posts[i]._id))}>delete</div>
                        </div>
                    </div>
                    </div>)
                } else {
                    post_array.push(<div className='feed_item' key={i}>
                    <div className='feed_title'>
                        <img src={posts[i].profile_pic} alt=""></img>
                        <div>{posts[i].creator}</div>
                    </div>
                    <div className='post'>
                        <img src={posts[i].selectedFile} alt=""></img>
                        <div className='post_caption'>
                            {posts[i].message}
                        </div>
                    </div>
                    </div>)
                }
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