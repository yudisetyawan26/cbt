import React from 'react';
import { ComplexChoiceQuestionData } from '../types/cbt';
import { BookOpen, CheckSquare, Layers } from 'lucide-react';

interface ComplexChoiceQuestionProps {
  question: ComplexChoiceQuestionData;
  selectedAnswers?: string[];
  onToggleAnswer: (id: string) => void;
}

export const ComplexChoiceQuestion: React.FC<ComplexChoiceQuestionProps> = ({
  question,
  selectedAnswers = [],
  onToggleAnswer
}) => {
  return (
    <div className="space-y-5">
      {/* Badge Tipe Soal */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
        <Layers className="w-3.5 h-3.5" />
        <span>PILIHAN GANDA KOMPLEKS (Pilihlah seluruh pernyataan yang benar)</span>
      </div>

      {/* Stimulus Literasi */}
      {question.stimulus && (
        <div className="bg-indigo-50/60 border-l-4 border-indigo-600 rounded-r-xl p-4 sm:p-5 text-slate-700 text-sm sm:text-base leading-relaxed shadow-sm">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-indigo-700" />
            <span>Konteks Materi & Rujukan Teoretis</span>
            <span className="text-[10px] bg-indigo-200/70 text-indigo-800 px-2 py-0.5 rounded-full font-semibold ml-auto">
              {question.sourcePageRef}
            </span>
          </div>
          <p className="italic text-slate-800 font-medium">
            "{question.stimulus}"
          </p>
        </div>
      )}

      {/* Pertanyaan Teks */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
          {question.question}
        </h3>
        <p className="text-xs text-indigo-700 mt-1 font-semibold flex items-center gap-1">
          <CheckSquare className="w-3.5 h-3.5" />
          Anda dapat memilih lebih dari satu jawaban yang sesuai.
        </p>
      </div>

      {/* Opsi Pilihan Berganda (Checkboxes) */}
      <div className="space-y-2.5 pt-1">
        {question.options.map((opt, idx) => {
          const isChecked = selectedAnswers.includes(opt.id);
          const optionLetter = String.fromCharCode(65 + idx);
          return (
            <label
              key={opt.id}
              onClick={() => onToggleAnswer(opt.id)}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                isChecked
                  ? 'bg-indigo-50/90 border-indigo-600 shadow-sm ring-1 ring-indigo-600/30'
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div className="pt-0.5 shrink-0">
                <div
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center font-bold text-xs transition-colors ${
                    isChecked
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-300 bg-white text-slate-500'
                  }`}
                >
                  {isChecked ? '✓' : optionLetter}
                </div>
              </div>

              <div className="flex-1 text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-0.5">
                {opt.text}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
