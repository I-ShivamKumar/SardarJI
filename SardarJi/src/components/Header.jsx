// Desc: Header component
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="flex items-center justify-center px-4 py-3 bg-white mb-1 ">
            <img src={logo} alt="Logo" className="h-[70px]" />
            <h1 className="text-black text-2xl font-bold">SardarJi</h1>
        </header>
    );
}

export default Header;
