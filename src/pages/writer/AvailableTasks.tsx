import { availableTasks } from '../../lib/mockData'
import { useToast } from '../../components/ToastProvider'

export default function AvailableTasks() {
  const { showToast } = useToast()
  const tasksRemaining = 5 // Placeholder; backend or subscription context should update this

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Available Tasks</h1>
        <span className="text-sm text-gray-700">You have {tasksRemaining} tasks remaining today</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {availableTasks.map(t => (
          <div key={t.id} className="card p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{t.title}</h3>
              <span className="font-semibold">${t.budget}</span>
            </div>
            <p className="text-sm text-gray-600">Deadline: {t.deadline}</p>
            <p className="text-sm text-gray-700">{t.description}</p>
            <div className="pt-2">
              <button className="btn btn-primary" onClick={() => showToast({ type: 'success', message: 'Task claimed (placeholder)' })}>Claim Task</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
