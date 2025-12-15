import { useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import Badge from '../../components/Badge'

const sample = {
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
  const [tab, setTab] = useState<'In Progress'|'Submitted'|'Completed'>('In Progress')
  const list = tab === 'In Progress' ? sample.inProgress : tab === 'Submitted' ? sample.submitted : sample.completed

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
              {tab === 'In Progress' && <button className="btn btn-primary">Submit</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
