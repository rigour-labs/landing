export default function Team() {
    const team = [
        {
            name: "Ashutosh Singh",
            role: "Founder",
            bio: "I've spent 13+ years building systems that actually work at scale. Started as a developer, grew into architecture roles, and eventually led engineering teams shipping AI/ML platforms and cloud infrastructure on AWS and GCP. What drives me now is bringing LLM research—things like RAG and evaluation pipelines—into real production environments. Along the way, I've helped teams hit 99.9%+ SLA on critical workloads, cut duplicate API calls by 93%, and speed up deployments by 85%. I started Rigour Labs because I believe we need better tools for verifying AI-generated code and ensuring integrity in hiring.",
            linkedin: "https://www.linkedin.com/in/erashu212/",
            github: "https://github.com/erashu212",
            image: "/team/ashutosh.jpg"
        },
        {
            name: "Gaurav Prakash",
            role: "Co-founder",
            bio: "AI Engineer with 9+ years of experience across the full stack. Currently working on LLM performance optimization, fine-tuning pipelines, and NLP algorithms. Led engineering teams at Infoedge (Naukri) building payment integrations and recruiter tools with Neo4j. Hands-on with Python, React, AWS, and machine learning infrastructure. Joined Rigour Labs to help build AI systems that actually work reliably in production.",
            linkedin: "https://www.linkedin.com/in/gaurav-prakash-910aa9a0/",
            github: "",
            image: "/team/gaurav.jpg"
        }
    ];

    const advisors = [
        {
            area: "Technical Architecture",
            description: "We regularly consult with senior engineers who've built distributed systems at scale. Their feedback shapes how we approach infrastructure decisions."
        },
        {
            area: "Product Strategy",
            description: "We work with folks who've shipped developer tools and B2B products before. They help us avoid common pitfalls and stay focused on what matters."
        }
    ];

    return (
        <section id="team" aria-labelledby="team-heading" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 5rem)' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        background: 'rgba(129, 140, 248, 0.1)',
                        border: '1px solid rgba(129, 140, 248, 0.2)',
                        color: 'var(--primary)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        The People Behind Rigour Labs
                    </span>
                    <h2 id="team-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Our Team</h2>
                    <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
                        We&apos;re engineers who got tired of the lack of good tools for verifying AI code and ensuring hiring integrity. So we&apos;re building them ourselves.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: '2rem',
                    marginBottom: 'clamp(2.5rem, 5vw, 5rem)'
                }}>
                    {team.map((member, index) => (
                        <article key={index} className="glass" style={{
                            padding: 'clamp(1.5rem, 3vw, 3rem)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 'min(200px, 50vw)',
                                height: 'min(200px, 50vw)',
                                background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                zIndex: 0
                            }} aria-hidden="true" />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    width: 'clamp(80px, 15vw, 120px)',
                                    height: 'clamp(80px, 15vw, 120px)',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary) 0%, #a5b4fc 100%)',
                                    margin: '0 auto 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                                    fontWeight: '700',
                                    color: 'white',
                                    border: '3px solid rgba(255, 255, 255, 0.1)'
                                }} aria-hidden="true">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>

                                <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', marginBottom: '0.5rem' }}>{member.name}</h3>
                                <p style={{
                                    color: 'var(--primary)',
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '1.5rem'
                                }}>
                                    {member.role}
                                </p>

                                {member.bio && (
                                    <p style={{
                                        color: 'var(--secondary)',
                                        fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)',
                                        lineHeight: '1.7',
                                        marginBottom: '2rem'
                                    }}>
                                        {member.bio}
                                    </p>
                                )}

                                <nav aria-label={`${member.name} social links`} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    flexWrap: 'wrap'
                                }}>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name} LinkedIn profile (opens in new tab)`}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.75rem 1.25rem',
                                                background: 'rgba(0, 119, 181, 0.1)',
                                                border: '1px solid rgba(0, 119, 181, 0.3)',
                                                borderRadius: '0.5rem',
                                                color: '#0077B5',
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                transition: 'all 0.2s ease',
                                                minHeight: '44px'
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                            LinkedIn
                                        </a>
                                    )}
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name} GitHub profile (opens in new tab)`}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.75rem 1.25rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '0.5rem',
                                                color: 'white',
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                transition: 'all 0.2s ease',
                                                minHeight: '44px'
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                </nav>
                            </div>
                        </article>
                    ))}
                </div>

                <div style={{
                    background: 'rgba(129, 140, 248, 0.03)',
                    border: '1px solid rgba(129, 140, 248, 0.1)',
                    borderRadius: '1.5rem',
                    padding: 'clamp(1.5rem, 3vw, 3rem)'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        marginBottom: '2rem',
                        textAlign: 'center'
                    }}>
                        Advisory Network
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                        gap: '2rem'
                    }}>
                        {advisors.map((advisor, index) => (
                            <article key={index} style={{
                                padding: '1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <h4 style={{
                                    fontSize: '1rem',
                                    color: 'var(--primary)',
                                    marginBottom: '0.75rem',
                                    fontWeight: '600'
                                }}>
                                    {advisor.area}
                                </h4>
                                <p style={{
                                    color: 'var(--secondary)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {advisor.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
                    gap: 'clamp(1rem, 2vw, 2rem)',
                    marginTop: 'clamp(2rem, 4vw, 4rem)',
                    textAlign: 'center'
                }} role="list" aria-label="Company statistics">
                    <div role="listitem">
                        <p style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem'
                        }}>
                            2025
                        </p>
                        <p style={{
                            color: 'var(--secondary)',
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            margin: 0
                        }}>
                            Founded
                        </p>
                    </div>
                    <div role="listitem">
                        <p style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem'
                        }}>
                            2
                        </p>
                        <p style={{
                            color: 'var(--secondary)',
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            margin: 0
                        }}>
                            Products Launched
                        </p>
                    </div>
                    <div role="listitem">
                        <p style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--accent-emerald)',
                            marginBottom: '0.5rem'
                        }}>
                            OSS
                        </p>
                        <p style={{
                            color: 'var(--secondary)',
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            margin: 0
                        }}>
                            MIT Licensed
                        </p>
                    </div>
                    <div role="listitem">
                        <p style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem'
                        }} aria-label="India">
                            IN
                        </p>
                        <p style={{
                            color: 'var(--secondary)',
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            margin: 0
                        }}>
                            Based in India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
