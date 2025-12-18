import { useState } from 'react'
import { useToast } from '../../components/ToastProvider'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../lib/api'

export default function Login() {
  const { showToast } = useToast()
  const nav = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'writer'|'student'>('student')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await loginUser({ username, password, role })
      showToast({ type: 'success', message: 'Login successful!' })
      nav(role === 'writer' ? '/writer/available-tasks' : '/student/post-assignment')
    } catch (err: any) {
      showToast({ type: 'error', message: err.message || 'Login failed' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container-padded py-12 min-h-[80vh] flex flex-col justify-center bg-background">
      <div className="max-w-md mx-auto card shadow-lg border-t-4 border-accent">
        <form className="p-8 space-y-6" onSubmit={submit}>
          <div className="flex flex-col items-center gap-2 mb-2">
            <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-brand-500 font-serif">EduLink Writers</span>
          </div>
          <h2 className="text-2xl font-bold text-brand-700 font-serif text-center">Sign in to your account</h2>
          <div>
            <label className="label">Username</label>
            <input className="input" type="text" value={username} onChange={e => setUsername(e.target.value)} required autoFocus autoComplete="username" />
          </div>
          <div>
            <label className="label">Password</label>
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
          </div>
          <div>
            <label className="label">Role</label>
            <select className="input" value={role} onChange={e => setRole(e.target.value as any)}>
              <option value="student">Student</option>
              <option value="writer">Writer</option>
            </select>
          </div>
          <button className="btn btn-primary w-full text-base py-2 rounded-full shadow" disabled={loading}>
            {loading ? 'Signing in…' : 'Login'}
          </button>
          <div className="flex justify-between text-sm mt-2">
            <Link to="/auth/register" className="text-brand-600 font-medium hover:underline">Create account</Link>
            <Link to="/auth/forgot" className="text-brand-600 font-medium hover:underline">Forgot password?</Link>
          </div>
        </form>
      </div>
    </section>
  )
}
