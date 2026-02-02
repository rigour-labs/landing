export default function Hero() {
    return (
        <section style={{
            padding: '10rem 0 6rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    color: 'var(--primary)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '2rem'
                }}>
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        boxShadow: '0 0 10px var(--primary)'
                    }} />
                    Developer Tools & SaaS
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    maxWidth: '900px',
                    margin: '0 auto 1.5rem'
                }}>
                    Building Tools for <br />
                    <span className="text-gradient">Verifiable Software</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--secondary)',
                    maxWidth: '800px',
                    margin: '0 auto 1.5rem',
                    lineHeight: '1.6'
                }}>
                    We build developer tools and SaaS products focused on code quality and hiring integrity. Our main products are <span style={{ color: 'white', fontWeight: '600' }}>TalentLyt</span> (AI interview integrity) and <span style={{ color: 'white', fontWeight: '600' }}>Rigour CLI</span> (code verification).
                </p>

                <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--secondary)',
                    marginBottom: '3rem',
                    opacity: 0.8
                }}>
                    Powered by <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Rigour OSS</a> — our open-source engine for verifiable code.
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    <a href="https://talentlyt.cloud" target="_blank" rel="noopener noreferrer" className="btn-primary">TalentLyt SaaS</a>
                    <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" className="btn-secondary">Rigour OSS</a>
                </div>
            </div>
        </section>
    );
}
