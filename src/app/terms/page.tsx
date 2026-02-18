import { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Rigour Labs products. Usage terms for MIT-licensed Rigour CLI open-source tool.',
    keywords: ['terms of service', 'Rigour Labs terms', 'MIT license', 'software terms'],
    alternates: {
        canonical: 'https://rigour-labs.dev/terms',
    },
    openGraph: {
        title: 'Terms of Service | Rigour Labs',
        description: 'Terms of Service for Rigour Labs products. Usage terms for Rigour CLI.',
        url: 'https://rigour-labs.dev/terms',
        siteName: 'Rigour Labs',
        type: 'website',
    },
};

export default function TermsOfService() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Terms of Service</h1>
                    <p style={{ color: 'var(--secondary)', marginBottom: '3rem' }}>Last updated: February 2, 2026</p>

                    <div style={{ color: 'var(--secondary)', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using Rigour Labs products and services, including Rigour CLI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Description of Services</h2>

                            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>2.1 Rigour CLI</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                Rigour CLI is an open-source tool distributed under the MIT License. It provides code quality gates and static analysis for AI-generated code. The CLI operates entirely on your local machine with zero external data transmission.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Acceptable Use</h2>
                            <p style={{ marginBottom: '1rem' }}>You agree not to:</p>
                            <ul style={{ marginLeft: '1.5rem' }}>
                                <li>Use our services for any unlawful purpose</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt our services</li>
                                <li>Transmit malicious code or content</li>
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights of others</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Intellectual Property</h2>

                            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>4.1 Rigour CLI</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                Rigour CLI is released under the MIT License. You are free to use, modify, and distribute it in accordance with the license terms. The MIT License can be found at <a href="https://opensource.org/licenses/MIT" style={{ color: 'var(--primary)' }}>opensource.org/licenses/MIT</a>.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Disclaimers</h2>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'white' }}>AS-IS BASIS:</strong> Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'white' }}>NO GUARANTEE:</strong> We do not guarantee that our services will be uninterrupted, error-free, or completely secure.
                            </p>
                            <p>
                                <strong style={{ color: 'white' }}>CODE ANALYSIS:</strong> Rigour CLI provides automated code analysis but does not guarantee the detection of all issues. Human review remains essential for production code.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>6. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Rigour Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>7. Indemnification</h2>
                            <p>
                                You agree to indemnify and hold harmless Rigour Labs and its affiliates, officers, directors, and employees from any claims, damages, or expenses arising from your use of our services or violation of these terms.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>8. Termination</h2>
                            <p>
                                We may terminate or suspend your access to our services at any time, with or without cause, upon notice to you. Upon termination, your right to use the services will immediately cease.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>9. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>10. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>11. Contact Information</h2>
                            <p style={{ marginBottom: '1rem' }}>
                                For questions about these Terms of Service, please contact us at:
                            </p>
                            <p>
                                <strong style={{ color: 'white' }}>Rigour Labs</strong><br />
                                Administrative: <a href="mailto:admin@rigour-labs.dev" style={{ color: 'var(--primary)' }}>admin@rigour-labs.dev</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
