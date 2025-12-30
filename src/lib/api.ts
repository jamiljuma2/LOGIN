import { assignments, availableTasks, writerSubscription, subscriptionPlans } from './mockData';

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
export async function registerUser({ username, email, password, role }: { username: string; email: string; password: string; role: string }) {
  return mockFetch({ username, email, role });
}

// Mock: Refresh access token
export async function refreshAccessToken() {
  localStorage.setItem('access', 'mock-access');
  localStorage.setItem('sessionTimestamp', Date.now().toString());
  return mockFetch('mock-access');
}
    const error = await response.text();
    throw new Error(error || 'Failed to initiate subscription payment');
      // Mock: simulate payment
      return mockFetch({ success: true, phone, amount });
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch subscription status');
  }
      // Mock: return writerSubscription
      return mockFetch(writerSubscription);
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch earnings');
  }
  return await response.json();
      // Mock: return a fake earnings object
      return mockFetch({ total: 1234, available: 567 });
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch withdrawals');
  }
  return await response.json();
      // Mock: return assignments as withdrawals
      return mockFetch(assignments);
    body: JSON.stringify({ amount, method, details }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to submit withdrawal request');
  }
      // Mock: simulate withdrawal request
      return mockFetch({ amount, method, details, id: 'mock', status: 'pending' });
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('sessionTimestamp');
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Logout failed');
  }
  return true;
}

// Get current user (production)
export async function getCurrentUser() {
  const access = localStorage.getItem('access');
  if (!access) throw new Error('Not authenticated');
  const response = await fetch('https://pl-project-8aks.onrender.com/api/auth/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access}`,
    },
  });
      // Mock: clear tokens and resolve
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      localStorage.removeItem('sessionTimestamp');
      return mockFetch(true);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch user');
  }
  return await response.json();
}
// Real user login (production)
export async function loginUser({ username, password, role }: { username: string; password: string; role: string }) {
  const response = await fetch('https://pl-project-8aks.onrender.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Login failed');
  }
  const data = await response.json();
      // Mock: return a fake user
      return mockFetch({ username: 'mockuser', role: 'student', email: 'mock@example.com' });
  if (data.access && data.refresh) {
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    localStorage.setItem('sessionTimestamp', Date.now().toString());
      // Mock: simulate login and set tokens
      localStorage.setItem('access', 'mock-access');
      localStorage.setItem('refresh', 'mock-refresh');
      localStorage.setItem('sessionTimestamp', Date.now().toString());
      return mockFetch({ access: 'mock-access', refresh: 'mock-refresh' });
// Real refresh access token (production)
export async function refreshAccessToken() {
  const refresh = localStorage.getItem('refresh');
  if (!refresh) throw new Error('No refresh token available');
      // Mock: simulate registration
      return mockFetch({ username, email, role });
  if (data.access) {
    localStorage.setItem('access', data.access);
    localStorage.setItem('sessionTimestamp', Date.now().toString());
    return data.access;
  } else {
    throw new Error('No access token returned');
      // Mock: simulate refresh
      localStorage.setItem('access', 'mock-access');
      localStorage.setItem('sessionTimestamp', Date.now().toString());
      return mockFetch('mock-access');
      token = await refreshAccessToken();
      response = await fetch('https://pl-project-8aks.onrender.com/api/wallet/topup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ phone: phoneNumber, amount }),
      });
    } catch (refreshErr) {
      throw new Error('Session expired. Please log in again.');
    }
  }
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to initiate STK Push');
  }
  return response.json();
}

// Production: Get wallet info (balance)
export async function getWalletInfo() {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('https://pl-project-8aks.onrender.com/api/wallet/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch wallet info');
      // Mock: simulate STK push
      return mockFetch({ success: true, phoneNumber, amount });
  }
  return await response.json();
}

export async function mockFetch<T>(data: T, delay = 600): Promise<T> {
  await new Promise(r => setTimeout(r, delay))
      // Mock: return fake wallet info
      return mockFetch({ balance: 1000 });
    localStorage.setItem('sessionTimestamp', Date.now().toString());
