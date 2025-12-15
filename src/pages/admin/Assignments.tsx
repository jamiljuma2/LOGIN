export default function AdminAssignments() {
  const rows = [
    { id: 'a1', title: 'Research Proposal', student: 'Alice', budget: 60, status: 'Pending' },
    { id: 'a2', title: 'Data Analysis', student: 'Bob', budget: 80, status: 'Pending' },
  ]
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Assignment Approvals</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Title</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Student</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Budget</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Status</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id} className="border-b last:border-0">
                  <td className="px-4 py-2 font-medium text-brand-700">{r.title}</td>
                  <td className="px-4 py-2">{r.student}</td>
                  <td className="px-4 py-2">${r.budget}</td>
                  <td className="px-4 py-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${r.status === 'Approved' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>{r.status}</span>
                  </td>
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
