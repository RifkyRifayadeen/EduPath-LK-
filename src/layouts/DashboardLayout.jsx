import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const navItems = [
  { to: '/', label: 'Overview', end: true },
  { to: '/quiz', label: 'Quiz' },
  { to: '/learning-path', label: 'Learning Path' },
  { to: '/schedule', label: 'Study Schedule' },
  { to: '/resources', label: 'Resources' },
  { to: '/progress', label: 'Progress' },
]

export default function DashboardLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand">EduPath LK</div>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="topbar-title">Welcome, {user?.fullName}</div>
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
