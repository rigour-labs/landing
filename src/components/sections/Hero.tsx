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
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(600px, 90vw)',
                height: 'min(400px, 60vw)',
                background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} aria-hidden="true" />

            <div className="container">
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(129, 140, 248, 0.1)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
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
                    }} aria-hidden="true" />
                    Developer Tools &amp; SaaS
                </span>

                <h1 id="hero-heading" style={{
                    fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    maxWidth: '900px',
                    margin: '0 auto 1.5rem'
                }}>
                    Building Tools for <br />
                    <span className="text-gradient">Verifiable Software</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: 'var(--secondary)',
                    maxWidth: '800px',
                    margin: '0 auto 1.5rem',
                    lineHeight: '1.6'
                }}>
                    We build developer tools and SaaS products focused on code quality and hiring integrity. Our main products are <strong style={{ color: 'white', fontWeight: '600' }}>TalentLyt</strong> (AI interview integrity) and <strong style={{ color: 'white', fontWeight: '600' }}>Rigour CLI</strong> (code verification).
                </p>

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
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    <a href="https://talentlyt.cloud" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        TalentLyt SaaS
                        <span className="sr-only"> (opens in new tab)</span>
                    </a>
                    <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Rigour OSS
                        <span className="sr-only"> (opens in new tab)</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
