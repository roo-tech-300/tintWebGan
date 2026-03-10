import { useState } from 'react';
import { Github, Linkedin, Twitter, X } from 'lucide-react';
import eluziaImg from './assets/images/Team/Eluzia.jpeg';
import gabrielImg from './assets/images/Team/Gabriel.jpeg';
import chibikeImg from './assets/images/Team/Chibike.jpeg';

const TEAM_MEMBERS = [
    {
        name: 'Eluzia Ameh-Ako',
        role: 'Founder & CEO',
        bio: "Eluzia is a Computer Engineering student at the Federal University of Technology, Minna, with a proven track record in software development and operations management. A specialist in modern web technologies like React and TypeScript, Eluzia has engineered high-impact solutions, including a campus-wide ticketing platform and a postgraduate management system. Beyond the code, his experience at Global Computer Technologies—managing business functions and technical instruction—has equipped him with a unique blend of technical mastery and operational leadership. As a co-founder of Tint, he leverages this self-driven approach to oversee the company’s operations and build the future of the Nigerian student experience.",
        image: eluziaImg,
    },
    {
        name: 'Emmanuel John',
        role: 'Head of operations',
        bio: 'Emmanuel is a Geology student by training whose true professional passion lies in the intersection of operations, branding, and human connection. With a background in marketing and growth at Sure Foundation and Taberah Glory, he proved his ability to drive results in high-pressure environments. His breakthrough came at the fashion brand Made by Boski, where he spearheaded growth efforts through creative strategy and relationship management. A natural networker and problem-solver, Emmanuel brings a unique cross-disciplinary perspective to the team. As Head of Operations, he leverages his energy and organizational expertise to streamline Tint’s internal processes, manage key partnerships, and ensure the seamless delivery of the company’s vision.',
        image: chibikeImg,
    },
    {
        name: 'Gabriel Godwin',
        role: 'Lead Developer',
        bio: 'Gabriel is a Mechatronics Engineering student at the Federal University of Technology, Minna, with a robust foundation spanning software development, embedded systems, and IoT. His multidisciplinary expertise bridges the gap between hardware and software—ranging from Arduino-based prototypes to modern frontend web development and blockchain integration through the Solana All-Star Program. Having completed rigorous technical training with the ESRIG Cohort, Gabriel is highly skilled in collaborative development and version control. Driven by a relentless curiosity for cross-domain technology, he leads the company’s technical vision, transforming complex ideas into scalable product solutions.',
        image: gabrielImg,
    },
];

function Team() {
    const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

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
                        {TEAM_MEMBERS.map((member, idx) => {
                            const isLongBio = member.bio.length > 120;
                            const displayBio = isLongBio ? `${member.bio.substring(0, 120)}...` : member.bio;

                            return (
                                <div key={idx} className="problem-card glass border-pink" style={{ textAlign: 'center', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--text-pink)' }}
                                        />
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p style={{ color: 'var(--text-pink)', fontWeight: 'bold', marginBottom: '1rem' }}>{member.role}</p>
                                    <p style={{ flexGrow: 1 }}>
                                        {displayBio}
                                        {isLongBio && (
                                            <button
                                                onClick={() => setSelectedMember(member)}
                                                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px', padding: 0 }}
                                            >
                                                Read More
                                            </button>
                                        )}
                                    </p>

                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                                        <a href="#" style={{ color: 'var(--text-secondary)' }} className="nav-link"><Twitter size={20} /></a>
                                        <a href="#" style={{ color: 'var(--text-secondary)' }} className="nav-link"><Linkedin size={20} /></a>
                                        <a href="#" style={{ color: 'var(--text-secondary)' }} className="nav-link"><Github size={20} /></a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modal Overlay */}
            {selectedMember && (
                <div
                    className="modal-overlay animate-fadeIn"
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem'
                    }}
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="glass border-pink animate-fadeIn"
                        style={{
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '80vh',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '3rem',
                            position: 'relative',
                            background: 'var(--surface)',
                            border: '1px solid var(--primary-glow)',
                            overflow: 'hidden'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMember(null)}
                            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', zIndex: 10 }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: '2rem', flexShrink: 0 }}>
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--text-pink)' }}
                            />
                            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedMember.name}</h2>
                            <p style={{ color: 'var(--text-pink)', fontWeight: 'bold' }}>{selectedMember.role}</p>
                        </div>

                        <div style={{ overflowY: 'auto', paddingRight: '1rem', flexGrow: 1 }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                {selectedMember.bio}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Team;
