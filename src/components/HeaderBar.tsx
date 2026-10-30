import React from 'react';
import { Shield, BookOpen, User, GraduationCap, BarChart3, LogOut } from 'lucide-react';
import { StudentProfile } from '../types/cbt';

interface HeaderBarProps {
  student?: StudentProfile | null;
  mode: 'login' | 'exam' | 'result' | 'teacher';
  onGoToTeacher?: () => void;
  onGoToLogin?: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  student,
  mode,
  onGoToTeacher,
  onGoToLogin
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Branding (Logo removed as requested) */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              PENDIDIKAN PANCASILA <span className="text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded text-sm font-black border border-amber-400/30">XI</span>
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-blue-200 hidden sm:block font-medium">
            Sistem Ujian CBT Terstandar Kurikulum Merdeka • Kelas XI SMK/SMA
          </p>
        </div>

        {/* Right side info based on mode */}
        <div className="flex items-center space-x-3">
          {mode === 'exam' && student && (
            <div className="flex items-center bg-blue-900/60 border border-blue-400/30 rounded-xl px-3.5 py-1.5 space-x-3 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-500/40 flex items-center justify-center text-white border border-blue-300/40">
                <User className="w-4 h-4" />
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-white tracking-wide leading-tight line-clamp-1 max-w-[160px] sm:max-w-[220px]">
                  {student.name}
                </div>
                <div className="text-[11px] text-blue-200 flex items-center justify-end gap-1.5 font-medium">
                  <span className="bg-blue-600/60 px-1.5 py-0.2 rounded text-[10px] text-amber-300 font-bold">
                    {student.className}
                  </span>
                  <span>• No. {student.absentNumber}</span>
                </div>
              </div>
            </div>
          )}

          {mode === 'login' && (
            <div className="flex items-center space-x-2">
              <button
                onClick={onGoToTeacher}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-blue-100 border border-white/20 transition-all cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5 text-amber-300" />
                <span>Dasbor Guru & Rekap</span>
              </button>
            </div>
          )}

          {mode === 'result' && (
            <div className="flex items-center space-x-2">
              <button
                onClick={onGoToTeacher}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-xs font-bold text-slate-900 shadow transition-all cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Dasbor Guru</span>
              </button>
              <button
                onClick={onGoToLogin}
                type="button"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ujian Baru</span>
              </button>
            </div>
          )}

          {mode === 'teacher' && (
            <div className="flex items-center space-x-2">
              <button
                onClick={onGoToLogin}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-blue-800 hover:bg-blue-50 text-xs font-bold shadow transition-all cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>Kembali ke Halaman Siswa</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
