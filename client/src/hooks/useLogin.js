import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    var data = JSON.stringify({ email, password })
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/user/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
       // save the user to local storage
       const json = response.data
       localStorage.setItem('user', JSON.stringify(json))

       // update the auth context
       dispatch({type: 'LOGIN', payload: json})
 
       // update loading state
       setIsLoading(false)
    })
    .catch(function (error) {
      console.log(error)
      setIsLoading(false)
      setError(error)
    });
  

/*
    const response = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }*/
  }

  return { login, isLoading, error }
}