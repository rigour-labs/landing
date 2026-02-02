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
        <section id="mission" style={{ padding: '8rem 0', background: 'rgba(99, 102, 241, 0.02)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem'
                        }}>
                            AI is changing how we write code and hire people. That's exciting, but it also creates real problems—code that looks right but breaks in production, candidates who aren't who they claim to be.
                        </p>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--secondary)',
                            lineHeight: '1.7'
                        }}>
                            We're building practical tools to solve these problems. Not buzzwords, just software that works.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '1.5rem'
                    }}>
                        {pillars.map((pillar, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'white' }}>{pillar.title}</h4>
                                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
