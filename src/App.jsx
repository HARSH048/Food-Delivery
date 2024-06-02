import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar />
      < Outlet />
    </div>
  )
}

export default App