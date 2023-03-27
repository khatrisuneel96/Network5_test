import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../api';

function CalendarComponent2(props) {

    let [CalendarArray, setCalendarArray] = useState([])
    let [Calendar, setCalendar] = useState()
    let [MonthIncrement, setMonthIncrement] = useState(0)
    //initializing months
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const todays_date = new Date();
    let todays_date_iso = todays_date.toISOString().slice(0, 10)
   
    let current_month = (todays_date.getMonth()+1) //displays the Current Month (1-12)
    let start_of_month = new Date((current_month+MonthIncrement)+", 1, 2023").getDay()

    let next_month = () => {setMonthIncrement(MonthIncrement+1)} //function to change calendar to next month
    let previous_month = () => {setMonthIncrement(MonthIncrement-1)} //function to change calendar to previous month


    let initialize_calendar = () => {
        let days_in_last_month = new Date(2023, (current_month+MonthIncrement-1), 0).getDate()
        let days_in_current_month = new Date(2023, (current_month+MonthIncrement), 0).getDate()

        let calendar_array = []
        let day_count = 1 - start_of_month
        for (let i = 0; i < 35; i++) {
            if (day_count < 1) {//last months dates
                calendar_array.push({
                     "className":'calendar_element',
                    "id":'d2023-'+String(current_month+MonthIncrement-1).padStart(2, '0')+'-'+(days_in_last_month+day_count),
                    "key":i,
                    "content":days_in_last_month+day_count,
                    //"events": []
                })
                day_count++
            } else if (day_count > days_in_current_month){//next months dates
                calendar_array.push({
                    "className":'calendar_element', 
                    "id":'d2023-'+String(current_month+MonthIncrement+1).padStart(2, '0')+'-'+String(day_count-days_in_current_month).padStart(2, '0'), 
                    "key":i,
                    "content":day_count-days_in_current_month,
                   // "events": []
                })
                day_count++
            } else {//this months dates
                calendar_array.push({
                    "className":'calendar_element', 
                    "id":'d2023-'+String(current_month+MonthIncrement).padStart(2, '0')+'-'+String(day_count).padStart(2, '0'), 
                    "key":i,
                    "content":day_count,
                   // "events": []
                }) 
                day_count++
            }
        }
        return(calendar_array)
    }

    let add_current_date = (calendar_array) => {
        calendar_array.forEach(async element => {
            if (element.id === 'd'+todays_date_iso) {
                element.className = "calendar_element current_date"
            }
        })
        return(calendar_array)
    }

    let finalize_calendar = (calendar_array) => {
        let final_calendar_array = []
            for (let i = 0; i < 35; i++) {
                if(calendar_array[i].events) {
                    //console.log(calendar_array[i].events[0].summary)
                    final_calendar_array.push(
                        <div
                        className={calendar_array[i].className}
                        key={i}>
                            {calendar_array[i].events[0].summary}
                        </div>
                    )
                } else {
                    final_calendar_array.push(
                        <div
                        className={calendar_array[i].className}
                        key={i}>
                            {calendar_array[i].content}
                        </div>
                    )
                }
            }
        return(final_calendar_array)
    }

    let add_events_callback = (calendar_array,events) => {
        calendar_array.forEach(async calendar_element => {
            events.forEach(async event_element => {
                if(event_element.start.dateTime) {
                    if (calendar_element.id.slice(1, 11) === event_element.start.dateTime.slice(0, 10)) {
                        calendar_element.events = [event_element]
                    }
                }
            })
        })
    return(calendar_array)
    }

    let add_events = (calendar_array) => {//test
        axios.get(base_url+'/calendar/get')
        .then(response => {
            let events = response.data.items
            let calendar_array_final = add_events_callback(calendar_array,events)
            let calendar_elements = finalize_calendar(calendar_array_final)
            setCalendar(<div className='calendar_parent'>{calendar_elements}</div>)
            //console.log(Calendar)
        })
        return(calendar_array)
    }
    


    useEffect(() => { 
       let calednar_step1 = initialize_calendar()
       let calednar_step2 = add_current_date(calednar_step1)
       add_events(calednar_step2)
      }, [MonthIncrement,start_of_month,current_month])

      
   
    return (
        <div className='home'>
             <button onClick={previous_month}>{'<'}</button>
            <>{months[(current_month+MonthIncrement-1)]}</>
            <button onClick={next_month}>{'>'}</button>
            {Calendar}
        </div>
    )
}

export default CalendarComponent2