import Modal from './Modal'

export default function STKPushModal({ open, onClose, phoneNumber }: { open: boolean; onClose: () => void; phoneNumber: string }) {
  return (
    <Modal open={open} onClose={onClose} title="M-Pesa STK Push">
      <div className="space-y-3 text-sm">
        <p>Sending STK push to <span className="font-medium">{phoneNumber}</span>...</p>
        <div className="animate-pulse rounded-md bg-gray-200 h-2" />
        <p className="text-gray-600">If prompted on your phone, enter your M-Pesa PIN to approve.</p>
        <button className="btn btn-primary w-full" onClick={onClose}>Close</button>
      </div>
    </Modal>
  )
}
