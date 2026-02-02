export default function Products() {
    const products = [
        {
            title: "TalentLyt",
            category: "SaaS / B2B",
            stage: "Beta",
            stageColor: "#f59e0b",
            description: "Our flagship AI-driven hiring integrity platform (also known as RigourGate) that eliminates interview fraud and ensures a verifiable hiring process. Currently in private beta with select enterprise customers.",
            link: "https://talentlyt.cloud",
            cta: "Visit TalentLyt",
            color: "var(--primary)",
            glow: "var(--primary-glow)",
            features: ["Live Interview Monitoring", "Integrity Auditing", "AI Anomaly Detection"],
            techStack: ["Next.js", "Python", "TensorFlow", "GCP"],
            targetAudience: "Enterprise HR Teams, Recruiting Agencies"
        },
        {
            title: "Rigour CLI",
            category: "OSS / Developer Tools",
            stage: "Production",
            stageColor: "#10b981",
            description: "An open-source framework for building verifiable codebases and ensuring that AI-generated code meets production standards. Available on NPM with active development.",
            link: "https://rigour.run",
            docsLink: "https://docs.rigour.run",
            npmLink: "https://www.npmjs.com/package/@rigour-labs/cli",
            githubLink: "https://github.com/rigour-labs/rigour",
            cta: "Explore Rigour OSS",
            color: "var(--accent-emerald)",
            glow: "rgba(16, 185, 129, 0.2)",
            features: ["Zero-Telemetry Gates", "Deep Static Analysis", "MCP Server Integration"],
            techStack: ["TypeScript", "Node.js", "MCP Protocol"],
            targetAudience: "Developers, AI Coding Assistants (Claude, Cursor, Cline)"
        }
    ];

    return (
        <section id="products" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        color: 'var(--primary)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        What We Build
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Products</h2>
                    <p style={{ color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.7' }}>
                        We engineer tools that protect the integrity of human-AI collaboration and organizational processes. Each product addresses a critical gap in the current tech landscape.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    {products.map((product, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2.5rem',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'default'
                        }}>
                            <div>
                                {/* Header with Category and Stage */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{
                                        color: product.color,
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
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
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        background: `${product.stageColor}20`,
                                        border: `1px solid ${product.stageColor}40`,
                                        color: product.stageColor,
                                        fontSize: '0.7rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {product.stage}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.title}</h3>
                                <p style={{ color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    {product.description}
                                </p>

                                {/* Target Audience */}
                                <div style={{
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '0.75rem',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--secondary)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Target Audience
                                    </div>
                                    <div style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                                        {product.targetAudience}
                                    </div>
                                </div>

                                {/* Features */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--secondary)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        Key Features
                                    </div>
                                    {product.features.map((feature, fIndex) => (
                                        <div key={fIndex} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: '#cbd5e1'
                                        }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--secondary)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        Tech Stack
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {product.techStack.map((tech, tIndex) => (
                                            <span key={tIndex} style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '0.375rem',
                                                fontSize: '0.75rem',
                                                color: '#94a3b8',
                                                border: '1px solid rgba(255, 255, 255, 0.1)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{
                                    textAlign: 'center',
                                    borderColor: product.color,
                                    color: 'white',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    boxShadow: `inset 0 0 10px ${product.glow}`
                                }}>
                                    {product.cta}
                                </a>
                                {'docsLink' in product && (
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <a href={product.docsLink} target="_blank" rel="noopener noreferrer" style={{
                                            flex: 1,
                                            textAlign: 'center',
                                            padding: '0.5rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '0.375rem',
                                            color: 'var(--secondary)',
                                            fontSize: '0.8rem',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            Documentation
                                        </a>
                                        <a href={product.npmLink} target="_blank" rel="noopener noreferrer" style={{
                                            flex: 1,
                                            textAlign: 'center',
                                            padding: '0.5rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '0.375rem',
                                            color: 'var(--secondary)',
                                            fontSize: '0.8rem',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            NPM Package
                                        </a>
                                        <a href={product.githubLink} target="_blank" rel="noopener noreferrer" style={{
                                            flex: 1,
                                            textAlign: 'center',
                                            padding: '0.5rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '0.375rem',
                                            color: 'var(--secondary)',
                                            fontSize: '0.8rem',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            GitHub
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Problem Statement */}
                <div style={{
                    marginTop: '5rem',
                    padding: '3rem',
                    background: 'rgba(99, 102, 241, 0.03)',
                    border: '1px solid rgba(99, 102, 241, 0.1)',
                    borderRadius: '1.5rem',
                    textAlign: 'center'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>The Problems We Solve</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left'
                    }}>
                        <div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Interview Fraud</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                Remote hiring has created new opportunities for fraud. TalentLyt provides real-time integrity verification during technical interviews.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>AI Code Quality</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                AI coding assistants generate code without engineering standards. Rigour CLI enforces quality gates before code reaches production.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Data Privacy</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                Most tools send your code to external servers. Our tools are 100% local-first with zero telemetry - your data never leaves your machine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
