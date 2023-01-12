import React from 'react';
import axios from 'axios';

function Analytics(props) {

    const weather = () => {
        axios.get('http://localhost:5000/api?q=Boston')
        .then(response => {
            console.log(response.data)
    })}

    return (
        <div>
            <button onClick={weather}>weather</button>
            Analytics
        </div>
    );
}

export default Analytics;