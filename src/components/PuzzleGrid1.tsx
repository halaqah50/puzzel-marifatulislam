import React from 'react';
import { Lock, Unlock, HelpCircle, Check, Move } from 'lucide-react';
import { PuzzlePiece, Landmark, GridDimension } from '../types';

interface PuzzleGrid1Props {
  pieces: PuzzlePiece[];
  landmark: Landmark;
  grid: GridDimension;
  selectedPieceId: string | null;
  onPieceClick: (piece: PuzzlePiece) => void;
  onDragStart: (e: React.DragEvent, piece: PuzzlePiece) => void;
}

export const PuzzleGrid1: React.FC<PuzzleGrid1Props> = ({
  pieces,
  landmark,
  grid,
  selectedPieceId,
  onPieceClick,
  onDragStart,
}) => {
  const { rows, cols } = grid;

  return (
    <div className="bg-[#161616] border border-[#2A2A2A] rounded-md p-3 sm:p-4 shadow-xl flex flex-col h-full">
      {/* Title Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2A2A2A]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <h3 className="text-base font-bold font-serif text-[#C5A059] uppercase tracking-wider">
              Puzzle 1: Brankas Potongan
            </h3>
          </div>
          <p className="text-[11px] text-[#888888] mt-0.5">
            Jawab soal untuk membuka potongan, lalu pasang ke Puzzle 2.
          </p>
        </div>

        <span className="text-xs bg-[#1F1F1F] border border-[#2A2A2A] text-[#C5A059] px-2.5 py-1 rounded font-mono">
          {pieces.filter((p) => p.isUnlocked).length} / {pieces.length} Terbuka
        </span>
      </div>

      {/* Grid Canvas Container */}
      <div
        className="grid gap-2 w-full flex-1 aspect-[4/3] bg-[#0C0C0C] p-2 rounded border border-[#2A2A2A]"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {pieces.map((piece, scrambledIdx) => {
          const isSelected = selectedPieceId === piece.id;

          // Compute cropped background position for piece.originalIndex
          const origRow = Math.floor(piece.originalIndex / cols);
          const origCol = piece.originalIndex % cols;
          const bgX = cols > 1 ? (origCol / (cols - 1)) * 100 : 0;
          const bgY = rows > 1 ? (origRow / (rows - 1)) * 100 : 0;

          if (!piece.isUnlocked) {
            // Locked Tile State
            return (
              <button
                key={piece.id}
                onClick={() => onPieceClick(piece)}
                className="group relative w-full h-full rounded border border-[#2A2A2A] bg-[#1F1F1F] hover:border-[#C5A059] flex flex-col items-center justify-center p-1 text-center transition-all duration-200 cursor-pointer overflow-hidden hover:bg-[#262626]"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161616] border border-[#2A2A2A] flex items-center justify-center text-[#888888] group-hover:text-[#C5A059] group-hover:border-[#C5A059]/50 transition-colors">
                  <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                <span className="text-[10px] sm:text-xs font-semibold text-[#888888] group-hover:text-[#C5A059] mt-1 font-mono transition-colors">
                  {String(scrambledIdx + 1).padStart(2, '0')}
                </span>

                <span className="text-[9px] text-[#888888] group-hover:text-[#C5A059] transition-colors hidden sm:block mt-0.5">
                  Buka Soal ❓
                </span>
              </button>
            );
          }

          if (piece.isPlaced) {
            // Already placed on Puzzle 2
            return (
              <div
                key={piece.id}
                className="w-full h-full rounded bg-[#161616]/60 border border-[#2A2A2A]/50 flex flex-col items-center justify-center text-[#888888]/40 p-1 opacity-40 cursor-default"
              >
                <Check className="w-4 h-4 text-[#C5A059]/60" />
                <span className="text-[9px] font-mono text-[#888888] mt-0.5">
                  #{piece.originalIndex + 1} Terpasang
                </span>
              </div>
            );
          }

          // Unlocked & Ready to place State
          return (
            <div
              key={piece.id}
              draggable
              onDragStart={(e) => onDragStart(e, piece)}
              onClick={() => onPieceClick(piece)}
              className={`relative w-full h-full rounded border overflow-hidden transition-all duration-200 cursor-grab active:cursor-grabbing hover:scale-[1.03] group ${
                isSelected
                  ? 'border-[#C5A059] ring-2 ring-[#C5A059]/50 shadow-[0_0_15px_rgba(197,160,89,0.4)] z-20 scale-[1.04]'
                  : 'border-[#C5A059]/60 hover:border-[#C5A059]'
              }`}
              style={{
                backgroundImage: `url(${landmark.imageUrl})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${bgX}% ${bgY}%`,
              }}
              title={`Potongan #${piece.originalIndex + 1} - Klik atau Drag ke Puzzle 2`}
            >
              {/* Overlay Piece Badge */}
              <div className="absolute top-1 left-1 bg-[#0C0C0C]/80 text-[#C5A059] border border-[#2A2A2A] text-[9px] font-mono px-1.5 py-0.5 rounded">
                #{piece.originalIndex + 1}
              </div>

              {/* Indicator icon */}
              <div className="absolute bottom-1 right-1 bg-[#161616]/90 text-[#EDEDED] p-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">
                <Move className="w-3 h-3 text-[#C5A059]" />
              </div>

              {isSelected && (
                <div className="absolute inset-0 bg-[#C5A059]/20 border border-[#C5A059] pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      <div className="text-[11px] text-[#888888] mt-2 text-center italic">
        Objek Saat Ini: {landmark.name}, {landmark.location}
      </div>
    </div>
  );
};
