import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/offers" element={<div>Offers</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
