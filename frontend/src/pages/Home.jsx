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
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              Trusted by 50+ Enterprises
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Wholesale Excellence, <span className="text-primary">Data-Driven</span> Results.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Optimize your supply chain with our direct-source advantage. We combine industrial scale with precision logistics to power your business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                Contact Us <span className="material-icons">arrow_forward</span>
              </Link>
              <Link to="/about#contact" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Request Sample Kit
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Signals */}
      <section className="py-12 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
            Official Partners & Logistics Providers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black text-slate-500">FEDEX</span>
            <span className="text-2xl font-black text-slate-500">MAERSK</span>
            <span className="text-2xl font-black text-slate-500">DHL</span>
            <span className="text-2xl font-black text-slate-500">UPS</span>
            <span className="text-2xl font-black text-slate-500">AMAZON</span>
          </div>
        </div>
      </section>

      {/* Key Performance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary">local_shipping</span>
              </div>
              <h3 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">10k+</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Products Shipped Monthly</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary">verified</span>
              </div>
              <h3 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">99%</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Satisfaction Rate</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary">public</span>
              </div>
              <h3 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">500+</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Benefits Split-Section */}
      <section className="py-24 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Price Competitiveness</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Our direct-to-manufacturer sourcing model eliminates middleman fees, providing significant savings across all product categories.
                </p>
              </div>
              <div className="bg-background-light dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
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

            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white">factory</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Direct Sourcing</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      We bypass importers and regional distributors to bring you factory-floor pricing directly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white">speed</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">48-Hour Dispatch</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our automated warehouse systems ensure your inventory is processed and shipped within two business days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white">trending_down</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Tiered Volume Discounts</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      The more you scale, the more you save. Our dynamic pricing adapts to your business growth automatically.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-icons text-white">person_pin</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Dedicated Account Management</h4>
                    <p className="text-slate-600 dark:text-slate-400">
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
          <div className="bg-primary rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
              Ready to optimize your wholesale buying?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Join 500+ businesses who have already lowered their overhead by switching to our data-driven procurement platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/about#contact" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-all shadow-xl">
                Get Started Now
              </Link>
              <Link to="/about#contact" className="px-8 py-4 bg-primary border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
