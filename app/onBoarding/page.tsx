import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import DemoSection from '@/components/demo-section';

const onBoardingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar activePage="" />
            {/* Gap for Navbar */}
            <div className="mb-6" /> {/* Added gap for navbar */}

            <div className="mx-2 md:mx-10 px-2 md:px-10">
                <div className="relative w-full h-full py-16 mb-12 rounded-[20px] "
                    style={{
                        backgroundImage: `url("/img/casestudy/Rectangle 2419.png"), url("/img/casestudy/banner.png")`,
                    }}
                >
                    {/* Content Container */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                            Your Onboarding Journey with Fusion Engine
                        </h1>

                        {/* Description */}
                        <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                            Fusion Engine is an innovative technology platform designed to streamline and enhance business operations through intelligent automation and data-driven solutions. With a focus on scalability and performance, Fusion Engine empowers organizations to build, deploy, and manage modern applications with ease.
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-20 ">
                <div className="mx-2 md:mx-10 px-2 md:px-10">

                    {/* Content 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Side - Product Image */}
                        <div className="relative">
                            <Image
                                src="/img/onBoarding/onboard1.png"
                                alt="Planning & Requirements"
                                width={500}
                                height={300}
                                className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                            />
                        </div>

                        {/* Right Side - Product Details */}
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                Planning & <span className="text-[#6C5DD3]">Requirements</span>
                            </h3>

                            {/* Feature List */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-[#303030] mb-5">{`Introduction with stakeholders to outline project goals,expectations, and timelines. Detailed assessment of the client's current infrastructure, specific needs, and desired outcomes. Assign dedicated teams for project management, technical support, and
                                    training. Provide the client with relevant product documentation to familiarize them with the system.`}</p>
                            </div>
                        </div>
                    </div>

                    {/* Content 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-25 items-center bg-gray-100 p-6 rounded-xl">
                        {/* Left Side - Product Details */}
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                Customization &<span className="text-[#6C5DD3]"> Configuration</span>
                            </h3>

                            {/* Feature List */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-[#303030]">{`Configure the system to align with the client's requirements(e.g., integrating with existing cameras and data sources) Adjust features such as dashboards, alert systems, and reporting tools to meet the specific needs of different verticals (e.g., retail, manufacturing)
                                    Implement security protocols, user permissions, and data privacy
                                    measures.`}</p>
                            </div>
                        </div>

                        {/* Right Side - Product Image */}
                        <div className="relative">
                            <Image  
                                src="/img/onBoarding/onboard2.png"
                                alt="Customization & Configuration"
                                width={500}
                                height={300}
                                className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Side - Product Image */}
                        <div className="relative">
                            <Image
                                src="/img/onBoarding/onboard3.png"
                                alt="Pilot Deployment"
                                width={500}
                                height={300}
                                className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                            />
                        </div>

                        {/* Right Side - Product Details */}
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                Pilot<span className="text-[#6C5DD3]"> Deployment</span>
                            </h3>

                            {/* Feature List */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-[#303030] mb-5">Deploy the Fusion Engine in a controlled environment or select
                                    areas to ensure it functions as expected Monitor the performance, identify any technical issues, and gather initial insights from video analytics. Collect feedback from users interacting with the system during the pilot to identify potential adjustments or enhancements.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-25 items-center bg-gray-100 p-6 rounded-xl">
                        {/* Left Side - Product Details */}
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                Full-Scale<span className="text-[#6C5DD3]"> Deployment</span>
                            </h3>

                            {/* Feature List */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-[#303030]">Expand the deployment across all targeted environments based
                                    on the success of the pilot. Closely monitor the system to ensure
                                    seamless scaling and tackle any challenges that arise. Make necessary adjustments based on deployment performance to
                                    improve efficiency and adaptability.</p>
                            </div>
                        </div>

                        {/* Right Side - Product Image */}
                        <div className="relative">
                            <Image
                                src="/img/onBoarding/onboard4.png"
                                alt="Full-Scale<span Deployment"
                                width={500}
                                height={300}
                                className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content 5 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Side - Product Image */}
                        <div className="relative">
                            <Image
                                src="/img/onBoarding/onboard5.png"
                                alt="User Training"
                                width={500}
                                height={300}
                                className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                            />
                        </div>

                        {/* Right Side - Product Details */}
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                User<span className="text-[#6C5DD3]"> Training</span>
                            </h3>

                            {/* Feature List */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-[#303030]">Host training workshops and interactive sessions for end
                                    users to get acquainted with the features and functionalities
                                    Provide training tailored to different user roles (e.g., operators, managers, analysts).Organize live sessions to answer user
                                    queries and provide hands-on support.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content 6 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-25 items-center bg-gray-100 p-6 rounded-xl">
                        {/* Left Side - Product Details */}
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                Ongoing Monitoring & <span className="text-[#6C5DD3]">Support</span>
                            </h3>

                            {/* Feature List */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-[#303030]">Set up regular system checks to ensure optimal performance and
                                    timely updates. Offer ongoing technical support via multiple channels (e.g., email, phone, live chat). Periodic surveys to gather insights and improve user experience. Inform users of new features, enhancements, and best practices to maximize the Fusion Engine&apos;s value.</p>
                            </div>
                        </div>

                        {/* Right Side - Product Image */}
                        <div className="relative">
                            <Image
                                src="/img/onBoarding/onboard6.png"
                                alt="Ongoing Monitoring & Support"
                                width={500}
                                height={300}
                                className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className=" bg-white">
                <div className="mx-2 md:mx-10 px-2 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        {/* content 1*/}
                        <div className="relative">
                            <div className='mb-5'>
                                <Image
                                    src="/img/onBoarding/onboard7.png"
                                    alt="Analytics Dashboard"
                                    width={400}
                                    height={200}
                                    className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                                />
                            </div>

                            <div className="relative">
                                <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                    Before Fusion Engine <span className="text-[#6C5DD3]">Implementation</span>
                                </h3>

                                {/* Feature List */}
                                <div className="space-y-4 relative z-10 text-[#303030] mb-5">
                                    <ol className="list-decimal list-inside ml-6">
                                        <li>Manual Surveillance & High Labor Costs</li>
                                        <li>Limited Data Insights</li>
                                        <li>Slow Response to Incidents</li>
                                        <li>Inefficient Resource Management</li>
                                        <li>Fragmented Systems</li>
                                    </ol>
                                </div>
                            </div>
                        </div>


                        {/* content 2*/}
                        <div className="relative">
                            <div className='mb-5'>
                                <Image
                                    src="/img/onBoarding/onboard8.png"
                                    alt="Analytics Dashboard"
                                    width={400}
                                    height={200}
                                    className="w-full h-auto rounded-[20px] border hover:border-gray-300 hover:shadow-2xl"
                                />
                            </div>

                            <div className="relative">
                                <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                                    After Fusion Engine <span className="text-[#6C5DD3]">Implementation</span>
                                </h3>

                                {/* Feature List */}
                                <div className="space-y-4 relative z-10 text-[#303030] mb-5">
                                    <ol className="list-decimal list-inside ml-6">
                                        <li>Automated Monitoring & Reduced Costs</li>
                                        <li>Real-Time Data-Driven Insights</li>
                                        <li>Proactive Incident Management</li>
                                        <li>Optimized Resource Allocation</li>
                                        <li>Centralized Intelligence Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DemoSection />
            <Footer />
        </div>
    );
};

export default onBoardingPage;
