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
  localStorage.setItem('sessionTimestamp', Date.now().toString());
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
// Mock refresh access token: always succeed and return a mock token
// Simulate session expiration after 10 minutes (600000 ms)
export async function refreshAccessToken() {
  const sessionTimestamp = localStorage.getItem('sessionTimestamp');
  const now = Date.now();
  const maxSession = 10 * 60 * 1000; // 10 minutes
  if (sessionTimestamp && now - parseInt(sessionTimestamp, 10) > maxSession) {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('sessionTimestamp');
    await mockFetch(true, 300);
    throw new Error('Session expired. Please log in again.');
  }
  const access = 'mock-access-token';
  localStorage.setItem('access', access);
  localStorage.setItem('sessionTimestamp', now.toString());
  await mockFetch(true, 300);
  return access;
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
