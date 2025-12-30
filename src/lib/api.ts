// Production: Admin - list all withdrawals
export async function getAllWithdrawals() {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('https://pl-project-8aks.onrender.com/api/admin/withdrawals/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    import { assignments, availableTasks, writerSubscription, subscriptionPlans, mockFetch } from './mockData';
  });
  if (!response.ok) {
    export async function getAllWithdrawals() { 
    throw new Error(error || 'Failed to fetch admin withdrawals');
  }
      // Mock: return all assignments as withdrawals
      return mockFetch(assignments);
    },
    body: JSON.stringify({ action }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to update withdrawal');
      // Mock: just return the assignment with updated status
      return mockFetch({ id, action });
    },
    body: JSON.stringify({ phone, amount }),
  });
  if (!response.ok) {
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
