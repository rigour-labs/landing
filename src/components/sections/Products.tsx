export default function Products() {
    const products = [
        {
            title: "TalentLyt",
            category: "SaaS / B2B",
            stage: "Beta",
            stageColor: "#f59e0b",
            description: "Helps companies verify candidate identity and behavior during remote technical interviews. We use AI to flag suspicious activity in real-time, so hiring teams can make confident decisions. Currently in free beta with 2 organizations—no payments yet, just building and learning.",
            link: "https://talentlyt.cloud",
            cta: "Visit TalentLyt",
            color: "var(--primary)",
            glow: "var(--primary-glow)",
            features: ["82 Interviews Monitored", "6,800+ Anomalies Detected", "41% Fraud Flag Rate"],
            techStack: ["Next.js", "Python", "TensorFlow", "GCP"],
            targetAudience: "HR Teams, Technical Recruiters, Staffing Agencies",
            betaStats: {
                interviews: 82,
                anomalies: "6,800+",
                flagRate: "41%",
                organizations: 2
            }
        },
        {
            title: "Rigour CLI",
            category: "OSS / Developer Tools",
            stage: "Production",
            stageColor: "#10b981",
            description: "A command-line tool that checks AI-generated code before it goes to production. Runs locally on your machine—no code leaves your computer. Install it from NPM and add it to your workflow in minutes.",
            link: "https://rigour.run",
            docsLink: "https://docs.rigour.run",
            npmLink: "https://www.npmjs.com/package/@rigour-labs/cli",
            githubLink: "https://github.com/rigour-labs/rigour",
            githubAppLink: "https://github.com/apps/rigour-bot",
            mcpRegistryLink: "https://github.com/mcp?search=rigour",
            cta: "Explore Rigour OSS",
            color: "var(--accent-emerald)",
            glow: "rgba(16, 185, 129, 0.2)",
            features: ["Local-only Analysis", "Static Code Checks", "Official MCP Server"],
            techStack: ["TypeScript", "Node.js", "MCP Protocol"],
            targetAudience: "Software Developers using AI coding tools",
            npmBadge: "https://img.shields.io/npm/dw/@rigour-labs/cli.svg?label=weekly%20downloads&color=10b981"
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
                        Two products, two problems. TalentLyt tackles interview fraud in remote hiring. Rigour CLI helps developers verify AI-generated code before it ships.
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

                                {/* NPM Downloads Badge */}
                                {'npmBadge' in product && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <img
                                            src={product.npmBadge as string}
                                            alt="NPM weekly downloads"
                                            style={{ height: '20px' }}
                                        />
                                    </div>
                                )}

                                {/* Beta Stats */}
                                {'betaStats' in product && (
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '0.5rem',
                                        marginBottom: '1rem',
                                        padding: '0.75rem',
                                        background: 'rgba(99, 102, 241, 0.05)',
                                        borderRadius: '0.5rem',
                                        border: '1px solid rgba(99, 102, 241, 0.1)'
                                    }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>82</div>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--secondary)', textTransform: 'uppercase' }}>Interviews</div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>6.8K</div>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--secondary)', textTransform: 'uppercase' }}>Anomalies</div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f59e0b' }}>41%</div>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--secondary)', textTransform: 'uppercase' }}>Flagged</div>
                                        </div>
                                    </div>
                                )}

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
                                    <>
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
                                                Docs
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
                                                NPM
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
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {'mcpRegistryLink' in product && (
                                                <a href={product.mcpRegistryLink as string} target="_blank" rel="noopener noreferrer" style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.5rem',
                                                    background: 'rgba(99, 102, 241, 0.1)',
                                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                                    borderRadius: '0.375rem',
                                                    color: 'var(--primary)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    transition: 'all 0.2s ease'
                                                }}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                                    </svg>
                                                    MCP
                                                </a>
                                            )}
                                            {'githubAppLink' in product && (
                                                <a href={product.githubAppLink as string} target="_blank" rel="noopener noreferrer" style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.5rem',
                                                    background: 'rgba(16, 185, 129, 0.1)',
                                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                                    borderRadius: '0.375rem',
                                                    color: 'var(--accent-emerald)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    transition: 'all 0.2s ease'
                                                }}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    GitHub App
                                                </a>
                                            )}
                                        </div>
                                    </>
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
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Why We Built These</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left'
                    }}>
                        <div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Cheating in Remote Interviews</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                Companies are seeing candidates use hidden help, fake identities, and even proxies during video interviews. It wastes time and leads to bad hires.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>AI Code That Breaks</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                AI assistants write code fast, but they don't always get it right. Without proper checks, buggy code makes it to production.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Privacy Concerns</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                Many dev tools upload your code to analyze it. We think that's wrong. Rigour CLI runs 100% on your machine—nothing gets sent anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
