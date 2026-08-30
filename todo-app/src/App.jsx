import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Todos from './Components/Todos.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {

  return(
    <>
      <Navbar />
      <Todos />
      <Footer />
    </>
  )
}

export default App
