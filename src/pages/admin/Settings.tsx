export default function AdminSettings() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="card p-4 space-y-3">
        <div>
          <label className="label">Platform Name</label>
          <input className="input" placeholder="AssignConnect" />
        </div>
        <div>
          <label className="label">Support Email</label>
          <input className="input" type="email" placeholder="support@example.com" />
        </div>
        <button className="btn btn-primary w-full">Save</button>
      </div>
    </div>
  )
}
