import React, { useState } from 'react'
import { io } from 'socket.io-client'

function MessageVisuals(props) {

    const [Message, setMessage] = useState()

    const socket = io('http://localhost:5000')
    socket.on('connect', () => {
       console.log(socket.id) //console log ON CONNECTION
    })

    socket.on('recieve-message', message => {   //when message comes back from server
        setMessage(message)
    })

    socket.emit('custom-event', 10, 'Hi', {a: 'a'})

    let sendMessage = async (e) => {    //submitting the message to the server
        e.preventDefault()
        let message = e.target[0].value
        socket.emit('send-message', message)
        //console.log(e.target[0].value)
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
            <div><textarea placeholder='message'></textarea></div>
            <div><button type='submit'>send</button></div>
          </form>
          <div>{Message}</div>
        </div>
    );
}

export default MessageVisuals;