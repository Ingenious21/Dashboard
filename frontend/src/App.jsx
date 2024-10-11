import { useState } from 'react'
import './App.css'
import {Routes, Router} from 'react-router-dom'
import Dashboard1 from './components/dashboard1'
import Dashboard2 from './components/dashboard2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="" element = {<Dashboard1/>}/>
      <Route path="/dashboard2" element = {<Dashboard2/>}/>
    </Routes>
    </>
  )
}

export default App
