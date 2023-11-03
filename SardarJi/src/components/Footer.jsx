import '../App.css';
import logo from '../assets/react.svg';
import bgImage from '../assets/bg.png';

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${bgImage})` }} className="footer-bg relative bg-cover bg-center py-8">
            <div className="container mx-auto flex justify-between px-4">
                <div className="logo zIndex1">
                    <img src={logo} alt="Logo" className="h-12" />
                </div>
                <div className="contact-us text-white zIndex1">
                    <h3 className="text-lg font-medium mb-2">Contact Us</h3>
                    <p>123 Main Street</p>
                    <p>Anytown, USA 12345</p>
                    <p>Phone: 555-555-5555</p>
                    <p>Email: info@sardarji.com</p>
                </div>
            </div>
            <div className="container mx-auto text-center text-white mt-4">
                <p className="zIndex1">&copy; 2023 SardarJi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
