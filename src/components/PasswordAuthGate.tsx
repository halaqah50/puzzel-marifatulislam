import React, { useState } from 'react';
import { MoonStar, Lock, Eye, EyeOff, ShieldCheck, KeyRound, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface PasswordAuthGateProps {
  onAuthenticate: () => void;
}

export const PasswordAuthGate: React.FC<PasswordAuthGateProps> = ({ onAuthenticate }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Default password set for the page
  const DEFAULT_PASSWORD = 'islam123';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();

    if (passwordInput.trim() === DEFAULT_PASSWORD) {
      setErrorMsg('');
      if (rememberMe) {
        localStorage.setItem('marifatul_auth', 'true');
      } else {
        sessionStorage.setItem('marifatul_auth', 'true');
      }
      onAuthenticate();
    } else {
      setErrorMsg('Password salah! Silakan coba lagi (Password default: islam123)');
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#EDEDED] flex items-center justify-center p-4 selection:bg-[#C5A059] selection:text-[#0C0C0C]">
      {/* Background subtle Islamic star / grid glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-[#161616] border border-[#C5A059]/40 rounded-xl shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] rounded-t-xl" />

        {/* Header Branding */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1F1F1F] border border-[#C5A059] text-[#C5A059] shadow-lg shadow-[#C5A059]/10 mb-1">
            <MoonStar className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-wider font-serif text-[#C5A059] uppercase">
            MA'RIFATUL ISLAM
          </h1>
          <p className="text-xs text-[#888888]">
            Akses Terproteksi — Masukkan kata sandi untuk membuka game puzzle interaktif
          </p>
        </div>

        {/* Default Password Hint Badge */}
        <div className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-lg p-3 text-xs flex items-center justify-between gap-2 text-[#EDEDED]">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Password Akses Halaman:</span>
          </div>
          <span className="font-mono bg-[#0C0C0C] px-2.5 py-1 rounded border border-[#C5A059]/40 text-[#C5A059] font-semibold tracking-wider">
            islam123
          </span>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#EDEDED] uppercase tracking-wider">
              Kata Sandi / Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#888888]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="Masukkan password..."
                className="w-full pl-9 pr-10 py-2.5 bg-[#0C0C0C] border border-[#2A2A2A] focus:border-[#C5A059] rounded-lg text-sm text-[#EDEDED] placeholder-[#888888] focus:outline-none transition-colors"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#888888] hover:text-[#EDEDED] cursor-pointer transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-lg text-center animate-shake">
              {errorMsg}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-[#888888]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-[#2A2A2A] text-[#C5A059] focus:ring-0 bg-[#0C0C0C] accent-[#C5A059] w-4 h-4"
              />
              <span>Ingat sesi di perangkat ini</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C] font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#C5A059]/20 cursor-pointer uppercase tracking-wider"
          >
            <span>Buka Halaman</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer info */}
        <div className="pt-2 text-center text-[11px] text-[#888888] border-t border-[#2A2A2A] flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Keamanan Terjamin • Halaman Terkunci</span>
        </div>
      </div>
    </div>
  );
};
