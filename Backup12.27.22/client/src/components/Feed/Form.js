import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';


import { createPost } from '../../actions/posts'
function Form(props) {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost(postData))
    }

    const clear = () => {

    }
    return (
        <div>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div variant='h6'>Creating a Memory</div>
                    <textarea  placeholder='Creator' value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></textarea>
                    <textarea placeholder='Title' value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })}></textarea>
                    <textarea  placeholder='Message' value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                    <textarea  placeholder='Tags' value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value })}></textarea>
                    <div>
                        <FileBase type='file' multiple={false} onDone={({base64}) =>setPostData({ ...postData, selectedFile: base64})}></FileBase>
                    </div>
                    <button>Submit</button>
                    <button onClick={clear}>Clear</button>
                </form>
        </div>
    );
}

export default Form;