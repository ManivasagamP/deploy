"use client"
import Image from "next/image"

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="relative overflow-hidden">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0">
          <Image
            src="/img/Footer-bg.png"
            alt="Circuit Pattern"
            fill
            className=""
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Company Info */}
            <div className="lg:col-span-4 md:text-left text-center">
              {/* Logo */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/img/footer-logo.png"
                  alt="The Fusion Apps"
                  width={200}
                  height={60}
                  className="mb-6"
                />
              </div>

              <p className="text-white/60 text-sm mb-4">
                A Unit of Fusionpro Solutions Private Limited
              </p>
              <p className="text-white/80 mb-8 max-w-md">
                Fusion Apps leverages cutting-edge AI to power smarter business operations—from video analysis and license plate recognition to energy optimization.Our intuitive solutions help monitor, control, and enhance performance across retail, industrial, and traffic management environments</p>

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/company/the-fusion-apps/" className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/thefusionapps/" className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://x.com/thefusionapps" className="text-white/80 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24" height="24" fill="currentColor">
                    <path d="M714.29 496.64L1176.7 0H1070.9L665.28 460.26L348.66 0H0L486.67 703.83L0 1227H105.87L535.65 743.96L872.63 1227H1221.3L714.29 496.64ZM586.12 678.65L546.78 621.75L153.6 88.55H294.36L610.47 541.69L649.81 598.6L1052.69 1138.1H911.93L586.12 678.65Z" />
                  </svg>
                </a>
                <a href="https://www.google.com/search?sca_esv=5c91b037c081e110&biw=1920&bih=869&sxsrf=AHTn8zolxcxKxtJ6Ml5Yi6Z8SbUlqWgkFQ:1743777553190&kgmid=/g/11rv7vsd2s&q=The+Fusion+Apps&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=db1b2a7a8dc5c14f" className="text-white/80 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="24" height="24">
                    <path fill="#4285f4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.2H272v95h147.1c-6.4 34.5-25.7 63.7-54.7 83.3v68h88.4c51.7-47.6 80.7-117.7 80.7-196.1z" />
                    <path fill="#34a853" d="M272 544.3c73.8 0 135.7-24.4 180.9-66.2l-88.4-68c-24.6 16.5-56.2 26.2-92.5 26.2-71 0-131.1-47.9-152.6-112.1h-90.4v70.3c45.5 89.4 138.7 149.8 243 149.8z" />
                    <path fill="#fbbc04" d="M119.4 324.2c-10.4-30.9-10.4-64.3 0-95.2v-70.3h-90.4c-38 75.5-38 165.2 0 240.7l90.4-70.3z" />
                    <path fill="#ea4335" d="M272 107.7c39.9-.6 78 14.3 107.3 41.4l80.2-80.2C406.5 24.7 340.4-1 272 0 167.7 0 74.5 60.3 29 149.7l90.4 70.3c21.5-64.2 81.6-112.1 152.6-112.3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Columns - Navigation */}
            <div className="lg:col-span-7 p-1 text-start flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-25"> {/* Added gap for laptop view */}
                {/* About Column */}
                <div className="mb-6 flex flex-col items-start"> {/* Centered content for mobile view */}
                  <h3 className="text-white font-bold mb-4 uppercase tracking-wider flex items-start">Quick Links</h3>
                  <ul className="space-y-2 text-center items-start">
                    <li><a href="/about" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> About Us</a></li>
                    <li><a href="/products/engine" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Products</a></li>
                    {/* <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li> */}
                    <li><a href="/industries" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Industries</a></li>
                    <li><a href="/policy" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Privacy Policy</a></li>
                  </ul>
                </div>

                {/* Company Column */}
                <div className="mb-6 flex flex-col items-start">
                  <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-center">Solutions</h3>
                  <ul className="space-y-2 ">
                    <li><a href="/products/hr" className="text-white/80 hover:text-white transition-all ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Fusion HR</a></li>
                    <li><a href="/products/anpr" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Fusion ANPR</a></li>
                    <li><a href="/products/analytics" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Fusion Analytics</a></li>
                    <li><a href="/products/surveillance" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Fusion Surveillance</a></li>
                  </ul>
                </div>

                {/* Support Column */}
                <div className="mb-6 flex flex-col items-start">
                  <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-center">Industries</h3>
                  <ul className="space-y-2">
                    <li><a href="/industries/bank" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Bank</a></li>
                    <li><a href="/industries/retail" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Retail</a></li>
                    <li><a href="/industries/hospital" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Hospital</a></li>
                    <li><a href="/industries/transport" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Transport</a></li>
                    <li><a href="/industries/manufacture" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Manufacture</a></li>
                    <li><a href="/industries/advertisement" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Advertisement</a></li>
                    <li><a href="/industries/nexusmall" className="text-white/80 hover:text-white transition-colors ease-in-out duration-300 flex items-start hover:translate-x-1"><span className="mr-1">▶</span> Nexus Mall</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="text-gray-500 mt-8 mb-8" />
          {/* Copyrights*/}
          <div className="w-full text-center mb-[-10] text-white ">
            <p className="text-sm">
              Copyright © 2025. All Rights Reserved by{" "}
              <span
                className="text-[#6C5DD3] hover:text-[#5240c5] transition-colors duration-200 font-medium"
              >
                Fusion Pro Solutions Private Limited
              </span>
            </p>
          </div>
          {/* Floating icon set */}

          {/* mobile */}
          <div className="block lg:hidden fixed bottom-0 w-full z-50">
            <div className="flex justify-between px-4">
              <a href="tel:+919791597993" target="_blank" className="flex items-center gap-1 w-1/2 mr-3">
                <Image src="/img/footer/call3.gif" alt="Call Us" loading="lazy" width={62} height={62} style={{ padding: "10px" }} unoptimized />
                {/* <p className="text-sm text-black">
                  Call Us
                </p> */}
              </a>
              {/* <div className="h-5 flex items-end mt-3" /> */}
              <a href="https://api.whatsapp.com/send?phone=+919791597993&text=Hello The Fusion Apps!" target="_blank" className="flex items-center mr-5" aria-label="Connect Us via WhatsApp">
                <Image src="/img/footer/WA.gif" alt="Chat Us" loading="lazy" width={62} height={62} style={{ padding: "10px" }} unoptimized />
                {/* <p className="text-sm text-black" >
                  Chat Us
                </p> */}
              </a>
            </div>
          </div>


          {/* desktop */}
          <div className="hidden lg:block">
            <a
              href="tel:+919791597993"
              className="fixed bottom-4 left-6 w-18 h-18 shadow-lg rounded-full  flex items-center justify-center "
              target="_blank"
            >
              <Image
                src="/img/footer/call3.gif"
                alt="Call Us"
                height={82}
                width={82}
                className="object-contain"
                unoptimized
              />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=+919791597993&text=Hello The Fusion Apps!"
              target="_blank"
              className="fixed bottom-4 right-6 w-18 h-18 rounded-full  flex items-center justify-center "
              aria-label="Connect Us via WhatsApp"
            >
              <Image
                src="/img/footer/WA.gif"
                alt="Chat Us"
                height={80}
                width={80}
                className=" object-cover"
                unoptimized
              />
            </a>
          </div>

        </div>
      </footer>
    </>
  )
}

