import React from 'react';
import { useDispatch } from 'react-redux';
import { postCalendarEvent } from '../../actions/calendarActions'
import { useSelector } from 'react-redux'
import axios from 'axios';

function DashboardFunctionality(props) {

  const events = useSelector((state) => state.events)


  const dispatch = useDispatch()      //establishing dispatch function (necessary for some reason)

  let postEvent = async (e) => {
    e.preventDefault()
    var cal_event = {
      "summary": e.target[0].value,
      "location": e.target[1].value,
      "description": e.target[2].value,
      "start": {
        "dateTime": e.target[3].value+':00',
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      "end": {
        "dateTime": e.target[4].value+':00',
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }
    dispatch(postCalendarEvent(cal_event))
    alert("Event Scehduled!")
  }
  
  let getEvents = async (e) => {
    axios.get('http://localhost:5000/calendar/get')
    .then(response => {
        console.log(response.data)})
  }

    return (
        <div>
          <form onSubmit={postEvent}>
            <div><textarea placeholder='title'></textarea></div>
            <div><textarea placeholder='location'></textarea></div>
            <div><textarea placeholder='description'></textarea></div>
            <div>
            <input type="datetime-local" required></input>
            <input type="datetime-local" required></input>
            </div>
            <div><button type='submit'>Schedule Event</button></div>
          </form>
          <button onClick={()=>console.log(events)}>test</button>
          <button onClick={getEvents}>Get calendar Events</button>
        </div>
    );
}

export default DashboardFunctionality;