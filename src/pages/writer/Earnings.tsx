import { useState } from 'react';
import { submitWithdrawalRequest } from '../../lib/withdrawals';
import Modal from '../../components/Modal';
import { useToast } from '../../components/ToastProvider';

export default function Earnings() {
  const payments = [
    { id: 'p1', title: 'Essay on AI', amount: 25, date: '2025-12-05' },
    { id: 'p2', title: 'Statistics Homework', amount: 40, date: '2025-12-07' },
  ];
  const balance = 180;
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('mpesa');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  async function handleWithdraw(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) {
      showToast({ message: 'Enter a valid amount', type: 'error' });
      return;
    }
    if (amt > balance) {
      showToast({ message: 'Insufficient balance', type: 'error' });
      return;
    }
    if (!details.trim()) {
      showToast({ message: 'Enter payment details', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      // TODO: Replace 'WriterX' with actual logged-in writer username/id
      await submitWithdrawalRequest({
        writer: 'WriterX',
        amount: amt,
        method,
        details,
      });
      setWithdrawOpen(false);
      setAmount('');
      setDetails('');
      showToast({ message: 'Withdrawal request submitted! Await admin approval before funds are released.', type: 'info' });
    } catch (err) {
      showToast({ message: 'Failed to submit withdrawal request', type: 'error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Earnings</h1>
      <div className="card p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Wallet Balance</span>
          <span className="text-2xl font-semibold">${balance}</span>
        </div>
        <button
          className="mt-4 btn btn-primary w-full"
          onClick={() => setWithdrawOpen(true)}
        >
          Withdraw Funds
        </button>
      </div>
      <div className="card">
        <div className="p-4 border-b flex items-center justify-between">
          <span className="font-medium">Completed Task Payments</span>
          <select className="input w-auto">
            <option>All dates</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <div className="p-4 space-y-2 text-sm">
          {payments.map(p => (
            <div key={p.id} className="flex items-center justify-between">
              <span>{p.title}</span>
              <span className="font-medium">${p.amount}</span>
              <span className="text-gray-600">{p.date}</span>
            </div>
          ))}
        </div>
      </div>
      <Modal open={withdrawOpen} onClose={() => setWithdrawOpen(false)} title="Withdraw Funds">
        <form className="space-y-4" onSubmit={handleWithdraw}>
          <div className="text-sm text-blue-700 bg-blue-50 p-2 rounded mb-2">
            Withdrawal requests require admin approval before funds are released.
          </div>
          <div>
            <label className="block text-sm mb-1">Amount</label>
            <input
              type="number"
              className="input w-full"
              min="1"
              max={balance}
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Enter amount to withdraw"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Payment Method</label>
            <select
              className="input w-full"
              value={method}
              onChange={e => setMethod(e.target.value)}
            >
              <option value="mpesa">M-Pesa</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Payment Details</label>
            <input
              className="input w-full"
              value={details}
              onChange={e => setDetails(e.target.value)}
              placeholder={method === 'mpesa' ? 'Phone Number' : method === 'paypal' ? 'PayPal Email' : 'Bank Account'}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Submit Withdrawal'}
          </button>
        </form>
      </Modal>
    </div>
  );
}
