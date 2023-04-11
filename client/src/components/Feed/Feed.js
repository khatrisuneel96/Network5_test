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

    function display2() {
        var x = document.getElementById("popup4");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }


    return (
        <div>
            <div className='component_parent'>
                <div className = 'component_header'>Feed <FontAwesomeIcon icon={faListUl}/></div>
                <button onClick={display2}>+ Create Post</button>
                <div id='popup4'><Form></Form></div>
                <Posts></Posts>
            </div>
        </div>
    );
}

export default Feed;
