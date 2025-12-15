import { ReactNode } from 'react'

export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title?: string; children: ReactNode }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md card">
        <div className="p-4 border-b">
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
