// Desc: Header component
import logo from '../assets/react.svg';

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-white mb-1 ">
            <img src={logo} alt="Logo" className="h-8" />
            <h1 className="text-black text-2xl font-bold">SardarJi</h1>
        </header>
    );
}

export default Header;
