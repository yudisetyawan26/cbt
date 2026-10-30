import React, { useState, useEffect, useRef } from 'react';
import {
  Timer,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  AlertTriangle,
  ShieldAlert,
  Flame,
  RotateCcw,
  Maximize2,
  Shuffle
} from 'lucide-react';
import {
  QuestionData,
  StudentAnswer,
  StudentProfile,
  StudentResultSummary
} from '../types/cbt';
import { EXAM_QUESTIONS } from '../data/questions';
import { HeaderBar } from './HeaderBar';
import { SingleChoiceQuestion } from './SingleChoiceQuestion';
import { ComplexChoiceQuestion } from './ComplexChoiceQuestion';
import { MatchingQuestion } from './MatchingQuestion';
import { QuestionPaletteModal } from './QuestionPaletteModal';
import { useAntiCheat } from '../utils/useAntiCheat';
import { calculateExamResults } from '../utils/scoring';
import { randomizeExamQuestions } from '../utils/shuffle';

interface CbtExamViewProps {
  student: StudentProfile;
  onSubmitExam: (result: StudentResultSummary) => void;
  onExit: () => void;
}

const QUESTION_SECONDS = 60; // 60 detik per soal sesuai permintaan user

export const CbtExamView: React.FC<CbtExamViewProps> = ({
  student,
  onSubmitExam,
  onExit
}) => {
  // Acak jawaban pilihan ganda saat sesi ujian dimulai
  const [examQuestions, setExamQuestions] = useState<QuestionData[]>(() =>
    randomizeExamQuestions(EXAM_QUESTIONS)
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, StudentAnswer>>({});
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);

  // Per-question countdown timer (60 detik) in red box
  const [questionSecondsLeft, setQuestionSecondsLeft] = useState<number>(QUESTION_SECONDS);
  const [autoAdvanceOnTimer, setAutoAdvanceOnTimer] = useState<boolean>(false);

  // Total exam duration counter in seconds
  const [totalElapsedSeconds, setTotalElapsedSeconds] = useState<number>(0);

  // Anti-cheat hook
  const {
    violationCount,
    showWarningModal,
    dismissWarning,
    isScreenProtected
  } = useAntiCheat({
    enabled: true,
    studentName: student.name
  });

  const currentQ: QuestionData = examQuestions[currentIndex];
  const currentAnswer = answers[currentQ.id] || {};

  // Reset 60s timer whenever question changes
  useEffect(() => {
    setQuestionSecondsLeft(QUESTION_SECONDS);
  }, [currentIndex]);

  // Overall & Per-Question Timer Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalElapsedSeconds((prev) => prev + 1);

      setQuestionSecondsLeft((prev) => {
        if (prev <= 1) {
          // If auto advance is enabled and not at the last question
          if (autoAdvanceOnTimer && currentIndex < examQuestions.length - 1) {
            setCurrentIndex((curr) => curr + 1);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [autoAdvanceOnTimer, currentIndex]);

  // Single choice answer handler
  const handleSelectSingleChoice = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        singleChoice: key,
        answeredAt: Date.now()
      }
    }));
  };

  // Complex choice answer handler (toggle checkbox)
  const handleToggleComplexChoice = (optId: string) => {
    setAnswers((prev) => {
      const currentList = prev[currentQ.id]?.complexChoice || [];
      const updatedList = currentList.includes(optId)
        ? currentList.filter((id) => id !== optId)
        : [...currentList, optId];

      return {
        ...prev,
        [currentQ.id]: {
          ...prev[currentQ.id],
          complexChoice: updatedList,
          answeredAt: Date.now()
        }
      };
    });
  };

  // Matching answer handler
  const handleSetMatch = (premiseId: string, targetId: string) => {
    setAnswers((prev) => {
      const currentMatches = prev[currentQ.id]?.matching || {};
      const updatedMatches = { ...currentMatches, [premiseId]: targetId };

      return {
        ...prev,
        [currentQ.id]: {
          ...prev[currentQ.id],
          matching: updatedMatches,
          answeredAt: Date.now()
        }
      };
    });
  };

  // Toggle Ragu-Ragu
  const handleToggleDoubtful = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        isDoubtful: !prev[currentQ.id]?.isDoubtful
      }
    }));
  };

  // Navigation handlers
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((curr) => curr - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < EXAM_QUESTIONS.length - 1) {
      setCurrentIndex((curr) => curr + 1);
    }
  };

  // Reset 60s timer button
  const handleResetTimer = () => {
    setQuestionSecondsLeft(QUESTION_SECONDS);
  };

  // Fullscreen trigger for exam mode
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Final submit exam
  const handleConfirmSubmit = () => {
    setIsConfirmSubmitOpen(false);
    const result = calculateExamResults(
      student,
      answers,
      violationCount,
      totalElapsedSeconds,
      examQuestions
    );
    onSubmitExam(result);
  };

  // Counts for confirm modal
  const answeredCount = Object.values(answers).filter(
    (a) =>
      a.singleChoice !== undefined ||
      (a.complexChoice && a.complexChoice.length > 0) ||
      (a.matching && Object.keys(a.matching).length > 0)
  ).length;
  const doubtfulCount = Object.values(answers).filter((a) => a.isDoubtful).length;
  const unansweredCount = examQuestions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col no-select relative overflow-x-hidden">
      {/* Dynamic Security Watermark (Prevents photographing/screenshots) */}
      <div className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden opacity-10 flex flex-wrap gap-24 p-8 text-slate-800 font-mono text-xs rotate-[-18deg]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {student.name} • {student.className} • ABS:{student.absentNumber} • {student.token}
          </div>
        ))}
      </div>

      {/* Screen blur overlay if screenshot or DevTools detected */}
      {isScreenProtected && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-white">
          <div className="text-center p-6">
            <ShieldAlert className="w-16 h-16 mx-auto mb-3 text-rose-500 animate-bounce" />
            <h2 className="text-xl font-bold">Tangkapan Layar Dinonaktifkan</h2>
            <p className="text-sm text-slate-300 mt-1">Sistem keamanan CBT mendeteksi upaya screenshot.</p>
          </div>
        </div>
      )}

      {/* Header Biru dengan Logo Pendidikan Pancasila XI dan Nama Pengguna */}
      <HeaderBar student={student} mode="exam" />

      {/* Sub-Header: Kontrol Waktu 60 Detik, Tombol Daftar Soal, dan Indikator Acak Jawaban */}
      <div className="bg-white border-b border-slate-200 shadow-xs sticky top-16 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Sisi Kiri: Indikator Nomor & Kategori & Acak Jawaban */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-extrabold text-xs sm:text-sm px-3 py-1 rounded-lg shadow-xs">
              Soal No. {currentIndex + 1}
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">dari {examQuestions.length} Soal</span>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {currentQ.topic}
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold shadow-xs">
              <Shuffle className="w-3 h-3 text-emerald-600" />
              <span>Opsi Jawaban Diacak</span>
            </div>
          </div>

          {/* Sisi Kanan: Timer Hitung Mundur 60 Detik Kotak Merah & Tombol "Daftar Soal" */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Kotak Merah Timer 60 Detik per Soal */}
            <div
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm sm:text-base shadow-sm transition-all ${
                questionSecondsLeft <= 10
                  ? 'bg-rose-600 border-rose-700 text-white animate-pulse shadow-rose-500/30 ring-2 ring-rose-400'
                  : 'bg-rose-500 border-rose-600 text-white'
              }`}
              title="Waktu pengerjaan tersisa untuk butir soal ini (60 Detik)"
            >
              <Timer className="w-4 h-4 shrink-0 text-white" />
              <div className="flex items-baseline gap-1">
                <span className="text-[11px] font-sans uppercase tracking-tight text-rose-100 hidden sm:inline">
                  Waktu Soal:
                </span>
                <span className="text-white text-base">
                  {String(questionSecondsLeft).padStart(2, '0')}s
                </span>
              </div>
            </div>

            {/* Tombol Reset Timer Soal */}
            <button
              onClick={handleResetTimer}
              title="Segarkan Timer 60 Detik"
              className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Tombol "Daftar Soal" di sebelahnya */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-blue-600" />
              <span>Daftar Soal</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-blue-600 text-white text-[10px]">
                {answeredCount}/{EXAM_QUESTIONS.length}
              </span>
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={handleToggleFullscreen}
              title="Layar Penuh"
              className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 text-xs hidden md:flex items-center justify-center cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Konten Soal di Tengah Layar */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 pb-28">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
          {/* Header Soal & Indikator Tingkat Berpikir */}
          <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                {currentIndex + 1}
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Pendidikan Pancasila Kelas XI
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                  currentQ.cognitiveLevel === 'C4' || currentQ.cognitiveLevel === 'C5'
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}
              >
                Level {currentQ.cognitiveLevel} • HOTS Literasi
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                {currentQ.subtopic}
              </span>
            </div>
          </div>

          {/* Area Render Pertanyaan Sesuai Tipe */}
          <div className="p-5 sm:p-7">
            {currentQ.type === 'single_choice' && (
              <SingleChoiceQuestion
                question={currentQ}
                selectedAnswer={currentAnswer.singleChoice}
                onSelectAnswer={handleSelectSingleChoice}
              />
            )}

            {currentQ.type === 'complex_choice' && (
              <ComplexChoiceQuestion
                question={currentQ}
                selectedAnswers={currentAnswer.complexChoice}
                onToggleAnswer={handleToggleComplexChoice}
              />
            )}

            {currentQ.type === 'matching' && (
              <MatchingQuestion
                question={currentQ}
                matches={currentAnswer.matching}
                onSetMatch={handleSetMatch}
              />
            )}
          </div>
        </div>
      </main>

      {/* Floating Bottom Navigation Bar */}
      <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl py-3 px-4 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
          {/* Tombol "Soal Sebelumnya" */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
              currentIndex === 0
                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 hover:border-blue-400 shadow-xs'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Soal Sebelumnya</span>
            <span className="sm:hidden">Sebelumnya</span>
          </button>

          {/* Tombol "Ragu-Ragu" Berwarna Oranye */}
          <button
            onClick={handleToggleDoubtful}
            type="button"
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs ${
              currentAnswer.isDoubtful
                ? 'bg-amber-500 text-white ring-2 ring-amber-300 hover:bg-amber-600'
                : 'bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-300'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-white" />
            <span>Ragu-Ragu</span>
          </button>

          {/* Sisi Kanan: Tombol Selanjutnya ATAU Kirim Ujian */}
          <div className="flex items-center gap-2">
            {currentIndex < examQuestions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Soal Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsConfirmSubmitOpen(true)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-emerald-500/25 transition-all cursor-pointer animate-pulse"
              >
                <Send className="w-4 h-4" />
                <span>Kirim & Selesai</span>
              </button>
            )}

            {/* Quick Selesai button if on other questions */}
            {currentIndex < examQuestions.length - 1 && answeredCount >= 10 && (
              <button
                onClick={() => setIsConfirmSubmitOpen(true)}
                title="Selesaikan Ujian Sekarang"
                className="px-3 py-2 rounded-xl text-xs font-semibold text-emerald-700 hover:bg-emerald-50 border border-emerald-300 transition-colors hidden md:block cursor-pointer"
              >
                Kirim
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Modal Daftar Soal */}
      <QuestionPaletteModal
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        questions={examQuestions}
        currentIndex={currentIndex}
        answers={answers}
        onSelectQuestion={(idx) => setCurrentIndex(idx)}
      />

      {/* Modal Peringatan Beralih Tab (Anti-Cheat) */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-rose-500 w-full max-w-md p-6 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <ShieldAlert className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 text-center">
              Peringatan Pelanggaran CBT!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 text-center mt-2 leading-relaxed">
              Anda terdeteksi beralih tab, meminimalkan browser, atau meninggalkan halaman ujian.
            </p>
            <div className="mt-4 p-3 bg-rose-50 rounded-xl border border-rose-200 text-center">
              <span className="text-xs font-bold text-rose-800">
                Jumlah Pelanggaran: {violationCount} Kali
              </span>
              <p className="text-[11px] text-rose-600 mt-0.5">
                Semua rekaman aktivitas tercatat otomatis dan dikirim ke server pengawas/spreadsheet.
              </p>
            </div>
            <button
              onClick={dismissWarning}
              className="mt-5 w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow"
            >
              Saya Mengerti & Kembali ke Soal
            </button>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Kirim Ujian */}
      {isConfirmSubmitOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md p-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <Send className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 text-center">
              Kirim Jawaban Ujian?
            </h3>
            <p className="text-xs text-slate-500 text-center mt-1">
              Periksa kembali kelengkapan jawaban sebelum mengakhiri sesi CBT.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                <div className="text-lg font-black text-emerald-700">{answeredCount}</div>
                <div className="text-[10px] text-emerald-800 font-semibold">Terjawab</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
                <div className="text-lg font-black text-amber-700">{doubtfulCount}</div>
                <div className="text-[10px] text-amber-800 font-semibold">Ragu-Ragu</div>
              </div>
              <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                <div className="text-lg font-black text-rose-700">{unansweredCount}</div>
                <div className="text-[10px] text-rose-800 font-semibold">Belum Diisi</div>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-[11px] text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200 mt-3 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Masih ada {unansweredCount} soal yang belum Anda jawab.</span>
              </p>
            )}

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsConfirmSubmitOpen(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Periksa Lagi
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Ya, Kirim Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
