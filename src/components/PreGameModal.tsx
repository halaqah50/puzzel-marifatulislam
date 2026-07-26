import React, { useState } from 'react';
import { Play, Grid, BookOpen, ChevronRight, ChevronLeft, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Landmark, GridDimension, CategoryType } from '../types';
import { LANDMARKS, GRID_CONFIGS } from '../data/landmarks';

interface PreGameModalProps {
  selectedLandmark: Landmark;
  onSelectLandmark: (landmark: Landmark) => void;
  selectedGrid: GridDimension;
  onSelectGrid: (grid: GridDimension) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onStartGame: () => void;
  onOpenRules: () => void;
}

const CATEGORIES: (CategoryType | 'Semua Kategori')[] = [
  'Semua Kategori',
  'Akidah',
  'Ibadah',
  'Akhlak',
  'Al-Qur\'an',
  'Sejarah Islam',
  'Adab Sehari-Hari',
  'Pilar Islami'
];

export const PreGameModal: React.FC<PreGameModalProps> = ({
  selectedLandmark,
  onSelectLandmark,
  selectedGrid,
  onSelectGrid,
  selectedCategory,
  onSelectCategory,
  onStartGame,
  onOpenRules
}) => {
  const [activeTab, setActiveTab] = useState<'landmark' | 'settings'>('landmark');

  const currentIndex = LANDMARKS.findIndex((l) => l.id === selectedLandmark.id);

  const handlePrevLandmark = () => {
    const prevIndex = (currentIndex - 1 + LANDMARKS.length) % LANDMARKS.length;
    onSelectLandmark(LANDMARKS[prevIndex]);
  };

  const handleNextLandmark = () => {
    const nextIndex = (currentIndex + 1) % LANDMARKS.length;
    onSelectLandmark(LANDMARKS[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#161616] text-[#EDEDED] border border-[#2A2A2A] rounded-md max-w-4xl w-full shadow-2xl overflow-hidden my-auto">
        {/* Top Header Banner */}
        <div className="bg-[#161616] px-6 py-4 border-b border-[#2A2A2A] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#1F1F1F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#C5A059] tracking-[2px] uppercase">
                MA'RIFATUL ISLAM
              </h2>
              <p className="text-xs text-[#888888]">
                Game Puzzle Interaktif & Edukasi Wawasan Islam
              </p>
            </div>
          </div>

          <button
            onClick={onOpenRules}
            className="flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#EDEDED] bg-[#1F1F1F] hover:bg-[#2A2A2A] px-3 py-1.5 rounded border border-[#2A2A2A] transition-all cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Cara Bermain</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Full Intact Preview Image */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                Gambar Utuh (Acuan Canvas):
              </span>
              <span className="text-xs text-[#888888] font-mono">
                {currentIndex + 1} / {LANDMARKS.length}
              </span>
            </div>

            {/* Intact Image Frame */}
            <div className="relative group rounded overflow-hidden border border-[#C5A059]/40 shadow-xl bg-black/40 aspect-[4/3] flex items-center justify-center">
              <img
                src={selectedLandmark.imageUrl}
                alt={selectedLandmark.name}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Landmark Title overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-bold font-serif text-[#C5A059] tracking-wide">
                    {selectedLandmark.name}
                  </h3>
                  {selectedLandmark.arabicName && (
                    <span className="text-sm font-arabic text-[#EDEDED]/90">
                      {selectedLandmark.arabicName}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#888888] flex items-center gap-1 mt-0.5">
                  📍 {selectedLandmark.location}
                </p>
              </div>

              {/* Carousel Navigation Arrows */}
              <button
                onClick={handlePrevLandmark}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0C0C0C]/80 hover:bg-[#161616] text-[#C5A059] border border-[#2A2A2A] transition-all shadow-md cursor-pointer"
                title="Landmark Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextLandmark}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0C0C0C]/80 hover:bg-[#161616] text-[#C5A059] border border-[#2A2A2A] transition-all shadow-md cursor-pointer"
                title="Landmark Selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Landmark Brief Fact */}
            <div className="bg-[#1F1F1F] border border-[#2A2A2A] p-3 rounded text-xs text-[#EDEDED] leading-relaxed">
              <span className="font-semibold text-[#C5A059] block mb-1 uppercase tracking-wider text-[11px]">
                ℹ️ Sekilas Sejarah:
              </span>
              <p className="text-[#888888]">{selectedLandmark.description}</p>
            </div>

            {/* Landmark Quick Thumbnails Picker */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
              {LANDMARKS.map((lm) => (
                <button
                  key={lm.id}
                  onClick={() => onSelectLandmark(lm)}
                  className={`flex-shrink-0 w-14 h-12 rounded overflow-hidden border transition-all relative cursor-pointer ${
                    selectedLandmark.id === lm.id
                      ? 'border-[#C5A059] scale-105 shadow-md shadow-[#C5A059]/20'
                      : 'border-[#2A2A2A] opacity-60 hover:opacity-100 hover:border-[#888888]'
                  }`}
                  title={lm.name}
                >
                  <img src={lm.imageUrl} alt={lm.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Game Setup Controls */}
          <div className="md:col-span-5 flex flex-col justify-between gap-5 bg-[#1F1F1F] p-4 rounded border border-[#2A2A2A]">
            <div className="space-y-4">
              {/* Grid Difficulty Selector */}
              <div>
                <label className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Grid className="w-4 h-4 text-[#C5A059]" />
                  Pilih Ukuran Puzzle:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {GRID_CONFIGS.map((grid) => (
                    <button
                      key={grid.label}
                      onClick={() => onSelectGrid(grid)}
                      className={`p-2.5 rounded border text-left transition-all cursor-pointer ${
                        selectedGrid.totalPieces === grid.totalPieces
                          ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#C5A059] ring-1 ring-[#C5A059]'
                          : 'bg-[#161616] border-[#2A2A2A] text-[#EDEDED] hover:bg-[#262626] hover:border-[#888888]'
                      }`}
                    >
                      <div className="font-bold text-xs uppercase tracking-wider">{grid.label}</div>
                      <div className="text-[10px] text-[#888888] mt-0.5">
                        Tingkat: <span className="font-medium text-[#C5A059]">{grid.difficulty}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter Selector */}
              <div>
                <label className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-4 h-4 text-[#C5A059]" />
                  Kategori Soal Ma'rifatul Islam:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onSelectCategory(e.target.value)}
                  className="w-full bg-[#161616] border border-[#2A2A2A] text-[#EDEDED] rounded p-2.5 text-xs focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] outline-none cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#161616] text-[#EDEDED]">
                      {cat} {cat === 'Semua Kategori' ? '(130 Soal)' : ''}
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-[#888888] mt-1">
                  *Tiap potongan puzzle dibuka dengan menjawab 1 soal agama Islam.
                </p>
              </div>

              {/* Brief Game Flow Instructions */}
              <div className="bg-[#161616] border border-[#2A2A2A] p-3 rounded text-xs space-y-1.5 text-[#EDEDED]">
                <div className="font-semibold text-[#C5A059] flex items-center gap-1 uppercase tracking-wider text-[11px]">
                  <span>🧩 Alur Permainan:</span>
                </div>
                <ol className="list-decimal list-inside text-[11px] space-y-1 text-[#888888]">
                  <li>Puzzle 1 (Kiri): Klik slot tertutup untuk menjawab soal.</li>
                  <li>Jika benar, potongan puzzle akan terbuka!</li>
                  <li>Puzzle 2 (Kanan): Pasangkan potongan ke papan target.</li>
                </ol>
              </div>
            </div>

            {/* BIG START GAME BUTTON */}
            <button
              onClick={onStartGame}
              className="w-full py-3.5 px-6 rounded bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C] font-bold text-sm tracking-[1.5px] uppercase shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer font-serif"
            >
              <Play className="w-4 h-4 fill-[#0C0C0C] group-hover:translate-x-0.5 transition-transform" />
              <span>MULAI PERMAINAN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
