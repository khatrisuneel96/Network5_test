import React, { useState, useEffect } from 'react';

function CalendarComponent(props) {

    const [Calendar, setCalendar] = useState()
    let [Month_increment, setMonth_increment] = useState(0)
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const currentDate = new Date();

    let current_month = (currentDate.getMonth()+1) //displays the Current Month (1-12)


    console.log("current month = "+(current_month+Month_increment))

    let start_of_month = new Date((current_month+Month_increment)+", 1, 2023").getDay()

    let next_month = () => {setMonth_increment(Month_increment+1)}
    let previous_month = () => {setMonth_increment(Month_increment-1)}

    useEffect(() => { 
        console.log('render')
        let calendar_array = []
        let day_count = 1 - start_of_month
        for (let i = 0; i < 35; i++) {

            calendar_array.push(<div className='calendar_element' key={i}>{day_count}</div>)
            day_count++
        }
        setCalendar(<div className='calendar_parent'>{calendar_array}</div>)
      }, [Month_increment,start_of_month])

    return (
        <div className='home'>
            <button onClick={previous_month}>{'<'}</button>
            <button onClick={next_month}>{'>'}</button>
            <>{months[(current_month+Month_increment-1)]}</>
            {Calendar}
        </div>
    )
}

export default CalendarComponent;