import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function RetailIndustry() {
  return (
    <div className="min-h-screen flex flex-col bg-white ">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/img/industries/retailBanner.png"
          alt="Retail store interior"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center md:ml-15">
          <div className="border-l-4 border-white pl-4 max-w-xl mx-4 md:mx-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white  mb-2 md:mb-4">Nexus Mall</h1>
            <p className="text-white/90 text-sm md:text-base">
              From streamlining operations and enhancing customer experiences to improving decision-making with real-time insights—Fusion Engine helps retailers stay ahead in a fast-paced market. Unlock the full potential of your retail business today.

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
        <section className="py-12 md:ml-10 ml-2">
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
                  You are here right now because you must be suffering from one or more or
                  completely of these things:                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Understanding customer behavior</li>
                  <li>Optimizing operations is challenging and confusing</li>
                  <li>Chaotic manual queue management system</li>
                  <li>Reducing customer satisfaction</li>
                  <li>Lack of real-time data</li>
                  <li>Excessive spending on labor</li>
                  <li>Poor parking management</li>
                  <li>Lack of efficient vehicle profiling in mall premises</li>
                  <li>Security threats in crowded areas</li>
                  <li>Difficulty monitoring restricted areas</li>
                  <li>Lack of centralized management</li>
                  <li>Lack of understanding why footfall is decreasing</li>
                  <li>Struggling with customer acquisition and retention</li>
                  <li>No data available on business operations</li>
                  <li>Current business analytics system needs a major upgrade</li>
                  <li>Logistics and operations issues</li>
                </ul>
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
            {/* Vehicle Profiling */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r1.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Vehicle Profiling</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>AI cameras recognize vehicle type, brand, and category</li>
                  <li>Helps identify customer demographics through vehicle insights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Accessibility */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r2.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Mobile Accessibility</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Track customer footfall and walk-ins easily on your phone</li>
                  <li>Access real-time analytics and reports anytime</li>
                </ul>
              </CardContent>
            </Card>

            {/* ANPR Cameras */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r3.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">ANPR Cameras</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Automatically recognize license plates</li>
                  <li>Improve parking, security, and traffic flow</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intrusion Detection */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r4.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Intrusion Detection</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Alerts when someone enters restricted or predefined zones</li>
                  <li>Enhances response time and reduces threats</li>
                </ul>
              </CardContent>
            </Card>

            {/* Real-Time Analytics */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r5.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Real-Time Analytics</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Standalone devices track foot traffic and trends live</li>
                  <li>Improve layout, promotions, and staffing instantly</li>
                </ul>
              </CardContent>
            </Card>

            {/* Behavior Analysis */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r6.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Behavior Analysis</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Track dwell time, movement, and product interaction</li>
                  <li>Optimize layouts, signage, and product placement</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security and Theft Prevention */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r7.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Security & Theft Prevention</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Detect suspicious activities or loitering</li>
                  <li>Immediate alerts help prevent loss and breaches</li>
                </ul>
              </CardContent>
            </Card>

            {/* Parking Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r8.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Parking Lot Monitoring</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Monitor vehicle flow and space availability</li>
                  <li>Track license plates and enhance security</li>
                </ul>
              </CardContent>
            </Card>

            {/* Perimeter Detection */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r9.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Perimeter Intrusion Detection</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Get detailed intrusion data: type, location, time</li>
                  <li>Enable proactive responses to threats</li>
                </ul>
              </CardContent>
            </Card>

            {/* Process Optimization */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r10.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Process Optimization</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Monitor production lines and stoppages</li>
                  <li>Reduce downtime and boost productivity</li>
                </ul>
              </CardContent>
            </Card>

            {/* Customizable Reporting */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/img/industries/icons/r11.svg" alt="Icon" height={22} width={22} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Customizable Reporting</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Create tailored reports with your KPIs</li>
                  <li>Choose from daily, weekly, or monthly views</li>
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
            Learn how Fusion Engine is revolutionizing retail operations and enhancing customer experiences.
          </p>

          <div className="mx-4 sm:mx-6 lg:mx-12">
            <Accordion type="single" collapsible className="space-y-4">

              {/* Question 1 */}
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What is Fusion Engine?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Fusion Engine is an AI and ML-powered hardware solution by Fusion Apps for REVOLUTION. It processes video feeds from CCTV cameras to deliver refined insights that automate decision-making, optimize operations, and enhance security in retail environments.
                </AccordionContent>
              </AccordionItem>

              {/* Question 2 */}
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How does Fusion Engine transform retail operations?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  By automating video analysis, Fusion Engine streamlines tasks like queue management, customer behavior analysis, and security monitoring. This reduces reliance on manual processes, minimizes labor costs, and provides real-time operational insights that help you stay ahead in a competitive market.
                </AccordionContent>
              </AccordionItem>

              {/* Question 3 */}
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What retail challenges does Fusion Engine address?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Fusion Engine targets common retail problems such as:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Poor customer behavior insights</li>
                    <li>Inefficient queue management</li>
                    <li>Lack of real-time operational data</li>
                    <li>Excessive labor costs</li>
                    <li>Subpar parking and vehicle profiling</li>
                    <li>Security threats and restricted area monitoring</li>
                    <li>Outdated analytics and operational reporting</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Question 4 */}
              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What key features does Fusion Engine offer?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Fusion Engine comes packed with a robust set of features:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Vehicle Profiling</li>
                    <li>Mobile Accessibility</li>
                    <li>ANPR Cameras</li>
                    <li>Intrusion Detection</li>
                    <li>Real-Time Analytics</li>
                    <li>Behavior Analysis</li>
                    <li>Security & Theft Prevention</li>
                    <li>Parking Lot Monitoring</li>
                    <li>Perimeter Intrusion Detection</li>
                    <li>Process Optimization</li>
                    <li>Customizable Reporting</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Question 5 */}
              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How can Fusion Engine drive business growth?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  By automating data collection and insight generation, Fusion Engine empowers retailers to make informed decisions. This translates to better layout design, improved customer engagement, heightened security, and overall operational excellence—key factors that fuel long-term growth.
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