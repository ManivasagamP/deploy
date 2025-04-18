import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="about" />

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
            src="/aboutbanner.png"
            alt="Banner Background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Left Side - Logo */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[150px] md:max-w-[200px] h-[150px] md:h-[200px]">
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
              <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Meet Our Company{" "}

              </h1>
              <p className="text-base md:text-lg mb-4 md:mb-8 text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                We are The <span className="text-[#ffffff] text-2xl font-bold">Fusion Apps</span>, and we&apos;re all about using the latest technology to help businesses
                thrive. We specialize in Artificial Intelligence, which means we teach computers to think and
                do tasks like analyzing videos or recognizing license plates.
              </p>
              {/* <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-[#1A1A3D] rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Get Started
                </button>
                <button className="px-4 py-2 md:px-6 md:py-2 text-white rounded-full" style={{ background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)" }}>
                  Book a Demo
                </button>
              </div> */}
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

      <div className="mx-4 md:mx-12 px-4 md:px-12">
        {/* <p className="text-center text-lg mb-4">
          Meet Our Company
        </p>
        <p className="text-center text-base md:text-lg mb-8">
          We are The Fusion Apps, and we&aposre all about using the latest technology to help businesses thrive. We specialize in Artificial Intelligence, which means we teach computers to think and do tasks like analyzing videos or recognizing license plates.
        </p> */}

        {/* Team Image Section */}
        <section className="py-12 pt-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/img/aboutus/teammeet.png"
                alt="Team meeting"
                width={900}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-[#534f89]">What else we do?</h2>
            <p className="text-[#303030] leading-relaxed mx-auto mb-12 text-lg">
              Our main goal is to make life easier for businesses by providing them with valuable information they can use to improve their operations. We accomplish this by using smart technology that learns from data, like understanding patterns in videos or recognizing license plates. This not only helps businesses save time and money but also makes things safer and more organized.
            </p>
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </div>
  )
}
