import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/90 backdrop-blur py-6 mt-auto">
      <div className="mx-auto max-w-screen-xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-7 h-7" />
          <span className="font-bold text-brand-500 font-serif text-base">EduLink Writers</span>
        </div>
        <nav className="flex flex-wrap gap-4">
          <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-brand-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-600 transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-brand-600 transition-colors">Privacy</Link>
        </nav>
        <div className="flex flex-col items-center sm:items-end gap-1">
          <div className="text-xs text-gray-700">
            <span className="font-semibold">Contact Us:</span> <a href="mailto:support@edulinkwriters.com" className="text-brand-600 underline">support@edulinkwriters.com</a>
          </div>
          <div className="text-xs text-gray-400 text-center sm:text-right">
            &copy; {new Date().getFullYear()} EduLink Writers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
