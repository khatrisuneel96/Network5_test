import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function DiscordLogin(props) {
    const [searchParams] = useSearchParams()
    let access_code_pending = sessionStorage.getItem('disc_code_pending')

    let login = () => {  //using login redirect to get code
        window.location.replace("https://discord.com/api/oauth2/authorize?response_type=code&client_id=1012896743429513367&scope=messages.read%20guilds.members.read%20guilds&state=15563059ghq9183habn&redirect_uri=https%3A%2F%2Flocalhost%3A3000&prompt=consent")
        sessionStorage.setItem('disc_code_pending', 'pending')
    }


        if(access_code_pending === ('pending')){
                sessionStorage.removeItem("disc_code_pending");
                axios.get('http://localhost:5000/login/dc?code='+searchParams.get("code"))
                .then(response => {
                    console.log(response.data)
                })
            }


    return (
        <div>
            <button onClick={login}>Discord Login</button>
        </div>
    );
}

export default DiscordLogin;