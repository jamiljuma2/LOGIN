export default function AdminOverview() {
  const stats = [
    { label: 'Assignments', value: 124 },
    { label: 'Submissions', value: 98 },
    { label: 'Payments', value: 76 },
    { label: 'Users', value: 342 },
  ]
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Admin Overview</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="card p-6 border-t-4 border-accent shadow flex flex-col items-center">
            <div className="text-sm text-muted font-medium">{s.label}</div>
            <div className="mt-2 text-3xl font-bold text-brand-700 font-serif">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
