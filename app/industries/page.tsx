import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/CTA"
import {
  Building2,
  Hotel,
  Factory,
  GraduationCap,
  Megaphone,
  Building
} from "lucide-react"
import FaqSection from "../../components/industryFaq"
import { Card, CardContent } from "@/components/ui/card"

export default function Industries() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage="industries" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/img/industries/homeHead.png"
          alt="Industrial background"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center md:ml-15">
          <div className="border-l-4 border-white pl-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries</h1>
            <p className="text-white/90">
              We provide innovative solutions across multiple sectors, helping businesses transform their operations and
              achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Type Section */}
      <div className="mx-2 md:mx-10 px-2 md:px-10">
        <div className="container mx-auto px-4 md:px-8 items-center py-20 space-y-10 ">
          <h2 className="text-3xl font-bold mb-2 text-black">Industries We Serve</h2>
          <p className="text-gray-600 mb-12 ">
            Our expertise spans across various industries, providing tailored solutions that address the unique challenges and opportunities in each sector.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Retail */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Building2 className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">RETAIL</h3>
                <p className="text-gray-600 mb-6">
                  Transform your retail business with our omnichannel solutions, inventory management systems, and
                  customer analytics platforms that drive sales and enhance customer experiences
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/retail">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>

            {/* Hospitality */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Hotel className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">HOSPITALITY</h3>
                <p className="text-gray-600 mb-6">
                  Elevate guest experiences with our hospitality management solutions, including booking systems, guest
                  engagement tools, and operational efficiency platforms.
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/hospital">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Factory className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">MANUFACTURING</h3>
                <p className="text-gray-600 mb-6">
                  Optimize your manufacturing processes with our smart factory solutions, supply chain management tools,
                  and predictive maintenance systems that reduce downtime.
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/manufacture">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <GraduationCap className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">TRANSPORT</h3>
                <p className="text-gray-600 mb-6">
                  From optimizing traffic flow and enhancing commuter safety to enabling smarter infrastructure with real-time insights—Fusion Engine transforms transportation systems for a more connected, efficient future.
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/transport">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>

            {/* Advertisement */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Megaphone className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">ADVERTISEMENT</h3>
                <p className="text-gray-600 mb-6">
                  Amplify your marketing impact with our advertising solutions, including programmatic ad platforms,
                  campaign analytics, and audience targeting tools.
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/advertisement">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>

            {/* Banking */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Building className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">BANKING</h3>
                <p className="text-gray-600 mb-6">
                  Secure and streamline your financial operations with our banking solutions, including fraud detection
                  systems, customer onboarding platforms, and regulatory compliance tools.
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/bank">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>

            {/* MAll */}
            <Card className="border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Hotel className="text-blue-700 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">NEXUS MALL</h3>
                <p className="text-gray-600 mb-6">
                  From streamlining operations and enhancing customer experiences to improving decision-making with real-time insights—Fusion Engine helps retailers stay ahead in a fast-paced market. Unlock the full potential of your retail business today.
                </p>
                <div className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <span><a href="./industries/nexusmall">Learn more</a></span>
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>


      {/* Marketing Tagline Section */}
      <div
        className="w-full py-16 text-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/industries/industryCenterCard.png")',
        }}
      >
        <div className="container mx-auto px-4 mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Marketing Shapes a Story,
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Conversion Alters it into Effects.
          </h3>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />

      <CTA />
      <Footer />
    </div>
  )
}
