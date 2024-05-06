// import { useState } from 'react'

import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Dashboard, } from './pages/dashboard'
import { Auth } from './pages/auth'
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
 

  return (
    <Router>
<div className='app-container'>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
        <Route path='/auth' element={<Auth />}/>

  </Routes>
</div>
    
    </Router>
  )
}

export default App
