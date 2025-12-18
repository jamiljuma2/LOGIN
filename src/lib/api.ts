// Mock user login
export async function mockLoginUser({ username, password, role }: { username: string; password: string; role: string }) {
  // Simulate login delay and basic validation
  if (!username || !password) {
    return Promise.reject(new Error('Username and password required'));
  }
  // Simulate login failure for unknown user
  if (username === 'unknown') {
    return Promise.reject(new Error('Invalid username or password'));
  }
  // Simulate token
  const access = 'mock-access-token';
  const refresh = 'mock-refresh-token';
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
  await mockFetch(true, 600);
  return { access, refresh };
}
// Mock user registration
export async function mockRegisterUser({ username, email, password, role }: { username: string; email: string; password: string; role: string }) {
  // Simulate a registration delay and basic validation
  if (!username || !email || !password) {
    return Promise.reject(new Error('All fields are required'));
  }
  // Simulate duplicate user error
  if (username === 'existinguser') {
    return Promise.reject(new Error('Username already exists'));
  }
  await mockFetch(true, 800);
  return { success: true };
}
// Refresh the access token using the refresh token
export async function refreshAccessToken() {
  const refresh = localStorage.getItem('refresh');
  if (!refresh) throw new Error('No refresh token available');
  const response = await fetch('https://pl-project-8aks.onrender.com/api/auth/refresh', {
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
    return data.access;
  } else {
    throw new Error('No access token returned');
  }
}
export async function triggerLipanaSTK({ phoneNumber, amount }: { phoneNumber: string; amount: number }) {
  let token = localStorage.getItem('access');
  let response = await fetch('https://pl-project-8aks.onrender.com/api/transactions/push-stk', {
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
      response = await fetch('https://pl-project-8aks.onrender.com/api/transactions/push-stk', {
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

export async function mockFetch<T>(data: T, delay = 600): Promise<T> {
  await new Promise(r => setTimeout(r, delay))
  return data
}
