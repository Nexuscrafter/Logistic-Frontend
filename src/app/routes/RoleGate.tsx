import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store/authStore';
import type { UserRole } from '@/features/auth/types/authTypes';

type RoleGateProps = PropsWithChildren<{ allowedRoles: UserRole[] }>;

export function RoleGate({ children, allowedRoles }: RoleGateProps) {
  const role = useAuthStore((state) => state.user?.role);

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/shipments" replace />;
  }

  return children;
}
