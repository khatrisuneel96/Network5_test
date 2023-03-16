import React, { useState, useEffect } from 'react';

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
    useEffect(() => { 
      let calendar_array = []
      for (let i = 0; i < 35; i++) {
          calendar_array.push(<div className='calendar_element'></div>)
      }
      setCalendar(<div className='calendar_parent'>{calendar_array}</div>)
    }, [])


    return (
        <div className='home'>
            {Calendar}
        </div>
    );
}

export default HomeVisuals;