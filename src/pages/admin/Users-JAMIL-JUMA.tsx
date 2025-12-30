export default function AdminUsers() {
  const rows = [
    { id: 'u1', name: 'Alice', role: 'STUDENT' },
    { id: 'u2', name: 'WriterX', role: 'WRITER' },
  ]
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow text-sm">
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Role</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-b last:border-0">
                <td className="px-4 py-2 font-medium text-brand-700">{r.name}</td>
                <td className="px-4 py-2">{r.role}</td>
                <td className="px-4 py-2 text-right">
                  <button className="btn btn-outline btn-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
