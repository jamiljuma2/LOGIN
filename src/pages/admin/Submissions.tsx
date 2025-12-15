export default function AdminSubmissions() {
  const submissions = [
    { id: 's1', title: 'Essay on AI', files: ['essay.pdf'] },
    { id: 's2', title: 'Statistics Homework', files: ['homework.zip'] },
  ]
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Submission Review</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow text-sm">
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Title</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Files</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(s => (
              <tr key={s.id} className="border-b last:border-0">
                <td className="px-4 py-2 font-medium text-brand-700">{s.title}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    {s.files.map(f => (<li key={f}>{f}</li>))}
                  </ul>
                </td>
                <td className="px-4 py-2 flex flex-wrap gap-2">
                  <button className="btn btn-outline btn-sm">Approve</button>
                  <button className="btn btn-outline btn-sm">Reject</button>
                  <button className="btn btn-outline btn-sm">Mark Complete</button>
                  <button className="btn btn-primary btn-sm">Release Payment</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
