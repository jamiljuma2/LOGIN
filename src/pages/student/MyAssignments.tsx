
import { useState } from 'react'
import { assignments } from '../../lib/mockData'
import Badge from '../../components/Badge'
import { useToast } from '../../components/ToastProvider'

const MyAssignments = () => {
  const [tab, setTab] = useState<'Pending Approval'|'Approved'|'In Progress'|'Completed'>('Pending Approval');
  const list = assignments.filter(a => a.status === tab);
  const { showToast } = useToast();

  function handleViewDetails(item: any) {
    showToast({ type: 'info', message: `Viewing details for: ${item.title}` });
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My Assignments</h1>
      <div className="flex gap-2 flex-wrap">
        {(['Pending Approval','Approved','In Progress','Completed'] as const).map(t => (
          <button key={t} className={`btn ${tab === t ? 'btn-primary' : 'btn-outline'}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="space-y-3">
        {list.map(item => (
          <div key={item.id} className="card p-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{item.title}</span>
              <Badge label={item.status} />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span>Writer: {item.writer || '—'}</span>
              <span>Budget: ${item.budget}</span>
            </div>
            <div className="pt-2">
              <button className="btn btn-outline" onClick={() => handleViewDetails(item)}>View Details</button>
            </div>
          </div>
        ))}
        {list.length === 0 && <p className="text-sm text-gray-600">No assignments in this tab.</p>}
      </div>
    </div>
  );
};

export default MyAssignments;
