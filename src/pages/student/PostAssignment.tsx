import FileUpload from '../../components/FileUpload'
import { useState } from 'react'
import { useToast } from '../../components/ToastProvider'

export default function PostAssignment() {
  const { showToast } = useToast()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')
  const [deadline, setDeadline] = useState('')

  async function submit() {
    if (!title || !budget || !deadline) return showToast({ type: 'error', message: 'Fill all required fields' })
    showToast({ type: 'success', message: 'Assignment posted (UI only)' })
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-xl font-semibold">Post Assignment</h1>
        <div className="card p-4 space-y-3">
          <div>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={e => setTitle(e.target.value)} required />
          </div>
          <div>
            <label className="label">Description</label>
            <textarea className="input" value={description} onChange={e => setDescription(e.target.value)} rows={4} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Budget</label>
              <input className="input" type="number" value={budget} onChange={e => setBudget(e.target.value)} required />
            </div>
            <div>
              <label className="label">Deadline</label>
              <input className="input" type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
            </div>
          </div>
        </div>
        <FileUpload onSubmit={async () => showToast({ type: 'success', message: 'Files added' })} />
      </div>
      <div className="space-y-4">
        <div className="card p-4">
          <h3 className="font-medium">Summary</h3>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            <li>Title: {title || '—'}</li>
            <li>Budget: {budget ? `$${budget}` : '—'}</li>
            <li>Deadline: {deadline || '—'}</li>
          </ul>
        </div>
        <button className="btn btn-primary w-full" onClick={submit}>Submit Assignment</button>
      </div>
    </div>
  )
}
