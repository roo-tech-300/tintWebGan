import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

function NotFound() {
    return (
        <div className="hero-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hero-bg" style={{ background: 'var(--background-dark)' }}>
                <div className="hero-overlay" style={{ background: 'radial-gradient(circle at center, rgba(254, 49, 223, 0.15) 0%, var(--background-dark) 70%)' }} />
            </div>

            <div className="container relative z-10">
                <div className="hero-content animate-fadeIn" style={{ textAlign: 'center' }}>
                    <div className="availability-badge" style={{ marginBottom: '1rem', background: 'rgba(254, 49, 223, 0.1)', border: '1px solid var(--primary)' }}>
                        <Ghost size={14} />
                        <span>404 Error</span>
                    </div>

                    <h1 className="hero-title" style={{ fontSize: 'clamp(5rem, 15vw, 10rem)', lineHeight: '0.8', marginBottom: '1rem' }}>
                        Lost in <span className="text-pink">Space?</span>
                    </h1>

                    <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        The page you're looking for has drifted away from the campus. Don't worry, we can get you back to safety.
                    </p>

                    <div className="hero-actions" style={{ justifyContent: 'center' }}>
                        <Link to="/" className="btn btn-primary">
                            <Home size={20} /> Back to Home
                        </Link>
                        <button onClick={() => window.history.back()} className="btn btn-ghost">
                            <ArrowLeft size={20} /> Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
