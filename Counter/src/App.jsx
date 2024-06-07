import {} from 'react'

import './App.css'
import Counter from './Components/Counter/Counter'
import Home from "./Components/Home/Home"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
        <Routes>
        <Route path='/' element={<Home></Home>} />
          <Route path='/Counter/:count' element={<Counter></Counter>} />
        </Routes>
    </>
  )
}

export default App
