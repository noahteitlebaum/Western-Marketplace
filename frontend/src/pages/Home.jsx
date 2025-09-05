import WesternCampus from '../assets/images/western-campus.jpg'
import TextbooksIcon from '../assets/images/textbook-icon.png'
import ElectronicsIcon from '../assets/images/laptop-icon.png'
import HousingIcon from '../assets/images/house-icon.png'
import FurnitureIcon from '../assets/images/couch-icon.png'
import TransportationIcon from '../assets/images/bike-icon.png'
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
            <div className="banner"> 
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

            <div>
               <h2 className="browse-title">Browse By Category</h2> 
               <h4 className="browse-text">Find exactly what you need, organized by category</h4>
            </div>
            
            <form className="category-row">
                <button className="category-box textbooks">
                    <div className="category-icon-circle">
                        <img src={TextbooksIcon} alt="Textbooks" className="category-img"/>
                    </div>
                    <h3 className="category-title">Textbooks</h3>
                    <p className="category-text">Find textbooks for all courses</p>
                </button>

                <button className="category-box electronics">
                    <div className="category-icon-circle">
                        <img src={ElectronicsIcon} alt="Electronics" className="category-img"/>
                    </div>
                    <h3 className="category-title">Electronics</h3>
                    <p className="category-text">Laptops, calculators, tablets</p>
                </button>

                <button className="category-box housing">
                    <div className="category-icon-circle">
                        <img src={HousingIcon} alt="Housing" className="category-img"/>
                    </div>
                    <h3 className="category-title">Housing</h3>
                    <p className="category-text">Find roommates and student housing</p>
                </button>

                <button className="category-box furniture">
                    <div className="category-icon-circle">
                        <img src={FurnitureIcon} alt="Furniture" className="category-img"/>
                    </div>
                    <h3 className="category-title">Furniture</h3>
                    <p className="category-text">Desks, chairs, shelves</p>
                </button>

                <button className="category-box transportation">
                    <div className="category-icon-circle">
                        <img src={TransportationIcon} alt="Transportation" className="category-img"/>
                    </div>
                    <h3 className="category-title">Transportation</h3>
                    <p className="category-text">Bikes, scooters, rideshares</p>
                </button>
            </form>
        </>
    )
}

export default Home
