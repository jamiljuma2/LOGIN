import { useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import Badge from './Badge'

const ACCEPT = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/zip',
  'image/jpeg',
  'image/png',
  'text/plain',
  'application/x-rar-compressed',
  'text/csv',
]

export default function FileUpload({ onSubmit }: { onSubmit: (files: File[]) => Promise<void> | void }) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [progress, setProgress] = useState<number>(0)
  const [uploading, setUploading] = useState(false)

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...dropped])
  }

  function onPick() {
    inputRef.current?.click()
  }

  async function submit() {
    setUploading(true)
    setProgress(10)
    for (let i = 0; i < 5; i++) {
      await new Promise(r => setTimeout(r, 300))
      setProgress(p => Math.min(100, p + 18))
    }
    await onSubmit(files)
    setUploading(false)
    setProgress(100)
  }

  return (
    <div>
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={onDrop}
        className="rounded-md border border-dashed border-gray-300 bg-white p-6 text-center"
      >
        <p className="text-sm text-gray-600">Drag & drop files here or</p>
        <button className="btn btn-outline mt-2" onClick={onPick}>Browse</button>
        <input ref={inputRef} type="file" multiple className="hidden" onChange={e => setFiles(Array.from(e.target.files || []))} accept={ACCEPT.join(',')} />
      </div>

      {files.length > 0 && (
        <div className="mt-4 card">
          <div className="p-4 space-y-2">
            {files.map(f => (
              <div key={f.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Badge label={f.type || 'file'} />
                  <span>{f.name}</span>
                </div>
                <span className="text-gray-500">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            ))}
            <div className="pt-2">
              <ProgressBar value={progress} />
            </div>
            <div className="pt-2 flex justify-end">
              <button className="btn btn-primary" disabled={uploading} onClick={submit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
