export default function Earnings() {
  const payments = [
    { id: 'p1', title: 'Essay on AI', amount: 25, date: '2025-12-05' },
    { id: 'p2', title: 'Statistics Homework', amount: 40, date: '2025-12-07' },
  ]
  const balance = 180
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Earnings</h1>
      <div className="card p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Wallet Balance</span>
          <span className="text-2xl font-semibold">${balance}</span>
        </div>
      </div>
      <div className="card">
        <div className="p-4 border-b flex items-center justify-between">
          <span className="font-medium">Completed Task Payments</span>
          <select className="input w-auto">
            <option>All dates</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <div className="p-4 space-y-2 text-sm">
          {payments.map(p => (
            <div key={p.id} className="flex items-center justify-between">
              <span>{p.title}</span>
              <span className="font-medium">${p.amount}</span>
              <span className="text-gray-600">{p.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
