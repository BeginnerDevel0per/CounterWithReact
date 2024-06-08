import { } from 'react'
import Home from "./Page/Home/Home"
import { Route, Routes } from 'react-router-dom'
import styles from './index';
function App() {
  styles();
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </>
  )
}

export default App
