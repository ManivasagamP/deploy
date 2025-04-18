"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar({ activePage }: { activePage?: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileProducts = () => setMobileProductsOpen(!mobileProductsOpen);
  const toggleMobileIndustry = () => setMobileIndustryOpen(!mobileIndustryOpen);

  // Check if a product page is active
  const isProductActive = activePage === 'products' ||
    activePage === 'engine' ||
    activePage === 'analytics' ||
    activePage === 'anpr' ||
    activePage === 'surveillance' ||
    activePage === 'hr';

  // Check if an industry page is active
  const isIndustryActive = activePage === 'industries' ||
    activePage === 'retail' ||
    activePage === 'hospital' ||
    activePage === 'manufacture' ||
    activePage === 'transport' ||
    activePage === 'advertisement' ||
    activePage === 'bank' ||
    activePage === 'nexusmall';

  const navItems: Array<
    | { label: string; href: string; key: string }
    | { label: string; dropdown: true; key: string }
  > = [
      { label: "Home", href: "/", key: "home" },
      { label: "Products", href: "/products", dropdown: true, key: "products" },
      { label: "Industry", href: "/industries", dropdown: true, key: "industries" },
      { label: "About Us", href: "/about", key: "about" },
      { label: "Contact Us", href: "/contact", key: "contact" },
      { label: "Our Impacts", href: "/casestudy", key: "casestudy" },
    ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <Image src="/img/headerlogo.svg" alt="Fusion Apps Logo" width={150} height={40} />
          {/* <span className="ml-1 text-xs text-gray-600 hidden sm:block">A Unit of Fusionpro Solutions Private Limited</span> */}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="transition-transform duration-300 ease-in-out">
            <Menu size={24} className="text-gray-800" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-12">
          {navItems.map((item) =>
            "dropdown" in item ? (
              <div key={item.key} className="relative group">
                <div className="flex items-center cursor-pointer">
                  <span
                    className={`text-[18px] ${(item.key === "products" && isProductActive) ||
                      (item.key === "industries" && isIndustryActive)
                      ? "text-[#F28159] font-semibold"
                      : "text-[#303030]"
                      }`}
                  >
                    {item.label}
                  </span>
                  <ChevronDown size={16} className="ml-1" />
                </div>
                <div className="absolute left-0 top-5 mt-2 hidden group-hover:block bg-white rounded-xl w-64 py-3 shadow-lg z-50 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  {item.key === "products" ? (
                    <>
                      <Link href="/products/engine" className={`block px-4 py-2 text-[14px] hover:bg-[#F28159] rounded-xl transition-colors duration-200 ${activePage === "engine" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Fusion Engine</Link>
                      <Link href="/products/analytics" className={`block px-4 py-2 text-[14px] hover:bg-[#F28159] rounded-xl transition-colors duration-200 ${activePage === "analytics" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Fusion Analytics</Link>
                      <Link href="/products/anpr" className={`block px-4 py-2 text-[14px] hover:bg-[#F28159] rounded-xl transition-colors duration-200 ${activePage === "anpr" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Fusion ANPR</Link>
                      <Link href="/products/surveillance" className={`block px-4 py-2 text-[14px] hover:bg-[#F28159] rounded-xl transition-colors duration-200 ${activePage === "surveillance" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Fusion Surveillance</Link>
                      <Link href="/products/hr" className={`block px-4 py-2 text-[14px] hover:bg-[#F28159] rounded-xl transition-colors duration-200 ${activePage === "hr" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Fusion HR</Link>
                    </>
                  ) : item.key === "industries" ? (
                    <>
                      <Link href="/industries/retail" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "retail" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Retail</Link>
                      <Link href="/industries/hospital" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "hospital" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Hospitality</Link>
                      <Link href="/industries/manufacture" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "manufacture" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Manufacturing</Link>
                      <Link href="/industries/transport" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "transport" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Transportation</Link>
                      <Link href="/industries/advertisement" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "advertisement" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Advertisement</Link>
                      <Link href="/industries/bank" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "bank" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Banking</Link>
                      <Link href="/industries/nexusmall" className={`block px-4 py-2 text-[14px] hover:bg-gray-100 transition-colors duration-200 ${activePage === "nexusmall" ? "text-[#F28159] font-medium" : "text-[#303030]"}`}>Nexus Mall</Link>

                    </>
                  ) : null}
                </div>
              </div>
            ) : (
              <Link href={item.href} key={item.key}>
                <div className="flex items-center">
                  <span
                    className={`text-[18px] ${activePage === item.key
                      ? "text-[#F28159] font-semibold"
                      : "text-[#303030]"
                      }`}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            )
          )}
        </div>

        {/* Desktop Button */}
        <Link href="https://calendly.com/thefusionapps/30min" className="hidden md:block text-white rounded-full hover:shadow-md transition-shadow duration-300"
          style={{
            background:
              "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
            padding: "12px 24px",
          }}
        >
          Book a Demo
        </Link>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-in-out ${sidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <Image src="/img/headerlogo.svg" alt="Fusion Apps Logo" width={150} height={40} />
          </div>
          <button
            onClick={toggleSidebar}
            className="transform transition-transform duration-200 hover:rotate-90"
          >
            <X size={24} className="text-gray-800" />
          </button>
        </div>

        <div className="p-4">
          <Link href="/">
            <div
              className={`py-4 px-6 mb-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 ${activePage === "home" ? "bg-orange-50 text-[#F28159]" : "text-black"
                }`}
            >
              <span className="text-lg font-medium">Home</span>
            </div>
          </Link>

          {/* Products Dropdown */}
          <div className="mb-2">
            <div
              className={`py-4 px-6 flex justify-between items-center cursor-pointer transition-colors duration-200 hover:bg-gray-50 rounded-lg ${isProductActive ? "bg-orange-50 text-[#F28159]" : "text-black"
                }`}
              onClick={toggleMobileProducts}
            >
              <span className="text-lg font-medium">Products</span>
              {mobileProductsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Products Dropdown Content */}
            <div
              className={`overflow-hidden transition-all duration-300  ease-in-out ${mobileProductsOpen ? "max-h-60" : "max-h-0"
                }`}
            >
              <Link href="/products/engine">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "engine" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Fusion Engine
                </div>
              </Link>
              <Link href="/products/analytics">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "analytics" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Fusion Analytics
                </div>
              </Link>
              <Link href="/products/anpr">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "anpr" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Fusion ANPR
                </div>
              </Link>
              <Link href="/products/surveillance">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "surveillance" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Fusion Surveillance
                </div>
              </Link>
              <Link href="/products/hr">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "hr" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Fusion HR
                </div>
              </Link>
            </div>
          </div>

          {/* Industry Dropdown */}
          <div className="mb-2">
            <div
              className={`py-4 px-6 flex justify-between items-center cursor-pointer transition-colors duration-200 hover:bg-gray-50 rounded-lg ${isIndustryActive ? "bg-orange-50 text-[#F28159]" : "text-black"
                }`}
              onClick={toggleMobileIndustry}
            >
              <span className="text-lg font-medium">Industry</span>
              {mobileIndustryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Industry Dropdown Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileIndustryOpen ? "max-h-72" : "max-h-0"
                }`}
            >
              <Link href="/industries/retail">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "retail" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Retail
                </div>
              </Link>
              <Link href="/industries/hospital">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "hospital" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Hospitality
                </div>
              </Link>
              <Link href="/industries/manufacture">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "manufacture" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Manufacturing
                </div>
              </Link>
              <Link href="/industries/transport">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "transport" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Transportation
                </div>
              </Link>
              <Link href="/industries/advertisement">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "advertisement" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Advertisement
                </div>
              </Link>
              <Link href="/industries/bank">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "bank" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Banking
                </div>
              </Link>
              <Link href="/industries/nexusmall">
                <div className={`py-2 px-10 transition-colors duration-200 hover:bg-gray-50 ${activePage === "retail" ? "text-[#F28159]" : "text-[#303030]"}`}>
                  Nexus Mall
                </div>
              </Link>
            </div>
          </div>

          <Link href="/about">
            <div className={`py-4 px-6 transition-colors duration-200 text-black hover:bg-gray-50 rounded-lg ${activePage === "about" ? "bg-orange-50 text-[#F28159]" : ""}`}>
              <span className="text-lg font-medium">About Us</span>
            </div>
          </Link>

          <Link href="/contact">
            <div className={`py-4 px-6 transition-colors duration-200 text-black hover:bg-gray-50 rounded-lg ${activePage === "contact" ? "bg-orange-50 text-[#F28159]" : ""}`}>
              <span className="text-lg font-medium">Contact Us</span>
            </div>
          </Link>
          <Link href="/casestudy">
            <div className={`py-4 px-6 transition-colors duration-200 text-black hover:bg-gray-50 rounded-lg ${activePage === "contact" ? "bg-orange-50 text-[#F28159]" : ""}`}>
              <span className="text-lg font-medium">Our Impacts</span>
            </div>
          </Link>
          <div className="mt-10 px-6">
            <Link href="https://calendly.com/thefusionapps/30min">
              <div
                className="w-full py-4 text-center text-white rounded-full transform transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)"
                }}
              >
                Book a Demo
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}