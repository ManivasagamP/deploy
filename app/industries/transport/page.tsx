import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TransportIndustry() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/img/industries/transportBanner.png"
          alt="Retail store interior"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center md:ml-15">
          <div className="border-l-4 border-white pl-4 max-w-xl mx-4 md:mx-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white  mb-2 md:mb-4">Transportation</h1>
            <p className="text-white/90 text-sm md:text-base">
              From optimizing traffic flow and enhancing commuter safety to enabling smarter infrastructure with real-time insights—Fusion Engine transforms transportation systems for a more connected, efficient future.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left Section: Title */}
              <div className="md:w-1/3">
                <h2 className="text-4xl font-extrabold text-blue-950 leading-tight">
                  Introduction
                </h2>
                <div className="w-58 h-1 bg-blue-950 rounded-full mb-4"></div>
                <p className="text-sm text-gray-500">
                  Discover how Fusion Engine is redefining retail success.
                </p>
              </div>

              {/* Right Section: Text */}
              <div className="md:w-2/3 text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-blue-900">Fusion Engine</span> by Fusion Apps for REVOLUTION. It helps you scale up in the current market. Fusion Engine offers
                  unparalleled capabilities to enhance <span className="font-medium">efficiency, security, and customer satisfaction</span>,
                  setting new standards of excellence in your Retail industry.
                </p>
                <p className="text-lg leading-relaxed">
                  Join us in a journey of your business growth and transformation, and unlock the mighty power of Fusion Engine too.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Problems Section */}
      <div className="bg-gray-50">
        <section className="py-12 ml-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex items-center justify-center">
                <div className=" rounded-lg h-full w-full flex items-center justify-center">
                  <Image
                    src="/img/industries/RetailQuestions.png"
                    alt="Retail problems"
                    width={800}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-blue-950">Problems</h2>
                <p className="text-gray-700 mb-4">
                  You are here right now because you must be suffering from one or more of these problems:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Security vulnerabilities stem from inadequate surveillance and monitoring systems.</li>
                  <li>Operational inefficiencies result from manual processes and outdated systems.</li>
                  <li>Lack of real-time insights hampers decision-making and resource allocation.</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Trust me, I can keep going on!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Solution Banner */}
      <div >
        {/* First Image Section - Leave as-is */}
        <section className="text-white text-center">
          <div
            className="w-full py-16 text-center bg-cover bg-center"
            style={{
              backgroundImage: 'url("/img/industries/industryCenterCard.png")',
            }}
          >
            <div className="container mx-auto px-4 mt-16">
              <h2 className="text-2xl md:text-3xl font-light mb-2">
                Your one-in-all solution to your problems.
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
                FUSION ENGINE
              </h3>
            </div>
          </div>
        </section>

        {/* Second Image Section - With padding and spacing fix */}
        <section className="mt-20  mx-2 md:mx-10 px-2 md:px-10">
          <div className="w-full overflow-hidden rounded-3xl shadow-lg border border-gray-200">
            <div
              className="w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: 'url("/img/industries/solnBanner.png")',
              }}
            />
          </div>
        </section>
      </div>

      {/* Solutions Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10">
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-950">Solutions</h2>
          <p className="text-gray-700 mb-6">
            We have helped numerous prospects based on CCTV. Now we offer you this ultimate solution to your retail, use
            it now your retail rather than the 20% human!
          </p>
          <p className="text-gray-700 mb-4 font-bold">What exactly is Fusion Engine?</p>
          <p className="text-gray-700 mb-12">
            Fusion Engine, an AI and ML-powered hardware-based tool processes video channels as input and produces refined
            outputs such as recognized records and object counts, which are then used to generate insights, offering a
            human-machine interface that enhances decision-making and operations, reducing the dependency on human
            intervention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Behavior Analysis */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/t1.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Fusion ANPR </h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    Fusion ANPR utilizes computer vision and AI for automatic identification of vehicle license plates
                  </li>
                  <li>It captures license plate images and analyzes characters to determine vehicle identity swiftly and accurately</li>
                  <li>
                    ANPR technology offers benefits for various applications such as traffic management and toll booth records
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Queue Management */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/t2.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Traffic Management</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    ANPR revolutionizes traffic management by providing real-time vehicle identification
                  </li>
                  <li>With strategically placed ANPR cameras, traffic authorities can efficiently monitor and manage traffic flow</li>
                  <li>Benefits include reduced congestion, improved road safety, and smoother traffic movement</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security and Theft Prevention */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/t3.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Intelligent Parking</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>ANPR automates parking by capturing license plates and allocating vehicles to available spaces</li>
                  <li>This saves time, reduces frustration, and maximizes parking space utilization</li>
                  <li>Drivers benefit from streamlined parking processes without the need to search endlessly for spots</li>
                </ul>
              </CardContent>
            </Card>

            {/* Facial Recognition */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/t4.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Intelligent Transport System</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>ANPR deployed in intelligent transportation systems monitors traffic patterns and congestion hotspots</li>
                  <li>Helps authorities analyze journey times between nodes and optimize traffic flow</li>
                  <li>Improves overall transportation efficiency by detecting and managing incidents seamlessly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* <FaqSection /> */}
      <section className="py-6 md:py-12">
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
                      What is ANPR and how does Fusion ANPR work?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  ANPR identifies vehicles by capturing and analyzing license plate images using AI and computer vision.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What are the benefits of Fusion ANPR in traffic management?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It enables real-time vehicle tracking, reduces congestion, and improves traffic flow and safety.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How does ANPR support intelligent parking?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It automates parking by recognizing license plates and assigning available spaces efficiently.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can Fusion ANPR be used in Intelligent Transport Systems (ITS)?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it tracks traffic patterns, detects congestion, and helps optimize transportation efficiency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}