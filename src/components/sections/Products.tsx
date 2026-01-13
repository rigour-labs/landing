export default function Products() {
    const products = [
        {
            title: "TalentLyt",
            category: "SaaS / B2B",
            description: "A comprehensive AI-driven hiring integrity platform that eliminates interview fraud and ensures a verifiable hiring process.",
            link: "https://talentlyt.cloud",
            cta: "Visit TalentLyt",
            color: "var(--primary)",
            glow: "var(--primary-glow)",
            features: ["Live Interview Monitoring", "Integrity Auditing", "AI Anomaly Detection"]
        },
        {
            title: "Rigour",
            category: "OSS / R&D",
            description: "An open-source framework for building verifiable codebases and ensuring that AI-generated code meets production standards.",
            link: "https://rigour.run",
            cta: "Explore Rigour OSS",
            color: "var(--accent-emerald)",
            glow: "rgba(16, 185, 129, 0.2)",
            features: ["Zero-Telemetry Gates", "Deep Static Analysis", "Policy-as-Code"]
        }
    ];

    return (
        <section id="products" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Ecosystem</h2>
                    <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        We engineer tools that protect the integrity of human-AI collaboration and organizational processes.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {products.map((product, index) => (
                        <div key={index} className="glass" style={{
                            padding: '3rem',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'default'
                        }}>
                            <div>
                                <div style={{
                                    color: product.color,
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: product.color,
                                        boxShadow: `0 0 10px ${product.color}`
                                    }} />
                                    {product.category}
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.title}</h3>
                                <p style={{ color: 'var(--secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                                    {product.description}
                                </p>

                                <div style={{ marginBottom: '2.5rem' }}>
                                    {product.features.map((feature, fIndex) => (
                                        <div key={fIndex} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem',
                                            fontSize: '0.9rem',
                                            color: '#cbd5e1'
                                        }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{
                                textAlign: 'center',
                                borderColor: product.color,
                                color: 'white',
                                background: 'rgba(255, 255, 255, 0.02)',
                                boxShadow: `inset 0 0 10px ${product.glow}`
                            }}>
                                {product.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
