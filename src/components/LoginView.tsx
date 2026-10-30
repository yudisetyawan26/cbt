import React, { useState } from 'react';
import { User, Lock, Hash, School, AlertCircle, Sparkles, BookOpenCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { CLASS_OPTIONS, ClassName, StudentProfile } from '../types/cbt';

interface LoginViewProps {
  onLogin: (profile: StudentProfile) => void;
  onOpenTeacher: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin, onOpenTeacher }) => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState<ClassName>('XI TJKT 1');
  const [absentNumber, setAbsentNumber] = useState('');
  const [token, setToken] = useState('PANCA2026');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg('Nama Murid wajib diisi dengan lengkap.');
      return;
    }
    if (!absentNumber.trim()) {
      setErrorMsg('Nomer Absen wajib diisi.');
      return;
    }
    if (!token.trim()) {
      setErrorMsg('Kunci Token Ujian wajib diisi.');
      return;
    }

    setErrorMsg('');
    onLogin({
      name: name.trim(),
      className,
      absentNumber: absentNumber.trim(),
      token: token.trim().toUpperCase(),
      loginTime: new Date().toISOString()
    });
  };

  const handleQuickFill = (demoName: string, demoClass: ClassName, demoAbsen: string) => {
    setName(demoName);
    setClassName(demoClass);
    setAbsentNumber(demoAbsen);
    setToken('PANCA2026');
    setErrorMsg('');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-br from-slate-100 via-blue-50/50 to-indigo-50/70">
      {/* Background Decorative Circles */}
      <div className="w-full max-w-lg">
        {/* CBT Badge Banner */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-800 text-xs font-bold shadow-sm mb-3">
            <BookOpenCheck className="w-4 h-4 text-blue-600" />
            <span>PENILAIAN AKHIR SUMATIF • KELAS XI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Portal Ujian CBT Sekolah
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
            Materi: Pancasila, Ideologi Negara, Periodisasi UUD, dan Perilaku Demokratis (Hal. 4–63)
          </p>
        </div>

        {/* Kotak Login Putih di Tengah */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden relative backdrop-blur-sm">
          {/* Top highlight bar */}
          <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 w-full" />

          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Selamat Datang
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Silakan isi data diri dan kunci token untuk memulai tes
              </p>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama Murid */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Murid
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Muhammad Farhan"
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 font-medium"
                    required
                  />
                </div>
              </div>

              {/* Kelas Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Kelas
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <School className="w-4 h-4" />
                  </div>
                  <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value as ClassName)}
                    className="block w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 font-semibold appearance-none cursor-pointer"
                  >
                    {CLASS_OPTIONS.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Baris Dua Kolom: Nomer Absen & Token Kunci */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nomer Absen */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nomer Absen
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Hash className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={absentNumber}
                      onChange={(e) => setAbsentNumber(e.target.value)}
                      placeholder="1 - 36"
                      className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Kunci / Token Ujian */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Kunci Token Ujian
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4 text-blue-600" />
                    </div>
                    <input
                      type="text"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="PANCA2026"
                      className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none bg-slate-50/50 hover:bg-white focus:bg-white text-blue-700 font-mono font-bold tracking-wider uppercase"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Info Token Bantuan */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Token Server: <code className="font-bold text-blue-700">PANCA2026</code>
                </span>
                <span className="text-slate-400">Sesi Aktif</span>
              </div>

              {/* Tombol Login Biru Cerah Besar */}
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-extrabold text-base py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Login</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            {/* Quick Demo Fill Buttons */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 font-medium mb-2 text-center">
                Pilih Contoh Profil Cepat (Simulasi Siswa):
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                <button
                  type="button"
                  onClick={() => handleQuickFill('Ahmad Fauzi', 'XI TJKT 1', '05')}
                  className="px-2.5 py-1 text-[11px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-md transition-colors cursor-pointer"
                >
                  XI TJKT 1 - Ahmad
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill('Nurul Hidayah', 'XI NKPI 1', '12')}
                  className="px-2.5 py-1 text-[11px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-md transition-colors cursor-pointer"
                >
                  XI NKPI 1 - Nurul
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill('Cantika Putri', 'XI Busana 2', '09')}
                  className="px-2.5 py-1 text-[11px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-md transition-colors cursor-pointer"
                >
                  XI Busana 2 - Cantika
                </button>
              </div>
            </div>
          </div>

          {/* Footer Card Info */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-600">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              Sistem Anti-Curang & Timer Aktif
            </span>
            <button
              onClick={onOpenTeacher}
              className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer underline"
            >
              Mode Guru & Analitik
            </button>
          </div>
        </div>

        {/* Informasi Aturan CBT */}
        <div className="mt-6 bg-white/80 rounded-xl p-4 border border-blue-100 shadow-sm text-xs text-slate-600 space-y-1.5">
          <div className="font-bold text-slate-700 flex items-center gap-1.5 text-blue-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Ketentuan & Fitur Ujian CBT:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-[11px] leading-relaxed">
            <li><strong>60 Butir Soal:</strong> 40 Pilihan Ganda (20 Soal HOTS C4–C5), 10 PG Kompleks, 10 Menjodohkan.</li>
            <li><strong>Timer 60 Detik:</strong> Indikator hitung mundur per soal dalam kotak merah berkedip saat kritis.</li>
            <li><strong>Keamanan:</strong> Dilengkapi proteksi anti-salin, anti-screenshot, dan pendeteksi beralih tab otomatis.</li>
            <li><strong>Integrasi:</strong> Hasil ujian langsung tersinkron ke Google Spreadsheet dan dapat diunduh dalam format Excel (.xlsx).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
