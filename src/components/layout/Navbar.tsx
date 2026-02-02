import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                borderRadius: '1rem',
                background: 'rgba(2, 6, 23, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <Link href="/" style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'var(--primary)',
                        boxShadow: '0 0 15px var(--primary-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '900',
                        color: 'white',
                        fontSize: '1rem'
                    }}>R</div>
                    <span>RIGOUR LABS</span>
                </Link>

                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <Link href="#products" style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Products</Link>
                    <Link href="#team" style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Team</Link>
                    <Link href="#mission" style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Mission</Link>
                    <Link href="#contact" style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Contact</Link>
                    <Link href="https://rigour.run" target="_blank" className="btn-primary" style={{ fontSize: '0.9rem' }}>
                        Rigour OSS
                    </Link>
                </div>
            </div>
        </nav>
    );
}
