export async function triggerLipanaSTK({ phoneNumber, amount }: { phoneNumber: string; amount: number }) {
  const response = await fetch('https://pl-project-8aks.onrender.com/api/transactions/push-stk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phoneNumber, amount }),
  });
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
