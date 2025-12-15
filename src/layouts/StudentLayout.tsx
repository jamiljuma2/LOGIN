

import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useToast } from '../components/ToastProvider'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function StudentLayout() {
  const items = [
    { to: '/student/post-assignment', label: 'Post Assignment' },
    { to: '/student/my-assignments', label: 'My Assignments' },
    { to: '/student/wallet', label: 'Wallet' },
    { to: '/student/notifications', label: 'Notifications' },
    { to: '/student/settings', label: 'Settings' },
  ]
  const nav = useNavigate();
  const { showToast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleNotifications() {
    nav('/student/notifications');
  }

  function handleLogout() {
    // Simulate logout: clear session if any, then redirect
    showToast({ type: 'success', message: 'Logged out' });
    nav('/auth/login');
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar title="Student" items={items} mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
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
              <span className="text-muted text-sm">Student</span>
              <button className="btn btn-outline rounded-full px-3 py-1 min-h-[44px]" onClick={handleNotifications}>Notifications</button>
              <button className="btn btn-accent rounded-full px-3 py-1 min-h-[44px]" onClick={handleLogout}>Logout</button>
            </div>
          </header>
          <main className="flex-1 py-4 md:py-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
