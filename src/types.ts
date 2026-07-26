export type QuestionType = 'boolean' | 'multiple_choice';

export type CategoryType = 
  | 'Akidah' 
  | 'Ibadah' 
  | 'Akhlak' 
  | 'Al-Qur\'an' 
  | 'Sejarah Islam' 
  | 'Adab Sehari-Hari' 
  | 'Pilar Islami';

export interface Question {
  id: number;
  category: CategoryType;
  text: string;
  type: QuestionType;
  options: string[];
  correctIndex: number; // 0-based index of correct option
  explanation?: string;
}

export interface Landmark {
  id: string;
  name: string;
  arabicName?: string;
  location: string;
  imageUrl: string;
  description: string;
  funFact: string;
}

export interface PuzzlePiece {
  id: string;
  originalIndex: number; // 0 to N-1 (correct position in 2D grid)
  scrambledIndex: number; // position in Puzzle 1 grid
  isUnlocked: boolean; // unlocked via answering question
  isPlaced: boolean; // placed on Puzzle 2
  placedAtSlot: number | null; // slot index in Puzzle 2 (null if not placed)
}

export type GameStatus = 'PREVIEW' | 'PLAYING' | 'QUESTION' | 'COMPLETED';

export interface GridDimension {
  rows: number;
  cols: number;
  totalPieces: number;
  label: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan' | 'Ahli';
}

export interface GameStats {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  questionsAnswered: number;
  timeSeconds: number;
  streak: number;
}
