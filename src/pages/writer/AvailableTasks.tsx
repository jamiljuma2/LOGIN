import { availableTasks, writerSubscription } from '../../lib/mockData'
import { useToast } from '../../components/ToastProvider'

export default function AvailableTasks() {
  const { showToast } = useToast()
  if (!writerSubscription.active) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="text-xl font-semibold mb-2">Subscription Required</h2>
        <p className="mb-4">You must pay for a subscription to access tasks.</p>
        <a href="/writer/subscription" className="btn btn-primary">Go to Subscription</a>
      </div>
    )
  }
  const tasksRemaining = writerSubscription.limit;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Available Tasks</h1>
        <span className="text-sm text-gray-700">You have {tasksRemaining === Infinity ? 'unlimited' : tasksRemaining} tasks remaining today</span>
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
