import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { postEmail } from './../actions/emailActions'

function Email(props) {

    const dispatch = useDispatch()      //establishing dispatch function (necessary for some reason)
    let sendEmail = async () => {       //sending email to the server (function comming from actions folder)
        dispatch(postEmail())
    }

    

    const emails = [
        { name: 'name1', date: '1/1/23', subject: 'subject1', message:'message1'},
        { name: 'name2', date: '1/2/23', subject: 'subject2', message:'message2'},
        { name: 'name3', date: '1/3/23', subject: 'subject3', message:'message3'},
        { name: 'name4', date: '1/4/23', subject: 'subject4', message:'message4'},
        { name: 'name5', date: '1/5/23', subject: 'subject5', message:'message5'},
    ]

    return (
        <div>
            <button onClick={sendEmail}>Send Email</button>
            <div className='email_header'>{emails[0].subject}</div>
        </div>
    );
}

export default Email;