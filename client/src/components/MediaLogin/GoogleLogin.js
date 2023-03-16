import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGLogin } from '../../actions/loginActions'

function GoogleLogin(props) { 

    const dispatch = useDispatch()      //establishing dispatch function (necessary for some reason)

    const [searchParams] = useSearchParams()
    let access_code_pending = sessionStorage.getItem('g_code_pending')

    let login = () => {  //using login redirect to get code
        let redirect_uri = window.location.origin + "/social-add"
        window.location.replace("https://accounts.google.com/o/oauth2/v2/auth?client_id=419138563147-lblak6s03v4i6lssberpm1vr4gqg000b.apps.googleusercontent.com&redirect_uri="+redirect_uri+"&response_type=code&scope=https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/calendar.events")
        sessionStorage.setItem('g_code_pending', 'pending')
    }


        if(access_code_pending === ('pending')){
                sessionStorage.removeItem("g_code_pending");
                let code = searchParams.get("code")
                let redirect_uri = window.location.origin + "/social-add"
                
                let config = {"code":code,"redirect_uri":redirect_uri}
                dispatch(getGLogin(config))
            }



    return (
        <div>
            <button onClick={login}>Google Login</button>
        </div>
    );
}

export default GoogleLogin;