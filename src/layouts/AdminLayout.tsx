
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

export default function AdminLayout() {
  const items = [
    { to: '/admin/overview', label: 'Overview' },
    { to: '/admin/assignments', label: 'Assignments' },
    { to: '/admin/submissions', label: 'Submissions' },
    { to: '/admin/payments', label: 'Payments' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/ratings', label: 'Ratings' },
    { to: '/admin/settings', label: 'Settings' },
  ]
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar title="Admin" items={items} mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 flex items-center justify-between px-6 border-b bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="flex items-center gap-2">
            {/* Mobile sidebar toggle button */}
            <button className="md:hidden mr-2 text-2xl" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">☰</button>
            <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-8 h-8" />
            <span className="font-bold text-brand-500 font-serif text-lg">EduLink Writers</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted text-sm">Admin</span>
            <button className="btn btn-outline rounded-full px-3 py-1">Notifications</button>
            <button className="btn btn-accent rounded-full px-3 py-1">Logout</button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
