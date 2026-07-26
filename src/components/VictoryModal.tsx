import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Clock, CheckCircle2, Award, RotateCcw, Sparkles, BookOpen } from 'lucide-react';
import { Landmark, GameStats, GridDimension } from '../types';
import { soundManager } from '../utils/audio';

interface VictoryModalProps {
  landmark: Landmark;
  stats: GameStats;
  grid: GridDimension;
  onPlayAgain: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  landmark,
  stats,
  grid,
  onPlayAgain,
}) => {
  useEffect(() => {
    soundManager.playVictory();

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#fbbf24']
      });

      const timeout = setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);

      return () => clearTimeout(timeout);
    } catch {}
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const accuracy = stats.questionsAnswered > 0
    ? Math.round((stats.correctAnswers / stats.questionsAnswered) * 100)
    : 100;

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#161616] text-[#EDEDED] border border-[#C5A059] rounded max-w-2xl w-full shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-300">
        {/* Top Banner Header */}
        <div className="bg-[#1F1F1F] text-[#C5A059] px-6 py-5 text-center border-b border-[#2A2A2A] flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#161616] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-2">
            <Trophy className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black font-serif tracking-[2px] uppercase">
            MASYA ALLAH! PUZZLE SELESAI!
          </h2>
          <p className="text-xs font-normal text-[#888888] mt-1">
            Selamat, Anda berhasil menyelesaikan puzzle & menjawab soal Ma'rifatul Islam.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Completed Intact Image Showcase */}
          <div className="relative rounded overflow-hidden border border-[#C5A059]/40 shadow-xl aspect-[16/9] group bg-black/40">
            <img
              src={landmark.imageUrl}
              alt={landmark.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-bold font-serif text-[#C5A059]">
                  {landmark.name}
                </h3>
                {landmark.arabicName && (
                  <span className="text-sm font-arabic text-[#EDEDED]/90">
                    {landmark.arabicName}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#888888]">📍 {landmark.location}</p>
            </div>
          </div>

          {/* Fun Fact Card */}
          <div className="bg-[#1F1F1F] border border-[#2A2A2A] p-4 rounded text-xs sm:text-sm text-[#EDEDED] space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-[#C5A059] uppercase tracking-wider text-xs">
              <BookOpen className="w-4 h-4" />
              <span>Tahukah Kamu?</span>
            </div>
            <p className="text-[#888888] leading-relaxed">
              {landmark.funFact}
            </p>
          </div>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#1F1F1F] border border-[#2A2A2A] p-3 rounded text-center">
              <Award className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
              <div className="text-[10px] uppercase text-[#888888] font-semibold tracking-wider">Total Skor</div>
              <div className="text-lg font-bold text-[#C5A059] font-mono">{stats.score}</div>
            </div>

            <div className="bg-[#1F1F1F] border border-[#2A2A2A] p-3 rounded text-center">
              <Clock className="w-5 h-5 text-[#EDEDED] mx-auto mb-1" />
              <div className="text-[10px] uppercase text-[#888888] font-semibold tracking-wider">Waktu</div>
              <div className="text-lg font-bold text-[#EDEDED] font-mono">{formatTime(stats.timeSeconds)}</div>
            </div>

            <div className="bg-[#1F1F1F] border border-[#2A2A2A] p-3 rounded text-center">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
              <div className="text-[10px] uppercase text-[#888888] font-semibold tracking-wider">Akurasi</div>
              <div className="text-lg font-bold text-[#C5A059] font-mono">{accuracy}%</div>
            </div>

            <div className="bg-[#1F1F1F] border border-[#2A2A2A] p-3 rounded text-center">
              <Sparkles className="w-5 h-5 text-[#EDEDED] mx-auto mb-1" />
              <div className="text-[10px] uppercase text-[#888888] font-semibold tracking-wider">Ukuran</div>
              <div className="text-lg font-bold text-[#EDEDED] font-mono">{grid.label}</div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onPlayAgain}
            className="w-full py-3.5 px-6 rounded bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C] font-bold text-xs uppercase tracking-[1.5px] transition-all flex items-center justify-center gap-2 cursor-pointer font-serif"
          >
            <RotateCcw className="w-4 h-4" />
            <span>MAIN LAGI / PILIH GAMBAR LAIN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
