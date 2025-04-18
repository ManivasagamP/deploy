import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HospitalIndustry() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/img/industries/hospitalBanner.png"
          alt="Retail store interior"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center ml-20">
          <div className="border-l-4 border-white pl-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hospitality</h1>
            <p className="text-white/90">
              From enhancing guest experiences and streamlining operations to ensuring safety and personalized service—Fusion Engine transforms hospitality into a smarter, seamless experience

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
                  <li>Patient High-quality Care and Safety</li>
                  <li>Staff Time & Attendance Management</li>
                  <li>Managing remote staff</li>
                  <li>Systems that control the flow of people into and around your facility</li>
                  <li>Planning, allocation, and organization of parking spaces in a designated area or facility</li>
                  <li>Ambulance onboarding & surveillance</li>
                  <li>Criminal activities such as theft, vandalism, and unauthorized access</li>
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
            Still calculating your business prospects based on billing?
            We focus on the the 80% of the customer walk-outs from your retail rather than the 20% buyers!
          </p>
          <p className="text-gray-700 mb-4 font-bold">What exactly is Fusion Engine?</p>
          <p className="text-gray-700 mb-12">
            Fusion Engine, an AI and ML powered hardware beast that processes video channels as input and produces refined outputs such as recognized records and alarm events. It empower systems to swiftly and autonomously interpret complex visual data, offering a transformative solution for diverse applications like surveillance, industrial monitoring, and smart environments, etc. BASICALLY IT’S ALL YOU EVER NEED!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Behavior Analysis */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-16 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h1.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Patient recognition on face recognition</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    AI cameras can analyze patients behavior, hospital staff can monitor patient movement in real-time
                  </li>
                  <li>
                    Ensuring that only authorized personnel can access restricted areas,medication cabinets, or patient records
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Queue Management */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-16 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h2.svg"
                      alt="Icon"  
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Staff time & attendance on face recognition</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>
                    Face Recognition technology simplifies the attendance system  in Hospitals
                  </li>
                  <li> AI compares the captured face with the stored templates to identify theindividual. Once the system confirms the identity, it records the attendanceof the respective staffs , doctors  with a timestamp, eliminating the need formanual intervention</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security and Theft Prevention */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-14 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h3.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Trespassing alerts in restricted areas</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>AI cameras can continuously analyze live video feeds, identifying people orobjects in hospitals restricted zones. This enables immediate detection ofunauthorized access</li>
                  <li>This can trigger alerts to security personnel so that they can investigate</li>
                </ul>
              </CardContent>
            </Card>

            {/* Facial Recognition */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h4.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Perimeter intrusion detection</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>AI systems can provide detailed information about detected intrusions, including the object type, location, and time. This empowers security to assess the situation and respond appropriately</li>
                  <li>AI cameras empower healthcare facilities to establish a robust perimeter security system. This translates to a safer environment for patients, staff, and valuable medical equipment</li>
                </ul>
              </CardContent>
            </Card>

            {/* Heat Mapping */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h5.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Mob detection with instant alerts</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>AI algorithms can be trained to analyze video footage and identify agathering exceeding a certain threshold of people. This can be especiallyuseful in hospitals for detecting unruly crowds or potential riots</li>
                  <li>Fine-tuning the AI for accurate mob detection is crucial to avoid false alarmstriggered by harmless gatherings</li>
                </ul>
              </CardContent>
            </Card>

            {/* Age and Gender Estimation */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-18 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h6.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">ANPR based automated parking management</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>ANPR can be integrated with hospital access control systems. Authorized vehicles with pre-registered plates can be granted automatic entry, while unauthorized vehicles can be flagged or denied access</li>
                  <li>{"ANPR systems can be linked to hospital billing systems. The duration of a vehicle's stay can be automatically calculated, and parking fees can be directly charged to a patient's account"}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Parking Lot Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-14 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h7.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Ambulance signal-free corridor system</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>AI-powered cameras can identify approaching ambulances and triggerautomatic gate opening at hospital entrances, saving valuable time</li>
                  <li>Based on real-time traffic data and ambulance detection, AI can dynamicallyadjust traffic signals to create a green corridor for ambulances. This ensuresuninterrupted passage towards emergency departments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance Monitoring */}
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Image
                      src="/img/industries/icons/h8.svg"
                      alt="Icon"
                      height={22}
                      width={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">Ambulance onboard surveillance </h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>{"Emergency room staff can assess the patient's condition remotely via live video, allowing them to prepare necessary equipment and medications before the ambulance arrives."}</li>
                  <li>Specialists who might not be readily available at the receiving hospital could participate in consultations via the live stream, potentially leading to better treatment decisions</li>
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
                      How does face recognition help in hospitals?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Fusion Engine’s face recognition technology helps hospitals monitor patient movement, ensure secure access to sensitive areas, and simplify staff attendance tracking—boosting both safety and operational efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can the system detect unauthorized access in real-time?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, AI-powered cameras can analyze live feeds and immediately detect any unauthorized movement or intrusion in restricted zones, triggering real-time alerts for prompt response.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How does mob detection work in a hospital setting?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Mob detection uses AI to monitor crowd size through video feeds. If gatherings exceed a predefined threshold, alerts are triggered. This is useful for managing unruly crowds or emergency situations.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      What is ANPR and how does it help with parking?

                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Automatic Number Plate Recognition (ANPR) identifies and manages vehicle access by recognizing license plates. It automates parking entry, billing, and can flag unauthorized vehicles, enhancing overall parking security.

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