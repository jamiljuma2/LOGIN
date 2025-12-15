import { NavLink } from 'react-router-dom'

type Item = { to: string; label: string }

export default function Sidebar({ title, items }: { title: string; items: Item[] }) {
  return (
    <aside className="hidden md:flex md:flex-col" style={{ width: 'var(--sidebar-width)' }}>
      <div className="h-14 border-b flex items-center px-4 font-semibold">{title}</div>
      <nav className="flex-1 bg-white border-r">
        <ul className="p-2">
          {items.map(i => (
            <li key={i.to}>
              <NavLink
                to={i.to}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm ${isActive ? 'bg-brand-50 text-brand-700' : 'hover:bg-gray-50'}`
                }
              >
                {i.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
