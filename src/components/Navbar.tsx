import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isDashboard = pathname.startsWith('/writer') || pathname.startsWith('/student') || pathname.startsWith('/admin')
  if (isDashboard) return null
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container-padded flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="Home" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-brand-700 hover:text-brand-500 transition-colors">
              <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v5a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2v-5h1a1 1 0 0 0 .707-1.707l-7-7z" />
            </svg>
          </Link>
          <Link to="/" className="font-semibold text-brand-700">AssignConnect</Link>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link className="hover:text-brand-700" to="/about">About</Link>
          <Link className="hover:text-brand-700" to="/contact">Contact</Link>
          <Link className="hover:text-brand-700" to="/privacy">Privacy</Link>
          <Link className="hover:text-brand-700" to="/auth/login">Login</Link>
          <Link className="hover:text-brand-700" to="/auth/register">Register</Link>
        </nav>
      </div>
    </header>
  )
}
