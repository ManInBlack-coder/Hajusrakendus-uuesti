import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        
        <Route exact path='/Signup' element={<Signup />}/>
        
        <Route exact path='/Login' element={<Login />}/>

      

      </Routes>

    
    </BrowserRouter>
    
  )
}

export default App
