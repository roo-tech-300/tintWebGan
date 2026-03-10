import { Link, useLocation } from 'react-router-dom';
import logo1 from './assets/images/Logo 1.png';

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <footer className="main-footer bg-subtle">
            <div className="container footer-content">
                <Link to="/" className="logo-group" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <img src={logo1} height={30} alt="Logo" />
                    </div>
                    <span className="logo-text" style={{ fontSize: '1.25rem' }}>Tint</span>
                </Link>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Tint. Built by Nigerian students, for Nigerian students. 🇳🇬
                </p>

                <div className="footer-links">
                    {isHome ? (
                        <Link to="/team" className="footer-link">Team</Link>
                    ) : (
                        <Link to="/" className="footer-link">Home</Link>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
