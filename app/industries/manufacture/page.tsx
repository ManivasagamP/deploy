import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ManufactureIndustry() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/img/industries/manufactureBanner.png"
          alt="Retail store interior"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center md:ml-15">
          <div className="border-l-4 border-white pl-4 max-w-xl mx-4 md:mx-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white  mb-2 md:mb-4">Manufacturing Operations</h1>
            <p className="text-white/90 text-sm md:text-base">
              From boosting operational efficiency and ensuring workplace safety to enabling smart, data-driven decisions—Fusion Engine powers the future of intelligent manufacturing.

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
                <div className=" rounded-lg h-full w-full flex items-start justify-start">
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
                  <li>Manual or CMS based Attendance</li>
                  <li>Inefficient Security</li>
                  <li>Can’t track your workers safety</li>
                  <li>Lack of real time data</li>
                  <li>Money being spent of excessive labor</li>
                  <li>Poor parking management</li>
                  <li>Having no clue of why your operation is expensive</li>
                  <li>Could have been better that anomaly is detected prior</li>
                  <li>Got no data of your business operations or logistics</li>
                  <li>Your current business analytics system is in need of a bigger upgrade</li>
                  <li>Couldn’t keep track of your inventory</li>
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
                      src="/img/industries/icons/m1Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Facial Recognition</h3>
                </div>

                <p className="text-gray-700 mb-2">Enhanced Security and Access Control</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>AI cameras recognize authorized personnel based on facial features.</li>
                  <li>
                    They restrict access to sensitive areas and track employee movements.
                  </li>
                </ul>
                <p className="text-gray-700 mb-2 mt-2">Automated Staffing Attendance</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Facial recognition automates attendance tracking, reducing manual effort.</li>
                  <li>
                    Real-time insights help manage workforce allocation.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Queue Management */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-14 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m2Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Automatic Number Plate Recognition</h3>
                </div>
                <p className="text-gray-700 mb-2">Vehicle Tracking and Security</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    ANPR identifies license plates on vehicles entering or leaving the premises.
                  </li>
                  <li>It manages vehicle access, tracks deliveries, and detects unauthorized vehicles</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security and Theft Prevention */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m3Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Unauthorized Area Detection</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Detecting unauthorized personnel in restricted zones</li>
                  <li>Immediate notifications allow timely intervention to prevent safety breaches</li>
                </ul>
              </CardContent>
            </Card>

            {/* Facial Recognition */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m4Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Worker’s Safety</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Our tech ensure adherence to safety protocols (e.g., protective gear usage)</li>
                  <li>Alerts prevent accidents, slips, falls, and other safety risks</li>
                </ul>
              </CardContent>
            </Card>

            {/* Heat Mapping */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m5Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Alarms and Notifications</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Feeding data to a dashboard, providing a overview of security events</li>
                  <li>Customizable alerts notify managers of critical incidents</li>
                </ul>
              </CardContent>
            </Card>

            {/* Age and Gender Estimation */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m6Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Object Recognition</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Identifies specific objects or products during manufacturing processes</li>
                  <li>It ensures consistent quality and compliance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Parking Lot Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m7Svg.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Anomaly Detection</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Detecting unusual activities or events  (equipment malfunction, unauthorized access)</li>
                  <li>Alerts prompt immediate action, preventing disruptions</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m8.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Predictive Maintenance</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Analyzes data to identify signs of impending equipment failures</li>
                  <li>Maintenance can be scheduled proactively, minimizing downtime</li>
                </ul>
              </CardContent>
            </Card>

            {/* Process Optimization */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m9.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Process Optimization</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Cameras monitor production lines, stoppages, and optimize processes</li>
                  <li>Improved productivity and reduced downtime result</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m10.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Inventory Management</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Manage stock levels, track inventory movement, and prevent shortages</li>
                  <li>It streamlines supply chain operations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m11.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Energy Efficiency Monitoring</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Cameras monitor energy consumption patterns</li>
                  <li>Insights guide energy-saving measures and reduce costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/m12.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Environmental Monitoring</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Identifies leaks, spills, or hazardous substances</li>
                  <li>Early detection prevents environmental damage</li>
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
                      How does anomaly detection help?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It detects unusual activities such as equipment malfunctions or unauthorized access and triggers alerts to prevent disruption.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can the Fusion Engine predict equipment failures?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes. Through Predictive Maintenance, it analyzes data to foresee equipment issues, enabling proactive maintenance and minimizing downtime.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How does Fusion Engine optimize industrial processes?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  It monitors production lines, identifies stoppages, and suggests process improvements to boost productivity and reduce delays.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Does the Fusion Engine assist with environmental protection?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Absolutely. It detects leaks, spills, or hazardous materials early, helping prevent environmental damage and ensuring regulatory compliance.

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