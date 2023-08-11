import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GettingStarted from './Pages/GettingStarted'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import HomePage from './Pages/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        {/* <CSSReset></CSSReset> */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/offers" element={<div>Offers</div>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  )
}

export default App
