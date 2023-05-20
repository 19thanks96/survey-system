import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import styles from "./Login.module.css"
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
    <form onSubmit={handleSubmit}>
      <h1>
        Login page
      </h1>
      <h2>
        Email
      </h2>
      <input type='text' value={email} onChange={handleEmailChange}/>
      {email}
      <h2>
        Password
      </h2>
      <input type='password' value={password} onChange={handlePasswordChange}/>
      {password}
      <input type='submit' value="Submit"/>
      {isLoggedIn && "Welcome"}
      {status === 'loading' && 'loading...'}
    </form>
  )
}
