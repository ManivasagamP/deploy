import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function AdvertisementIndustry() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/img/industries/advertisementBanner.png"
          alt="Retail store interior"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center ml-5">
          <div className="border-l-4 border-white pl-4 max-w-xl mx-4 md:mx-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white  mb-2 md:mb-4">Advertisment</h1>
            <p className="text-white/90 text-sm md:text-base">
              From tracking real-time viewership to delivering deep audience insights and ad performance metrics—Fusion Engine transforms billboard advertising into a data-driven powerhouse. Elevate your ad game today.

            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10">
        <section className="py-16 ">
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
      <div className=" bg-gray-50">
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
                  <li>Lacking accountability in advertising</li>
                  <li>Ads aren’t reaching your specific targeted audience</li>
                  <li>Hampers in decision-making for future ad placements</li>
                  <li>Lack of data on your current ads.</li>
                  <li>Manual tracking leading to many chaos.</li>
                  <li>Managing multiple billboards across different locations</li>
                  <li>Having no clue if business ads are effective</li>
                  <li>Got no real-time footfall analytics on your ads</li>
                  <li>Your current business analytics system is of need of a bigger upgrade</li>
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
                      src="/img/industries/icons/a1.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Real-time Tracker</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    Provides instant updates on billboard ad viewership
                  </li>
                  <li>Live feed of viewership data for monitoring performance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Queue Management */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/a2.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Demographic Data Analysis</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Analytics on male and female viewers, age groups, and interests</li>
                  <li>Helps understand audience demographics and preferences</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security and Theft Prevention */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/a3.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Unified Dashboard</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Centralizes data from all billboards regardless of location</li>
                  <li>Single interface for tracking and managing performance metrics</li>
                </ul>
              </CardContent>
            </Card>

            {/* Facial Recognition */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/a4.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">API Integration</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Seamless integration with ads streamers and digital platforms</li>
                  <li>Real-time data sync for automated updates and workflows</li>
                </ul>
              </CardContent>
            </Card>

            {/* Heat Mapping */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/a5.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Retrofit Compatibility</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Easy integration with existing billboards without extensive modifications</li>
                  <li>Adds advanced tracking and analytics features seamlessly</li>
                </ul>
              </CardContent>
            </Card>

            {/* Age and Gender Estimation */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/a6.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Automated Alerts and Notifications</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Configurable alerts based on performance thresholds</li>
                  <li>Proactive notifications for quick response and optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Parking Lot Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/a7.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Customizable Reporting</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Tailored reports with customizable formats and KPIs</li>
                  <li>Daily, weekly, or monthly reporting based on specific needs</li>
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
                      How does Fusion Engine help with ad viewership tracking?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It offers a real-time tracker that updates billboard ad viewership instantly with live performance feeds.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can Fusion Engine analyze audience demographics?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it delivers insights on gender, age groups, and viewer interests to help refine audience targeting.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Do I need to replace my current billboards to use Fusion Engine?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Not at all—Fusion Engine supports retrofit compatibility, making it easy to upgrade your existing setup.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What kind of businesses can benefit from Fusion Engine?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Any business using physical advertising—like retail, smart environments, or industrial setups—can benefit greatly.


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