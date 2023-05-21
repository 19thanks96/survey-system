import React from "react"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import { Login } from "./features/login/Login"
import "./App.css"


const App: React.FC = () => { 
  return (
    <div className='App'>
      <Login></Login>
    </div>
  )
}

export default App
