
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
        <div className="mx-auto w-full max-w-screen-xl flex flex-col min-h-screen px-2 sm:px-4 md:px-8">
          <header className="flex flex-col gap-2 sm:flex-row sm:h-16 sm:items-center sm:justify-between border-b bg-white/80 backdrop-blur sticky top-0 z-10 px-2 sm:px-6 pt-2 sm:pt-0">
            <div className="flex items-center gap-2">
              {/* Mobile sidebar toggle button */}
              <button className="md:hidden mr-2 text-2xl min-h-[44px]" onClick={() => setSidebarOpen(true)} aria-label="Open main navigation sidebar" tabIndex={0}>☰</button>
              <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-8 h-8" />
              <span className="font-bold text-brand-500 font-serif text-lg">EduLink Writers</span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto">
              <span className="text-muted text-sm">Admin</span>
              <button className="btn btn-outline rounded-full px-3 py-1 min-h-[44px]">Notifications</button>
              <button className="btn btn-accent rounded-full px-3 py-1 min-h-[44px]">Logout</button>
            </div>
          </header>
          <main className="flex-1 py-4 md:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
