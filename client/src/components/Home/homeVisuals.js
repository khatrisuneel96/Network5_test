import React, { useState, useEffect } from 'react';
import CalendarComponent from './calendarComponent';

function HomeVisuals(props) {

    const [Calendar, setCalendar] = useState()
    

    const currentDate = new Date();

    let getDaysInMonth = () => {
        console.log( new Date(2022, 2, 0).getDate()) //displays the number of days in the month inputted. Input is (year, month, 0)
      }

      let getMonth = () => {
        console.log(currentDate.getMonth()+1) //displays the Current Month (1-12)
      }

      let getDay = () => {
        console.log(currentDate.getDate()) //displays the current Day of the month
      }


    return (
        <div className='home'>
            <CalendarComponent></CalendarComponent>
        </div>
    );
}

export default HomeVisuals;