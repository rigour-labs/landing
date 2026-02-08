export default function Hero() {
    return (
        <section aria-labelledby="hero-heading" style={{
            padding: 'clamp(6rem, 12vw, 10rem) 0 clamp(3rem, 6vw, 6rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
                zIndex: -1
            }} aria-hidden="true" />

            <div style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(800px, 100vw)',
                height: 'min(500px, 80vw)',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }} aria-hidden="true" />

            <div className="container">
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    color: 'var(--primary)',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '2.5rem',
                    backdropFilter: 'blur(10px)'
                }}>
                    <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        boxShadow: '0 0 12px var(--primary)'
                    }} aria-hidden="true" />
                    World-First Verification Engine
                </div>

                <h1 id="hero-heading" style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    lineHeight: '1',
                    marginBottom: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto 2rem',
                    letterSpacing: '-0.04em',
                    fontWeight: '800'
                }}>
                    Engineering Trust in <br />
                    <span className="text-gradient">AI-Native Software</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.4rem)',
                    color: 'var(--secondary)',
                    maxWidth: '800px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.6',
                    fontWeight: '400'
                }}>
                    Professional developer tools and autonomous SaaS designed for technical integrity. <span style={{ color: '#ffffff', fontWeight: '600' }}>Rigovo</span> handles hiring, <span style={{ color: '#ffffff', fontWeight: '600' }}>Rigour CLI</span> handles code.
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '3.5rem',
                    fontSize: '0.8125rem',
                    color: 'var(--secondary)',
                    opacity: 0.7
                }}>
                    <span style={{ width: '12px', height: '1px', background: 'var(--card-border)' }} />
                    Formerly known as TalentLyt
                    <span style={{ width: '12px', height: '1px', background: 'var(--card-border)' }} />
                </div>

                <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--secondary)',
                    marginBottom: '3rem',
                    opacity: 0.8
                }}>
                    Powered by <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: '500' }}>Rigour OSS</a> — our open-source engine for verifiable code.
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.25rem',
                    flexWrap: 'wrap'
                }}>
                    <a href="https://rigovo.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ minWidth: '180px' }}>
                        Rigovo SaaS
                    </a>
                    <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ minWidth: '180px' }}>
                        Explore Rigour OSS
                    </a>
                </div>
            </div>
        </section >
    );
}
