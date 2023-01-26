import React, {useState, useEffect} from 'react';
import axios from 'axios'
function InstagramLogin(props) {

    const [Pages, setPages] = useState({})

    let login = () => {
        axios.get('http://localhost:5000/login/pages?')
        .then(response => {
            setPages(response.data.data)
        })
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:5000/login/ig', {"id": e.target.value})
        .then(response => {
            //console.log(response.data)
        })
    }

    const [Content, setContent] = useState(<button onClick={login}>Insta Login</button>)

        if(Pages.length){
            var selector = [<option key='1' value=''>Choose a page</option>]
            for (var i = 0; i < Pages.length; i++) {
                    selector.push(<option key={[i+2]} value={Pages[i].id}>{Pages[i].name}</option>)
            }
            setContent(<select onChange={handleSubmit}>{selector}</select>) //change login button to page selector
        setPages({})
        }


    return (
        <div>
            {Content}
        </div>
    );
}

export default InstagramLogin;