import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="Art Gallery San Francisco" />
            </Link>

            <nav className="nav">
                <Link to="/favorites">
                    <span className="heart">❤</span> Избранное
                </Link>
            </nav>
        </header>
    );
}
