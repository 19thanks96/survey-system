import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import styles from "./Login.module.css"

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }
  return (
    <div>
      <h1>
        Login page
      </h1>
      <h2>
        Email
      </h2>
      <input value={email} onChange={handleEmailChange}/>
      {email}
      <h2>
        Password
      </h2>
      <input value={password} onChange={handlePasswordChange}/>
      {password}
    </div>
  )
}
