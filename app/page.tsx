import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {

  const industries = [
    {
      name: "Hospitals",
      description: "Fusion Engine transforms hospitality with smarter operations, personalized service, and enhanced guest experiences.",
      image: "/img/homeProd1.png",
      link: "/industries/hospital",
      icon: "/img/industries/icons/hospitalIcon.svg"
    },
    {
      name: "Manufacturing",
      description: "Fusion Engine drives intelligent manufacturing with efficiency, safety, and smart insights.",
      image: "/img/homeProd2.png",
      link: "/industries/manufacture",
      icon: "/img/industries/icons/manuIcon.svg"
    },
    {
      name: "Banking",
      description: "Fusion Engine empowers banks with enhanced security, performance, and customer trust in a digital world.",
      image: "/img/homeProd3.png",
      link: "/industries/bank",
      icon: "/img/industries/icons/bankIcon.svg"
    },
    {
      name: "Transportation",
      description: "Fusion Engine transforms transportation with real-time insights, improved safety, and smarter infrastructure.",
      image: "/img/homeProd4.png",
      link: "/industries/transport",
      icon: "/img/industries/icons/transportIcon.svg"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#28236B] to-[#28236B]">
        {/* Banner Background */}
        {/* <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-overlay"
          >
            <source src="/img/industries/bannerVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <div className="absolute inset-0">
          <Image
            src="/img/BannerImage.png"
            alt="Banner Background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  p-5 rounded-2xl">
            {/* Left Side - Logo */}
            <div className="flex justify-center ml-15">
              <div className="relative w-full max-w-[200px] h-[200px]">
                <div className="relative w-full h-full animate-[spin_5s_linear_infinite]">
                  <Image
                    src="/img/Logo svg.svg"
                    alt="Fusion Apps Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-white text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                We Provide AI Solution with{" "}
                <span className="text-[#FF4A4A] block">Fusion Engine</span>
              </h1>
              <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                We are an AI video intelligence startup providing real-time insights for your business. Our solutions help you save energy and costs by leveraging computer vision technology through your CCTV cameras.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/onBoarding" className="px-6 py-4  text-white rounded-full font-medium hover:bg-opacity-90 transition-all" style={{ background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)" }}>
                  Onboarding Journey
                </Link>
                <Link href="https://calendly.com/thefusionapps/30min" className="px-6 py-4 text-white rounded-full " style={{ background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)" }}>
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div> */}
      </section>

      <div className="mx-4 md:mx-12 px-4 md:px-12 pb-6">

        {/* How It Works */}
        <section className="md:py-20 py-6 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
              How It <span className="text-[#6C5DD3]">Works</span>
            </h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center max-w-[3280px] mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-[280px] mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/img/video-input.png"
                    alt="Video Input"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#303030]">Video Input</h3>
                <p className="text-[#666666] text-base">
                  CCTV cameras capture store activities.
                </p>
              </div>

              {/* Dot Line 1 */}
              <div className="hidden md:flex flex-1 items-center justify-center relative h-[2px] mx-12">
                <div className="w-full border-t-2 border-dashed border-[#6C5DD3] translate-y-[-47px]"></div>
                <div className="absolute left-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
                <div className="absolute right-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-[280px] mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/img/ai-processing.png"
                    alt="AI Processing"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#303030]">AI Processing</h3>
                <p className="text-[#666666] text-base">
                  Our AI analyzes real-time video feeds.
                </p>
              </div>

              {/* Dot Line 2 */}
              <div className="hidden md:flex flex-1 items-center justify-center relative h-[2px] mx-12">
                <div className="w-full border-t-2 border-dashed border-[#6C5DD3] translate-y-[-47px]"></div>
                <div className="absolute left-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
                <div className="absolute right-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-[280px] mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/img/actionable-insights.png"
                    alt="Actionable Insights & Results"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#303030]">Actionable Insights & Results</h3>
                <p className="text-[#666666] text-base">
                  The system provides data-driven results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="md:py-20 py-6 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-16">
              {/* Left Side - Content */}
              <div className="mt-4 order-2 md:order-1"> {/* Added margin-top to move the position down */}
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-black">
                  Why <span className="text-[#6C5DD3]">Choose Us</span>
                </h2>
                <p className="text-[#666666] mb-20 max-w-xl">
                  Delivering innovative and scalable tech solutions tailored to your business needs.
                  Seamless integration, robust security, and future-ready performance.
                  Trusted by clients for our reliability, expertise, and customer-first approach.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Feature 1 */}
                  <div className="flex flex-col mb-8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/onpremiseIcon.svg"
                        alt="On-Premise Solutions"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">On-Premise Solutions</h3>
                      <p className="text-[#666666] text-sm">
                        Gain full control with secure and customizable in-house infrastructure.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col mb-8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/cloudsolnIcon.svg"
                        alt="Cloud Solutions"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">Cloud Solutions</h3>
                      <p className="text-[#666666] text-sm mb-8">
                        Access anytime, anywhere with flexible and scalable cloud environments.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col mb-8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/cloundIcon2.svg"
                        alt="Integrated Cloud Solutions"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">Integrated Cloud Solutions</h3>
                      <p className="text-[#666666] text-sm">
                        Experience the best of both worlds with hybrid architecture that adapts to you.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/aiIcon.svg"
                        alt="AI Processing"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">AI Processing</h3>
                      <p className="text-[#666666] text-sm">
                        Accelerate decision-making with intelligent automation and real-time insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="relative rounded-[32px] overflow-hidden order-1 md:order-2">
                <Image
                  src="/img/wcu2.png"
                  alt="Team Meeting"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" fill="#6C5DD3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="md:py-20 py-6 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-black">
              Our <span className="text-[#6C5DD3]">Features</span>
            </h2>

            {/* Product Card - Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 items-center mb-20">
              {/* Left Side - Product Image */}
              <div className="relative">
                <Image
                  src="/img/Fusion Apps Dashboard 1.png"
                  alt="Analytics Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>

              {/* Right Side - Product Details */}
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                  Fusion <span className="text-[#6C5DD3]">Analytics</span>
                </h3>

                {/* Feature List */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <p className="text-[#303030] mb-5">Fusion Analytics empowers businesses with AI-driven insights to optimize customer experience and store operations. With precision vision systems, gain deep visibility into footfalls, product interactions, and staff performance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030]">Ensure security and loss prevention with real-time intrusion alerts </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030]">Improve operations with facial recognition-based staff attendance</p>
                  </div>

                  <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="/products/analytics" className="text-white hover:underline ml-1.5">Learn more</a>
                  </p>

                  {/* <div className="flex items-center gap-3">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                    <p className="text-[#303030]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div> */}

                  <div className="absolute right-[-0.90px] top-[-150px] -z-10">
                    <Image
                      src="/img/ourproduct2.png"
                      alt="Decorative Background"
                      width={300}
                      height={300}
                      className="opacity-60"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card - AMPR */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 mb-25 items-center">
              {/* Left Side - Product Details */}
              <div className="relative order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Fusion <span className="text-[#6C5DD3]">ANPR</span>
                </h3>
                <p className="text-[#666666] mb-8">
                  Fusion ANPR leverages AI and computer vision to accurately recognize vehicle license plates in real time. It enables smarter traffic management, seamless toll automation, and efficient parking solutions.  </p>
                <div className="absolute left-[-50px] top-[-70px] -z-10">
                  <Image
                    src="/img/ANPR.jpg"
                    alt="Decorative Background"
                    width={300}
                    height={300}
                    className="opacity-70"
                    priority
                  />
                </div>

                {/* Feature List */}
                <div >
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Automates traffic monitoring and reduces congestion at busy junctions.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Streamlines parking by identifying vehicles and allocating slots instantly.</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Enables fast, contactless toll collection for a smoother travel experience.</p>
                    </div>

                    <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                      <a href="/products/anpr" className="text-white hover:underline ml-1.5">Learn more</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Image */}
              <div className="relative order-1 md:order-2">
                <Image
                  src="/img/ANPR.jpg"
                  alt="AMPR Surveillance System"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>
            </div>

            {/* Product Card - Surveillance */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 items-center mb-20">
              {/* Left Side - Product Image */}
              <div className="relative">
                <Image
                  src="/img/Fusion Survillence1.jpg"
                  alt="Surveillance System"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>

              {/* Right Side - Product Details */}
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                  Fusion <span className="text-[#6C5DD3]">Surveillance</span>
                </h3>

                {/* Feature List */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <p className="text-[#303030] mb-5">Fusion Surveillance is an AI-powered vision system built on a neural compute engine, delivering 100% accurate human intrusion detection with zero false positives.
                        Designed for all perimeter types, it integrates thermal and visual surveillance, customizable alerts, and centralized monitoring for round-the-clock security.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Detects only human intrusions with precision using AI and deep learning scene analysis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Operates independently with in-camera intelligence, voice alerts, and motion-triggered lighting.
                      </p>
                    </div>
                  </div>

                  <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="/products/surveillance" className="text-white hover:underline ml-1.5">Learn more</a>
                  </p>

                  {/* <div className="flex items-center gap-3">
                  <img src="/img/tickicon.png" alt="Tick Icon" className="w-4 h-4" />
                  <p className="text-[#303030]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}

                  {/* <div className="absolute right-[-0.90px] top-[-150px] -z-10">
                    <Image
                      src="/img/fusionsurveillane.png"
                      alt="Decorative Background"
                      width={300}
                      height={300}
                      className="opacity-60"
                      priority
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Product Card - HR */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 items-center">
              {/* Left Side - Product Details */}
              <div className="relative  order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Fusion <span className="text-[#6C5DD3]">HR</span>
                </h3>
                <p className="text-[#666666] mb-8">
                  Facesense is an AI-driven facial recognition solution designed to streamline HR operations like attendance, access control, and workforce management.
                  With real-time identification, centralized dashboards, and high data security, it enhances workplace efficiency and compliance.
                </p>
                <div className="absolute left-[-50px] top-[-70px] -z-10">
                  <Image
                    src="/img/fusionhr.png"
                    alt="Decorative Background"
                    width={600}
                    height={500}
                    className="opacity-70"
                    priority
                  />
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030]">Automates employee attendance and access control with microsecond facial identification.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030] mb-2">Centralized dashboard lets HR easily manage records across locations.</p>
                  </div>

                  <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="/products/hr" className="text-white hover:underline ml-1.5">Learn more</a>
                  </p>
                </div>
              </div>

              {/* Right Side - Product Image */}
              <div className="relative  order-1 md:order-2">
                <Image
                  src="/img/facial recognition3.jpg"
                  alt="HR System"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Monitor Easily Section */}
      <section className="md:py-20 py-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-t-[0px] overflow-hidden">
          <Image
            src="/img/overviewbackground.png"
            alt="Background Pattern"
            fill
            className="object-cover"

          />
        </div>
        <div className="mx-4 md:mx-12 px-4 md:px-12 pb-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Monitor<span className="text-[#6C5DD3] ml-2">Easily</span>
                </h3>

                <div className="mb-8">
                  <h3 className="text-[#f28b58] text-lg mb-2">Problem: <span className="text-white">You currently have data for only 20% of buyers, meaning you only know what they are purchasing.</span></h3>
                  <p className="text-white opacity-80">

                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-[#f28b58] text-lg mb-2">Solution: <span className="text-white">We provide data for 80% of customer walk-outs, allowing you to understand why they are not buying.</span></h3>
                  <p className="text-white opacity-80">

                  </p>
                </div>

                <Link href="https://calendly.com/thefusionapps/30min" className="px-6 py-3 bg-white text-[#1A1A3D] rounded-full font-medium hover:bg-opacity-90 transition-all inline-block">
                  Book a Demo
                </Link>
              </div>

              {/* Right Side - Dashboard Image */}
              <div className="relative z-10 order-1 md:order-2">
                <Image
                  src="/img/overview.png"
                  alt="Retail Analytics Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <div className=" md:mx-12 px-4 md:px-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-10 text-black">
          Our <span className="text-[#6C5DD3]">Products</span>
        </h2>
        <section className="md:py-20  bg-[#F8F8FF] rounded-[32px]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fusion Engine Card */}
              <div className="bg-white rounded-[32px] p-10">
                <div className="flex items-start mt-[-18]">
                  <Image
                    src="/img/fEngine.png"
                    alt="The Fusion Apps"
                    width={250}
                    height={50}
                    className="h-auto"
                  />
                </div>

                <p className="text-[#666666] mt-10 mb-4">
                  Fusion Engine is an AI-powered video processing powerhouse that turns raw visuals into actionable insights.From real-time recognition to intelligent alerts, it revolutionizes surveillance, industrial monitoring, and smart environments.... </p>

                <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <a href="/products/engine">View more</a>
                </p>
              </div>

              {/* Fusion Eco Card */}
              <div className="bg-white rounded-[32px] p-12">
                <div className="mb-8">
                  <Image
                    src="/img/Fusion Apps 3.png"
                    alt="Fusion Eco"
                    width={200}
                    height={60}
                    className="h-auto"
                  />
                </div>

                <p className="text-[#666666] mb-4">
                  A smart energy-saving solution that optimizes electricity usage, reducing waste and cutting costs for businesses.We optimize consumption so only 60% of necessary energy is used efficiently....</p>

                <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  View more
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Showcase Section */}
        <section className=" py-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold md:mt-10 text-black">
            Our <span className="text-[#6C5DD3]">Solutions</span>
          </h2>
          <div className="container mx-auto px-4 md:px-8 mt-10">
            <div className="flex flex-wrap justify-between gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="relative group overflow-hidden rounded-[20px] w-full sm:w-[45%] lg:w-[22%] h-[350px] md:h-[450px]">
                  {/* Image container with fixed height */}
                  <div className="h-full w-full">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                    />

                    {/* Industry name visible before hover */}
                    <div className="absolute inset-0 hidden md:flex justify-center items-end text-white transition-opacity duration-300 group-hover:opacity-0 pb-6">
                      <h3 className="text-xl font-semibold px-4 rounded-[10px]">{industry.name}</h3>
                    </div>

                    {/* Full overlay on hover */}
                    <div
                      className="absolute inset-0 flex flex-col justify-between items-center text-center text-white 
    bg-[#28236B]/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 
    rounded-[20px] p-6 z-20"
                    >

                      {/* Top Icon */}
                      <div className="mt-4">
                        <div className="border border-white p-3 rounded-[10px]">
                          {/* Use your icon image */}
                          <Image
                            src={industry.icon}
                            alt={`${industry.name} icon`}
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>

                      {/* Middle Content */}
                      <div>
                        <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                        <hr className="border-white w-10 mx-auto mb-2" />
                        <p className="text-sm px-4">
                          {industry.description || "Lorem ipsum dolor sit amet consectetur..."}
                        </p>
                      </div>

                      {/* Bottom Button */}
                      <div className="mb-4">
                        <Link href={industry.link} className="mt-4 bg-white text-[#28236B] font-semibold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
                          View more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Statistics Section */}
      <section className="md:py-20 py-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#28236B]">
          <div className="absolute inset-0 ">
            <Image
              src="/img/counter.png"
              alt="Background Pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Camera Channels */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Camera Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80 text-lg">Camera Channel</div>
            </div>

            {/* Facilities */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Facility Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-lg">Facilities</div>
            </div>

            {/* Brands */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Brand Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80 text-lg">Brands</div>
            </div>

            {/* Countries */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Country Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-white/80 text-lg">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-4 md:mx-12 px-4 md:px-12 pb-6 md:pb-0">

        {/* Solutions Overview Section */}
        {/* <section className="py-20 bg-white ">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#303030] block">Apart from retail,</span>
                  <span className="text-2xl font-semibold text-[#6C5DD3] mt-2 block">Our AI solutions are applicable in</span>
                </h2>


                <p className="text-[#666666] mb-8">
                  Our cutting-edge AI solutions go beyond retail, empowering industries like healthcare and manufacturing with intelligent automation, actionable insights, and real-time decision-making for improved outcomes.
                </p>


                <div className="flex items-center gap-8">

                  <div className="text-start">
                    <div className="text-[#6C5DD3] text-4xl font-bold mb-1">2.4K+</div>
                    <div className="text-[#303030] text-md font-bold">Used</div>
                  </div>


                  <div className="w-px h-12 bg-gray-200"></div>


                  <div className="text-start">
                    <div className="flex items-center gap-2">
                      <span className="text-[#6C5DD3] text-4xl font-bold">4.9</span>
                      <Image
                        src="/img/star-icon.png"
                        alt="Star Rating"
                        width={24}
                        height={24}
                        className="mt-1"
                      />
                    </div>
                    <div className="text-[#303030] text-md font-bold">Rating</div>
                  </div>
                </div>
              </div>


              <div className="space-y-8">

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6C5DD3] rounded-lg flex items-center justify-center">
                    <Image
                      src="/img/icon-white.png"
                      alt="Video Icon"
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#303030] mb-2">Hospitals</h3>
                    <p className="text-[#666666]">
                      Healthcare solutions for better service.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6C5DD3] rounded-lg flex items-center justify-center">
                    <Image
                      src="/img/icon-white.png"
                      alt="Video Icon"
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#303030] mb-2">Manufacturing</h3>
                    <p className="text-[#666666]">
                      Optimizing production processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Customer Reviews Section */}
        <section className="md:py-20 py-6 bg-white text-black">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header with Navigation */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                What <span className="text-[#6C5DD3]">our Customer</span> Say
              </h2>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-[#303030] flex items-center justify-center transition-all hover:bg-gray-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-[#28236B] flex items-center justify-center transition-all hover:bg-opacity-90">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Reviews Slider */}
            <div className="overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 transition-all duration-500">
                {/* Review Card 1 */}
                <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F8FF] rounded-[20px] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/img/cus1.jpg"
                        alt="Victor"
                        width={60}
                        height={60}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#303030]">Retail Industry Client – Smart Surveillance
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/img/star-icon.png"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#666666]">
                    Fusion Engine has completely transformed our in-store surveillance. The real-time alerts and facial recognition help us prevent theft and improve customer service. It&apos;s like having an intelligent security team on watch 24/7!</p>
                </div>

                {/* Review Card 2 */}
                <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F8FF] rounded-[20px] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/img/cus2.jpg"
                        alt="Victor"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#303030]"> Industrial Monitoring Client – Automation Upgrade</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/img/star-icon.png"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#666666]">
                    We integrated Fusion Engine into our manufacturing plant&apos;s monitoring system, and the results have been phenomenal. It detects anomalies instantly and helps us reduce downtime significantly.</p>
                </div>

                {/* Review Card 3 */}
                <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F8FF] rounded-[20px] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/img/cus3.jpg"
                        alt="Victor"
                        width={60}
                        height={60}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#303030]">Corporate Office Client – Access & Safety
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/img/star-icon.png"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#666666]">
                    Installing Fusion Engine helped us centralize access control and monitor multiple office locations with ease. Its face recognition and alert system have added a whole new layer of security. </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logo Section */}
        <section className="bg-white text-black">
          <div className="container mx-auto px-4 md:px-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-start mb-10">
              Our <span className="text-[#6C5DD3]">Clients</span>
            </h2>

            {/* Logo Container */}
            <div className="w-full overflow-hidden relative">
              <div className="animate-scroll-x flex w-max gap-8 md:gap-12">
                {/* Repeat logos if needed for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[...Array(10)].map((_, j) => (
                      <div
                        key={j + i * 10}
                        className="flex-none border border-gray-300 shadow-md rounded-md p-2"
                      >
                        <Image
                          src={`/img/clients/client${j + 1}.png`}
                          alt={`client-${j + 1}`}
                          width={140}
                          height={60}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>


      </div>

      {/* CTA Section */}
      <section className="bg-white md:py-20 py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[32px] bg-[#28236B] ">
            {/* Circuit Pattern Background */}
            <div className="absolute inset-0">
              <Image
                src="/img/CTA.png"
                alt="Circuit Pattern"
                fill
                className="object-cover opacity-20"
              />
              {/* Glowing Overlay */}
              <div className="relative"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center md:py-20 py-6 px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Schedule a Demo
              </h2>
              <p className="text-white/80 max-w-xl mb-8 text-lg">
                Get a personalized demo today — no commitment, just insight.
              </p>
              <Link href="https://calendly.com/thefusionapps/30min" className="px-8 py-3 bg-white text-[#28236B] rounded-full font-medium transition-all hover:shadow-lg hover:shadow-white/20 hover:transform hover:-translate-y-1">
                Get Started
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
