import myServices from "@/app/portfolio-content/services-content";
import BasicLayout from "@/components/BasicLayout";

export default function Services() {
  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-6 sm:mb-16">
          <span className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 tracking-wider shadow-sm">
            ✨ Premium Services
          </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-emerald-600"
              style={{
                color: '#065f46', // emerald-800 as fallback
                WebkitTextFillColor: 'transparent', // Ensures gradient works on Webkit browsers
                backgroundImage: 'linear-gradient(to right, #1f2937, #059669)', // from-gray-800 to-emerald-600 in hex
              }}>
              Transformative Digital Solutions
            </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Where innovative technology meets exceptional user experiences
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {myServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 overflow-hidden"
            >
              {/* Top Glow Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 sm:p-7">
                {/* Icon and Title */}
                <div className="flex items-center mb-5">
                  <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 mr-4 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                    <span className="text-xl sm:text-2xl">{service.icon}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h2>
                </div>

                <h3 className="text-xs sm:text-sm font-semibold text-emerald-500 mb-3 tracking-wide">
                  {service.subheading}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.content}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start text-sm text-gray-700">
                      <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      <span className="ml-3">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 sm:px-7 pb-6 pt-3">
                <button className="w-full flex items-center justify-between text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors group-hover:underline underline-offset-4">
                  <span>Discover possibilities</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover glow layer */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
          <p className="mt-3 text-xs sm:text-sm text-gray-500">No obligation – Just possibilities.</p>
        </div>
      </div>
    </BasicLayout>
  );
}