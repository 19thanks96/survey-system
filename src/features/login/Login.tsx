import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import 'bootstrap/dist/css/bootstrap.css';
//import {styles} from "./Login.module.css"
//import styles from "*.module.css"

import { submitLogin, submitLoginAsync, selectIsLoggedIn, selectStatus } from "./loginSlice"

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const status = useAppSelector(selectStatus)
  console.log(status)

  
  const dispatch = useAppDispatch()

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(email, password)
    dispatch(submitLoginAsync({email, password}))
  }
  return (
    <form onSubmit={handleSubmit}  >
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type='text' 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        value={email} 
        onChange={handleEmailChange}/>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type='password' 
        value={password} 
        className="form-control" 
        id="exampleInputPassword1" 
        onChange={handlePasswordChange}/>
      </div>
      <div className="mb-3 form-check"> 
        <p>{isLoggedIn && "Welcome"}</p>
        <p>{status === 'loading' && 'loading...'}</p>
      </div>
      <input className="btn btn-primary" type='submit' value="Submit"/>
    </form>
  )
}
