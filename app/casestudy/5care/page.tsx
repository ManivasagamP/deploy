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
            5K Care – India&apos;s Fast-Growing Car Care Franchise
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
                src="/img/casestudy/5k1.jpg"
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
                <p className="text-[#303030] mb-5">Despite its growing footprint, 5K Care faced two major operational hurdles:
                </p>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Lack of visibility into franchise operations</span> Lack of visibility into franchise operations – There was no real-time data on the number of vehicles serviced across outlets, as many franchise owners failed to update reports accurately.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Untracked employee performance</span> – Open-gated outlets made it difficult to monitor employee attendance, productivity, and task compliance.</p>
                </div>
                <p className="text-[#303030]">These issues raised concerns over inconsistent billing, potential revenue leaks, and a lack of trust between the core team and franchisees.</p>
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
                <p className="text-[#303030] mb-5">To resolve these challenges, we proposed a dual-module solution:</p>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold"> Fusion ANPR</span> – to monitor vehicle inflow/outflow across service stations and provide automated tracking and insights.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Attendance</span> – to monitor workforce presence, behavior, and task performance seamlessly.</p>
                </div>
                <p className="text-[#303030]">This combination was tailored to help 5K Care build a reliable system that could verify actual service volumes, highlight underbilling, and assess individual outlet performance.</p>
              </div>
            </div>

            {/* Right Side - Product Image */}
            <div className="relative">
              <Image
                src="/img/casestudy/5k2.jpg"
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
                src="/img/casestudy/5k3.jpg"
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
                <p className="text-[#303030] mb-5">Our journey began with a complete audit of multiple franchise locations, evaluating existing camera systems and identifying infrastructure gaps. The older surveillance hardware was found insufficient for AI-based tracking, so we recommended upgrading to newer cameras in high-traffic and service areas.</p>
                <p className="text-[#303030]">We began with a pilot phase across a few strategic outlets. During this stage:</p>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]">We <span className="font-bold">tracked vehicle entries and exits</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Benchmarked employee performance</span> using facial attendance.</p>
                </div>
                <p className="text-[#303030] mb-5">The pilot&apos;s output revealed 15% underbilling, exposing a critical revenue leakage. The results helped build trust and paved the way for full-scale deployment.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-black mb-10">Case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  src="/img/casestudy/Frame 8.png"
                  alt="Security Camera 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mt-4 text-black"> Emerald Jewel Industry</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Emerald Jewel Industry India Ltd, founded in 1984 by Mr. K. Srinivasan in Coimbatore, Tamil Nadu, has grown to become one of the world&apos;s largest jewelry manufacturers. With a workforce exceeding 5,000 employees and a design repository of over 500,000 unique creations, Emerald operates four state-of-the-art manufacturing units in Coimbatore, specializing in various jewelry-making techniques. The company has been recognized with numerous accolades, including the &apos;Manufacturer of the Year 2020&apos; by JNA Awards, underscoring its commitment to excellence and innovation in the jewelry industry. </p>
              <a href="/casestudy" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="flex justify-center items-center w-full">
                <Image
                  src="/img/casestudy/Frame 9.png"
                  alt="Security Camera 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mt-4 text-black">Texvalley Mall</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Texvalley, located in Erode, Tamil Nadu, is South India&apos;s largest integrated textile marketplace, spanning over 2 million square feet. Strategically positioned on the Salem-Kochi highway (NH544), it serves as a hub for both B2B and B2C commerce, housing hundreds of retail outlets, a hypermarket, multiplex, food court, and entertainment zones. Texvalley has been instrumental in transforming the regional textile industry by providing a centralized platform for trade and shopping.</p>
              <a href="/casestudy/texvalley" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a>
            </div>

            {/* Card 3 */}
            {/* <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/img/casestudy/Frame 10.png" alt="Security Camera 3" width={400} height={300} className="rounded-t-lg object-cover" />
              <h3 className="font-bold text-lg mt-4 text-black">5K Care – India&apos;s Fast-Growing Car Care</h3>
              <p className="text-gray-600 mt-2 flex-grow">
              5K Care is a rapidly growing automotive franchise network in India, with over 200 service outlets, 80–90% of which are franchised. With a strong retail presence, their model focuses on delivering standardized vehicle maintenance and car care services across locations.

              </p>
              <a href="/casestudy/5care" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <DemoSection />
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
