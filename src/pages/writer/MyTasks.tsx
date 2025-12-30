import { useState } from 'react'
import { useToast } from '../../components/ToastProvider'
import { writerSubscription } from '../../lib/mockData'
import ProgressBar from '../../components/ProgressBar'
import Badge from '../../components/Badge'

const initialSample = {
  inProgress: [
    { id: 'ip1', title: 'Essay on AI', progress: 40 },
    { id: 'ip2', title: 'Business Plan Draft', progress: 70 },
  ],
  submitted: [
    { id: 's1', title: 'Statistics Homework', progress: 100 },
  ],
  completed: [
    { id: 'c1', title: 'Marketing Summary', progress: 100 },
  ],
}

export default function MyTasks() {
  if (!writerSubscription.active) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="text-xl font-semibold mb-2">Subscription Required</h2>
        <p className="mb-4">You must pay for a subscription to access your tasks.</p>
        <a href="/writer/subscription" className="btn btn-primary">Go to Subscription</a>
      </div>
    )
  }
  const { showToast } = useToast();
  const [tab, setTab] = useState<'In Progress'|'Submitted'|'Completed'>('In Progress');
  const [tasks, setTasks] = useState(initialSample);
  const list = tab === 'In Progress' ? tasks.inProgress : tab === 'Submitted' ? tasks.submitted : tasks.completed;

  function handleSubmitTask(id: string) {
    // Move task from inProgress to submitted
    setTasks(prev => {
      const task = prev.inProgress.find(t => t.id === id);
      if (!task) return prev;
      return {
        ...prev,
        inProgress: prev.inProgress.filter(t => t.id !== id),
        submitted: [...prev.submitted, { ...task, progress: 100 }],
      };
    });
    showToast({ type: 'success', message: 'Task submitted!' });
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My Tasks</h1>
      <div className="flex gap-2">
        {(['In Progress','Submitted','Completed'] as const).map(t => (
          <button key={t} className={`btn ${tab === t ? 'btn-primary' : 'btn-outline'}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="space-y-3">
        {list.map(item => (
          <div key={item.id} className="card p-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{item.title}</span>
              <Badge label={tab} />
            </div>
            <ProgressBar value={item.progress} />
            <div className="flex gap-2 pt-2">
              <button className="btn btn-outline">View</button>
              {/* Submit button removed as requested */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
