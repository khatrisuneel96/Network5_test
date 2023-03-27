import React, {useState,useEffect} from 'react';
import CalendarComponent2 from './calendarComponent2';
import CalendarComponent from './calendarComponent';
import HomeFunctionality from './homeFunctionality'

function HomeVisuals(props) {

    return (
        <div className='home'>
            <CalendarComponent2></CalendarComponent2>
            <HomeFunctionality></HomeFunctionality>
        </div>
    );
}

export default HomeVisuals;