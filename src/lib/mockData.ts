// Mock: writer subscription status (in real app, fetch from backend/user profile)
export let writerSubscription = {
  active: true,
  plan: 'basic', // e.g., 'basic', 'plus', 'premium'
  limit: 5,
};
export const subscriptionPlans = [
  { id: 'basic', price: 2, label: 'Access 5 tasks/day', limit: 5 },
  { id: 'plus', price: 5, label: 'Access 9 tasks/day', limit: 9 },
  { id: 'premium', price: 10, label: 'Premium unlimited', limit: Infinity },
]

export const availableTasks = [
  { id: 't1', title: 'Essay on Climate Change', budget: 25, deadline: '2025-12-25', description: '1200 words, APA format' },
  { id: 't2', title: 'Statistics Homework Set', budget: 40, deadline: '2025-12-20', description: '10 problems, show work' },
  { id: 't3', title: 'Marketing Case Summary', budget: 35, deadline: '2025-12-18', description: '2-page summary' },
]

export const assignments = [
  { id: 'a1', title: 'Research Proposal', budget: 60, student: 'Alice', status: 'Pending Approval', writer: null },
  { id: 'a2', title: 'Data Analysis', budget: 80, student: 'Bob', status: 'Approved', writer: 'WriterX' },
  { id: 'a3', title: 'Design Presentation', budget: 50, student: 'Cara', status: 'In Progress', writer: 'WriterY' },
  { id: 'a4', title: 'Final Report', budget: 100, student: 'Dan', status: 'Completed', writer: 'WriterZ' },
]
