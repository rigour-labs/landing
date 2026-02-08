'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#products', label: 'Products' },
        { href: '#team', label: 'Team' },
        { href: '#mission', label: 'Mission' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1rem 0',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                background: 'rgba(2, 4, 10, 0.7)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                margin: '0 auto',
                maxWidth: '800px'
            }}>
                <Link
                    href="/"
                    aria-label="Rigovo - Home"
                    style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem'
                    }}
                >
                    <span style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-cyan) 100%)',
                        boxShadow: '0 0 20px var(--primary-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '900',
                        color: '#ffffff',
                        fontSize: '0.875rem',
                        flexShrink: 0
                    }} aria-hidden="true">R</span>
                    <span className="nav-brand" style={{ letterSpacing: '0.05em', color: '#ffffff' }}>RIGOVO</span>
                </Link>

                {/* Desktop Navigation */}
                <div
                    className="nav-desktop"
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center'
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                color: 'var(--secondary)',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                transition: 'all 0.2s ease',
                                padding: '0.5rem 0.25rem'
                            }}
                            className="nav-link"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div style={{ width: '1px', height: '20px', background: 'var(--card-border)', margin: '0 0.5rem' }} />
                    <Link
                        href="https://rigour.run"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem', minHeight: '36px' }}
                    >
                        Rigour OSS
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        color: 'white',
                        minWidth: '44px',
                        minHeight: '44px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className="nav-mobile-menu"
                style={{
                    display: isMenuOpen ? 'flex' : 'none',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: '1rem',
                    marginTop: '0.5rem',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    background: 'rgba(2, 6, 23, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1rem'
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            color: 'var(--secondary)',
                            fontSize: '1rem',
                            fontWeight: '500',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            transition: 'background 0.2s ease'
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="https://rigour.run"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary"
                    style={{
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        marginTop: '0.5rem'
                    }}
                >
                    Rigour OSS
                    <span className="sr-only"> (opens in new tab)</span>
                </Link>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .nav-desktop {
                        display: none !important;
                    }
                    .nav-mobile-btn {
                        display: flex !important;
                    }
                    .nav-brand {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </nav>
    );
}
