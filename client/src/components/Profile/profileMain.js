import React, { useState } from 'react';
import ProfileEdit from './profileEdit';
import ProfileView from './profileView';

function ProfileMain(props) {

    const [View_mode, setView_mode] = useState(true)
    const [Content, setContent] = useState(<ProfileView></ProfileView>)
    

    let change_view = () => {
        if (View_mode === true) {
            setContent(<ProfileEdit></ProfileEdit>)
            console.log(View_mode)
            setView_mode(false)
        } else {
            setContent(<ProfileView></ProfileView>)
            console.log(View_mode)
            setView_mode(true)
        }}
    

    return (
        <div>
            {Content}
            <button onClick={change_view}>Set to View</button>
        </div>
    );
}

export default ProfileMain;