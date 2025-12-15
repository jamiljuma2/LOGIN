export default function AdminRatings() {
  const rows = [
    { id: 'r1', writer: 'WriterX', rating: 4.7 },
    { id: 'r2', writer: 'WriterY', rating: 4.3 },
  ]
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Ratings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow text-sm">
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Writer</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Rating</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-b last:border-0">
                <td className="px-4 py-2 font-medium text-brand-700">{r.writer}</td>
                <td className="px-4 py-2">{r.rating}</td>
                <td className="px-4 py-2 text-right">
                  <button className="btn btn-outline btn-sm">Adjust</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
