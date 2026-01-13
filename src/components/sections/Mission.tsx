export default function Mission() {
    const pillars = [
        {
            title: "Verifiable Systems",
            description: "We believe software should be provably correct and its behavior verifiable by third parties without compromising privacy."
        },
        {
            title: "Human-AI Integrity",
            description: "As AI becomes a core part of work, we build the protocols that ensure humans and agents collaborate with radical transparency."
        },
        {
            title: "Zero-Telemetry Privacy",
            description: "Our tools are designed to work locally and securely, putting data ownership back where it belongs: with the user."
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
                            At Rigour Labs, we don't just build software—we engineer trust. In an era where "vibe coding" and opaque AI processes are becoming the norm, we stand for absolute technical rigour.
                        </p>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--secondary)',
                            lineHeight: '1.7'
                        }}>
                            Our laboratory researches and develops tools that bridge the gap between innovation and accountability.
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
