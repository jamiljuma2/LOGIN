import { useState } from 'react'
import { useToast } from '../../components/ToastProvider'
import STKPushModal from '../../components/STKPushModal'
import { triggerLipanaSTK } from '../../lib/api'

export default function Wallet() {
  const { showToast } = useToast()
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const balance = 75

  async function topUp() {
    if (!phone || !amount) return showToast({ type: 'error', message: 'Enter phone and amount' })
    setOpen(true)
    try {
      await triggerLipanaSTK({ phoneNumber: phone, amount: Number(amount) })
      showToast({ type: 'success', message: 'STK Push request sent' })
    } catch (err: any) {
      showToast({ type: 'error', message: err.message || 'Failed to send STK Push' })
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Wallet</h1>
      <div className="card p-4 flex items-center justify-between">
        <span className="text-sm text-gray-600">Wallet Balance</span>
        <span className="text-2xl font-semibold">${balance}</span>
      </div>

      <div className="card p-4 space-y-3">
        <h3 className="font-medium">Top Up Using M-Pesa</h3>
        <div>
          <label className="label">Safaricom Phone Number</label>
          <input className="input" placeholder="07XXXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <label className="label">Amount</label>
          <input className="input" type="number" placeholder="100" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={topUp}>Pay with M-Pesa</button>
      </div>

      <STKPushModal open={open} onClose={() => setOpen(false)} phoneNumber={phone} />
    </div>
  )
}
