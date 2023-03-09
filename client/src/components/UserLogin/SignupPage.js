import { useState } from "react"
import FileBase from 'react-file-base64'
import { useSignup } from "../../hooks/useSignup"
import CustomLink from "../../customComponents/CustomLink"

const Signup = () => {
  const [Screen_name, setScreen_name] = useState('')
  const [Profile_pic, setProfile_pic] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(Screen_name, Profile_pic, Email, Password)
  }

  return (<div>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Name:</label>
      <input 
        type="screen_name" 
        onChange={(e) => setScreen_name(e.target.value)} 
        value={Screen_name} 
      />

      <div>
        Profile Picture:
        <FileBase type='file' multiple={false} onChange={(e) => setProfile_pic(e.target.value)} ></FileBase>
     </div>

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={Email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={Password} 
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    <div className="user-auth">
      Have an account? 
      <CustomLink to="/login">Log in</CustomLink>
    </div>
    </div>)
}

export default Signup