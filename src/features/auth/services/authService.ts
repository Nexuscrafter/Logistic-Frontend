import { apiClient } from '@/infrastructure/api/apiClient';
import type { AuthResponse, OtpLoginRequest } from '@/features/auth/types/authTypes';

export const authService = {
  async loginWithOtp(payload: OtpLoginRequest) {
    const { data } = await apiClient.post<AuthResponse>('/auth/otp/login', payload);
    return data;
  },
};
