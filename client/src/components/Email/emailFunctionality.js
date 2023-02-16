import React from 'react'
import { useDispatch } from 'react-redux';
import { postEmail } from '../../actions/emailActions'
import { Buffer } from 'buffer'

function EmailFunctionality(props) {


    const dispatch = useDispatch()      //establishing dispatch function (necessary for some reason)

    let sendEmail = async (e) => {       //sending email to the server (function comming from actions folder)
        e.preventDefault()
        let data = Buffer.from(
            'Subject: '+e.target[1].value+'\n'+   //setting subject
            'To: '+e.target[0].value+'\n\n'+     //setting recipient
            e.target[2].value                   //setting body text
            ).toString('base64')
        let email = {"raw":data}
        dispatch(postEmail(email))
        alert("Email Sent!")
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
            <div><input type='email' placeholder='To:' required></input></div>
            <div><input type='text' placeholder='subject'></input></div>
            <div><textarea placeholder='body'></textarea></div>
            <div><button type='submit'>Send Email</button></div>
          </form>
        </div>
    );
}

export default EmailFunctionality;