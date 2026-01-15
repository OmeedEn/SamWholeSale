import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function About() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: 'Bulk Pricing Inquiry',
    message: ''
  })

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = [formData.firstName, formData.lastName].filter(Boolean).join(' ')
    const nameSection = name ? `Name: ${name}\n` : ''
    const phoneSection = formData.phone ? `Phone: ${formData.phone}\n` : ''
    
    const mailtoLink = `mailto:Summit3pl@yahoo.com?subject=${encodeURIComponent(formData.subject + ' - ' + formData.companyName)}&body=${encodeURIComponent(
      `${nameSection}Company: ${formData.companyName}\nEmail: ${formData.email}\n${phoneSection}Subject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                About Our Wholesale Mission
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 md:mb-6">
                We are dedicated to providing the highest quality wholesale components with industry-leading shipping speeds and reliability. Our team has over 4 years of experience in global supply chain management.
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 md:mb-8">
                Every partner we work with becomes part of our ecosystem. We don't just ship products; we provide the logistical backbone for your business to scale effortlessly across international borders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg text-primary">
                    <span className="material-icons text-lg md:text-2xl">verified</span>
                  </div>
                  <span className="font-semibold text-xs md:text-sm text-slate-900 dark:text-white">Certified Quality</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg text-primary">
                    <span className="material-icons text-lg md:text-2xl">local_shipping</span>
                  </div>
                  <span className="font-semibold text-xs md:text-sm text-slate-900 dark:text-white">Global Logistics</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg text-primary">
                    <span className="material-icons text-lg md:text-2xl">support_agent</span>
                  </div>
                  <span className="font-semibold text-xs md:text-sm text-slate-900 dark:text-white">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg text-primary">
                    <span className="material-icons text-lg md:text-2xl">payments</span>
                  </div>
                  <span className="font-semibold text-xs md:text-sm text-slate-900 dark:text-white">Flexible Credit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Our Impact in Numbers</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Delivering excellence across the globe with measurable results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center animate-scale-in">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">50+</p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Enterprises Served</p>
            </div>
            <div className="text-center animate-scale-in delay-100">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">100K+</p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Products Delivered</p>
            </div>
            <div className="text-center animate-scale-in delay-200">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">500+</p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Active Partners</p>
            </div>
            <div className="text-center animate-scale-in delay-300">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">99%</p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 animate-fade-in">
            <div className="flex flex-col md:flex-row">
              {/* Contact Form */}
              <div className="md:w-3/5 p-6 sm:p-8 lg:p-16">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Get in Touch</h2>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 md:mb-8">
                  Fill out the form below and our wholesale accounts team will contact you within 24 hours.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name <span className="text-slate-500 normal-case">(Optional)</span></label>
                      <input
                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white"
                        placeholder="John"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name <span className="text-slate-500 normal-case">(Optional)</span></label>
                      <input
                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white"
                        placeholder="Doe"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
                      <input
                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white"
                        placeholder="Acme Corp"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Work Email</label>
                      <input
                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white"
                        placeholder="john@company.com"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number <span className="text-slate-500 normal-case">(Optional)</span></label>
                    <input
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Inquiry Subject</label>
                    <select
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white appearance-none"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option>Bulk Pricing Inquiry</option>
                      <option>Custom Manufacturing</option>
                      <option>Logistics & Shipping</option>
                      <option>Partnership Proposal</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                    <textarea
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm text-slate-900 dark:text-white"
                      placeholder="How can we help your business?"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/20"
                    type="submit"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
              {/* Direct Channels */}
              <div className="md:w-2/5 bg-slate-50 dark:bg-slate-800/50 p-10 lg:p-16 flex flex-col justify-center border-l border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Priority Support</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                  For existing clients or urgent bulk quotes, reach out via our direct messaging channels.
                </p>
                <div className="space-y-4">
                  <a className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl hover:shadow-md transition-all group" href="https://chat.whatsapp.com/L4YBUVGGZ6p7hKWg4PfUGZ" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center">
                      <span className="material-icons">chat</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">WhatsApp Business</p>
                      <p className="text-xs text-slate-400">Fast response time</p>
                    </div>
                  </a>
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 text-slate-500">
                      <span className="material-icons text-sm">location_on</span>
                      <span className="text-xs">17391 Murphy ave unit A15, Irvine, CA 92614</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
