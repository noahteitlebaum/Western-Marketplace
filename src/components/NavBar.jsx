import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to = "/" className="nav-link">Home</Link>
                <Link to = "/browse" className="nav-link">Browse</Link>
                <Link to = "/sell" className="nav-link">Sell</Link>
            </div>
        </nav>
    )
}

export default NavBar