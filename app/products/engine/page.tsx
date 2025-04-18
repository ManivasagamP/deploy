'use client'

import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DemoSection from "@/components/demo-section"
import { useState } from "react"
import { FaqSection } from "./components/FaqSection"

const solutions = {
  analytics: {
    title: "Fusion Analytics",
    desc: "Fusion Analytics empowers businesses with AI-driven insights to optimize customer experience and store operations. With precision vision systems, it provides deep visibility into footfalls, product interactions, and staff performance. The platform ensures security and loss prevention with real-time intrusion alerts, enhances operational efficiency through facial recognition-based staff attendance, and tracks store footfalls and customer behavior using advanced people-counting technology.",
    image: "/img/engine/surveillance.png",
    stats: [
      { number: "35+", label: "Unique Features" },
      { number: "200M", label: "License Plates" },
      { number: "20M", label: "Unique Spaces" },
    ],
    link: "/products/analytics",
  },
  anpr: {
    title: "Fusion ANPR",
    desc: "Fusion ANPR leverages AI and computer vision to accurately recognize vehicle license plates in real time, enabling smarter traffic management, seamless toll automation, and efficient parking solutions. It automates traffic monitoring and helps reduce congestion at busy junctions, streamlines parking by instantly identifying vehicles and allocating slots, and facilitates fast, contactless toll collection for a smoother travel experience.",
    image: "/img/product2.png",
    stats: [
      { number: "99.8%", label: "Accuracy Rate" },
      { number: "300M", label: "Plates Recognized" },
      { number: "50+", label: "Countries Used" },
    ],
    link: "/products/anpr",
  },
  surveillance: {
    title: "Fusion Surveillance",
    desc: "Fusion Surveillance is an AI-powered vision system built on a neural compute engine, delivering 100% accurate human intrusion detection with zero false positives. Designed for all types of perimeters, it combines thermal and visual surveillance, customizable alerts, and centralized monitoring to ensure 24/7 security. It detects only human intrusions with precision using AI and deep learning scene analysis, operates independently with in-camera intelligence, voice alerts, and motion-triggered lighting, and offers centralized monitoring with real-time alerts, a modular camouflaged design, and vandal-proof features.",
    image: "/img/Fusion Survillence1.jpg",
    stats: [
      { number: "24/7", label: "Monitoring" },
      { number: "500K", label: "Cameras Deployed" },
      { number: "1M+", label: "Alerts Generated" },
    ],
    link: "/products/surveillance",
  },
  hr: {
    title: "Fusion HR",
    desc: "Facesense is an AI-driven facial recognition solution designed to streamline HR operations such as attendance, access control, and workforce management. With real-time identification, centralized dashboards, and robust data security, it enhances workplace efficiency and compliance. It automates employee attendance and access control with microsecond facial identification, provides a centralized dashboard for HR to monitor multiple locations and manage records effortlessly, and ensures secure, scalable, and contactless workforce management across distributed environments.",
    image: "/img/facial recognition3.jpg",
    stats: [
      { number: "1M+", label: "Employees Tracked" },
      { number: "99.5%", label: "Recognition Accuracy" },
      { number: "100K+", label: "Access Logs Daily" },
    ],
    link: "/products/hr",
  },
};


const tabs = [
  { key: 'premises', label: 'ON PREMISES' },
  { key: 'cloud', label: 'ON CLOUD' },
  { key: 'hybrid', label: 'ON HYBRID' }
]

const content = {
  premises: [
    { title: 'Local Setup', img: '/img/onpch/p1.avif' },
    { title: 'Data Processing', img: '/img/onpch/p2.jpg' },
    { title: 'Local Storage', img: '/img/onpch/p3.jpg' }
  ],
  cloud: [
    { title: 'Cloud Setup', img: '/img/onpch/c1.avif' },
    { title: 'Cloud Processing', img: '/img/onpch/c2.jpg' },
    { title: 'Cloud Storage', img: '/img/onpch/c3.jpg' }
  ],
  hybrid: [
    { title: 'Hybrid Setup', img: '/img/onpch/h1.jpg' },
    { title: 'Mixed Processing', img: '/img/onpch/h2.avif' },
    { title: 'Distributed Storage', img: '/img/onpch/h3.jpg' }
  ]
}

export default function EnginePage() {
  const [activeTab, setActiveTab] = useState(tabs[0].key)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="products" />

      <section className="relative min-h-screen overflow-hidden m-4 sm:m-6">
        {/* Banner Background */}
        <div className="absolute inset-0 p-2 sm:p-4">
          <Image
            src="/img/engine/banner.png"
            alt="Banner Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content on Top */}
        <div className="relative z-10 flex flex-col items-start justify-center text-start px-6 sm:px-12 py-8 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            <span className="text-[#f16e5a] ">Fusion</span> Engine
          </h2>
        </div>
      </section>

      {/* What is Fusion Engine Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10">
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-black">What is <span className="text-[#534F89]">Fusion Engine ?</span></h2>
            <p className="mb-10 mx-auto text-center text-base sm:text-xl text-black">
              A Fusion Engine represents cutting-edge edge computing hardware that works integrated with existing CCTV
              systems. Specifically designed as an edge computing unit, it processes video streams on-site and provides
              real-time insights. The system is compact, energy-efficient, and capable of handling multiple video feeds
              simultaneously through onboard compute cloud data, offering a transformative solution for diverse
              applications like surveillance, education, monitoring, and retail environments.
            </p>

            <h3 className="text-lg sm:text-xl font-bold mb-6 text-center mt-8 text-black">Our <span className="text-[#534F89]">Solutions</span></h3>
            <SolutionsCard />
          </div>
        </section>
      </div>


      <section className="py-10 sm:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#28236B]">
          <div className="absolute inset-0 ">
            <Image
              src="/img/products/bg.png"
              alt="Background Pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative bg-cover bg-center min-h-[200px] flex items-center justify-center text-white" style={{ backgroundImage: "url('/img/products/bg.png')" }}>
          <div className="container mx-auto text-center z-10 px-4 py-6 sm:py-10">
            {/* Logo */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <Image src="/img/products/logo-white.png" alt="The Fusion Apps" width={250} height={80} />
            </div>

            {/* Quote */}
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold leading-snug">
              Marketing Shapes a Story,<br />
              <span className="block">Conversion Alters it into Effects.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* How It Functions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">How it <span className="text-[#534F89]">Functions</span> </h2>
          <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
            Learn how our system operates efficiently through its core components.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition ${activeTab === tab.key
                  ? 'bg-[#f16e5a] text-white'
                  : 'bg-white border border-gray-200 text-gray-700'
                  }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke={activeTab === tab.key ? 'white' : '#666'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop layout with arrows */}
          <div className="hidden md:flex justify-center items-center gap-4">
            {content[activeTab as keyof typeof content].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4 h-40 w-40 flex items-center justify-center mx-auto">
                    <Image src={item.img} alt={item.title} width={100} height={100} />
                  </div>
                  <h3 className="font-bold uppercase text-sm text-black">{item.title}</h3>
                </div>

                {index !== content[activeTab as keyof typeof content].length - 1 && (
                  <div className="mx-4">
                    <Image
                      src="/img/products/arrow.png"
                      alt="Arrow"
                      width={40}
                      height={40}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile layout without arrows */}
          <div className="grid grid-cols-1 md:hidden gap-8">
            {content[activeTab as keyof typeof content].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-4 h-40 flex items-center justify-center">
                  <Image src={item.img} alt={item.title} width={100} height={100} />
                </div>
                <h3 className="font-bold uppercase text-sm text-black">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-premise Solutions Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10 mb-[-30px]">
        <section className="py-4 sm:py-16">
          <div className="container mx-auto px-4 mb-0 pb-0">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
              <div>
                <Image
                  src="/img/On-premise solutions1.jpg"
                  alt="On Premise Solution"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">On premise solutions</h2>
                <p className="text-gray-600">
                  On-premise solutions are ideal for organizations with specific security, compliance, or infrastructure
                  requirements. Our on-premise deployment provides complete control over your data and systems, including
                  operating systems, deploying the required software components, and configuring network settings. This
                  approach ensures maximum security while still offering the full functionality of our advanced analytics
                  solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div>
                <Image
                  src="/img/cloud solutions.jpg"
                  alt="Cloud Solution"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-black">Cloud solutions</h3>
                <p className="text-gray-600 ">
                  Our cloud-based deployment allows clients to tap into our advanced features without the need for
                  extensive on-site hardware. This approach offers maximum flexibility, scalability, and
                  cost-effectiveness, allowing the software to run in a cloud platform, with data securely transmitted to
                  our processing centers for analysis and reporting.
                </p>
              </div>

              <div>
                <Image
                  src="/img/integrated cloud solutions.jpg"
                  alt="Integrated Cloud"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-black">Integrated Cloud Solution</h3>
                <p className="text-gray-600 ">
                  An integrated cloud deployment combines the best of both worlds, with a installation on-premises for
                  critical real-time processing and a connection to a cloud service provider. This approach seamlessly
                  integrates on-premises and cloud components, offering scalability and flexibility while ensuring
                  sensitive data remains under your control.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* ROI Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10">
        <section className="py-8 sm:py-16 bg-white  ">
          <div className="container mx-auto px-4 mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {/* Left Side */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mt-0 mb-4">
                  <span className="text-[#534F89]">Fusion Engine</span>
                  <br />
                  <span className="text-black text-lg">impacting your ROI</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  The Fusion Engine, with its AI-based video analytics, can automate tasks like object and facial recognition, which reduces the need for human monitoring and interpretation.
                </p>
                <p className="text-gray-600 mb-4">
                  By processing substantial video data efficiently, the Fusion Engine allows for deployment in large environments, enhancing scalability and adaptability.
                </p>
                <p className="text-gray-600 mb-4">
                  AI-driven analytics transform video surveillance systems into valuable business intelligence tools, providing insights that can lead to cost savings and increased profitability.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl font-bold text-[#534F89]">2.4 K +</span>
                    <span className="text-sm text-gray-500 ml-2">Used</span>
                  </div>
                  <div className="border-l border-gray-300 h-8 mx-4"></div>
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl font-bold text-[#534F89]">4.9</span>
                    <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-sm text-gray-500 ml-2">Rating</span>
                  </div>
                  <div className="border-l border-gray-300 h-8 mx-4"></div>
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl font-bold text-[#534F89]">133 K +</span>
                    <span className="text-sm text-gray-500 ml-2">Used</span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div>
                <h2 className="text-lg sm:text-2xl font-bold mb-4 text-[#534F89]">
                  In terms of ROI, the Fusion Engine can contribute to a 15%-20% increase by:
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12">
                      <Image
                        src="/img/wcu.png"
                        alt="On-Premise Solutions"
                        width={48}
                        height={48}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black px-3">Reducing Operational Costs</h3>
                      <p className="text-gray-600 px-3">Automating surveillance tasks leads to fewer service calls and maintenance requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12">
                      <Image
                        src="/img/wcu.png"
                        alt="On-Premise Solutions"
                        width={48}
                        height={48}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black px-3">Enhancing Security</h3>
                      <p className="text-gray-600 px-3">Improved detection and response capabilities can prevent losses due to theft or other security incidents.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12">
                      <Image
                        src="/img/wcu.png"
                        alt="On-Premise Solutions"
                        width={48}
                        height={48}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black px-3">Increasing Business Efficiency</h3>
                      <p className="text-gray-600 px-3">Insights from video analytics can optimize operations, customer service, and marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EDE7F6] border border-[#534F89] rounded-2xl p-7  mt-24 mb-0 relative ">
              <div className="absolute -top-4 -left-4">
                <Image
                  src="/img/engine/star.png" // Update with the actual path to your star image
                  alt="Star Icon"
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-darkblue text-2xl sm:text-3xl p-4 font-bold text-center text-[#534F89]">
                By integrating the Fusion Engine into their video surveillance systems, businesses can expect to see a significant return on investment through improved security, operational efficiency, and actionable business insights.
              </h2>
            </div>

          </div>
        </section>
      </div>


      <DemoSection />
      <Footer />
    </div>
  )
}

// Move the SolutionsCard component outside the main component
function SolutionsCard() {
  const [activeTab, setActiveTab] = useState("analytics");
  const current = solutions[activeTab as keyof typeof solutions];

  return (
    <div className="text-black">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        {Object.keys(solutions).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`border-b-2 px-3 sm:px-4 py-2 font-medium ${activeTab === key
              ? "border-[#f16e5a] text-[#f16e5a]"
              : "border-transparent hover:border-[#f16e5a] hover:text-[#f16e5a]"
              }`}
          >
            {solutions[key as keyof typeof solutions].title}
          </button>
        ))}
      </div>

      {/* Card Content */}
      <div className="bg-gray-100 rounded-xl p-4 sm:p-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
          <div>
            <Image
              src={current.image}
              alt={current.title}
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#f16e5a]">
              {current.title}
            </h3>
            <p className="text-gray-600 mb-6">{current.desc}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              {current.stats.map((stat, index) => (
                <div key={index} className="bg-[#FEE4DC] px-4 py-2 rounded-lg text-center">
                  <span className="block text-xl sm:text-2xl font-bold text-[#f16e5a]">
                    {stat.number}
                  </span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              href={current.link}
              className="bg-[#f16e5a] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#f28859] transition-colors"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                window.location.href = current.link; // Redirect to the page
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
