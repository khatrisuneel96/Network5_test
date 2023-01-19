import React from 'react';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

function Loginbar(props) {
    return (
        <div className='Loginbar'>
            <FacebookLogin></FacebookLogin>
            <GoogleLogin></GoogleLogin>
        </div>
    );
}

export default Loginbar;