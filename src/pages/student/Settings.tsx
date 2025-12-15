export default function Settings() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="card p-4 space-y-3">
        <div>
          <label className="label">Display Name</label>
          <input className="input" placeholder="Your name" />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" type="email" placeholder="you@example.com" />
        </div>
        <button className="btn btn-primary w-full">Save Changes</button>
      </div>
    </div>
  )
}
