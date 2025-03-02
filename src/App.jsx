import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
   <Header />
  <Outlet />
   <Footer/>
    </>
  )
}

export default App
