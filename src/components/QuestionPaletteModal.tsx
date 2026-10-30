import React from 'react';
import { X, CheckCircle, HelpCircle, Circle, Bookmark } from 'lucide-react';
import { QuestionData, StudentAnswer } from '../types/cbt';

interface QuestionPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuestionData[];
  currentIndex: number;
  answers: Record<number, StudentAnswer>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionPaletteModal: React.FC<QuestionPaletteModalProps> = ({
  isOpen,
  onClose,
  questions,
  currentIndex,
  answers,
  onSelectQuestion
}) => {
  if (!isOpen) return null;

  const isQuestionAnswered = (q: QuestionData) => {
    const a = answers[q.id];
    if (!a) return false;
    if (q.type === 'single_choice') return a.singleChoice !== undefined;
    if (q.type === 'complex_choice') return (a.complexChoice && a.complexChoice.length > 0) || false;
    if (q.type === 'matching') return (a.matching && Object.keys(a.matching).length > 0) || false;
    return false;
  };

  const isQuestionDoubtful = (q: QuestionData) => {
    return !!answers[q.id]?.isDoubtful;
  };

  // Counts
  let answeredCount = 0;
  let doubtfulCount = 0;
  questions.forEach((q) => {
    if (isQuestionDoubtful(q)) doubtfulCount++;
    if (isQuestionAnswered(q)) answeredCount++;
  });
  const unAnsweredCount = questions.length - answeredCount;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-white">Daftar Nomor Soal</h3>
            <p className="text-xs text-blue-100">
              Pilih nomor untuk berpindah soal secara cepat
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend / Keterangan Warna */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-blue-600 shadow-xs" />
              <span>Sedang Dikerjakan ({currentIndex + 1})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600 shadow-xs" />
              <span>Sudah Dikerjakan ({answeredCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-500 shadow-xs" />
              <span>Ragu-Ragu ({doubtfulCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-200 border border-slate-300" />
              <span>Belum Dikerjakan ({unAnsweredCount})</span>
            </div>
          </div>
        </div>

        {/* Question Grid */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* Section 1: Soal 1-40 PG */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              <span>Bagian 1: Pilihan Ganda (1 - 40) Termasuk Level C4-C5</span>
              <span className="text-[11px] font-normal text-blue-600">40 Butir</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {questions.slice(0, 40).map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const answered = isQuestionAnswered(q);
                const doubtful = isQuestionDoubtful(q);

                let btnStyle = 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200';
                if (isCurrent) {
                  btnStyle = 'bg-blue-600 text-white font-bold ring-2 ring-blue-400 shadow';
                } else if (doubtful) {
                  btnStyle = 'bg-amber-500 text-white font-bold shadow-xs';
                } else if (answered) {
                  btnStyle = 'bg-emerald-600 text-white font-bold shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(idx);
                      onClose();
                    }}
                    className={`h-10 rounded-xl text-sm font-semibold transition-all flex items-center justify-center relative cursor-pointer ${btnStyle}`}
                  >
                    <span>{idx + 1}</span>
                    {doubtful && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-200 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Soal 41-50 PG Kompleks */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              <span>Bagian 2: Pilihan Ganda Kompleks (41 - 50)</span>
              <span className="text-[11px] font-normal text-indigo-600">10 Butir</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {questions.slice(40, 50).map((q, localIdx) => {
                const idx = 40 + localIdx;
                const isCurrent = idx === currentIndex;
                const answered = isQuestionAnswered(q);
                const doubtful = isQuestionDoubtful(q);

                let btnStyle = 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200';
                if (isCurrent) {
                  btnStyle = 'bg-blue-600 text-white font-bold ring-2 ring-blue-400 shadow';
                } else if (doubtful) {
                  btnStyle = 'bg-amber-500 text-white font-bold shadow-xs';
                } else if (answered) {
                  btnStyle = 'bg-emerald-600 text-white font-bold shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(idx);
                      onClose();
                    }}
                    className={`h-10 rounded-xl text-sm font-semibold transition-all flex items-center justify-center relative cursor-pointer ${btnStyle}`}
                  >
                    <span>{idx + 1}</span>
                    {doubtful && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-200 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Soal 51-60 Menjodohkan */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              <span>Bagian 3: Menjodohkan (51 - 60)</span>
              <span className="text-[11px] font-normal text-teal-600">10 Butir</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {questions.slice(50, 60).map((q, localIdx) => {
                const idx = 50 + localIdx;
                const isCurrent = idx === currentIndex;
                const answered = isQuestionAnswered(q);
                const doubtful = isQuestionDoubtful(q);

                let btnStyle = 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200';
                if (isCurrent) {
                  btnStyle = 'bg-blue-600 text-white font-bold ring-2 ring-blue-400 shadow';
                } else if (doubtful) {
                  btnStyle = 'bg-amber-500 text-white font-bold shadow-xs';
                } else if (answered) {
                  btnStyle = 'bg-emerald-600 text-white font-bold shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(idx);
                      onClose();
                    }}
                    className={`h-10 rounded-xl text-sm font-semibold transition-all flex items-center justify-center relative cursor-pointer ${btnStyle}`}
                  >
                    <span>{idx + 1}</span>
                    {doubtful && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-200 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
