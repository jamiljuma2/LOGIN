// Production: Admin - list all withdrawals
export async function getAllWithdrawals() {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('/api/admin/withdrawals/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch admin withdrawals');
  }
  return await response.json();
}

// Production: Admin - approve/reject withdrawal
export async function adminWithdrawalAction(id: string, action: 'approve' | 'reject') {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch(`/api/admin/withdrawals/${id}/action`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ action }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to update withdrawal');
  }
  return await response.json();
}

// Production: Trigger STK Push for subscription
export async function paySubscription({ phone, amount }: { phone: string; amount: number }) {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('/api/subscriptions/pay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ phone, amount }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to initiate subscription payment');
  }
  return await response.json();
}

// Production: Get subscription status
export async function getSubscriptionStatus() {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('/api/subscriptions/status', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch subscription status');
  }
  return await response.json();
}
// Production: Get user earnings
export async function getEarnings() {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('/api/earnings/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch earnings');
  }
  return await response.json();
}

// Production: List user withdrawals
export async function getWithdrawals() {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('/api/withdrawals/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch withdrawals');
  }
  return await response.json();
}

// Production: Submit withdrawal request
export async function submitWithdrawalRequest({ amount, method, details }: { amount: number; method: string; details: string }) {
  const token = localStorage.getItem('access');
  if (!token) throw new Error('Not authenticated');
  const response = await fetch('/api/withdrawals/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ amount, method, details }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to submit withdrawal request');
  }
  return await response.json();
}
// Real logout (production)
export async function logoutUser() {
  const access = localStorage.getItem('access');
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(access ? { 'Authorization': `Bearer ${access}` } : {}),
    },
  });
  // Always clear tokens, even if logout fails
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
  const response = await fetch('/api/auth/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch user');
  }
  return await response.json();
}
// Real user login (production)
export async function loginUser({ username, password, role }: { username: string; password: string; role: string }) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Login failed');
  }
  const data = await response.json();
  if (data.access && data.refresh) {
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    localStorage.setItem('sessionTimestamp', Date.now().toString());
    return { access: data.access, refresh: data.refresh };
  } else {
    throw new Error('No access or refresh token returned');
  }
}
// Real user registration (production)
export async function registerUser({ username, email, password, role }: { username: string; email: string; password: string; role: string }) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password, role }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Registration failed');
  }
  return await response.json();
}
// Real refresh access token (production)
export async function refreshAccessToken() {
  const refresh = localStorage.getItem('refresh');
  if (!refresh) throw new Error('No refresh token available');
  const response = await fetch('/api/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to refresh access token');
  }
  const data = await response.json();
  if (data.access) {
    localStorage.setItem('access', data.access);
    localStorage.setItem('sessionTimestamp', Date.now().toString());
    return data.access;
  } else {
    throw new Error('No access token returned');
  }
}

// Production: Trigger STK Push for wallet top-up
export async function triggerLipanaSTK({ phoneNumber, amount }: { phoneNumber: string; amount: number }) {
  let token = localStorage.getItem('access');
  let response = await fetch('/api/wallet/topup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ phone: phoneNumber, amount }),
  });
  if (response.status === 401) {
    // Try to refresh the token and retry once
    try {
      token = await refreshAccessToken();
      response = await fetch('/api/wallet/topup', {
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
  const response = await fetch('/api/wallet/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch wallet info');
  }
  return await response.json();
}

export async function mockFetch<T>(data: T, delay = 600): Promise<T> {
  await new Promise(r => setTimeout(r, delay))
  return data
}
