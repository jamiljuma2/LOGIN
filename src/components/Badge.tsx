export default function Badge({ label }: { label: string }) {
  return <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">{label}</span>
}
