export async function triggerLipanaSTK({ phoneNumber, amount }: { phoneNumber: string; amount: number }) {
  await new Promise(r => setTimeout(r, 1200))
  return { status: 'sent', phoneNumber, amount }
}

export async function mockFetch<T>(data: T, delay = 600): Promise<T> {
  await new Promise(r => setTimeout(r, delay))
  return data
}
