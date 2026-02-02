export default function Mission() {
    const pillars = [
        {
            title: "Code You Can Trust",
            description: "When AI writes code, someone needs to verify it actually works. We build the tools that check AI-generated code before it ships."
        },
        {
            title: "Honest Hiring",
            description: "Remote interviews created new ways to cheat. We help companies verify that candidates are who they say they are."
        },
        {
            title: "Your Data Stays Yours",
            description: "Our CLI runs entirely on your machine. No cloud uploads, no telemetry, no phone-home. Your code never leaves your computer."
        }
    ];

    return (
        <section id="mission" aria-labelledby="mission-heading" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0', background: 'rgba(129, 140, 248, 0.02)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: 'clamp(2rem, 4vw, 4rem)',
                    alignItems: 'start'
                }}>
                    <div>
                        <h2 id="mission-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            color: 'var(--secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem'
                        }}>
                            AI is changing how we write code and hire people. That&apos;s exciting, but it also creates real problems—code that looks right but breaks in production, candidates who aren&apos;t who they claim to be.
                        </p>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            color: 'var(--secondary)',
                            lineHeight: '1.7'
                        }}>
                            We&apos;re building practical tools to solve these problems. Not buzzwords, just software that works.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '1.5rem'
                    }} role="list" aria-label="Our core values">
                        {pillars.map((pillar, index) => (
                            <article key={index} className="glass" style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)' }} role="listitem">
                                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '0.75rem', color: 'white' }}>{pillar.title}</h3>
                                <p style={{ color: 'var(--secondary)', fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)', lineHeight: '1.6', margin: 0 }}>{pillar.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
