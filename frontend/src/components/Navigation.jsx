import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/SamSummit.jpg" alt="Summit Wholesale Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover" />
              <span className="text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Summit Wholesale
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link className="text-sm font-medium hover:text-primary hover:scale-105 transition-all" to="/about">About</Link>
            <Link className="text-sm font-medium hover:text-primary hover:scale-105 transition-all" to="/about#contact">Contact</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all"
              aria-label="Toggle theme"
            >
              <span className="material-icons text-slate-600 dark:text-slate-300">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link className="bg-primary text-white px-4 lg:px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:scale-105 transition-all shadow-lg shadow-primary/20" to="/about#contact">
              Become a Partner
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              <span className="material-icons text-slate-600 dark:text-slate-300 text-xl">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link to="/about#contact" className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-600 transition-all shadow-md shadow-primary/20">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
