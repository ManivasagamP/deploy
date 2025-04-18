import Navbar from "@/components/navbar";
import Image from "next/image";

// app/products/page.tsx or page.js

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">


       <Navbar activePage="products" />


      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden m-6">
        {/* Banner Background */}
        <div className="absolute inset-0 p-4">
          <Image src="/img/products/Banner.png" alt="Banner Background" fill className="object-cover" />
        </div>

      </section>
      {/* Our Customers Section */}
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold pb-5 text-black">Our Customers</h2>
        </div>
        <div className="flex items-center justify-between gap-10 py-6 px-12 mx-12 overflow-x-auto">
          <Image src="/img/products/1.png" alt="Adobe" width={100} height={100} />
          <Image src="/img/products/2.png" alt="Stripe" width={100} height={100} />
          <Image src="/img/products/3.png" alt="HubSpot" width={100} height={100} />
          <Image src="/img/products/4.png" alt="Asana" width={100} height={100} />
          <Image src="/img/products/5.png" alt="Gumroad" width={100} height={100} />
          <Image src="/img/products/6.png" alt="Linear" width={100} height={100} />
        </div>




      </section>
      {/* Our Products Section */}
      <section className="bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20 py-10">
          {/* Left Side Image */}
          <div className="flex justify-center items-center md:w-2/5">
            <Image src="/img/products/about.png" alt="About Illustration" width={350} height={350} />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center md:w-3/5">
            {/* Section Header */}


            {/* Problems */}
            <h3 className="text-xl font-bold text-[#4B3FBD] mb-2">Problems</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur. Amet vitae enim lorem suspendisse non erat.
              Scelerisque massa tempor at risus leo lorem felis nulla. Sem ac viverra a purus.
              Existing systems are hindered by limited intelligence in their software and hardware
              constraints, resulting in difficulties recognizing crucial information promptly.
              This leads to delays in responding to events and exposes systems to potential security
              risks. Moreover, these systems lack the capability to adapt to changing circumstances,
              exacerbating the problem. Consequently, there is a critical need for a solution that can
              effectively process video data, enhance understanding, and enable rapid responses to
              emerging situations.
            </p>

            {/* Solution */}
            <h3 className="text-xl font-bold text-[#4B3FBD] mb-2">Solution</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Your one-in-all solution to your problems, <span className="font-bold text-[#4B3FBD]">FUSION ENGINE</span>.
              Fusion Engine, an AI and ML powered hardware beast that processes video channels as input and produces refined
              outputs such as recognized records and alarm events. It empowers systems to swiftly and autonomously interpret
              complex visual data, offering a transformative solution for diverse applications like surveillance, industrial
              monitoring, and smart environments, etc.
            </p>
          </div>
        </div>

      </section>
      {/* Statistics Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#28236B]">
          <div className="absolute inset-0 ">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          {/* Title and description */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Feature</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur. Amet vitae enim lorem suspendisse non erat.
            Scelerisque massa tempor at risus leo lorem felis nulla.
          </p>

          {/* Feature cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Efficiency */}
            <div className="w-full md:w-1/3 bg-[#F28859] rounded-xl shadow-sm p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2  rounded-full p-2">
                <Image src="/img/products/efficiency.png" alt="Efficiency" width={40} height={40} />
              </div>
              <h3 className=" font-bold text-lg mt-8 mb-2">EFFICIENCY</h3>
              <p className="text-gray-700 text-sm">
                Traditional methods of video processing often require significant human intervention and time-consuming manual analysis.
                The Fusion Engine streamlines this process by leveraging AI and ML algorithms to swiftly and autonomously interpret visual data.
                This efficiency translates to faster response times and reduced workload for human operators.
              </p>
            </div>

            {/* Accuracy */}
            <div className="w-full md:w-1/3 bg-[#F28859] rounded-xl shadow-sm p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full p-2">
                <Image src="/img/products/accuracy.png" alt="Accuracy" width={40} height={40} />
              </div>
              <h3 className="text-orange-500 font-bold text-lg mt-8 mb-2">ACCURACY</h3>
              <p className="text-gray-700 text-sm">
                The Fusion Engine’s AI-powered algorithms enable it to recognize patterns, objects, and anomalies with a high degree of accuracy.
                This accuracy is crucial in applications such as surveillance, industrial monitoring, and smart environments,
                where even minor discrepancies can have significant consequences.
              </p>
            </div>

            {/* Adaptability */}
            <div className="w-full md:w-1/3 bg-[#F28859] rounded-xl shadow-sm p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2  rounded-full p-2">
                <Image src="/img/products/adaptability.png" alt="Adaptability" width={40} height={40} />
              </div>
              <h3 className="text-orange-500 font-bold text-lg mt-8 mb-2">ADAPTABILITY</h3>
              <p className="text-gray-700 text-sm">
                Traditional methods of video processing often require significant human intervention and time-consuming manual analysis.
                The Fusion Engine streamlines this process by leveraging AI and ML algorithms to swiftly and autonomously interpret visual data.
                This efficiency translates to faster response times and reduced workload for human operators.
              </p>
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-10">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition">
              View More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
