import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark py-12 md:py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-1 sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 md:mb-6 hover:opacity-80 transition-opacity">
              <img src="/SamSummit.jpg" alt="Summit Wholesale Logo" className="w-8 h-8 md:w-9 md:h-9 rounded-lg object-cover" />
              <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Summit Wholesale
              </span>
            </Link>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-4 md:mb-6 max-w-sm">
              Leading the digital transformation of wholesale procurement through data and direct relationships.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-6 text-sm md:text-base">Company</h5>
            <ul className="space-y-3 md:space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><Link className="hover:text-primary hover:translate-x-1 inline-block transition-all" to="/about">About Us</Link></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Careers</a></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Press</a></li>
              <li><Link className="hover:text-primary hover:translate-x-1 inline-block transition-all" to="/about#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-6 text-sm md:text-base">Solutions</h5>
            <ul className="space-y-3 md:space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><Link className="hover:text-primary hover:translate-x-1 inline-block transition-all" to="/about#contact">Bulk Supply</Link></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Custom Manufacturing</a></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Logistics Support</a></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Inventory API</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-6 text-sm md:text-base">Support</h5>
            <ul className="space-y-3 md:space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Help Center</a></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Shipping Policy</a></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Refunds</a></li>
              <li><a className="hover:text-primary hover:translate-x-1 inline-block transition-all" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-slate-400 text-xs md:text-sm">&copy; 2024 Summit Wholesale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
