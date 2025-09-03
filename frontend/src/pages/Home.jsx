import WesternCampus from '../assets/images/western-campus.jpg'
import { useState } from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return

        alert('Searching...')
        setSearchQuery("") // Clear the search input after submission
    }

    return (
        <>
            <div className="western-campus"> 
                <img src={WesternCampus} alt="Western Campus" className="western-campus-img"/>

                <div className="banner-overlay">
                    <div className="home-text">
                        <h1>The Marketplace Exclusively for <span className="highlight">Western University </span>Students</h1>
                        <br></br>
                        <h2>Buy and sell textbooks, electronics, furniture and more with verified UWO students. Safe, local, and designed specifically for our community.</h2>
                    </div>

                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search for items..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
