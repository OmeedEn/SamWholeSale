import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/SamSummit.jpg" alt="Summit Wholesale Logo" className="w-9 h-9 rounded-lg object-cover" />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Summit Wholesale
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
              Leading the digital transformation of wholesale procurement through data and direct relationships.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-icons text-sm">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Company</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/about#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Solutions</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><Link className="hover:text-primary transition-colors" to="/about#contact">Bulk Supply</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Custom Manufacturing</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Logistics Support</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Inventory API</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Support</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Shipping Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Refunds</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-slate-400 text-sm">&copy; 2024 Summit Wholesale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
