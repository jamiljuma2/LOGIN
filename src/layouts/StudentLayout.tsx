

import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useToast } from '../components/ToastProvider'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { logoutUser, getCurrentUser } from '../lib/api'

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


  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => {
        showToast({ type: 'error', message: 'Session expired. Please log in.' });
        nav('/auth/login');
      });
    // eslint-disable-next-line
  }, []);

  async function handleLogout() {
    try {
      await logoutUser();
      showToast({ type: 'success', message: 'Logged out' });
    } catch (err: any) {
      showToast({ type: 'error', message: err.message || 'Logout failed' });
    } finally {
      nav('/auth/login');
    }
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
              <a href="/" aria-label="Home" className="flex items-center rounded-full bg-brand-50 hover:bg-brand-100 p-1 shadow transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-brand-600">
                  <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v5a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2v-5h1a1 1 0 0 0 .707-1.707l-7-7z" />
                </svg>
              </a>
              <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-8 h-8" />
              <span className="font-bold text-brand-500 font-serif text-lg">EduLink Writers</span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto">
              <span className="text-muted text-sm">{user ? user.username : 'Student'}</span>
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
