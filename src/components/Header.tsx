import React from 'react';
import { Volume2, VolumeX, HelpCircle, Eye, RefreshCw, BookOpen, Sparkles, Trophy } from 'lucide-react';
import { Landmark, GameStats } from '../types';
import { soundManager } from '../utils/audio';

interface HeaderProps {
  landmark: Landmark;
  stats: GameStats;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenRules: () => void;
  onOpenPreview: () => void;
  onOpenInfo: () => void;
  onRestart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  landmark,
  stats,
  isMuted,
  onToggleMute,
  onOpenRules,
  onOpenPreview,
  onOpenInfo,
  onRestart
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <header className="bg-[#161616] text-[#EDEDED] border-b border-[#2A2A2A] shadow-xl sticky top-0 z-30">
      {/* Gold top accent line */}
      <div className="h-0.5 bg-[#C5A059]"></div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Theme Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#1F1F1F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-[2px] text-[#C5A059] font-serif uppercase">
                MA'RIFATUL ISLAM
              </h1>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#1F1F1F] text-[#C5A059] border border-[#2A2A2A]">
                Puzzle Game
              </span>
            </div>
            <p className="text-xs text-[#888888] flex items-center gap-1 mt-0.5">
              <BookOpen className="w-3 h-3 text-[#C5A059]" />
              <span>Landmark: <strong className="text-[#EDEDED] font-normal">{landmark.name}</strong></span>
            </p>
          </div>
        </div>

        {/* Stats Pill Controls */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium">
          <div className="bg-[#1F1F1F] border border-[#2A2A2A] px-3 py-1.5 rounded flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#888888] uppercase tracking-wider text-[11px]">Skor: <strong className="text-[#C5A059] text-sm font-semibold">{stats.score}</strong></span>
          </div>

          <div className="bg-[#1F1F1F] border border-[#2A2A2A] px-3 py-1.5 rounded hidden md:flex items-center gap-2">
            <span className="text-[#888888] text-xs">⏱️</span>
            <span className="text-[#888888] uppercase tracking-wider text-[11px]">Waktu: <strong className="text-[#EDEDED] font-semibold">{formatTime(stats.timeSeconds)}</strong></span>
          </div>

          <div className="bg-[#1F1F1F] border border-[#2A2A2A] px-3 py-1.5 rounded hidden lg:flex items-center gap-2">
            <span className="text-[#C5A059]">✓</span>
            <span className="text-[#888888] uppercase tracking-wider text-[11px]">Jawaban: <strong className="text-[#EDEDED] font-semibold">{stats.correctAnswers}</strong>/{stats.questionsAnswered}</span>
          </div>
        </div>

        {/* Action Icon Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenPreview}
            title="Lihat Gambar Utuh"
            className="p-2 rounded bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#C5A059] border border-[#2A2A2A] hover:border-[#C5A059] transition-all flex items-center gap-1 text-xs font-medium cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Gambar Utuh</span>
          </button>

          <button
            onClick={onOpenInfo}
            title="Info Sejarah Landmark"
            className="p-2 rounded bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#EDEDED] border border-[#2A2A2A] hover:border-[#C5A059] transition-all text-xs flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span className="hidden md:inline">Info Landmark</span>
          </button>

          <button
            onClick={onOpenRules}
            title="Cara Bermain"
            className="p-2 rounded bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#EDEDED] border border-[#2A2A2A] hover:border-[#C5A059] transition-all cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleMute}
            title={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
            className="p-2 rounded bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#EDEDED] border border-[#2A2A2A] hover:border-[#C5A059] transition-all cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#C5A059]" />}
          </button>

          <button
            onClick={onRestart}
            title="Mulai Ulang / Ganti Gambar"
            className="p-2 rounded bg-[#C5A059]/10 hover:bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
