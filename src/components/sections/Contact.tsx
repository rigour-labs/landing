export default function Contact() {
    return (
        <section id="contact" style={{ padding: '8rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '4rem',
                    borderRadius: '24px',
                    background: 'rgba(99, 102, 241, 0.03)',
                    border: '1px solid rgba(99, 102, 241, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '150px',
                        height: '150px',
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                    }} />

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                    <p style={{
                        color: 'var(--secondary)',
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        marginBottom: '3rem'
                    }}>
                        For inquiries regarding partnerships, institutional verification, or technical collaboration with Rigour Labs.
                    </p>

                    <div style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontWeight: '700',
                            color: 'var(--primary)'
                        }}>
                            Official Administrative Contact
                        </div>
                        <a href="mailto:admin@rigour.run" style={{
                            fontSize: '2rem',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: '600',
                            borderBottom: '2px solid var(--primary)',
                            paddingBottom: '4px',
                            transition: 'color 0.3s ease'
                        }} className="contact-link">
                            admin@rigour.run
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
