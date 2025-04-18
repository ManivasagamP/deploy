import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DemoSection from "@/components/demo-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HRPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="products" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#d97551] to-[#e2e2e2] min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4 text-white">Fusion HR</h1>
            <p className="text-white mb-8">
              FaceSense is a smart facial recognition system that streamlines HR operations with secure, real-time employee authentication and attendance tracking.
            </p>
          </div>
        </div>
      </section>
      <div className="mx-4 sm:mx-6 lg:mx-12 px-4 sm:px-6 lg:px-8">

        {/* Camera Image Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/img/products/hrabout.png"
                alt="Security Camera"
                width={900}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* HR Description Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Half-Line Summary with Four Features:</h2>
            <p className="text-gray-600 mb-8">
              Contactless verification | Real-time attendance | Access control | Seamless HRMS integration
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="">
                <div className="bg-[#171440] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0V8a3 3 0 00-6 0v4m6 0h3m-9 0H6m9 0v6a3 3 0 01-6 0v-6" />
                  </svg>

                </div>
                <h3 className="text-black">Contactless Employee Identification:</h3>
                <p className="text-sm text-gray-600">
                  Enables hygienic and efficient face-based check-in/out, replacing biometric touch systems.
                </p>
              </div>

              <div className="">
                <div className="bg-[#f16e5a] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                </div>
                <h3 className="text-black">Real-Time Attendance & Shift Tracking:</h3>
                <p className="text-sm text-gray-600">
                  Automatically logs accurate timestamps and updates shift data to the HR dashboard instantly.
                </p>
              </div>

              <div className="">
                <div className="bg-[#f16e5a] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" />
                  </svg>

                </div>
                <h3 className="text-black">Access Control Integration:</h3>
                <p className="text-sm text-gray-600">
                  Restricts or allows access to designated zones based on facial recognition and employee profiles.
                </p>
              </div>

              <div className="">
                <div className="bg-[#171440] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 14H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v7m-4 4v3m0 0H8m4 0h4" />
                  </svg>

                </div>
                <h3 className="text-black">HRMS & Payroll Integration:</h3>
                <p className="text-sm text-gray-600">
                  Syncs with existing HR systems to automate payroll, leave, and attendance management.
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
      </div>

      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#28236B]">
          <div className="absolute inset-0">
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
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src="/img/products/logo-white.png" alt="The Fusion Apps" width={250} height={80} />
            </div>

            {/* Quote */}
            <h2 className="text-xl md:text-3xl font-bold leading-snug">
              Marketing Shapes a Story,<br />
              <span className="block">Conversion Alters it into Effects.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* features section */}
      {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Image src="/img/hr/1.png" alt="Feature 1" width={600} height={400} />
                </div>
                <h3 className="text-xl font-semibold text-start text-black">Features</h3>
                <p className="text-gray-600 text-start">
                  In a hybrid Cloud Deployment, a basic processing unit is established on-site, complemented by additional resources hosted on a chosen cloud service provider. This approach seamlessly integrates on-premise and cloud components, offering scalability and flexibility while retaining control over critical processes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Image src="/img/hr/2.png" alt="Feature 2" width={600} height={400} />
                </div>
                <h3 className="text-xl font-semibold text-start text-black">Features</h3>
                <p className="text-gray-600 text-start">
                  In a hybrid Cloud Deployment, a basic processing unit is established on-site, complemented by additional resources hosted on a chosen cloud service provider. This approach seamlessly integrates on-premise and cloud components, offering scalability and flexibility while retaining control over critical processes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Image src="/img/hr/3.png" alt="Feature 3" width={600} height={400} />
                </div>
                <h3 className="text-xl font-semibold text-start text-black">Features</h3>
                <p className="text-gray-600 text-start">
                  In a hybrid Cloud Deployment, a basic processing unit is established on-site, complemented by additional resources hosted on a chosen cloud service provider. This approach seamlessly integrates on-premise and cloud components, offering scalability and flexibility while retaining control over critical processes.
                </p>
              </div>
            </div>
          </div>
        </section> */}


      {/* <FaqSection /> */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Frequently Asked <span className="text-[#534F89]">Questions</span>
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
            {/* What is Fusion Analytics and how does it help businesses? */}
          </p>

          <div className="mx-4 sm:mx-6 lg:mx-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can FaceSense replace manual or biometric attendance systems?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it offers contactless facial recognition, eliminating the need for fingerprint or manual entries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Is the system compatible with existing HR software?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Absolutely. It integrates seamlessly with most HRMS platforms for end-to-end automation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      How secure is the facial data collected?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  FaceSense uses encrypted neural computing to ensure data privacy and prevent misuse.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-black">
                      Can it track late arrivals or early departures?
                    </span>
                    <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                      +
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  Yes, it provides real-time alerts and logs deviations from scheduled working hours.
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
