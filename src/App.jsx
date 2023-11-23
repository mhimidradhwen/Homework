import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Route , Routes , Link} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/ >} />
        <Route  path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
