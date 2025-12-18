import { useState } from 'react'
import { useToast } from '../../components/ToastProvider'

import { Link, useNavigate } from 'react-router-dom'
import { mockRegisterUser } from '../../lib/api'

export default function Register() {
  const { showToast } = useToast()
  const nav = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'writer'|'student'>('student')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await mockRegisterUser({ username, email, password, role: role.toUpperCase() })
      showToast({ type: 'success', message: 'Registration successful! You can now log in.' })
      setTimeout(() => nav('/auth/login'), 800)
    } catch (err: any) {
      showToast({ type: 'error', message: err.message || 'Registration failed' })
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
          <h2 className="text-2xl font-bold text-brand-700 font-serif text-center">Create your account</h2>
          {/* Full Name field removed as backend does not require it */}
          <div>
            <label className="label">Username</label>
            <input className="input" value={username} onChange={e => setUsername(e.target.value)} required autoComplete="username" />
          </div>
          <div>
            <label className="label">Email</label>
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
          </div>
          <div>
            <label className="label">Password</label>
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="new-password" />
          </div>
          <div>
            <label className="label">Register as</label>
            <select className="input" value={role} onChange={e => setRole(e.target.value as any)}>
              <option value="student">Student</option>
              <option value="writer">Writer</option>
            </select>
          </div>
          <button className="btn btn-primary w-full text-base py-2 rounded-full shadow" disabled={loading}>
            {loading ? 'Creating account…' : 'Create Account'}
          </button>
          <div className="flex justify-between text-sm mt-2">
            <Link to="/auth/login" className="text-brand-600 font-medium hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </section>
  )
}
