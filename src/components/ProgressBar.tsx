export default function ProgressBar({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value))
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div className="h-2 bg-brand-600 rounded-full" style={{ width: `${v}%` }} />
    </div>
  )
}
