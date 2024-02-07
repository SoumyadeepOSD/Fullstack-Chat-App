/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './pages/login/Login'
import './index.css'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Signup /> */}
      <Home/>
    </div>
  )
}

export default App;