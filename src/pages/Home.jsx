import "../css/Home.css"
import WesternCampus from '../assets/images/western-campus.jpg'

function Home() {
    return (
        <>
            <div className="western-campus"> 
                <img src={WesternCampus} alt="Western Campus"/>
            </div>

            <div className="home-text">
                <h1>The Marketplace Exclusively for Western University Students</h1>
                <h2>Buy and sell textbooks, electronics, furniture and more with verified UWO students. Safe, local, and designed specifically for our community.</h2>
            </div>
        </>
    )
}

export default Home
