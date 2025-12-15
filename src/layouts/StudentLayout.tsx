
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useToast } from '../components/ToastProvider'

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
      <Sidebar title="Student" items={items} />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 flex items-center justify-between px-6 border-b bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-8 h-8" />
            <span className="font-bold text-brand-500 font-serif text-lg">EduLink Writers</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted text-sm">Student</span>
            <button className="btn btn-outline rounded-full px-3 py-1" onClick={handleNotifications}>Notifications</button>
            <button className="btn btn-accent rounded-full px-3 py-1" onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
