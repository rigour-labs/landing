export default function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-heading" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: 'clamp(2rem, 4vw, 4rem)',
                    borderRadius: '24px',
                    background: 'rgba(129, 140, 248, 0.03)',
                    border: '1px solid rgba(129, 140, 248, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: 'min(150px, 30vw)',
                        height: 'min(150px, 30vw)',
                        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                    }} aria-hidden="true" />

                    <h2 id="contact-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Get in Touch</h2>
                    <p style={{
                        color: 'var(--secondary)',
                        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                        lineHeight: '1.7',
                        marginBottom: 'clamp(1.5rem, 3vw, 3rem)'
                    }}>
                        Want to try Rigovo beta? Have questions about Rigour CLI? Just want to say hi? Drop us a line.
                    </p>

                    <address style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        fontStyle: 'normal'
                    }}>
                        <span style={{
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontWeight: '700',
                            color: 'var(--primary)'
                        }}>
                            Email Us
                        </span>
                        <a
                            href="mailto:admin@rigour-labs.dev"
                            aria-label="Send email to admin@rigour-labs.dev"
                            style={{
                                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                                color: 'white',
                                textDecoration: 'underline',
                                textUnderlineOffset: '4px',
                                textDecorationColor: 'var(--primary)',
                                fontWeight: '600',
                                transition: 'color 0.3s ease',
                                wordBreak: 'break-word'
                            }}
                        >
                            admin@rigour-labs.dev
                        </a>
                    </address>
                </div>
            </div>
        </section>
    );
}
