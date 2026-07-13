import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import AddDonor from './components/AddDonor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddDonor />
    </>
  )
}

export default App
