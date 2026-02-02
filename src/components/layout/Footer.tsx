export default function Footer() {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '4rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{
                            fontWeight: '700',
                            fontSize: '1.1rem',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '6px',
                                background: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '900',
                                color: 'white',
                                fontSize: '0.75rem'
                            }}>R</div>
                            RIGOUR LABS
                        </div>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                            Building the next generation of high-integrity tech infrastructure. Verified. Transparent. Pure.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                        <div>
                            <h5 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Products</h5>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><a href="https://talentlyt.cloud" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>TalentLyt SaaS</a></li>
                                <li><a href="https://rigour.run" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Rigour OSS</a></li>
                                <li><a href="https://docs.rigour.run" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Documentation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Resources</h5>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><a href="https://github.com/rigour-labs" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>GitHub</a></li>
                                <li><a href="https://www.npmjs.com/package/@rigour-labs/cli" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>NPM Package</a></li>
                                <li><a href="mailto:admin@rigour-labs.dev" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Legal</h5>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><a href="/privacy" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Privacy Policy</a></li>
                                <li><a href="/terms" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: '2rem',
                    fontSize: '0.875rem',
                    color: 'var(--secondary)',
                    opacity: 0.7
                }}>
                    All products are powered by the <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Rigour Open Source Engine</a>.
                </div>

                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: 'var(--secondary)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em'
                }}>
                    <div>© {new Date().getFullYear()} RIGOUR LABS. ALL RIGHTS RESERVED.</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="/privacy" style={{ color: 'var(--secondary)' }}>Privacy</a>
                        <a href="/terms" style={{ color: 'var(--secondary)' }}>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
