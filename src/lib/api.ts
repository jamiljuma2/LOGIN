import { assignments, availableTasks, writerSubscription, subscriptionPlans, mockUsers } from './mockData';

// Simulate async fetch
export async function mockFetch<T>(data: T, delay = 600): Promise<T> {
  await new Promise(r => setTimeout(r, delay));
  return data;
}

// Mock: Simulate M-Pesa STK Push
export async function triggerLipanaSTK({ phoneNumber, amount }: { phoneNumber: string; amount: number }) {
  return mockFetch({ success: true, phoneNumber, amount });
}

// Mock: Simulate wallet info fetch
export async function getWalletInfo() {
  return mockFetch({ balance: 1000 });
}

// Mock: Admin - list all withdrawals
export async function getAllWithdrawals() {
  return mockFetch(assignments);
}

// Mock: Admin - approve/reject withdrawal
export async function adminWithdrawalAction(id: string, action: 'approve' | 'reject') {
  return mockFetch({ id, action });
}

// Mock: Trigger STK Push for subscription
export async function paySubscription({ phone, amount }: { phone: string; amount: number }) {
  return mockFetch({ success: true, phone, amount });
}

// Mock: Get subscription status
export async function getSubscriptionStatus() {
  return mockFetch(writerSubscription);
}

// Mock: Get user earnings
export async function getEarnings() {
  return mockFetch({ total: 1234, available: 567 });
}

// Mock: List user withdrawals
export async function getWithdrawals() {
  return mockFetch(assignments);
}

// Mock: Submit withdrawal request
export async function submitWithdrawalRequest({ amount, method, details }: { amount: number; method: string; details: string }) {
  return mockFetch({ amount, method, details, id: 'mock', status: 'pending' });
}

// Mock: Logout user
export async function logoutUser() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('sessionTimestamp');
  return mockFetch(true);
}

// Mock: Get current user
export async function getCurrentUser() {
  return mockFetch({ username: 'mockuser', role: 'student', email: 'mock@example.com' });
}

// Mock: User login
export async function loginUser({ username, password, role }: { username: string; password: string; role: string }) {
  localStorage.setItem('access', 'mock-access');
  localStorage.setItem('refresh', 'mock-refresh');
  localStorage.setItem('sessionTimestamp', Date.now().toString());
  return mockFetch({ access: 'mock-access', refresh: 'mock-refresh' });
}

// Mock: User registration
  // Check for existing user by username or email
  const exists = mockUsers.some(u => u.username === username || u.email === email);
  if (exists) {
    return Promise.reject(new Error('Account already exists with that username or email.'));
  // End of registerUser
  mockUsers.push({ username, email, password, role });
  return mockFetch({ username, email, role });
}

// Mock: Refresh access token
export async function refreshAccessToken() {
  localStorage.setItem('access', 'mock-access');
  localStorage.setItem('sessionTimestamp', Date.now().toString());
  return mockFetch('mock-access');
}

