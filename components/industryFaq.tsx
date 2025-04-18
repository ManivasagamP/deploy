import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Frequently Asked <span className="text-[#534F89]">Questions</span>
        </h2>
        {/* <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Amet vitae enim lorem suspendisse non erat. Suspendisse massa tempor
          et duis leo lorem faucibus.
        </p> */}

        <div className=" mx-12">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    What industries does The Fusion Apps cater to?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                The Fusion Apps provides solutions for a wide range of industries including Retail, Hospitality, Manufacturing, Education, Advertisement, and Banking, offering tailored digital tools and software integration for each sector.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    Are your industry solutions scalable for small and large enterprises?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                {" Yes, our solutions are designed to be scalable, making them ideal for startups, mid-sized businesses, and large enterprises alike. Whether you're growing or already established, The Fusion Apps can support your digital needs at every stage."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    Are the solutions customizable for each business type within an industry?
                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
               {" Yes, The Fusion Apps designs customizable solutions to meet the specific needs and operational goals of businesses across different sectors."}

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left font-medium text-black">
                    Is there a demo available for the industry-specific solutions?

                  </span>
                  <div className="bg-[#f16e5a] rounded-full w-6 h-6 flex items-center justify-center text-white ml-4 group-data-[state=open]:rotate-180 transition-transform">
                    +
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                {`Absolutely! You can click the "Book a Demo" button at the top right of the page to schedule a personalized demonstration for your selected industry.`}

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

