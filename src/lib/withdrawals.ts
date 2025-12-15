// Simulated withdrawal requests DB
import { mockFetch } from './api';

export type WithdrawalRequest = {
  id: string;
  writer: string;
  amount: number;
  method: string;
  details: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
};

let withdrawalRequests: WithdrawalRequest[] = [];

export async function submitWithdrawalRequest(req: Omit<WithdrawalRequest, 'id' | 'status' | 'requestedAt'>): Promise<WithdrawalRequest> {
  const newReq: WithdrawalRequest = {
    ...req,
    id: 'w' + (withdrawalRequests.length + 1),
    status: 'pending',
    requestedAt: new Date().toISOString(),
  };
  withdrawalRequests.push(newReq);
  return mockFetch(newReq);
}

export async function getWithdrawalRequests(): Promise<WithdrawalRequest[]> {
  return mockFetch([...withdrawalRequests]);
}

export async function approveWithdrawal(id: string): Promise<WithdrawalRequest | undefined> {
  const req = withdrawalRequests.find(r => r.id === id);
  if (req && req.status === 'pending') {
    req.status = 'approved';
  }
  return mockFetch(req);
}

export async function rejectWithdrawal(id: string): Promise<WithdrawalRequest | undefined> {
  const req = withdrawalRequests.find(r => r.id === id);
  if (req && req.status === 'pending') {
    req.status = 'rejected';
  }
  return mockFetch(req);
}
