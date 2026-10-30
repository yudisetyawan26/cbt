import React from 'react';
import { SingleChoiceQuestionData } from '../types/cbt';
import { BookOpen, HelpCircle } from 'lucide-react';

interface SingleChoiceQuestionProps {
  question: SingleChoiceQuestionData;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D' | 'E';
  onSelectAnswer: (key: 'A' | 'B' | 'C' | 'D' | 'E') => void;
}

export const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer
}) => {
  return (
    <div className="space-y-5">
      {/* Stimulus Literasi / Studi Kasus */}
      {question.stimulus && (
        <div className="bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl p-4 sm:p-5 text-slate-700 text-sm sm:text-base leading-relaxed shadow-sm">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span>Wacana Literasi & Konteks Pembelajaran</span>
            <span className="text-[10px] bg-blue-200/70 text-blue-800 px-2 py-0.5 rounded-full font-semibold ml-auto">
              {question.sourcePageRef}
            </span>
          </div>
          <p className="italic text-slate-800 font-medium">
            "{question.stimulus}"
          </p>
        </div>
      )}

      {/* Pertanyaan Teks */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
            {question.question}
          </h3>
        </div>
      </div>

      {/* Pilihan Ganda (5 Opsi A-E) berbentuk Lingkaran Radio Button */}
      <div className="space-y-2.5 pt-2">
        {question.options.map((opt) => {
          const isSelected = selectedAnswer === opt.key;
          return (
            <label
              key={opt.key}
              onClick={() => onSelectAnswer(opt.key)}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-50/90 border-blue-600 shadow-sm ring-1 ring-blue-600/30'
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-blue-300'
              }`}
            >
              {/* Lingkaran Radio Button Custom */}
              <div className="pt-0.5 shrink-0">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-colors ${
                    isSelected
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-slate-300 bg-white text-slate-600 group-hover:border-blue-400'
                  }`}
                >
                  {opt.key}
                </div>
              </div>

              {/* Teks Opsi Jawaban */}
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
