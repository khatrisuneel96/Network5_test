import React, {useState,useEffect} from 'react';
import CalendarComponent2 from './calendarComponent2';
import HomeFunctionality from './homeFunctionality'
import LoginList from '../MediaLogin/LoginList';

function HomeVisuals(props) {

    return (
        <div className='home'>
            <div className='home_post_buttons'>
                <button>+ Create Post</button>
                <button>+ Create Event</button>
            </div>
            <CalendarComponent2></CalendarComponent2>
            <HomeFunctionality></HomeFunctionality>
        </div>
    );
}

export default HomeVisuals;