import React from 'react';
import { Target, CheckCircle2, Sparkles } from 'lucide-react';
import { PuzzlePiece, Landmark, GridDimension } from '../types';

interface PuzzleGrid2Props {
  pieces: PuzzlePiece[];
  landmark: Landmark;
  grid: GridDimension;
  selectedPiece: PuzzlePiece | null;
  onSlotClick: (slotIndex: number) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, slotIndex: number) => void;
}

export const PuzzleGrid2: React.FC<PuzzleGrid2Props> = ({
  pieces,
  landmark,
  grid,
  selectedPiece,
  onSlotClick,
  onDragOver,
  onDrop,
}) => {
  const { rows, cols, totalPieces } = grid;

  // Map slot index (0..totalPieces-1) to piece placed at that slot
  const slotMap: (PuzzlePiece | undefined)[] = Array.from({ length: totalPieces }).map(
    (_, slotIdx) => pieces.find((p) => p.isPlaced && p.placedAtSlot === slotIdx)
  );

  const placedCount = pieces.filter((p) => p.isPlaced).length;
  const isComplete = placedCount === totalPieces;

  return (
    <div className="bg-[#161616] border border-[#2A2A2A] rounded-md p-3 sm:p-4 shadow-xl flex flex-col h-full">
      {/* Title Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2A2A2A]">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#C5A059]" />
            <h3 className="text-base font-bold font-serif text-[#C5A059] uppercase tracking-wider">
              Puzzle 2: Kanvas Utama
            </h3>
          </div>
          <p className="text-[11px] text-[#888888] mt-0.5">
            Susunlah potongan untuk melihat keajaiban arsitektur.
          </p>
        </div>

        <span className="text-xs bg-[#1F1F1F] border border-[#2A2A2A] text-[#C5A059] px-2.5 py-1 rounded font-mono">
          {placedCount} / {totalPieces} Terpasang
        </span>
      </div>

      {/* Grid Canvas Container */}
      <div
        className="grid gap-2 w-full flex-1 aspect-[4/3] bg-[rgba(0,0,0,0.4)] p-2 rounded border border-[#2A2A2A] relative"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {slotMap.map((placedPiece, slotIdx) => {
          const isTargetHighlight = selectedPiece !== null && !placedPiece;

          if (placedPiece) {
            // Compute cropped background position for piece.originalIndex
            const origRow = Math.floor(placedPiece.originalIndex / cols);
            const origCol = placedPiece.originalIndex % cols;
            const bgX = cols > 1 ? (origCol / (cols - 1)) * 100 : 0;
            const bgY = rows > 1 ? (origRow / (rows - 1)) * 100 : 0;

            const isCorrectSlot = placedPiece.originalIndex === slotIdx;

            return (
              <div
                key={`slot-${slotIdx}`}
                className={`relative w-full h-full rounded border overflow-hidden shadow-md transition-all ${
                  isCorrectSlot
                    ? 'border-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.2)]'
                    : 'border-[#C5A059]/60'
                }`}
                style={{
                  backgroundImage: `url(${landmark.imageUrl})`,
                  backgroundSize: `${cols * 100}% ${rows * 100}%`,
                  backgroundPosition: `${bgX}% ${bgY}%`,
                }}
              >
                {/* Checkmark overlay */}
                <div className="absolute top-1 right-1 bg-[#161616]/90 text-[#C5A059] rounded-full p-0.5 shadow">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>

                <div className="absolute bottom-1 left-1 bg-[#0C0C0C]/80 text-[#888888] text-[9px] font-mono px-1 py-0.2 rounded">
                  Pos {slotIdx + 1}
                </div>
              </div>
            );
          }

          // Empty Blank Slot
          return (
            <div
              key={`empty-slot-${slotIdx}`}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, slotIdx)}
              onClick={() => onSlotClick(slotIdx)}
              className={`group relative w-full h-full rounded border flex flex-col items-center justify-center p-1 text-center transition-all duration-200 cursor-pointer ${
                isTargetHighlight
                  ? 'border-[#C5A059] bg-[#C5A059]/10 hover:bg-[#C5A059]/20 shadow-[0_0_12px_rgba(197,160,89,0.3)]'
                  : 'border-[#2A2A2A] bg-[#161616]/40 hover:border-[#C5A059]/60 hover:bg-[#1F1F1F]'
              }`}
            >
              <div className="text-[10px] sm:text-xs font-mono text-[#888888] group-hover:text-[#C5A059] transition-colors">
                {String(slotIdx + 1).padStart(2, '0')}
              </div>

              {isTargetHighlight && (
                <span className="text-[9px] text-[#C5A059] font-medium mt-1 uppercase tracking-wider hidden sm:inline-block">
                  Pasang Sini 🎯
                </span>
              )}
            </div>
          );
        })}

        {/* Completion celebration highlight */}
        {isComplete && (
          <div className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-[2px] border-2 border-[#C5A059] rounded flex items-center justify-center pointer-events-none">
            <div className="bg-[#161616] text-[#C5A059] px-5 py-3 rounded border border-[#C5A059] font-serif font-bold text-lg flex items-center gap-2 shadow-2xl tracking-wider uppercase">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
              <span>Puzzle Sempurna Terpasang!</span>
            </div>
          </div>
        )}
      </div>

      <div className="text-[11px] text-[#888888] mt-2 text-center italic">
        Susunlah potongan untuk melihat keajaiban arsitektur
      </div>
    </div>
  );
};
