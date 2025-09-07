import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Sell from './pages/Sell'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { Routes, Route, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet /> {/** Render child routes */}
      <Footer />
    </>
  )
}

function App() {
  return (
    <div>
      <main className="main-content">
        <Routes>
          { /** Routes with Navbar */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/sell" element={<Sell />} />
          </Route>
        
          { /** Routes without Navbar */}
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup /> } />
        </Routes>
      </main> 
    </div>
  )
}

export default App