import { Link } from 'react-router-dom';

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
                        <img src="../assets/images/logo 1.png" height={30} alt="Logo" />
                    </div>
                    <span className="logo-text" style={{ fontSize: '1.25rem' }}>Tint</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Tint. Built by Nigerian students, for Nigerian students. 🇳🇬
                </p>

                <div className="footer-links">
                    <a href="#" className="footer-link">Twitter</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">Instagram</a>
                    <Link to="/team" className="footer-link">Team</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
