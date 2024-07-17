import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Addprod from './components/Addprod'
import Viewprod from './components/Viewprod'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewprod/>}></Route>
        <Route path='/add' element={<Addprod/>}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
