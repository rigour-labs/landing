import { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Rigour Labs products. Rigovo (formerly TalentLyt) interview data handling and Rigour CLI zero-telemetry policy. Learn how we protect your data.',
    keywords: ['privacy policy', 'data protection', 'Rigour Labs privacy', 'Rigovo data', 'zero telemetry', 'GDPR compliance'],
    alternates: {
        canonical: 'https://rigour-labs.dev/privacy',
    },
    openGraph: {
        title: 'Privacy Policy | Rigour Labs',
        description: 'Privacy Policy for Rigour Labs products. Rigovo (formerly TalentLyt) interview data handling and Rigour CLI zero-telemetry policy.',
        url: 'https://rigour-labs.dev/privacy',
        siteName: 'Rigour Labs',
        type: 'website',
    },
};

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--secondary)', marginBottom: '3rem' }}>Last updated: February 2, 2026</p>

                    <div style={{ color: 'var(--secondary)', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
                            <p>
                                Rigour Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products and services, including Rigovo (formerly TalentLyt) and Rigour CLI.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Information We Collect</h2>

                            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>2.1 Rigour CLI (Open Source)</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'white' }}>Zero Telemetry Policy:</strong> Rigour CLI is designed with privacy as a core principle. We do not collect, transmit, or store any data from your codebase when you use Rigour CLI. All analysis is performed locally on your machine.
                            </p>
                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li>No code is sent to external servers</li>
                                <li>No usage analytics or telemetry</li>
                                <li>No personal information collection</li>
                                <li>All processing happens on your local machine</li>
                            </ul>

                            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>2.2 Rigovo (SaaS Platform)</h3>
                            <p style={{ marginBottom: '1rem' }}>When you use Rigovo, we may collect:</p>
                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li><strong style={{ color: 'white' }}>Account Information:</strong> Name, email address, company name, and job title</li>
                                <li><strong style={{ color: 'white' }}>Interview Data:</strong> Video and audio recordings during interview sessions (with explicit consent)</li>
                                <li><strong style={{ color: 'white' }}>Usage Data:</strong> How you interact with our platform, features used, and session duration</li>
                                <li><strong style={{ color: 'white' }}>Technical Data:</strong> Browser type, device information, and IP address</li>
                            </ul>

                            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>2.3 Website Visitors</h3>
                            <p>When you visit our websites (rigour-labs.dev, rigour.run, rigovo.com), we may collect standard web analytics data through privacy-respecting analytics tools.</p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
                            <p style={{ marginBottom: '1rem' }}>We use the information we collect to:</p>
                            <ul style={{ marginLeft: '1.5rem' }}>
                                <li>Provide and maintain our services</li>
                                <li>Process interview integrity assessments (Rigovo)</li>
                                <li>Improve and optimize our products</li>
                                <li>Communicate with you about updates and support</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Data Retention</h2>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'white' }}>Rigovo:</strong> Interview recordings and related data are retained for the duration specified in your service agreement. You may request deletion at any time.
                            </p>
                            <p>
                                <strong style={{ color: 'white' }}>Rigour CLI:</strong> No data is retained as no data is collected.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>6. Third-Party Services</h2>
                            <p style={{ marginBottom: '1rem' }}>We may use third-party services for:</p>
                            <ul style={{ marginLeft: '1.5rem' }}>
                                <li>Cloud infrastructure (Google Cloud Platform)</li>
                                <li>Payment processing</li>
                                <li>Analytics (privacy-respecting solutions)</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>7. Your Rights</h2>
                            <p style={{ marginBottom: '1rem' }}>You have the right to:</p>
                            <ul style={{ marginLeft: '1.5rem' }}>
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to data processing</li>
                                <li>Data portability</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>8. International Transfers</h2>
                            <p>
                                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>9. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>10. Contact Us</h2>
                            <p style={{ marginBottom: '1rem' }}>
                                If you have questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p>
                                <strong style={{ color: 'white' }}>Rigour Labs</strong><br />
                                Email: <a href="mailto:legal@rigour.run" style={{ color: 'var(--primary)' }}>legal@rigour.run</a><br />
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
