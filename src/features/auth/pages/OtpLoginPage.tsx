import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/features/auth/services/authService';
import { useAuthStore } from '@/features/auth/store/authStore';

export function OtpLoginPage() {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await authService.loginWithOtp({ mobile, otp });
    setSession(response.token, response.user);
    navigate('/');
  };

  return (
    <main>
      <section className="card" style={{ maxWidth: 400 }}>
        <h1>OTP Login</h1>
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 10 }}>
          <input placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <input placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button type="submit">Sign in</button>
        </form>
      </section>
    </main>
  );
}
