import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFbLogin } from '../../actions/loginActions'
function FacebookLogin(props) { 

    const dispatch = useDispatch()      //establishing dispatch function (necessary for some reason)


    const [searchParams] = useSearchParams()
    let access_code_pending = sessionStorage.getItem('fb_code_pending')

    let login = () => {  //using login redirect to get code
        let scopes =  [         //setting scopes (make sure that %2C is added between scopes)
            '&scope='+
            'pages_show_list%2C'+
            'instagram_basic%2C'+
            'pages_read_engagement%2C'+
            'instagram_manage_insights%2C'+
            'pages_manage_posts'
        ]
        window.location.replace("https://www.facebook.com/v15.0/dialog/oauth?client_id=354529376664526&redirect_uri="+window.location.origin+"&state=1h12j5215ggdn8ng7fj3"+scopes)
        sessionStorage.setItem('fb_code_pending', 'pending')
    }


        if(access_code_pending === ('pending')){
                sessionStorage.removeItem("fb_code_pending")

                let code = searchParams.get("code")
                let redirect_uri = window.location.origin + '/'
                
                let config = {"code":code,"redirect_uri":redirect_uri}
                dispatch(getFbLogin(config))


        }
    return (
        <div>
            <button onClick={login}>Facebook Login</button>
        </div>
    );
}

export default FacebookLogin;