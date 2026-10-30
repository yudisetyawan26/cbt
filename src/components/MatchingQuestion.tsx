import React from 'react';
import { MatchingQuestionData } from '../types/cbt';
import { BookOpen, GitMerge, CheckCircle2 } from 'lucide-react';

interface MatchingQuestionProps {
  question: MatchingQuestionData;
  matches?: Record<string, string>; // premiseId -> targetId
  onSetMatch: (premiseId: string, targetId: string) => void;
}

export const MatchingQuestion: React.FC<MatchingQuestionProps> = ({
  question,
  matches = {},
  onSetMatch
}) => {
  return (
    <div className="space-y-5">
      {/* Badge Tipe Soal */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
        <GitMerge className="w-3.5 h-3.5 text-teal-600" />
        <span>SOAL MENJODOHKAN (Pasangkanlah setiap pernyataan kiri dengan pasangan kanan yang tepat)</span>
      </div>

      {/* Stimulus Literasi */}
      {question.stimulus && (
        <div className="bg-teal-50/50 border-l-4 border-teal-600 rounded-r-xl p-4 sm:p-5 text-slate-700 text-sm sm:text-base leading-relaxed shadow-sm">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-teal-700" />
            <span>Konteks Pembelajaran</span>
            <span className="text-[10px] bg-teal-200/70 text-teal-800 px-2 py-0.5 rounded-full font-semibold ml-auto">
              {question.sourcePageRef}
            </span>
          </div>
          <p className="italic text-slate-800 font-medium">
            "{question.stimulus}"
          </p>
        </div>
      )}

      {/* Pertanyaan Teks */}
      <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
        {question.question}
      </h3>

      {/* Tabel / Pasangan Menjodohkan */}
      <div className="space-y-3 pt-2">
        {question.pairs.map((pair, index) => {
          const currentMatchId = matches[pair.id] || '';
          const isMatched = !!currentMatchId;

          return (
            <div
              key={pair.id}
              className={`p-4 rounded-xl border transition-all ${
                isMatched
                  ? 'bg-teal-50/60 border-teal-400/80 shadow-xs'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Kolom Premis Kiri */}
                <div className="flex items-start gap-3 flex-1">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div className="text-sm font-semibold text-slate-800">
                    {pair.premise}
                  </div>
                </div>

                {/* Kolom Pemilihan Pasangan Kanan */}
                <div className="sm:w-72 shrink-0">
                  <div className="relative">
                    <select
                      value={currentMatchId}
                      onChange={(e) => onSetMatch(pair.id, e.target.value)}
                      className={`w-full text-xs sm:text-sm py-2 px-3 pr-8 rounded-lg border font-medium outline-none cursor-pointer transition-colors ${
                        isMatched
                          ? 'border-teal-600 bg-white text-teal-900 font-semibold'
                          : 'border-slate-300 bg-slate-50 text-slate-600 hover:border-slate-400'
                      }`}
                    >
                      <option value="">-- Pilih Pasangan Jawaban --</option>
                      {question.targets.map((tgt, tIdx) => (
                        <option key={tgt.id} value={tgt.id}>
                          [{String.fromCharCode(65 + tIdx)}] {tgt.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Status Pasangan */}
              {isMatched && (
                <div className="mt-2.5 pt-2 border-t border-teal-200/60 flex items-center text-xs text-teal-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-teal-600 shrink-0" />
                  <span>
                    Terpasang: <span className="font-semibold">{question.targets.find((t) => t.id === currentMatchId)?.text}</span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Rujukan Opsi Kanan untuk Kemudahan Membaca */}
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Daftar Pilihan Pasangan:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
          {question.targets.map((t, idx) => (
            <div key={t.id} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-[11px] shrink-0">
                {String.fromCharCode(65 + idx)}
              </span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
