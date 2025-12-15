export default function Notifications() {
  const notes = [
    { id: 'n1', text: 'Assignment approved' },
    { id: 'n2', text: 'Task claimed by writer' },
    { id: 'n3', text: 'Submission uploaded' },
    { id: 'n4', text: 'Payment released' },
  ]
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Notifications</h1>
      <div className="card p-4 space-y-2 text-sm">
        {notes.map(n => (
          <div key={n.id} className="flex items-center justify-between">
            <span>{n.text}</span>
            <button className="btn btn-outline">View</button>
          </div>
        ))}
      </div>
    </div>
  )
}
