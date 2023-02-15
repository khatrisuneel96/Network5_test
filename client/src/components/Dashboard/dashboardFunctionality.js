import React from 'react';
import { useDispatch } from 'react-redux';
import { postCalendarEvent } from '../../actions/calendarActions'

function DashboardFunctionality(props) {

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
        </div>
    );
}

export default DashboardFunctionality;