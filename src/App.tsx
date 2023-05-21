import React from "react"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import { Login } from "./features/login/Login"
import "./App.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SurveyResults } from "./features/surveyResults/SurveyResults"

const App: React.FC = () => { 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/survey-results" element={<SurveyResults />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
