"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DemoSection from "@/components/demo-section"
import { useState } from "react"

export default function AnalyticsPage() {
  
  const categories = [
    "Retail",
    "Hospitality",
    "Manufacturing",
    "Transportation",
    "Advertisement",
    "Banking",
  ] as const;
  
  type Category = typeof categories[number];
  
  const [activeCategory, setActiveCategory] = useState<Category>("Retail");
  
  

  const customers = [
    { name: "Adobe", logo: "/img/products/1.png" },
    { name: "Stripe", logo: "/img/products/2.png" },
    { name: "HubSpot", logo: "/img/products/3.png" },
    { name: "Asana", logo: "/img/products/4.png" },
    { name: "Gumroad", logo: "/img/products/5.png" },
    { name: "Linear", logo: "/img/products/6.png" }
  ];
  const contentData = {
    Retail: [
      { title: 'Queue Management', image: '/img/analytics/queue-management.jpg' },
      { title: 'Footfall Detection', image: '/img/analytics/footfall-detection.jpg' },
      { title: 'Age Gender Prediction', image: '/img/analytics/age-gender-prediction.jpg' },
    ],
    Hospitality: [
      { title: 'Guest Analysis', image: '/img/hospitality/guest-analysis.jpg' },
      { title: 'Smart Concierge', image: '/img/hospitality/smart-concierge.jpg' },
      { title: 'Wait Time Prediction', image: '/img/hospitality/wait-time-prediction.jpg' },
    ],
    Manufacturing: [
      { title: 'Worker Safety', image: '/img/manufacturing/worker-safety.jpg' },
      { title: 'Machine Usage Analysis', image: '/img/manufacturing/machine-usage-analysis.jpg' },
      { title: 'Assembly Line', image: '/img/manufacturing/assembly-line.webp' },
    ],
    Transportation: [
      { title: 'Passenger Counting', image: '/img/transport/Passenger-Counting.jpg' },
      { title: 'Vehicle Detection', image: '/img/transport/Vehicle Detection.jpg' },
      { title: 'Traffic Flow Analysis', image: '/img/transport/traffic-flow.webp' },
    ],
    Advertisement: [
      { title: 'Ad Reach Metrics', image: '/img/ads/ad-reach.jpg' },
      { title: 'Audience demographics', image: '/img/ads/audience-demographics.png' },
      { title: 'Impression Heatmaps', image: '/img/ads/heatmap.png' },
    ],
    Banking: [
      { title: 'ATM Queue Detection', image: '/img/bank/atm-queue.png' },
      { title: 'Security Monitoring', image: '/img/bank/security-monitoring.jpg' },
      { title: 'Customer Flow', image: '/img/bank/customer-flow.png' },
    ],
  };
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "What is Fusion Analytics and how does it help businesses?",
      answer: "Fusion Analytics is an AI-powered vision and data analytics platform that helps businesses make data-driven decisions by monitoring environments, analyzing behaviors, and delivering real-time alerts through visual intelligence."
    },
    {
      id: 2,
      question: "Can Fusion Analytics be integrated with existing CCTV or surveillance systems?",
      answer: "Yes, Fusion Analytics is designed to be compatible with most existing camera infrastructure and can be seamlessly integrated without the need for complete system overhauls."
    },
    {
      id: 3,
      question: "Which industries can benefit from Fusion Analytics?",
      answer: "Fusion Analytics is applicable across various sectors including healthcare, retail, residential communities, education, manufacturing, banking, and corporate campuses—offering custom solutions for each."
    },
    {
      id: 4,
      question: "What kind of insights does Fusion Analytics provide?",
      answer: "It delivers insights like footfall analysis, intrusion detection, customer demographics, queue management, PPE compliance, energy monitoring, and more, depending on the industry use case."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="products" />

      <section className="relative min-h-screen overflow-hidden m-6">
        {/* Banner Background */}
        <div className="absolute inset-0 p-4">
          <Image
            src="/img/products/Banner.png"
            alt="Banner Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content on Top */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            <span className="text-[#f16e5a]">Fusion</span> Analytics
          </h2>
          {/* <p className="mt-4 max-w-2xl text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Amet vitae enim lorem suspendisse
            non erat. Scelerisque massa tempor at risus leo lorem felis nulla. Sem ac
            viverra a purus.
          </p> */}
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of top companies already using our platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="transform transition duration-300 hover:scale-105 p-4 flex items-center justify-center w-full h-24"
              >
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-white">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20 py-10">
          {/* Left Side Image */}
          <div className="flex justify-center items-center md:w-2/5">
            <Image src="/img/products/about.png" alt="About Illustration" width={350} height={350} />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center md:w-3/5">
            <h3 className="text-xl font-bold text-[#4B3FBD] mb-2">Problems</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              In the modern business landscape, decision-makers face growing challenges in accessing timely, accurate, and actionable insights. Data is generated from countless touchpoints—whether it&apos;s customer interactions, machine operations, security systems, or digital platforms—but often remains underutilized due to fragmented systems, lack of integration, and the absence of real-time analytics.
            </p>

            <h3 className="text-xl font-bold text-[#4B3FBD] mb-2">Solution</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Your one-in-all solution to your problems, <span className="font-bold text-[#4B3FBD]">FUSION ENGINE</span>.
              Fusion Engine, an AI and ML powered hardware beast that processes video channels as input and produces refined
              outputs such as recognized records and alarm events. It empowers systems to swiftly and autonomously interpret
              complex visual data, offering a transformative solution for diverse applications like surveillance, industrial
              monitoring, and smart environments, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative overflow-hidden">
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

        <div className="relative bg-cover bg-center min-h-[200px] flex items-center justify-center text-white" style={{ backgroundImage: "url('/img/products/banner-bg.png')" }}>
          <div className="container mx-auto text-center z-10 px-4 py-10">
            <div className="flex justify-center mb-6">
              <Image src="/img/products/logo-white.png" alt="The Fusion Apps" width={250} height={80} />
            </div>

            <h2 className="text-xl md:text-3xl font-bold leading-snug">
              Marketing Shapes a Story,<br />
              <span className="block">Conversion Alters it into Effects.</span>
            </h2>
          </div>
        </div>
      </section>

      <div className="mx-4 md:mx-12">
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-black">Feature</h2>
            <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
              Without a centralized and intelligent system to collect, process, and analyze this data continuously, businesses struggle with
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FEE4DC] p-8 rounded-xl relative pt-8">
                <div className="absolute -top-6 left-8 bg-[#f16e5a] w-12 h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/products/efficiency.png"
                    alt="Efficiency Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-[#F28859]">Efficiency</h3>
                <p className="text-gray-600">
                  Traditional methods of video processing are time-consuming and inefficient. Our solution uses advanced
                  machine learning algorithms to automate the process, saving time and resources for organizations to
                  scale their operations.
                </p>
              </div>

              <div className="bg-[#FEE4DC] p-8 rounded-xl relative pt-8">
                <div className="absolute -top-6 left-8 bg-[#f16e5a] w-12 h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/products/accuracy.png"
                    alt="Accuracy Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-[#F28859]">Accuracy</h3>
                <p className="text-gray-600">
                  The Fusion Engine is powered by advanced algorithms that have been trained on a vast dataset of
                  real-world scenarios. This ensures high accuracy in detection and recognition tasks, even in challenging
                  conditions.
                </p>
              </div>

              <div className="bg-[#FEE4DC] p-8 rounded-xl relative pt-8">
                <div className="absolute -top-6 left-8 bg-[#f16e5a] w-12 h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/products/scalability.png"
                    alt="Scalability Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-[#F28859]">Scalability</h3>
                <p className="text-gray-600">
                  Traditional methods of video processing are time-consuming and inefficient. Our solution uses advanced
                  machine learning algorithms to automate the process, saving time and resources for organizations to
                  scale their operations.
                </p>
              </div>
            </div>

            {/* <div className="text-center mt-12">
              <Link
                href="#"
                className="bg-[#f16e5a] text-white px-6 py-3 rounded-full inline-block font-medium hover:bg-[#f28859] transition-colors"
              >
                View More
              </Link>
            </div> */}
          </div>
        </section>



        <section className="py-10 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-indigo-700">Verticals</span> we focus on!
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">
                Empowering diverse industries with AI-driven solutions for smarter operations, enhanced customer insights, and real-time decision-making.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Category Selection Panel */}
              <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-sm p-4 md:p-6">
                <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap w-full
                    ${activeCategory === category
                          ? 'bg-gradient-to-r from-red-500 to-red-400 text-white shadow-md'
                          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                    ${activeCategory === category ? 'bg-white' : 'border border-gray-300'}`}>
                        {activeCategory === category && (
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                      <span className="uppercase text-sm font-medium">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Cards */}
              <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {contentData[activeCategory].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold uppercase text-gray-800 tracking-wide">{item.title}</h3>
                        <div className="w-16 h-1 bg-red-400 mx-auto mt-2 mb-2 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Frequently Asked <span className="text-indigo-700">Questions</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-left font-medium text-black">{item.question}</span>
                    <div
                      className={`bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 transition-transform duration-300 ${openItem === item.id ? 'rotate-45' : ''}`}
                    >
                      +
                    </div>
                  </button>

                  {openItem === item.id && (
                    <div
                      className="px-6 pb-4 pt-2 text-gray-600 animate-fadeIn"
                      style={{ animation: 'fadeIn 0.3s ease-in-out' }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </section>
      <DemoSection />
      <Footer />
    </div>
  )
}
