import React, { useState, useEffect, useCallback } from 'react';
import { Landmark, GridDimension, PuzzlePiece, GameStatus, GameStats, Question } from './types';
import { LANDMARKS, GRID_CONFIGS } from './data/landmarks';
import { getRandomQuestion } from './data/questions';
import { soundManager } from './utils/audio';

import { Header } from './components/Header';
import { PreGameModal } from './components/PreGameModal';
import { PuzzleGrid1 } from './components/PuzzleGrid1';
import { PuzzleGrid2 } from './components/PuzzleGrid2';
import { QuestionModal } from './components/QuestionModal';
import { VictoryModal } from './components/VictoryModal';
import { LandmarkInfoModal } from './components/LandmarkInfoModal';
import { RulesModal } from './components/RulesModal';
import { Sparkles, Eye, BookOpen, RefreshCw } from 'lucide-react';

export default function App() {
  // Game Setup State
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark>(LANDMARKS[0]);
  const [selectedGrid, setSelectedGrid] = useState<GridDimension>(GRID_CONFIGS[0]); // 3x3 default
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Kategori');

  // Active Game State
  const [gameStatus, setGameStatus] = useState<GameStatus>('PREVIEW');
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPieceToPlace, setSelectedPieceToPlace] = useState<PuzzlePiece | null>(null);

  // Question State
  const [activeQuestionPiece, setActiveQuestionPiece] = useState<PuzzlePiece | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<number[]>([]);

  // UI Modals
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getIsMuted());
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  // Stats
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    questionsAnswered: 0,
    timeSeconds: 0,
    streak: 0,
  });

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStatus === 'PLAYING') {
      timer = setInterval(() => {
        setStats((prev) => ({ ...prev, timeSeconds: prev.timeSeconds + 1 }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStatus]);

  // Start New Game Procedure
  const handleStartGame = useCallback(() => {
    soundManager.playClick();
    const { totalPieces } = selectedGrid;

    // Generate pieces 0..totalPieces-1
    const originalIndexes = Array.from({ length: totalPieces }, (_, i) => i);
    // Shuffle positions for Puzzle 1
    const shuffledPositions = [...originalIndexes].sort(() => Math.random() - 0.5);

    const initialPieces: PuzzlePiece[] = originalIndexes.map((origIdx, i) => ({
      id: `piece-${origIdx}`,
      originalIndex: origIdx,
      scrambledIndex: shuffledPositions[i],
      isUnlocked: false,
      isPlaced: false,
      placedAtSlot: null,
    }));

    // Sort pieces by scrambledIndex so Puzzle 1 renders them scrambled
    initialPieces.sort((a, b) => a.scrambledIndex - b.scrambledIndex);

    setPieces(initialPieces);
    setSelectedPieceToPlace(null);
    setActiveQuestionPiece(null);
    setCurrentQuestion(null);
    setUsedQuestionIds([]);
    setStats({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      questionsAnswered: 0,
      timeSeconds: 0,
      streak: 0,
    });
    setGameStatus('PLAYING');
  }, [selectedGrid]);

  // Handle Clicking a Piece in Puzzle 1
  const handlePieceClickInPuzzle1 = (piece: PuzzlePiece) => {
    soundManager.playClick();

    if (!piece.isUnlocked) {
      // Locked Piece -> Open Question Modal!
      const q = getRandomQuestion(usedQuestionIds, selectedCategory);
      setCurrentQuestion(q);
      setActiveQuestionPiece(piece);
    } else if (!piece.isPlaced) {
      // Unlocked Piece -> Select to place onto Puzzle 2
      if (selectedPieceToPlace?.id === piece.id) {
        setSelectedPieceToPlace(null);
      } else {
        setSelectedPieceToPlace(piece);
      }
    }
  };

  // Handle Answering Question
  const handleAnswerCorrect = () => {
    if (!activeQuestionPiece || !currentQuestion) return;

    // Update used questions
    setUsedQuestionIds((prev) => [...prev, currentQuestion.id]);

    // Unlock piece in Puzzle 1
    setPieces((prevPieces) =>
      prevPieces.map((p) => (p.id === activeQuestionPiece.id ? { ...p, isUnlocked: true } : p))
    );

    // Update stats
    setStats((prev) => {
      const newStreak = prev.streak + 1;
      const scoreGain = 100 + newStreak * 20;
      return {
        ...prev,
        score: prev.score + scoreGain,
        correctAnswers: prev.correctAnswers + 1,
        questionsAnswered: prev.questionsAnswered + 1,
        streak: newStreak,
      };
    });
  };

  const handleAnswerWrong = () => {
    if (!currentQuestion) return;

    setUsedQuestionIds((prev) => [...prev, currentQuestion.id]);

    setStats((prev) => ({
      ...prev,
      wrongAnswers: prev.wrongAnswers + 1,
      questionsAnswered: prev.questionsAnswered + 1,
      streak: 0,
    }));
  };

  const handleCloseQuestionModal = () => {
    setActiveQuestionPiece(null);
    setCurrentQuestion(null);
  };

  // Place Piece into Target Slot on Puzzle 2
  const placePieceAtSlot = (targetSlotIndex: number) => {
    if (!selectedPieceToPlace) return;

    soundManager.playSnap();

    setPieces((prevPieces) => {
      const updated = prevPieces.map((p) => {
        if (p.id === selectedPieceToPlace.id) {
          return {
            ...p,
            isPlaced: true,
            placedAtSlot: targetSlotIndex,
          };
        }
        return p;
      });

      // Check if all pieces are placed
      const allPlaced = updated.every((p) => p.isPlaced);
      if (allPlaced) {
        setTimeout(() => {
          setGameStatus('COMPLETED');
        }, 300);
      }

      return updated;
    });

    // Award accuracy bonus score
    if (selectedPieceToPlace.originalIndex === targetSlotIndex) {
      setStats((prev) => ({ ...prev, score: prev.score + 150 }));
    }

    setSelectedPieceToPlace(null);
  };

  // Drag & Drop handlers
  const handleDragStart = (e: React.DragEvent, piece: PuzzlePiece) => {
    if (!piece.isUnlocked || piece.isPlaced) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text/plain', piece.id);
    setSelectedPieceToPlace(piece);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetSlotIndex: number) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const targetPiece = pieces.find((p) => p.id === pieceId);
    if (targetPiece && targetPiece.isUnlocked && !targetPiece.isPlaced) {
      setSelectedPieceToPlace(targetPiece);
      placePieceAtSlot(targetSlotIndex);
    }
  };

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#EDEDED] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#0C0C0C]">
      {/* App Header Bar */}
      <Header
        landmark={selectedLandmark}
        stats={stats}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenRules={() => setShowRulesModal(true)}
        onOpenPreview={() => setShowPreviewModal(true)}
        onOpenInfo={() => setShowInfoModal(true)}
        onRestart={() => setGameStatus('PREVIEW')}
      />

      {/* Main Game Arena */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col justify-center">
        {gameStatus === 'PLAYING' && (
          <div className="space-y-4">
            {/* Status Guide Banner */}
            <div className="bg-[#161616] border border-[#C5A059]/40 p-3 rounded-lg flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[#EDEDED]">
                  {selectedPieceToPlace ? (
                    <strong className="text-[#C5A059]">
                      Potongan #{selectedPieceToPlace.originalIndex + 1} dipilih! Klik slot di Puzzle 2 untuk memasang.
                    </strong>
                  ) : (
                    <span>
                      Klik slot tertutup di <strong className="text-[#C5A059]">Puzzle 1 (Kiri)</strong> untuk menjawab soal Ma'rifatul Islam.
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#C5A059] font-medium">
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Acuan Gambar</span>
                </button>
              </div>
            </div>

            {/* Split Screen 2 Puzzles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 min-h-[480px]">
              {/* PUZZLE 1 (KIRI) */}
              <PuzzleGrid1
                pieces={pieces}
                landmark={selectedLandmark}
                grid={selectedGrid}
                selectedPieceId={selectedPieceToPlace?.id || null}
                onPieceClick={handlePieceClickInPuzzle1}
                onDragStart={handleDragStart}
              />

              {/* PUZZLE 2 (KANAN) */}
              <PuzzleGrid2
                pieces={pieces}
                landmark={selectedLandmark}
                grid={selectedGrid}
                selectedPiece={selectedPieceToPlace}
                onSlotClick={placePieceAtSlot}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              />
            </div>
          </div>
        )}
      </main>

      {/* Pre-Game Setup / Intact Preview Modal */}
      {gameStatus === 'PREVIEW' && (
        <PreGameModal
          selectedLandmark={selectedLandmark}
          onSelectLandmark={setSelectedLandmark}
          selectedGrid={selectedGrid}
          onSelectGrid={setSelectedGrid}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onStartGame={handleStartGame}
          onOpenRules={() => setShowRulesModal(true)}
        />
      )}

      {/* Question Modal when clicking locked tile */}
      {currentQuestion && activeQuestionPiece && (
        <QuestionModal
          question={currentQuestion}
          pieceIndex={activeQuestionPiece.originalIndex}
          onAnswerCorrect={handleAnswerCorrect}
          onAnswerWrong={handleAnswerWrong}
          onClose={handleCloseQuestionModal}
        />
      )}

      {/* Victory Modal when puzzle solved */}
      {gameStatus === 'COMPLETED' && (
        <VictoryModal
          landmark={selectedLandmark}
          stats={stats}
          grid={selectedGrid}
          onPlayAgain={() => setGameStatus('PREVIEW')}
        />
      )}

      {/* Rules Guide Modal */}
      {showRulesModal && (
        <RulesModal onClose={() => setShowRulesModal(false)} />
      )}

      {/* Landmark Historical Info Modal */}
      {showInfoModal && (
        <LandmarkInfoModal landmark={selectedLandmark} onClose={() => setShowInfoModal(false)} />
      )}

      {/* Quick Intact Image Reference Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-[#C5A059] p-5 rounded-md max-w-lg w-full shadow-2xl text-center space-y-3">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <h3 className="font-serif font-bold text-[#C5A059] text-base tracking-wider uppercase">
                Acuan Gambar Utuh: {selectedLandmark.name}
              </h3>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="text-[#888888] hover:text-[#EDEDED] text-xs font-bold px-2 py-1 bg-[#2A2A2A] rounded transition-colors cursor-pointer"
              >
                Tutup ✕
              </button>
            </div>
            <div className="rounded overflow-hidden border border-[#2A2A2A] aspect-[4/3]">
              <img src={selectedLandmark.imageUrl} alt={selectedLandmark.name} className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => setShowPreviewModal(false)}
              className="w-full py-2.5 bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C] font-bold rounded text-xs transition-colors cursor-pointer uppercase tracking-wider"
            >
              Kembali ke Game
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#161616] border-t border-[#2A2A2A] py-3 px-4 text-center text-xs text-[#888888]">
        <p className="tracking-wide">
          MA'RIFATUL ISLAM — Game Puzzle Interaktif Islami | Media Pembelajaran Agama Islam
        </p>
      </footer>
    </div>
  );
}
