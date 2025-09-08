import '../css/Footer.css'
import Logo from '../assets/images/western-logo.png'
import EmailIcon from '../assets/images/email-icon.png'
import InstagramIcon from '../assets/images/instagram-icon.png'
import PinIcon from '../assets/images/pin-icon.png'


function Footer() {
    return (
        <>
            <div className="footer">
                <img src={Logo} alt="Western Logo" className="footer-logo"/>

                <div className="collumns-text">
                    <h1>QUICK LINKS</h1>
                    <p>Home</p>
                    <p>Browse</p>
                    <p>Sell Items</p>
                    <p>Requests</p>
                    <p>About</p>
                </div>

                <div className="collumns-text">
                    <h1>CATEGORIES</h1>
                    <p>Textbooks</p>
                    <p>Electronics</p>
                    <p>Housing</p>
                    <p>Furniture</p>
                    <p>Transportation</p>
                </div>

                <div className="collumns-text">
                    <h1>STAY CONNECTED</h1>

                    <div className="connected-text">                        
                        <img src={EmailIcon} alt="Email Icon" className="connected-icon"/>
                        <p>uwomarket@gmail.com</p>
                    </div>

                    <div className="connected-text">                        
                        <img src={InstagramIcon} alt="Instagram Icon" className="connected-icon"/>
                        <p>@uwomarket</p>
                    </div>

                    <div className="connected-text">                        
                        <img src={PinIcon} alt="Pin Icon" className="pin-icon"/>
                        <p>University of Western Ontario</p>
                    </div>
                </div>

                <p className="footer-text">
                    Welcome to the ultimate marketplace for Western University students! Buy, sell, and trade everything you need including textbooks, electronics, and furniture while connecting with fellow Mustangs in a safe and trusted space. Join our community to save money, meet new people, and make campus life easier and more fun.
                </p>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Western Marketplace. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer