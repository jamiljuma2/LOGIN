import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastProvider } from './components/ToastProvider'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import WriterLayout from './layouts/WriterLayout'
import StudentLayout from './layouts/StudentLayout'
import AdminLayout from './layouts/AdminLayout'
import Subscription from './pages/writer/Subscription'
import AvailableTasks from './pages/writer/AvailableTasks'
import MyTasks from './pages/writer/MyTasks'
import UploadWork from './pages/writer/UploadWork'
import Earnings from './pages/writer/Earnings'
import RatingBadge from './pages/writer/RatingBadge'
import WriterSettings from './pages/writer/Settings'
import PostAssignment from './pages/student/PostAssignment'
import MyAssignments from './pages/student/MyAssignments'
import Wallet from './pages/student/Wallet'
import Notifications from './pages/student/Notifications'
import StudentSettings from './pages/student/Settings'
import AdminOverview from './pages/admin/Overview'
import AdminAssignments from './pages/admin/Assignments'
import AdminSubmissions from './pages/admin/Submissions'
import AdminPayments from './pages/admin/Payments'
import AdminUsers from './pages/admin/Users'
import AdminRatings from './pages/admin/Ratings'
import AdminSettings from './pages/admin/Settings'

export default function App() {
  return (
               <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            {/* Landing & Auth & Info */}
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot" element={<ForgotPassword />} />
            {/* Email verification removed: users can register without verification */}

            {/* Writer Dashboard */}
            <Route element={<WriterLayout />}> 
              <Route path="/writer/subscription" element={<Subscription />} />
              <Route path="/writer/available-tasks" element={<AvailableTasks />} />
              <Route path="/writer/my-tasks" element={<MyTasks />} />
              <Route path="/writer/upload" element={<UploadWork />} />
              <Route path="/writer/earnings" element={<Earnings />} />
              <Route path="/writer/rating-badge" element={<RatingBadge />} />
              <Route path="/writer/settings" element={<WriterSettings />} />
            </Route>

            {/* Student Dashboard */}
            <Route element={<StudentLayout />}> 
              <Route path="/student/post-assignment" element={<PostAssignment />} />
              <Route path="/student/my-assignments" element={<MyAssignments />} />
              <Route path="/student/wallet" element={<Wallet />} />
              <Route path="/student/notifications" element={<Notifications />} />
              <Route path="/student/settings" element={<StudentSettings />} />
            </Route>

            {/* Admin Dashboard */}
            <Route element={<AdminLayout />}> 
              <Route path="/admin/overview" element={<AdminOverview />} />
              <Route path="/admin/assignments" element={<AdminAssignments />} />
              <Route path="/admin/submissions" element={<AdminSubmissions />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/ratings" element={<AdminRatings />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </ToastProvider>
  )
}
