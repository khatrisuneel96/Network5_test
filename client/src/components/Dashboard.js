import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Dashboard(props) {

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
            <button onClick={getDaysInMonth}>Get Days In Month</button>
            <button onClick={getMonth}>Get Month</button>
            <button onClick={getDay}>Get Day</button>
            <FontAwesomeIcon className='fa' icon={faUser} />
        </div>
    );
}

export default Dashboard;