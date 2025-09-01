import { Link } from "react-router-dom"
import '../css/NavBar.css'
import Logo from '../assets/images/western-logo.png'

function NavBar() {
    return (
        <>
          <nav className="navbar">
            <img src={Logo} alt="Western Logo" className="logo"/>

            <div className="navbar-links">
                <Link to = "/" className="nav-link"> Home </Link>
                <Link to = "/browse" className="nav-link"> Browse </Link>
                <Link to = "/sell" className="nav-link"> Sell </Link>
            </div>
          </nav>
        </>
    )
}

export default NavBar