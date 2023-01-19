import React from 'react';
import DiscordLogin from './DiscordLogin';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

function Loginbar(props) {
    return (
        <div className='Loginbar'>
            <FacebookLogin></FacebookLogin>
            <GoogleLogin></GoogleLogin>
            <DiscordLogin></DiscordLogin>
        </div>
    );
}

export default Loginbar;