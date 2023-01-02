import React from 'react';

function Messages(props) {

    const messages = [
        { name: 'name1', time: '1 day',  message:'message1'},
        { name: 'name2', time: '2 days',  message:'message2'},
        { name: 'name3', time: '3 days',  message:'message3'},
        { name: 'name4', time: '4 days',  message:'message4'},
        { name: 'name5', time: '5 days',  message:'message5'},
        { name: 'name6', time: '6 days',  message:'message6'},
        { name: 'name7', time: '7 days',  message:'message7'},
        { name: 'name8', time: '8 days',  message:'message8'},
        { name: 'name9', time: '9 days',  message:'message9'},
        { name: 'name10', time: '10 days',  message:'message10'}
    ]

    return (
        <div>
            <div className='message_header'>{messages[0].name}</div>
            <textarea placeholder='Type a message'></textarea>
        </div>
    );
}

export default Messages;