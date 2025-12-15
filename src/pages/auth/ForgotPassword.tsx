import { useState } from 'react'
import { useToast } from '../../components/ToastProvider'

export default function ForgotPassword() {
  const { showToast } = useToast()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    showToast({ type: 'success', message: 'Reset link sent (placeholder)' })
    setLoading(false)
  }

  return (
    <section className="container-padded py-12 min-h-[80vh] flex flex-col justify-center bg-background">
      <div className="max-w-md mx-auto card shadow-lg border-t-4 border-accent">
        <form className="p-8 space-y-6" onSubmit={submit}>
          <div className="flex flex-col items-center gap-2 mb-2">
            <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-brand-500 font-serif">EduLink Writers</span>
          </div>
          <h2 className="text-2xl font-bold text-brand-700 font-serif text-center">Forgot your password?</h2>
          <div>
            <label className="label">Email</label>
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoFocus autoComplete="email" />
          </div>
          <button className="btn btn-primary w-full text-base py-2 rounded-full shadow" disabled={loading}>
            {loading ? 'Sending reset link…' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </section>
  )
}
