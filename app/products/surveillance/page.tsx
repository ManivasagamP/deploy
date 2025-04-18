import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DemoSection from "@/components/demo-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SurveillancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="products" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#d97551] to-[#e2e2e2] py-16 md:py-32 relative">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('/img/products/sbg.png')] bg-cover bg-center opacity-40"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Fusion <span className="text-[#171440]">Surveillance</span>
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              Fusion Surveillance is an AI-powered perimeter security solution with zero false alerts, real-time human detection, and smart zone-based monitoring.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-4 sm:mx-6 lg:mx-12 px-4 sm:px-6 lg:px-12">

        {/* Two Column Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/img/products/Fusion Survillence.jpg"
                  alt="Security Camera"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">Half-Line Summary with Four Features:</h2>
                <p className="text-gray-600 mb-6">
                  AI-based vision system | Zero false positives | Smart zone detection | Real-time voice & light alerts
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    {
                      title: "AI-Powered Human Intrusion Detection:",
                      description: "Detects only human presence using deep learning to eliminate false alarms from animals or environmental triggers.",
                      bgColor: "#171440"
                    },
                    {
                      title: "Scene & Motion Detection with ROI:",
                      description: "Uses region-based detection and intelligent zoning to accurately capture intrusion scenes.",
                      bgColor: "#f16e5a"
                    },
                    {
                      title: "Smart Lighting & Voice Alerts:",
                      description: "Comes with motion-triggered LED lighting and multilingual voice alarms as deterrents.",
                      bgColor: "#f16e5a"
                    },
                    {
                      title: "Standalone & Network-Resilient:",
                      description: "Operates independently even during network failure with in-camera inference and anti-tamper features.",
                      bgColor: "#171440"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex flex-col items-start justify-start ">
                      <Image
                        src="/img/orange-icon.png"
                        alt="On-Premise Solutions"
                        width={48}
                        height={48}
                        className="text-[#6C5DD3] mb-4"
                      />
                      <h3 className="text-black">{feature.title}</h3>
                      <p className="text-sm text-gray-600 text-left">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* <div className="text-start mt-6">
                  <Link
                    href="#"
                    className="bg-[#f16e5a] text-white px-6 py-3 rounded-full inline-block font-medium hover:bg-[#f28859] transition-colors"
                  >
                    View More
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">Explore the Fusion Surveillance Features</h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Card 1 */}
              <div className="bg-[#171440] rounded-xl overflow-hidden relative flex-1 h-[300px] md:h-[500px]">
                <div className="absolute inset-0 bg-[url('/img/survillence/AI_IntrusionDetection.jpg')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-lg mb-2">AI-Powered Human Intrusion Detection</h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#171440] rounded-xl overflow-hidden relative flex-1 h-[300px] md:h-[500px]">
                <div className="absolute inset-0 bg-[url('/img/survillence/scene-motion-detection.jpg')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-lg mb-2">Scene & Motion Detection with ROI</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card 3 */}
              <div className="bg-[#171440] rounded-xl overflow-hidden relative h-[300px] md:h-[500px]">
                <div className="absolute inset-0 bg-[url('/img/survillence/smart-lighting.webp')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-lg mb-2">Smart Lighting & Voice Alerts</h3>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#171440] rounded-xl overflow-hidden relative h-[300px] md:h-[500px]">
                <div className="absolute inset-0 bg-[url('/img/products/sf4.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-lg mb-2">Standalone & Network-Resilient</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* <FaqSection /> */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
            Frequently Asked <span className="text-[#534F89]">Questions</span>
          </h2>
          <p className="text-center text-gray-500 mb-6 max-w-3xl mx-auto">
            {/* What is Fusion Analytics and how does it help businesses? */}
          </p>

          <div className="mx-4 sm:mx-6 lg:mx-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can Fusion Surveillance work without an active internet connection?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it uses in-camera AI inference to detect intrusions even if the network is disrupted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
               <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What types of perimeters can this system be installed on?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It supports all perimeter types including fences, walls, barbed wire, stone compounds, and temporary setups.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How does the system handle false alarms?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It uses human-only detection with profile segregation, eliminating false positives from animals or shadows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Is the system equipped with any alert mechanisms?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it has built-in voice alerts, hooters, and motion-activated smart lighting.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <DemoSection />
      <Footer />
    </div>
  )
}
