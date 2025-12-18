import { useEffect, useState } from 'react';
import { getAllWithdrawals, adminWithdrawalAction } from '../../lib/api';
import { useToast } from '../../components/ToastProvider';

export default function AdminPayments() {
  const [withdrawals, setWithdrawals] = useState<any[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const { showToast } = useToast();

  async function refreshWithdrawals() {
    setWithdrawals(await getAllWithdrawals());
  }

  useEffect(() => {
    refreshWithdrawals();
  }, []);

  async function handleApprove(id: string) {
    setLoadingId(id);
    await adminWithdrawalAction(id, 'approve');
    showToast({ message: 'Withdrawal approved', type: 'success' });
    await refreshWithdrawals();
    setLoadingId(null);
  }

  async function handleReject(id: string) {
    setLoadingId(id);
    await adminWithdrawalAction(id, 'reject');
    showToast({ message: 'Withdrawal rejected', type: 'error' });
    await refreshWithdrawals();
    setLoadingId(null);
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-brand-700 font-serif mb-4">Payments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow text-sm mb-8">
          <caption className="text-left px-4 py-2 font-semibold text-brand-600">Pending Withdrawal Requests</caption>
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Writer</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Method</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Details</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Requested At</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-2 text-center text-gray-400">No withdrawal requests</td></tr>
            )}
            {withdrawals.map(w => (
              <tr key={w.id} className="border-b last:border-0">
                <td className="px-4 py-2">{w.writer}</td>
                <td className="px-4 py-2 font-medium text-brand-700">${w.amount}</td>
                <td className="px-4 py-2">{w.method}</td>
                <td className="px-4 py-2">{w.details}</td>
                <td className="px-4 py-2">{new Date(w.requestedAt).toLocaleString()}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${w.status === 'approved' ? 'bg-success/10 text-success' : w.status === 'rejected' ? 'bg-error/10 text-error' : 'bg-warning/10 text-warning'}`}>{w.status}</span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  {w.status === 'pending' && (
                    <>
                      <button
                        className="btn btn-xs btn-success"
                        disabled={loadingId === w.id}
                        onClick={() => handleApprove(w.id)}
                      >Approve</button>
                      <button
                        className="btn btn-xs btn-error"
                        disabled={loadingId === w.id}
                        onClick={() => handleReject(w.id)}
                      >Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="min-w-full bg-white border rounded-lg shadow text-sm">
          <caption className="text-left px-4 py-2 font-semibold text-brand-600">Writer Payouts</caption>
          <thead className="bg-brand-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Writer</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-muted uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map(p => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="px-4 py-2">{p.writer}</td>
                <td className="px-4 py-2 font-medium text-brand-700">${p.amount}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${p.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
