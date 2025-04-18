import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import DemoSection from '@/components/demo-section';

const privacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar activePage="" />
            <div className="mb-6" />

            <div className="max-w-6xl mx-auto px-4 py-12 text-black">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Privacy Policy for Fusion Apps (Fusion Engine)</h1>
                <p className="text-gray-500 mb-6">Last updated: April 18, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">1. Introduction</h2>
                    <p className="mb-4">
                        {`Fusion Apps ("we", "our", or "us") respects your privacy and is committed to protecting the personal data we collect and process. This Privacy Policy outlines how we collect, use, disclose, and protect personal information obtained through our AI-powered video analytics system, `}<span className='font-bold'>Fusion Engine</span>{`, which processes visual data captured through CCTV surveillance.`}
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">2. Scope</h2>
                    <p className="mb-4">
                        This policy applies to all data subjects whose personal information may be processed by Fusion Engine through CCTV systems installed on private premises, including but not limited to employees, visitors, customers, and service personnel.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">3. Data We Collect</h2>
                    <p className="mb-4">
                        Fusion Engine may collect and process the following types of data:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><span className='font-bold'>Facial images </span>(used for facial recognition and attendance)</li>
                        <li><span className='font-bold'>Vehicle number plates </span>(via ANPR for access and tracking)</li>
                        <li><span className='font-bold'>Behavioral and movement data </span>(to analyze crowd patterns, queue length, footfall)</li>
                        <li><span className='font-bold'>Location and timestamp information </span>(for activity logs and zone monitoring)</li>
                        <li><span className='font-bold'>Video recordings </span>(for security, compliance, and analytics)</li>
                    </ul>
                    <p className="mb-4">
                        We do not collect biometric templates unless explicitly required and legally permitted. Our systems are configured to avoid processing unnecessary personal information.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">4. Purpose of Processing</h2>
                    <p className="mb-4">
                        We use AI-powered video analytics for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Monitoring and enhancing <span className='font-bold'>on-premise security</span></li>
                        <li><span className='font-bold'>Access control and vehicle management</span></li>
                        <li><span className='font-bold'>Workforce attendance and compliance tracking</span></li>
                        <li><span className='font-bold'>Customer behavior analysis</span> for operational optimization</li>
                        <li>Ensuring <span className='font-bold'>safety and SOP adherence</span> in industrial and public environments</li>
                        <li><span className='font-bold'>Incident detection and alerts</span> in real-time</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">5. Legal Basis for Processing</h2>
                    <p className="mb-4">
                        We process personal data based on one or more of the following legal grounds:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><span className='font-bold'>Legitimate Interests:</span> To enhance safety, improve operations, and secure premises</li>
                        <li><span className='font-bold'>Consent:</span> Where required by law, explicit consent will be obtained</li>
                        <li><span className='font-bold'>Legal Obligations:</span> To comply with applicable safety and labor regulations</li>
                        <li><span className='font-bold'>Contractual Necessity:</span> When our service is part of a contract with a client</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">6. Data Retention</h2>
                    <p className="mb-4">
                        We retain personal data only for as long as necessary to fulfill the purposes outlined above or as mandated by law. Video data is typically stored for <span className='font-bold'>[e.g., 30 days]</span>, unless required for investigation or legal proceedings.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">7. Data Sharing and Disclosure</h2>
                    <p className="mb-4">
                        We do not sell personal data. However, we may share data with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><span className='font-bold'>Authorized client personnel</span> with system access</li>
                        <li><span className='font-bold'>Law enforcement agencies</span>, if legally obligated</li>
                        <li><span className='font-bold'>Third-party service providers</span> under strict confidentiality and security agreements (e.g., cloud providers, hardware integrators)</li>
                    </ul>
                    <p className="mb-4">
                        We ensure all third parties respect the security of personal data and process it in accordance with the law.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">8. Data Security</h2>
                    <p className="mb-4">
                        We implement robust security measures including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>AES-256 encrypted data streams</li>
                        <li>Role-based access control</li>
                        <li>Real-time camera health and tamper detection</li>
                        <li>Secure integration with on-prem and hybrid deployments</li>
                        <li>Regular audits and updates to our security infrastructure</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">9. Data Subject Rights</h2>
                    <p className="mb-4">
                        You have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Access your personal data</li>
                        <li>Request correction or deletion</li>
                        <li>Object to processing in certain circumstances</li>
                        <li>Lodge a complaint with the data protection authority</li>
                        <li>Withdraw consent (where processing is based on consent)</li>
                    </ul>
                    <p className="mb-4">
                        Requests can be submitted to: <span className='font-bold'>[privacy@fusionapps.ai]</span>
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">{`10. Children's Privacy`}</h2>
                    <p className="mb-4">
                        Our systems are not designed to intentionally collect personal data from individuals under the age of 18, unless required for educational institutions and authorized by the relevant authorities.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">11. International Data Transfers</h2>
                    <p className="mb-4">
                        If personal data is transferred outside the country of collection, we ensure appropriate safeguards such as Standard Contractual Clauses or equivalent mechanisms are in place.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">12. Policy Updates</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy to reflect changes in our technology or legal obligations. All changes will be communicated via our website or client portals.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">13. Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns about this policy or your personal data, please contact us:</p>
                    <ul className="list-none space-y-3 mb-6">
                        <li className="flex items-start">
                            <span className="font-medium min-w-28">By email:</span>
                            <span className="text-blue-600">info@thefusionapps.com</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium min-w-28">Offices:</span>
                            <span>Singapore | India | Dubai</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium min-w-28">Website:</span>
                            <a
                                href="https://thefusionapps.com/"
                                rel="noreferrer external nofollow noopener"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                www.thefusionapps.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <DemoSection />
            <Footer />
        </div>
    );
};

export default privacyPolicyPage;
