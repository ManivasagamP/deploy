// components/ContactPage.tsx
"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from 'react';
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar activePage="contact" />

      <section className="bg-[#171440] bg-[url('/aboutbanner.png')] bg-cover bg-center py-12 md:py-20 text-white px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Get In Touch</h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto md:mx-0">
            We are an AI video intelligence startup providing real-time insights for your business. Our solutions help you save energy and costs by leveraging computer vision technology through your CCTV cameras.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto overflow-hidden">
            {/* Left Side - Contact Information */}
            <div className="bg-[#171440] md:rounded-l-lg p-6 md:p-12 text-white flex flex-col justify-evenly relative">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="flex flex-col space-y-6 pt-0">
                <div className="flex items-start">
                  <div className="rounded-full bg-[#2c2869] p-2 mr-3 flex-shrink-0">
                    <Image src="/img/contact/phonevector.png" alt="Phone" width={16} height={16} className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base">+91 97915 97993</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-[#2c2869] p-2 mr-3 flex-shrink-0">
                    <Image src="/img/contact/mailvector.png" alt="Email" width={16} height={16} className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base">info@thefusionapps.com</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-[#2c2869] p-2 mr-3 flex-shrink-0">
                    <Image src="/img/contact/locvector.png" alt="Address" width={16} height={16} className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base">
                    The Fusion Apps, Vaiyapuri Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 pointer-events-none">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-transparent rounded-full opacity-30"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Right Side - Send Message Form */}
            <div className="bg-white md:rounded-r-lg p-6 md:p-12 flex-1">
              <h2 className="text-xl font-medium text-black mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full border border-gray-300 rounded-lg text-black p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE3D5C]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full border border-gray-300 rounded-lg text-black p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE3D5C]"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full border border-gray-300 rounded-lg text-black p-3 h-32 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE3D5C]"
                  ></textarea>
                </div>
                
                {status.type && (
                  <div
                    className={`p-3 rounded-md ${
                      status.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg py-3 px-4 flex items-center justify-center bg-gradient-to-r from-[#EE3D5C] via-[#F28159] to-[#F4B457] text-white hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ChevronRight className="ml-2 w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Global Presence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* India Office */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/img/contact/indiaflag.png" alt="India" width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">India</h3>
                <p className="text-gray-600 mb-3 text-center">Valiyambalam, Saravanampatti, Coimbatore 641107</p>
                <div className="flex items-center text-gray-500">
                  <span>India - +91 97915 97993</span>
                </div>
              </div>
            </div>

            {/* Singapore Office */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/img/contact/singaporeflag.png" alt="Singapore" width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">Singapore</h3>
                <p className="text-gray-600 mb-3 text-center">8 Bumit Road, #03-10, Singapore - 329077</p>
                <div className="flex items-center text-gray-500">
                  <span>Singapore - +65 1234 5678</span>
                </div>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/img/contact/dubai.jpg" alt="Dubai" width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">Dubai</h3>
                <p className="text-gray-600 mb-3 text-center">
                  17, Al Zarooni building, Al Nahda street, Bur Dubai, Dubai, UAE. P.O. Box-236974
                </p>
                <div className="flex items-center text-gray-500">
                  <span>Dubai - 055 327 3365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}