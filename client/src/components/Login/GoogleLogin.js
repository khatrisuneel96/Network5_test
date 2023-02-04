import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
function GoogleLogin(props) {

    const [searchParams] = useSearchParams()
    let access_code_pending = sessionStorage.getItem('g_code_pending')

    let login = () => {  //using login redirect to get code
        window.location.replace("https://accounts.google.com/o/oauth2/v2/auth?client_id=419138563147-lblak6s03v4i6lssberpm1vr4gqg000b.apps.googleusercontent.com&redirect_uri=https://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/calendar.events")
        sessionStorage.setItem('g_code_pending', 'pending')
    }


        if(access_code_pending === ('pending')){
                sessionStorage.removeItem("g_code_pending");
                axios.get('http://localhost:5000/login/g?code='+searchParams.get("code"))
                .then(response => {
                    console.log(response.data)
                })
            }



    return (
        <div>
            <button onClick={login}>Google Login</button>
        </div>
    );
}

export default GoogleLogin;