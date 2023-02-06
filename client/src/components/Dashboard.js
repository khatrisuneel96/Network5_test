import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { postCalendarEvent } from './../actions/calendarActions'

function Dashboard(props) {

  const dispatch = useDispatch()      //establishing dispatch function (necessary for some reason)
  let postEvent = async () => {       //sending email to the server (function comming from actions folder)
      dispatch(postCalendarEvent())
  }

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
        <div>
            <FontAwesomeIcon className='fa' icon={faUser} />
            <div>
              <button onClick={getDaysInMonth}>Get Days In Month</button>
              <button onClick={getMonth}>Get Month</button>
              <button onClick={getDay}>Get Day</button>
            </div>
            <div>
              <button onClick={postEvent}>Post Calendar Event</button>
            </div>
        </div>
    );
}

export default Dashboard;