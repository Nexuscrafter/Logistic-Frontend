export type UserRole = 'admin' | 'client';

export type AuthUser = {
  id: string;
  name: string;
  role: UserRole;
};

export type OtpLoginRequest = {
  mobile: string;
  otp: string;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};
