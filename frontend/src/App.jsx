import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Sell from './pages/Sell'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup /> } />
        </Routes>
      </main> 
      <Footer />
    </div>
  )
}

export default App