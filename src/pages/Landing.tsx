import { Link } from 'react-router-dom'

const features = [
  { label: 'Academic Integrity', icon: '🎓' },
  { label: 'Secure Payments', icon: '💳' },
  { label: 'Verified Writers', icon: '🛡️' },
  { label: 'Admin Oversight', icon: '👨‍💼' },
  { label: 'Confidential & Reliable', icon: '🔒' },
]

export default function Landing() {
  return (
    <section className="container-padded py-12 min-h-[80vh] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src="/edulink-logo.svg" alt="EduLink Writers Logo" className="w-14 h-14" />
            <span className="text-3xl font-bold text-brand-500 tracking-tight font-serif">EduLink Writers</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-700 font-serif leading-tight">Academic Excellence. Trusted Connections.</h1>
          <p className="text-lg text-muted max-w-xl">A secure, professional platform connecting students with verified academic writers. Built for trust, privacy, and results—where every assignment matters.</p>
          <div className="flex gap-4 mt-2">
            <Link to="/auth/register" className="btn btn-primary text-base px-6 py-2 rounded-full shadow">Get Started</Link>
            <Link to="/auth/login" className="btn btn-outline text-base px-6 py-2 rounded-full">Login</Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="card p-8 w-full max-w-md flex flex-col items-center gap-4 shadow-lg border-accent border-t-4">
            <h2 className="text-xl font-semibold text-brand-600 font-serif">Why EduLink?</h2>
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map(f => (
                <li key={f.label} className="flex items-center gap-2 text-brand-700 text-base font-medium">
                  <span className="text-2xl">{f.icon}</span> {f.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
