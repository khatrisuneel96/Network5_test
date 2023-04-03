import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

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
            <div className='component_parent'>
                <div className = 'component_header'>Feed <FontAwesomeIcon icon={faListUl}/></div>
                <Form></Form>
                <Posts></Posts>
            </div>
        </div>
    );
}

export default Feed;
