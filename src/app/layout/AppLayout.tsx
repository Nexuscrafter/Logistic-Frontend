import { NavLink, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store/authStore';

const links = [
  { to: '/admin', label: 'Admin' },
  { to: '/shipments', label: 'Shipments' },
  { to: '/pod', label: 'POD' },
  { to: '/ledger', label: 'Ledger' },
];

export function AppLayout() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      <header className="card" style={{ margin: '1rem auto', maxWidth: 1080 }}>
        <strong>Logistics Platform</strong> — {user?.name} ({user?.role})
        <button style={{ float: 'right' }} onClick={logout}>Logout</button>
      </header>
      <main>
        <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </main>
    </>
  );
}
