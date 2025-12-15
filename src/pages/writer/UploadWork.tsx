import FileUpload from '../../components/FileUpload'
import { useToast } from '../../components/ToastProvider'

export default function UploadWork() {
  const { showToast } = useToast()
  async function onSubmit() {
    showToast({ type: 'success', message: 'Files uploaded (UI only)' })
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Upload Completed Work</h1>
      <FileUpload onSubmit={onSubmit} />
    </div>
  )
}
