import { Link } from 'react-router-dom';
import logo1 from './assets/images/Logo 1.png';

function Footer() {
    return (
        <footer className="main-footer bg-subtle">
            <div className="container footer-content">
                <div className="logo-group">
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
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Tint. Built by Nigerian students, for Nigerian students. 🇳🇬
                </p>

                <div className="footer-links">
                    <Link to="/team" className="footer-link">Team</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
