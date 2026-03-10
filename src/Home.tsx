import { useState } from 'react';
import bgImage from './assets/images/Bg.jpg';
import comScreen2 from './assets/images/comScreen2.png';
import {
    Calendar,
    Users,
    GraduationCap,
    CheckCircle2,
    Mail,
    ArrowRight,
    ShieldCheck,
    Zap,
    Clock,
    Trophy,
    Activity,
    MessageSquare
} from 'lucide-react';

function Home() {
    const [email, setEmail] = useState('');

    return (
        <>
            <header className="hero-wrapper">
                <div className="hero-bg">
                    <img src={bgImage} alt="Campus Background" />
                    <div className="hero-overlay" />
                </div>

                <div className="container relative z-10">
                    <div className="hero-content animate-fadeIn">
                        <div className="availability-badge">
                            <Activity size={14} />
                            <span>Available for FUT Minna</span>
                        </div>

                        <h1 className="hero-title">
                            One Campus. One App.<br />
                            <span className="text-pink">Diverse Tint.</span>
                        </h1>

                        <p className="hero-subtitle">
                            Tint brings your entire university life into one app [] find events, connect with your department, and ace your hardest courses.
                        </p>

                        <div className="hero-actions">
                            <button className="btn btn-primary">
                                Get Early Access <ArrowRight size={20} />
                            </button>
                            <button className="btn btn-ghost">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section bg-subtle">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">The Digital Pulse of Your Campus</h2>
                        <p className="section-subtitle">University life is chaotic. We're here to fix that.</p>
                    </div>

                    <div className="grid-3">
                        <div className="problem-card glass border-pink">
                            <div className="icon-wrapper pink">
                                <MessageSquare size={24} />
                            </div>
                            <h3>Fragmented Comms</h3>
                            <p>Stop scrolling through noisy unmoderated WhatsApp groups. Get structured updates in one place.</p>
                        </div>

                        <div className="problem-card glass border-purple">
                            <div className="icon-wrapper purple">
                                <Clock size={24} />
                            </div>
                            <h3>Campus Pulse</h3>
                            <p>Never find out about an event "after" it happened. Our calendar ensures you're always in the loop.</p>
                        </div>

                        <div className="problem-card glass border-blue">
                            <div className="icon-wrapper blue">
                                <GraduationCap size={24} />
                            </div>
                            <h3>Academic Struggle</h3>
                            <p>Nigerian STEM courses are tough. We provide localized tutorials built for your specific curriculum.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="section bg-tint">
                <div className="container">
                    <div className="features-split">
                        <div className="features-content">
                            <div className="section-header" style={{ textAlign: 'left', marginLeft: 0 }}>
                                <h2 className="section-title">Why Tint?</h2>
                                <p className="section-subtitle">Built for Nigerian students, by Nigerian students.</p>
                            </div>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="feature-icon-container"><Calendar size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Never Miss a Moment</h4>
                                        <p>No more scrolling noisy WhatsApp groups for event info. Everything in one place.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon-container"><Trophy size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Actually Pass Your Courses</h4>
                                        <p>Deep Dive tutorials built for heavy STEM courses Nigerian students struggle with most.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon-container"><Users size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Your Department, Organized</h4>
                                        <p>Verified departmental groups replace the chaos with structured conversations.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon-container"><ShieldCheck size={24} /></div>
                                    <div className="feature-text">
                                        <h4>A Space Built for Students</h4>
                                        <p>No randoms, no noise. Verified, campus-exclusive, and student-focused.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon-container"><Zap size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Made for Nigeria</h4>
                                        <p>We understand FUT Minna, we understand the hustle, we understand you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-graphic" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div >
                                <img src={comScreen2} className="graphic-mockup" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="section bg-subtle">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Affordable for Every Student</h2>
                        <p className="section-subtitle">Less than 3 buns and 1 zobo. No excuses.</p>
                    </div>

                    <div className="pricing-grid">
                        <div className="pricing-card glass">
                            <div className="pricing-header">
                                <h3>Freemium</h3>
                                <p>Basic campus access</p>
                            </div>
                            <div className="pricing-price">
                                Free
                            </div>
                            <ul className="pricing-features">
                                <li><CheckCircle2 className="feat-icon muted" /> Campus Calendar</li>
                                <li><CheckCircle2 className="feat-icon muted" /> Public Groups</li>
                                <li><CheckCircle2 className="feat-icon muted" /> Basic Forums</li>
                            </ul>
                            <button className="btn btn-ghost">Current Plan</button>
                        </div>

                        <div className="pricing-card glass premium">
                            <div className="popular-badge">Popular</div>
                            <div className="pricing-header">
                                <h3>Premium</h3>
                                <p>The full Tint experience</p>
                            </div>
                            <div className="pricing-price">
                                ₦600 <span>/month</span>
                            </div>
                            <ul className="pricing-features">
                                <li><CheckCircle2 className="feat-icon pink" /> Deep Dive Tutorials</li>
                                <li><CheckCircle2 className="feat-icon pink" /> Event VIP Tickets</li>
                                <li><CheckCircle2 className="feat-icon pink" /> Ad free experience</li>
                                <li><CheckCircle2 className="feat-icon pink" /> Exclusive Networking</li>
                            </ul>
                            <button className="btn btn-primary">Go Premium</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-subtle cta-footer">
                <div className="container">
                    <h2>Be the first to experience <br /> <span className="text-pink">Tint at FUT Minna.</span></h2>
                    <p>Don't be left out, hop on the Tint boat.</p>

                    <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    className="email-input"
                                    placeholder="Enter your university email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary">Join Waitlist</button>
                        </div>
                        <span className="form-hint">Join students who want to party or be serious...with Tint you can be anything</span>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Home;
