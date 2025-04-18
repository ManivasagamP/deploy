import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import DemoSection from '@/components/demo-section';





const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Navbar activePage="casestudy" />
      {/* Gap for Navbar */}
      <div className="mb-6" /> {/* Added gap for navbar */}

      {/* Banner Container */}
      <div className="relative w-full h-full py-16 mb-12 rounded-[20px] "
        style={{
          backgroundImage: `url("/img/casestudy/Rectangle 2419.png"), url("/img/casestudy/banner.png")`,
        }}
      >
        

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Client: 5K Care – India&apos;s Fast-Growing Car Care Franchise
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
          5K Care is a rapidly growing automotive franchise network in India, with over 200 service outlets,
          80–90% of which are franchised. With a strong retail presence, their model focuses on delivering
          standardized vehicle maintenance and car care services across locations.
          </p>
        </div>
      </div>

      {/* the feature of view more buttons when iclick the button that change the Problem Statement,Solution Offered:, How It Was Implemented: part of image, content, heading will be another one  */}
      {/* Our Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Product Card - Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Product Image */}
            <div className="relative">
              <Image
                src="/img/casestudy/emerald1.jpg"
                alt="Analytics Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-[20px] shadow-lg"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                Problem <span className="text-[#6C5DD3]">Statement</span>
              </h3>

              {/* Feature List */}
              <div className="space-y-4 relative z-10">
                <p className="text-[#303030] mb-5">Despite its scale and technological advancements, Emerald faced significant challenges in employee management across its vast manufacturing facilities. With approximately 10,000 employees spread over 240 departments and 2,500 surveillance cameras monitored by 120 staff members, the company struggled with:​</p>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]">Inadequate real-time tracking of employee movements and activities.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]">Inefficiencies in attendance recording, relying on biometric and RFID systems</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]">Difficulty in monitoring productivity, especially during peak demand periods where output needed to quadruple.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]">High operational costs due to manual monitoring and lack of actionable insights.​</p>
                </div>
                {/* <p className="text-[#303030]">These issues raised concerns over inconsistent billing, potential revenue leaks, and a lack of trust between the core team and franchisees.</p> */}
                <div className="absolute right-[-0.90px] top-[-150px] -z-10">
                  {/* <Image
                    src="/img/ourprodc2.png"
                    alt="Decorative Background"
                    width={300}
                    height={300}
                    className="opacity-60"
                    priority
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Product Card - AMPR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-25 items-center">
            {/* Left Side - Product Details */}
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                Solution  <span className="text-[#6C5DD3]">Offered:</span>
              </h3>

              {/* Feature List */}
              <div className="space-y-4 relative z-10">
                <p className="text-[#303030] mb-5">To address these challenges, we proposed an integrated deployment of our Fusion Engine, encompassing:​
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Attendance:</span> Leveraging existing CCTV infrastructure for facial recognition-based attendance, eliminating the need for separate biometric systems.​
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Surveillance:</span>Enhancing real-time monitoring capabilities to track employee movements and identify unauthorized access.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion ANPR:</span>Fusion ANPR: Automating vehicle access control by recognizing pre-registered license plates, streamlining deliveries and reducing manual checks.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Health Monitoring:</span> Implementing a system to monitor the health and functionality of surveillance cameras, ensuring minimal downtime.</p>
                </div>
                {/* <p className="text-[#303030]">This combination was tailored to help 5K Care build a reliable system that could verify actual service volumes, highlight underbilling, and assess individual outlet performance.</p> */}
              </div>
            </div>

            {/* Right Side - Product Image */}
            <div className="relative">
              <Image
                src="/img/casestudy/emerald2.jpg"
                alt="AMPR Surveillace System"
                width={300}
                height={300}
                className="w-full h-auto rounded-[20px] shadow-lg"
              />
            </div>
          </div>

          {/* Product Card - Surveillance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Product Image */}
            <div className="relative">
              <Image
                src="/img/casestudy/emerald3.jpg"
                alt="Surveillance System"
                width={600}
                height={400}
                className="w-full h-auto rounded-[20px] shadow-lg"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                How It Was <span className="text-[#6C5DD3]"> Implemented:</span>
              </h3>

              {/* Feature List */}
              <div className="space-y-4 relative z-10">
                <p className="text-[#303030] mb-5">Our engagement with Emerald unfolded in a phased manner:​</p>
                {/* <p className="text-[#303030]">We began with a pilot phase across a few strategic outlets. During this stage:</p> */}
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold"> Initial Assessment:</span>Conducted comprehensive site audits to understand existing systems and identify areas for improvement.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Pilot Deployment:</span> Implemented the Fusion Engine in four departments, tracking employee movements, attendance, and productivity.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                    <p className="text-[#303030]"><span className="font-bold">Feedback & Optimization:</span> Analyzed pilot results, identifying top-performing and underperforming employees, and refined the system accordingly.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Full-Scale Rollout: </span>Expanded the deployment across main departments and high-security zones, integrating facial recognition for access control and ANPR for vehicle management.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Training & Support: </span>Provided comprehensive training to staff, ensuring seamless adoption of the new systems.​</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Continuous Monitoring:</span>Continuous Monitoring: Established ongoing support mechanisms, including real-time alerts for camera malfunctions and system health checks.​
                  </p>
                </div>
                {/* <p className="text-[#303030] mb-5">The pilot&apos;s output revealed 15% underbilling, exposing a critical revenue leakage. The results helped build trust and paved the way for full-scale deployment.</p> */}
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-black mb-10">Case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/img/casestudy/Frame 8.png" alt="Security Camera 1" width={400} height={300} className="rounded-t-lg object-cover" />
              <h3 className="font-bold text-lg mt-4 text-black"> Emerald Jewel Industry</h3>
              <p className="text-gray-600 mt-2 flex-grow">
              Emerald Jewel Industry India Ltd, founded in 1984 by Mr. K. Srinivasan in Coimbatore, Tamil Nadu, has grown to become one of the world&apos;s largest jewelry manufacturers. With a workforce exceeding 5,000 employees and a design repository of over 500,000 unique creations, Emerald operates four state-of-the-art manufacturing units in Coimbatore, specializing in various jewelry-making techniques. The company has been recognized with numerous accolades, including the &apos;Manufacturer of the Year 2020&apos; by JNA Awards, underscoring its commitment to excellence and innovation in the jewelry industry. </p>
              <a href="/casestudy/emeraldjewel" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/img/casestudy/Frame 9.png" alt="Security Camera 2" width={400} height={300} className="rounded-t-lg object-cover" />
              <h3 className="font-bold text-lg mt-4 text-black">Texvalley Mall</h3>
              <p className="text-gray-600 mt-2 flex-grow">
              Texvalley, located in Erode, Tamil Nadu, is South India&apos;s largest integrated textile marketplace, spanning over 2 million square feet. Strategically positioned on the Salem-Kochi highway (NH544), it serves as a hub for both B2B and B2C commerce, housing hundreds of retail outlets, a hypermarket, multiplex, food court, and entertainment zones. Texvalley has been instrumental in transforming the regional textile industry by providing a centralized platform for trade and shopping.</p>
              <a href="/casestudy/texvalley" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/img/casestudy/Frame 10.png" alt="Security Camera 3" width={400} height={300} className="rounded-t-lg object-cover" />
              <h3 className="font-bold text-lg mt-4 text-black">5K Care – India&apos;s Fast-Growing Car Care</h3>
              <p className="text-gray-600 mt-2 flex-grow">
              5K Care is a rapidly growing automotive franchise network in India, with over 200 service outlets, 80–90% of which are franchised. With a strong retail presence, their model focuses on delivering standardized vehicle maintenance and car care services across locations.

              </p>
              <a href="/casestudy/5care" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a>
            </div>
          </div>
        </div>
      </section>
      <DemoSection />
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
