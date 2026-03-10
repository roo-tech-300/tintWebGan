import { Github, Linkedin, Twitter } from 'lucide-react';
import eluziaImg from './assets/images/Team/Eluzia.jpeg';
import gabrielImg from './assets/images/Team/Gabriel.jpeg';
import chibikeImg from './assets/images/Team/Chibike.jpeg';

const TEAM_MEMBERS = [
    {
        name: 'Eluzia Ameh-Ako',
        role: 'Founder & CEO',
        bio: 'Visionary leader with a passion for student connectivity.',
        image: eluziaImg,
    },
    {
        name: 'Gabriel Godwin',
        role: 'Lead Developer',
        bio: 'Full-stack wizard turning ideas into scalable applications.',
        image: gabrielImg,
    },
    {
        name: 'Emmanuel John',
        role: 'Lead Designer',
        bio: 'Crafting intuitive and beautiful user experiences.',
        image: chibikeImg,
    },
];

function Team() {
    return (
        <>
            <header className="hero-wrapper" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', paddingBottom: '4rem' }}>
                <div className="hero-bg" style={{ background: 'var(--bg-main)' }}>
                    <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), var(--bg-main))' }} />
                </div>

                <div className="container relative z-10" style={{ paddingTop: '8rem', width: '100%' }}>
                    <div className="hero-content animate-fadeIn" style={{ textAlign: 'center', alignItems: 'center' }}>
                        <h1 className="hero-title">
                            Meet the <span className="text-pink">Tint Team</span>
                        </h1>
                        <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            The brilliant minds working behind the scenes to bring your entire university life into one unified app.
                        </p>
                    </div>
                </div>
            </header>

            <section className="section bg-subtle">
                <div className="container">
                    <div className="grid-3">
                        {TEAM_MEMBERS.map((member, idx) => (
                            <div key={idx} className="problem-card glass border-pink" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--text-pink)' }}
                                    />
                                </div>
                                <h3>{member.name}</h3>
                                <p style={{ color: 'var(--text-pink)', fontWeight: 'bold', marginBottom: '1rem' }}>{member.role}</p>
                                <p>{member.bio}</p>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                                    <a href="#" style={{ color: 'var(--text-secondary)' }} className="hover:text-pink transition-colors"><Twitter size={20} /></a>
                                    <a href="#" style={{ color: 'var(--text-secondary)' }} className="hover:text-pink transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" style={{ color: 'var(--text-secondary)' }} className="hover:text-pink transition-colors"><Github size={20} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
