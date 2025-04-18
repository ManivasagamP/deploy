import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Common questions about Fusion Analytics and its capabilities
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    What makes Fusion Analytics different from traditional analytics solutions?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 py-4 bg-white">
                <p className="text-gray-600">
                  Fusion Analytics stands out through its advanced AI capabilities, real-time processing,
                  and comprehensive integration features. Unlike traditional solutions, it provides
                  predictive insights and automated decision-making capabilities while ensuring data
                  privacy and security.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    How easily can Fusion Analytics integrate with existing systems?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 py-4 bg-white">
                <p className="text-gray-600">
                  Our system is designed for seamless integration with your existing infrastructure.
                  We provide comprehensive APIs and connectors for major platforms, ensuring minimal
                  disruption to your current operations while maximizing the value of your data.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden" >
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    What industries benefit most from Fusion Analytics?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 py-4 bg-white">
                <p className="text-gray-600">
                  While Fusion Analytics is versatile across industries, it particularly benefits
                  sectors with complex data needs such as manufacturing, healthcare, retail, and
                  financial services. The platform&apos;s adaptability allows it to address specific
                  industry challenges while maintaining compliance requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-gray-50 group [&>svg]:hidden">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    How quickly can we start seeing insights from our data?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 py-4 bg-white">
                <p className="text-gray-600">
                  With our streamlined implementation process, you can start seeing valuable insights
                  within days of deployment. Our real-time processing capabilities ensure immediate
                  access to analytics, while the AI-driven system continuously improves its insights
                  over time.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 