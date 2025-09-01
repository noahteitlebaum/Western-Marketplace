import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Sell from './pages/Sell'
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
        </Routes>
      </main> 
    </div>
  )
}

export default App
