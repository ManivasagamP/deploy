import Image from 'next/image';

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-white py-20 px-8">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[32px] bg-[#28236B] ">
            {/* Circuit Pattern Background */}
            <div className="absolute inset-0">
              <Image
                src="/img/CTA.png"
                alt="Circuit Pattern"
                fill
                className="object-cover opacity-20"
              />
              {/* Glowing Overlay */}
              <div className="relative"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Schedule a Demo
              </h2>
              <p className="text-white/80 max-w-xl mb-8 text-lg">
                Get a personalized demo today — no commitment, just insight.
              </p>
              <button className="px-8 py-3 bg-white text-[#28236B] rounded-full font-medium transition-all hover:shadow-lg hover:shadow-white/20 hover:transform hover:-translate-y-1">
                <a href='https://calendly.com/thefusionapps/30min'>Get Started</a>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </>
  )
}




