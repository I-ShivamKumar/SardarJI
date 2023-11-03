import '../App.css';
import logo from '../assets/logo.png';
import bgImage from '../assets/bg.png';

const Footer = () => {
    const phoneNumber = "+919818863356";
    const email = "info@sardarji.com";
    return (
        <footer style={{ backgroundImage: `url(${bgImage})` }} className="footer-bg relative bg-cover bg-center py-8">
            <div className="container mx-auto flex justify-between px-4">
                <div className="logo zIndex1">
                    <img src={logo} alt="Logo" className="h-[120px]" />
                </div>
                <div className="contact-us text-white zIndex1">
                    <h3 className="text-lg font-medium mb-2">Contact Us</h3>
                    <p>F-122</p>
                    <p>Rajouri Garden Main Market</p>
                    <p> New Delhi-110027</p>
                    <p>Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                </div>
            </div>
            <div className="container mx-auto text-center text-white mt-4">
                <p className="zIndex1">&copy; 2023 SardarJi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
