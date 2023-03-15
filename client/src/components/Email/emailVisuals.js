import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox,faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Emailvisuals(props) {

    const emails = [
        { name: 'name1', date: '1/1/23', subject: 'subject1', message:'message1'},
        { name: 'name2', date: '1/2/23', subject: 'subject2', message:'message2'},
        { name: 'name3', date: '1/3/23', subject: 'subject3', message:'message3'},
        { name: 'name4', date: '1/4/23', subject: 'subject4', message:'message4'},
        { name: 'name5', date: '1/5/23', subject: 'subject5', message:'message5'},
    ]

// Email Front End  
    return (
        <div>
            <div className = 'email_box_parent'>
                <div className = 'email_header'>Email <FontAwesomeIcon icon={faEnvelope}/></div>
                <div className = 'email_box'>
                    <div className = 'email_box_top'>
                        <div className = 'email_box_top_text'>All</div>
                    </div>
                    <textarea className = 'email_searchBar' placeholder='Search Emails'></textarea>
                    <div className = 'email_info_header'>
                             <FontAwesomeIcon className = 'inbox_icon' icon={faInbox}/>
                            <div className = 'email_info_header_text'>
                                   <div className = "email_box_parent-item Email-grid-item-1">Name</div>  
                                   <div className = "email_box_parent-item Email-grid-item-2">Subject</div>  
                                   <div className = "email_box_parent-item Email-grid-item-3">Message</div>  
                                   <div className = "email_box_parent-item Email-grid-item-4">Date</div>  
                            </div> 
                    </div>
                    <div className = 'email_receive_box'>
                        <div className = "email_receive_parent">  
                                   <div className = "email_receive_parent-item Receive-grid-item-1">{emails[0].name}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-2">{emails[0].subject}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-3">{emails[0].message}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-4">{emails[0].date}</div> 
                        </div>
                        <div className = "email_receive_parent">
                                   <div className = "email_receive_parent-item Receive-grid-item-1">{emails[1].name}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-2">{emails[1].subject}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-3">{emails[1].message}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-4">{emails[1].date}</div> 
                        </div>
                        <div className = "email_receive_parent">
                                   <div className = "email_receive_parent-item Receive-grid-item-1">{emails[2].name}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-2">{emails[2].subject}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-3">{emails[2].message}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-4">{emails[2].date}</div> 
                        </div>
                        <div className = "email_receive_parent">
                                   <div className = "email_receive_parent-item Receive-grid-item-1">{emails[3].name}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-2">{emails[3].subject}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-3">{emails[3].message}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-4">{emails[3].date}</div> 
                        </div>
                        <div className = "email_receive_parent">
                                   <div className = "email_receive_parent-item Receive-grid-item-1">{emails[4].name}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-2">{emails[4].subject}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-3">{emails[4].message}</div>  
                                   <div className = "email_receive_parent-item Receive-grid-item-4">{emails[4].date}</div> 
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Emailvisuals;