import React, {useState} from 'react';
import axios from 'axios'
function Main(props) {

    const [Content, setContent] = useState('')

    let getFbMessages = async () => {                               //Getting Facebook Page Messages
        axios.get('http://localhost:5000/messages/fb')
        .then(response => {
            console.log(response.data.data)
            setContent(response.data.data[0].snippet)
            
        })
    }

    let getIgMessages = async () => {                               //Getting Instagram Messages
        axios.get('http://localhost:5000/messages/ig')
        .then(response => {
            console.log(response.data.data)
            //setContent(response.data.data[0].snippet)
        })
    }

    return (
        <div>
            <button onClick={getFbMessages}>Get Fb Messages</button>
            <button onClick={getIgMessages}>Get Ig Messages</button>
            <div className='message_header'>{Content}</div>
        </div>
    );
}

export default Main;