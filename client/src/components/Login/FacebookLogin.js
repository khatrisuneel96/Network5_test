import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
function FacebookLogin(props) {

    const [searchParams] = useSearchParams()
    let access_code_pending = sessionStorage.getItem('fb_code_pending')

    let login = () => {  //using login redirect to get code
        let scopes =  ['&scope=pages_show_list%2Cinstagram_basic%2Cpages_read_engagement']
        window.location.replace("https://www.facebook.com/v15.0/dialog/oauth?client_id=354529376664526&redirect_uri=https://localhost:3000&state=1h12j5215ggdn8ng7fj3"+scopes)
        sessionStorage.setItem('fb_code_pending', 'pending')
    }


        if(access_code_pending === ('pending')){
                sessionStorage.removeItem("fb_code_pending");
                axios.get('http://localhost:5000/login/fb?code='+searchParams.get("code"))
                .then(response => {
                    console.log(response.data)
                })
            }


    return (
        <div>
            <button onClick={login}>Facebook Login</button>
        </div>
    );
}

export default FacebookLogin;