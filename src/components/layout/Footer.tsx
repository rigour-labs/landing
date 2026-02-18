import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            role="contentinfo"
            style={{
                padding: 'clamp(2rem, 4vw, 4rem) 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                marginTop: 'clamp(2rem, 4vw, 4rem)'
            }}
        >
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                    gap: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                    <div style={{ maxWidth: '300px' }}>
                        <Link
                            href="/"
                            aria-label="Rigour Labs - Home"
                            style={{
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <span style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '6px',
                                background: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '900',
                                color: '#020617',
                                fontSize: '0.75rem',
                                flexShrink: 0
                            }} aria-hidden="true">R</span>
                            RIGOUR LABS
                        </Link>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', lineHeight: '1.6', marginTop: '1rem' }}>
                            Developer tools for AI-native software verification.
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                            Founded 2025 · Based in India
                        </p>
                    </div>

                    <nav aria-label="Products navigation">
                        <h2 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Products</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="https://rigour.run" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Rigour OSS</a></li>
                            <li><a href="https://docs.rigour.run" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Documentation</a></li>
                        </ul>
                    </nav>

                    <nav aria-label="Resources navigation">
                        <h2 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Resources</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="https://github.com/rigour-labs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>GitHub</a></li>
                            <li><a href="https://www.npmjs.com/package/@rigour-labs/cli" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>NPM Package</a></li>
                            <li><a href="mailto:admin@rigour-labs.dev" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Contact Us</a></li>
                        </ul>
                    </nav>

                    <nav aria-label="Legal navigation">
                        <h2 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Legal</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/privacy" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Privacy Policy</Link></li>
                            <li><Link href="/terms" style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>Terms of Service</Link></li>
                        </ul>
                    </nav>
                </div>

                <p style={{
                    marginTop: '2rem',
                    fontSize: '0.875rem',
                    color: 'var(--secondary)',
                    opacity: 0.7
                }}>
                    All products are powered by the <a href="https://rigour.run" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Rigour Open Source Engine</a>.
                </p>

                <div style={{
                    marginTop: 'clamp(2rem, 4vw, 4rem)',
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
                    <p style={{ margin: 0 }}>© {new Date().getFullYear()} RIGOUR LABS. ALL RIGHTS RESERVED.</p>
                    <nav aria-label="Footer legal links" style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link href="/privacy" style={{ color: 'var(--secondary)' }}>Privacy</Link>
                        <Link href="/terms" style={{ color: 'var(--secondary)' }}>Terms</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
