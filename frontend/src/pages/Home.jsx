import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <img
            alt="Wholesale Logistics"
            className="w-full h-full object-cover opacity-10 dark:opacity-20 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWR2kBEdDLx6mXHRekBtx4jObT2DRVyP9LQe1XkVwq5YrOrbD6Qx-iE51Xo_Fwnlla7Waa_ifXTrnXppT3_8Aw1-6wFvG5jtBzGFt71_IX6Mlj3wExsEvxSzBtxsGQqGXgSufog4HduRtN0RaIpb-IJLpeRFmKiNpKBhUjlEbl63yg70-KK1WDUIWA12h2u1GKNdEatdr3BgqNIEKTrJq77jsSnSVe7by-1tjJiPh_ywDVqXNHjvAri6kC-MdRl4vxsXgfL0kLq1Gc"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20 animate-fade-in">
              Trusted by 50+ Enterprises
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] animate-fade-in delay-100">
              Wholesale Excellence, <span className="text-primary">Data-Driven</span> Results.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed animate-fade-in delay-200">
              Optimize your supply chain with our direct-source advantage. We combine industrial scale with precision logistics to power your business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
              <Link to="/about#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                Contact Us <span className="material-icons">arrow_forward</span>
              </Link>
              
            </div>
          </div>
        </div>
      </header>

      {/* Trust Signals */}
      <section className="py-12 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
            Official Partners & Logistics Providers
          </p>
          <div className="relative">
            <div className="flex animate-scroll gap-16 md:gap-24 lg:gap-32">
              <div className="flex items-center gap-16 md:gap-24 lg:gap-32 whitespace-nowrap">
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">FEDEX</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">MAERSK</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">DHL</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">UPS</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">AMAZON</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-16 md:gap-24 lg:gap-32 whitespace-nowrap">
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">FEDEX</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">MAERSK</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">DHL</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">UPS</span>
                <span className="text-xl md:text-2xl font-black text-slate-500 opacity-50 hover:opacity-100 transition-opacity">AMAZON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:translate-y-[-4px] hover:shadow-lg transition-all animate-scale-in">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="material-icons text-primary">local_shipping</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">10k+</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">Products Shipped Monthly</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:translate-y-[-4px] hover:shadow-lg transition-all animate-scale-in delay-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="material-icons text-primary">verified</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">99%</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">Satisfaction Rate</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:translate-y-[-4px] hover:shadow-lg transition-all animate-scale-in delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="material-icons text-primary">public</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">500+</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Benefits Split-Section */}
      <section className="py-24 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Price Competitiveness</h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  Our direct-to-manufacturer sourcing model eliminates middleman fees, providing significant savings across all product categories.
                </p>
              </div>
              <div className="bg-background-light dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Industrial Supplies</span>
                      <span className="text-primary">-15% Market Avg</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-6 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[85%] rounded-full shadow-lg shadow-primary/20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Packaging Materials</span>
                      <span className="text-primary">-22% Market Avg</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-6 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[78%] rounded-full shadow-lg shadow-primary/20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Safety Equipment</span>
                      <span className="text-primary">-12% Market Avg</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-6 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[88%] rounded-full shadow-lg shadow-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium text-slate-500">Our Price Index</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-500">Retail Baseline (100%)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-12 animate-fade-in-right">
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                <div className="flex gap-4 md:gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white text-xl">factory</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">Direct Sourcing</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                      We bypass importers and regional distributors to bring you factory-floor pricing directly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white text-xl">speed</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">48-Hour Dispatch</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                      Our automated warehouse systems ensure your inventory is processed and shipped within two business days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white text-xl">trending_down</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">Tiered Volume Discounts</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                      The more you scale, the more you save. Our dynamic pricing adapts to your business growth automatically.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white text-xl">person_pin</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">Dedicated Account Management</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                      Every partner gets a single point of contact who understands their specific inventory needs and cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-20 text-center relative overflow-hidden animate-scale-in">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 relative z-10">
              Ready to optimize your wholesale buying?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto relative z-10">
              Join 500+ businesses who have already lowered their overhead by switching to our data-driven procurement platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/about#contact" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 hover:scale-105 transition-all shadow-xl">
                Get Started Now
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
