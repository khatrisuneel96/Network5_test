import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts'
import Posts from './Posts'
import Form from './Form';


function Feed() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    return (
        <div>
            feed
        </div>
    );
}

export default Feed;
