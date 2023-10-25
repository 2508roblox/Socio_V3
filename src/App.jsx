import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/'  element={<HomeScreen/>}/>
          <Route path='*' />

        </Routes>
     </>
  )
}

export default App
