import { Navigate, useRoutes } from 'react-router-dom';
import { AppLayout } from '@/app/layout/AppLayout';
import { AuthGate } from '@/app/routes/AuthGate';
import { RoleGate } from '@/app/routes/RoleGate';
import { OtpLoginPage } from '@/features/auth/pages/OtpLoginPage';
import { AdminDashboardPage } from '@/features/admin/pages/AdminDashboardPage';
import { ShipmentListPage } from '@/features/shipments/pages/ShipmentListPage';
import { PodPage } from '@/features/pod/pages/PodPage';
import { LedgerPage } from '@/features/ledger/pages/LedgerPage';

export function AppRouter() {
  return useRoutes([
    {
      path: '/login',
      element: <OtpLoginPage />,
    },
    {
      path: '/',
      element: <AuthGate><AppLayout /></AuthGate>,
      children: [
        {
          index: true,
          element: <Navigate to="/shipments" replace />,
        },
        {
          path: 'admin',
          element: (
            <RoleGate allowedRoles={['admin']}>
              <AdminDashboardPage />
            </RoleGate>
          ),
        },
        {
          path: 'shipments',
          element: (
            <RoleGate allowedRoles={['client', 'admin']}>
              <ShipmentListPage />
            </RoleGate>
          ),
        },
        {
          path: 'pod',
          element: (
            <RoleGate allowedRoles={['client', 'admin']}>
              <PodPage />
            </RoleGate>
          ),
        },
        {
          path: 'ledger',
          element: (
            <RoleGate allowedRoles={['client', 'admin']}>
              <LedgerPage />
            </RoleGate>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
