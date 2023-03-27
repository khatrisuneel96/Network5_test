import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../api';

function CalendarComponent(props) {

    const [Calendar, setCalendar] = useState()
    let [MonthIncrement, setMonthIncrement] = useState(0)
    let [CurrentDate, setCurrentDate] = useState()
    //initializing months
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const todays_date = new Date();
    let todays_date1 = todays_date.toISOString().slice(0, 10)
    //console.log(todays_date1)
   
    let current_month = (todays_date.getMonth()+1) //displays the Current Month (1-12)

    let start_of_month = new Date((current_month+MonthIncrement)+", 1, 2023").getDay()

    let next_month = () => {setMonthIncrement(MonthIncrement+1)} //function to change calendar to next month
    let previous_month = () => {setMonthIncrement(MonthIncrement-1)} //function to change calendar to previous month

    useEffect(() => { 
        let days_in_last_month = new Date(2023, (current_month+MonthIncrement-1), 0).getDate()
        let days_in_current_month = new Date(2023, (current_month+MonthIncrement), 0).getDate()

        let calendar_array = []
        let day_count = 1 - start_of_month
        for (let i = 0; i < 35; i++) {
            if (day_count < 1) {//last months dates
                calendar_array.push(
                    <div className='calendar_element' 
                    id={'d2023-'+String(current_month+MonthIncrement-1).padStart(2, '0')+'-'+(days_in_last_month+day_count)}
                    key={i}>{days_in_last_month+day_count}</div>)
                day_count++
            } else if (day_count > days_in_current_month){//next months dates
                calendar_array.push(
                    <div className='calendar_element' 
                    id={'d2023-'+String(current_month+MonthIncrement+1).padStart(2, '0')+'-'+String(day_count-days_in_current_month).padStart(2, '0')} 
                    key={i}>{day_count-days_in_current_month}</div>)
                day_count++
            } else {//this months dates
                calendar_array.push(
                    <div className='calendar_element' 
                    id={'d2023-'+String(current_month+MonthIncrement).padStart(2, '0')+'-'+String(day_count).padStart(2, '0')} 
                    key={i}>{day_count}</div>)
                day_count++
            }
        }
        setCalendar(<div className='calendar_parent'>{calendar_array}</div>)
      }, [MonthIncrement,start_of_month,current_month])

      
      useEffect(() => { 

        axios.get(base_url+'/calendar/get')
        .then(response => {
            console.log(response.data.items)
            let events = response.data.items

            for (let i = 0; i < events.length; i++) {
                
            }

        })
        //highlighting current date
        setCurrentDate(document.querySelector("#d"+todays_date1))
        if(CurrentDate) {
            CurrentDate.style.backgroundColor = ("#dbdbdb")
            //console.log(CurrentDate)
        }
      },[CurrentDate,todays_date1,MonthIncrement])
      

    return (
        <div className='home'>
            <button onClick={previous_month}>{'<'}</button>
            <>{months[(current_month+MonthIncrement-1)]}</>
            <button onClick={next_month}>{'>'}</button>
            {Calendar}
        </div>
    )
}

export default CalendarComponent;