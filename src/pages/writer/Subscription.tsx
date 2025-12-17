import { useState } from 'react'
import { subscriptionPlans, writerSubscription } from '../../lib/mockData'
import { triggerLipanaSTK } from '../../lib/api'
import { useToast } from '../../components/ToastProvider'
import STKPushModal from '../../components/STKPushModal'

export default function Subscription() {
  const { showToast } = useToast()
  const [phone, setPhone] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState<string | null>(null)

  async function pay(amount: number, planId: string, planLimit: number) {
    if (!phone) return showToast({ type: 'error', message: 'Enter Safaricom number' })
    setOpen(true)
    setLoading('Sending...')
    try {
      await triggerLipanaSTK({ phoneNumber: phone, amount })
      // Activate subscription (mock)
      writerSubscription.active = true;
      writerSubscription.plan = planId;
      writerSubscription.limit = planLimit;
      showToast({ type: 'success', message: 'Subscription activated! You can now access tasks.' })
    } catch (err: any) {
      showToast({ type: 'error', message: err.message || 'Failed to send STK Push' })
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Subscription Plans</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {subscriptionPlans.map(p => (
          <div key={p.id} className="card p-4 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">{p.label}</h3>
              <span className="text-brand-700 font-semibold">${p.price}</span>
            </div>
            <div>
              <label className="label">Enter Safaricom Number</label>
              <input className="input" placeholder="07XXXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={() => pay(p.price, p.id, p.limit)}>
              Pay with M-Pesa (Lipana STK)
            </button>
          </div>
        ))}
      </div>
      <STKPushModal open={open} onClose={() => setOpen(false)} phoneNumber={phone} />
      {loading && <p className="text-sm text-gray-600">{loading}</p>}
    </div>
  )
}
