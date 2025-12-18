import { useState, useEffect } from 'react'
import { useToast } from '../../components/ToastProvider'
import STKPushModal from '../../components/STKPushModal'
import { triggerLipanaSTK, getWalletInfo } from '../../lib/api'

export default function Wallet() {

  const { showToast } = useToast()
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    getWalletInfo()
      .then(data => setBalance(data.balance))
      .catch(() => setBalance(null))
  }, [])

  async function topUp() {
    if (!phone || !amount) return showToast({ type: 'error', message: 'Enter phone and amount' })
    if (!/^254[0-9]{9}$/.test(phone)) return showToast({ type: 'error', message: 'Phone must be in 2547XXXXXXXX format' })
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
        <span className="text-2xl font-semibold">{balance !== null ? `$${balance}` : '...'}</span>
      </div>

      <div className="card p-4 space-y-3">
        <h3 className="font-medium">Top Up Using M-Pesa</h3>
        <div>
          <label className="label">Safaricom Phone Number (Format: 2547XXXXXXXX)</label>
          <input
            className="input"
            type="tel"
            pattern="254[0-9]{9}"
            maxLength={12}
            placeholder="2547XXXXXXXX"
            value={phone}
            onChange={e => {
              // Only allow numbers and max 12 digits
              const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 12);
              setPhone(val);
            }}
            autoComplete="off"
            title="Enter phone in 2547XXXXXXXX format"
          />
        </div>
        <div>
          <label className="label">Amount</label>
          <input className="input" type="number" placeholder="100" value={amount} onChange={e => setAmount(e.target.value)} autoComplete="off" />
        </div>
        <button className="btn btn-primary" onClick={topUp}>Pay with M-Pesa</button>
      </div>

      <STKPushModal open={open} onClose={() => setOpen(false)} phoneNumber={phone} />
    </div>
  )
}
