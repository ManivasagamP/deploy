import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BankIndustry() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/img/industries/bankBanner.png"
          alt="Retail store interior"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center ml-20">
          <div className="border-l-4 border-white pl-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Banking</h1>
            <p className="text-white/90">
              From strengthening ATM and branch security to optimizing employee performance and safeguarding customer trust—Fusion Engine empowers banks to lead with confidence in a digitally evolving world. Secure your banking future today.

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
                  <li>Customer Expectation on High Safety and Security of their Accounts as well as their Own Data and Information</li>
                  <li>Changing Business Models</li>
                  <li>Competition between Banks and Fintech Companies</li>
                  <li>Frauds and Suspicious Happenings (In Bank)</li>
                  <li>Lack of Security on ATM’s</li>
                  <li>Easy Access of Account Details</li>
                  <li>Mishandling or Unethical Activities in ATM’s and other Banking Related Areas</li>
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
            {/* Behavior Analysis */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/b1.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">CCTV Surveillance with AI</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    Utilizing AI-powered CCTV systems that can automatically detect suspicious activity, like unauthorized entry or loitering. This allows for quicker response times and discourages criminal attempts
                  </li>
                  <li>Combination of facial recognition with CCTV to identify blacklisted individuals or known criminals entering a bank branch</li>
                </ul>
              </CardContent>
            </Card>

            {/* Queue Management */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-14 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/b2.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Identifying Skill Gaps with Analytics</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    Analyze employee skills and experience against the evolving needs of the new business model. Identify skill gaps within the workforce that are critical for success in the digital landscape
                  </li>
                  <li>Develop targeted training programs and upskilling initiatives to bridge these gaps and prepare employees for new roles</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security and Theft Prevention */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-14 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/b3.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Measuring the Impact of HR Initiatives</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Track key HR metrics, such as employee turnover, engagement scores, and time to fill open positions</li>
                  <li>Use data to continuously refine HR practices and ensure they are aligned with the evolving needs of the bank</li>
                </ul>
              </CardContent>
            </Card>

            {/* Facial Recognition */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-16 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/b4.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Identification of Frauds and Suspicious Activities</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Implement facial recognition at ATMs to verify cardholder identity and prevent unauthorized access</li>
                  <li>·Utilize AI-powered analytics to detect suspicious behavior in real-time, such as tailgating, forced entry attempts, or individuals tampering with ATMs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Heat Mapping */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/b5.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Multi-Factor Authentication (MFA)</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>This combines something you know (password) with something you have (phone) to create a more secure login process</li>
                  <li>These biometric options offer a good balance between security and user convenience. They are more established and have a lower risk of spoofing compared to facial recognition</li>
                </ul>
              </CardContent>
            </Card>

            {/* Parking Lot Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-16 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/b6.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">(CIT) Security and Enhanced ATM Monitoring</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Mount ANPR systems on CIT vehicles to track their location and identify suspicious vehicles following them. This can deter robberies</li>
                  <li>Upgrade bank CCTV systems with AI-powered features like object recognition and motion detection. This can identify suspicious behavior like tampering with ATMs or shoulder surfing PINs</li>
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
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What banking problems does Fusion Engine help solve?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Fusion Engine tackles challenges like ATM frauds, data breaches, and unethical banking activities through AI-powered monitoring.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can Fusion Engine improve security at bank branches and ATMs?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it uses AI-based CCTV surveillance and facial recognition to monitor suspicious activity and identify known threats.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Does Fusion Engine support employee performance analysis?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Absolutely, it identifies skill gaps, tracks HR metrics, and evaluates the effectiveness of HR initiatives using smart analytics.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Why should banks choose Fusion Engine over other solutions?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Fusion Engine delivers unmatched safety, performance analytics, and adaptive intelligence—all in a single platform.

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