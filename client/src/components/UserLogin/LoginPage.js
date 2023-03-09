import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import CustomLink from "../../customComponents/CustomLink"

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    console.log(email, password)
  }

  return (<div>
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <button disabled={isLoading}>Log in</button>
    </form>
    {error && <div className="error">{error}</div>}
    <div className="user-auth">
      Don't have an account? 
      <CustomLink to="/signup">Sign up</CustomLink>
    </div>
    </div>)
}

export default LoginPage