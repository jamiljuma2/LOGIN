import { NavLink } from 'react-router-dom'
import React from 'react'

type Item = { to: string; label: string }

export default function Sidebar({ title, items, mobileOpen = false, onClose }: { title: string; items: Item[]; mobileOpen?: boolean; onClose?: () => void }) {
  // Desktop sidebar
  const sidebarContent = (
    <>
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
                onClick={onClose}
              >
                {i.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col" style={{ width: 'var(--sidebar-width)' }}>
        {sidebarContent}
      </aside>
      {/* Mobile drawer sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40" onClick={onClose}></div>
          {/* Drawer */}
          <aside className="relative w-64 bg-white h-full shadow-lg animate-slide-in-left">
            <button className="absolute top-2 right-2 text-xl" onClick={onClose} aria-label="Close sidebar">×</button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  )
}
