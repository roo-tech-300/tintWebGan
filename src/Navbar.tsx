import { Link } from 'react-router-dom';
import logo1 from './assets/images/Logo 1.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo-group" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div><img src={logo1} height={40} alt="Logo" /></div>
                </Link>

                <div className="nav-links">
                    <Link to="/#why" className="nav-link">Why Tint?</Link>
                    <Link to="/#features" className="nav-link">Features</Link>
                    <Link to="/#pricing" className="nav-link">Pricing</Link>
                    <button className="btn btn-primary">Join Waitlist</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
