export default function AdminPayments() {
  const topups = [
    { id: 't1', user: 'Alice', amount: 50, status: 'Completed' },
    { id: 't2', user: 'Bob', amount: 100, status: 'Pending' },
  ]
  const payouts = [
    { id: 'p1', writer: 'WriterX', amount: 75, status: 'Completed' },
    { id: 'p2', writer: 'WriterY', amount: 120, status: 'Failed' },
  ]
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Payments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow text-sm mb-8">
          <caption className="text-left px-4 py-2 font-semibold text-brand-600">Wallet Top-ups</caption>
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">User</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {topups.map(t => (
              <tr key={t.id} className="border-b last:border-0">
                <td className="px-4 py-2">{t.user}</td>
                <td className="px-4 py-2 font-medium text-brand-700">${t.amount}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${t.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>{t.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="min-w-full bg-white border rounded-lg shadow text-sm">
          <caption className="text-left px-4 py-2 font-semibold text-brand-600">Writer Payouts</caption>
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Writer</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map(p => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="px-4 py-2">{p.writer}</td>
                <td className="px-4 py-2 font-medium text-brand-700">${p.amount}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${p.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
