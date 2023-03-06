import { useState } from "react"
import { useLogout } from "../hooks/useLogout"
import { useLogin } from "../hooks/useLogin"
import { useAuthContext } from "../hooks/useAuthContext"

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { logout } = useLogout()
  const { login, error, isLoading } = useLogin()
  const user = JSON.parse(localStorage.getItem('user'))

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    console.log(email, password)
  }

  const handleClick = () => {
      logout()
  }

  return (<>

  {!user && (
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
    </form>)}
    {error && <div className="error">{error}</div>}
    {user &&(<>
    <span>{user.email}</span>
    <button onClick={handleClick}>Log Out</button></>
    )}
    </>)
}

export default LoginPage