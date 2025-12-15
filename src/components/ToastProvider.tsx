import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

export type Toast = { id: number; message: string; type?: 'success' | 'error' | 'info' }

const ToastCtx = createContext<{ showToast: (t: Omit<Toast, 'id'>) => void } | null>(null)

export function useToast() {
  const ctx = useContext(ToastCtx)
  if (!ctx) throw new Error('ToastProvider missing')
  return ctx
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, ...t }])
    setTimeout(() => setToasts(prev => prev.filter(x => x.id !== id)), 3000)
  }, [])

  return (
    <ToastCtx.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map(t => (
          <div key={t.id} className={`px-4 py-2 rounded-md shadow text-white ${
            t.type === 'error' ? 'bg-red-600' : t.type === 'success' ? 'bg-green-600' : 'bg-gray-800'
          }`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}
