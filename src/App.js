import React from 'react'
import './App.css'
import {Routes, Route} from "react-router"
import Home from './Components/Home'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className=''>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </div>
  )
}

export default App