import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { Question } from '../types';
import { soundManager } from '../utils/audio';

interface QuestionModalProps {
  question: Question;
  pieceIndex: number;
  onAnswerCorrect: () => void;
  onAnswerWrong: () => void;
  onClose: () => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  pieceIndex,
  onAnswerCorrect,
  onAnswerWrong,
  onClose,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedIdx(idx);
    setIsAnswered(true);

    const correct = idx === question.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      soundManager.playCorrect();
      onAnswerCorrect();
    } else {
      soundManager.playWrong();
      onAnswerWrong();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#161616] text-[#EDEDED] border border-[#C5A059] rounded p-6 max-w-xl w-full shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Question Tag */}
        <div className="absolute -top-3 left-6 bg-[#C5A059] text-[#0C0C0C] text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
          Pertanyaan No. {String(pieceIndex + 1).padStart(2, '0')}
        </div>

        {/* Category & Type Header */}
        <div className="flex items-center justify-between pt-2 pb-3 mb-4 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs text-[#888888] font-medium">
              Kategori: <strong className="text-[#C5A059] font-normal">{question.category}</strong>
            </span>
          </div>

          <span className="text-[10px] bg-[#1F1F1F] text-[#C5A059] border border-[#2A2A2A] font-semibold px-2 py-0.5 uppercase tracking-wider rounded">
            {question.type === 'boolean' ? 'Benar / Salah' : 'Pilihan Ganda'}
          </span>
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <p className="text-lg font-normal text-[#EDEDED] leading-relaxed font-serif">
            {question.text}
          </p>
        </div>

        {/* Options Grid (2 columns on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {question.options.map((optionText, idx) => {
            let btnStyle = 'bg-[rgba(255,255,255,0.02)] border-[#2A2A2A] text-[#EDEDED] hover:bg-[rgba(197,160,89,0.1)] hover:border-[#C5A059]';

            if (isAnswered) {
              if (idx === question.correctIndex) {
                btnStyle = 'bg-[#C5A059]/20 border-[#C5A059] text-[#EDEDED] ring-1 ring-[#C5A059]';
              } else if (idx === selectedIdx && !isCorrect) {
                btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200 ring-1 ring-rose-500';
              } else {
                btnStyle = 'bg-[#161616] border-[#2A2A2A] text-[#888888]/40 opacity-40';
              }
            }

            const optionPrefix = question.type === 'multiple_choice' ? ['A', 'B', 'C', 'D'][idx] : null;

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full p-3 border text-left text-sm transition-all duration-200 flex items-center justify-between gap-2.5 ${btnStyle} cursor-pointer rounded-sm`}
              >
                <div className="flex items-center gap-2.5">
                  {optionPrefix && (
                    <span className="text-xs font-semibold text-[#C5A059] flex-shrink-0">
                      {optionPrefix}.
                    </span>
                  )}
                  <span>{optionText}</span>
                </div>

                {isAnswered && idx === question.correctIndex && (
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                )}
                {isAnswered && idx === selectedIdx && !isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation Box */}
        {isAnswered && (
          <div
            className={`p-4 rounded border text-xs sm:text-sm space-y-2 animate-in fade-in duration-300 mt-4 ${
              isCorrect
                ? 'bg-[#1F1F1F] border-[#C5A059] text-[#EDEDED]'
                : 'bg-rose-950/40 border-rose-800 text-rose-100'
            }`}
          >
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
              {isCorrect ? (
                <>
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-[#C5A059]">Jawaban Benar! Potongan Terbuka</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span className="text-rose-300">Jawaban Belum Tepat</span>
                </>
              )}
            </div>

            {question.explanation && (
              <p className="text-xs text-[#888888] leading-relaxed pt-1">
                💡 <strong className="text-[#EDEDED]">Penjelasan:</strong> {question.explanation}
              </p>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={onClose}
                className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  isCorrect
                    ? 'bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C]'
                    : 'bg-[#2A2A2A] hover:bg-[#333333] text-[#EDEDED]'
                }`}
              >
                <span>{isCorrect ? 'Lanjutkan Game' : 'Tutup & Coba Lagi'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
