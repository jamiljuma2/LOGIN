import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isDashboard = pathname.startsWith('/writer') || pathname.startsWith('/student') || pathname.startsWith('/admin')
  if (isDashboard) return null
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container-padded flex h-14 items-center justify-between">
        <Link to="/" className="font-semibold text-brand-700">AssignConnect</Link>
        <nav className="flex gap-4 text-sm">
          <Link className="hover:text-brand-700" to="/auth/login">Login</Link>
          <Link className="hover:text-brand-700" to="/auth/register">Register</Link>
        </nav>
      </div>
    </header>
  )
}
