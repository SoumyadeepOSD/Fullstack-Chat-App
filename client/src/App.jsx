/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './pages/login/Login'
import './index.css'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import {Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Toaster/>
    </div>
  )
}

export default App;