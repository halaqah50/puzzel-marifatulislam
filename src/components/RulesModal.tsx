import React from 'react';
import { X, HelpCircle, CheckCircle2, Lock, Target, BookOpen } from 'lucide-react';

interface RulesModalProps {
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#161616] text-[#EDEDED] border border-[#2A2A2A] rounded max-w-lg w-full shadow-2xl overflow-hidden my-auto animate-in fade-in duration-200">
        {/* Header */}
        <div className="bg-[#161616] px-5 py-3.5 border-b border-[#2A2A2A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-bold text-base text-[#C5A059] font-serif uppercase tracking-wider">
              Cara Bermain — Ma'rifatul Islam
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#888888] hover:text-[#EDEDED] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs sm:text-sm text-[#EDEDED]">
          <div className="space-y-3">
            <div className="flex gap-3 bg-[#1F1F1F] p-3 rounded border border-[#2A2A2A]">
              <div className="w-7 h-7 rounded bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                1
              </div>
              <div>
                <h4 className="font-bold text-[#C5A059] uppercase tracking-wider text-xs">Lihat Gambar Utuh</h4>
                <p className="text-[#888888] text-xs mt-0.5">
                  Sebelum permainan dimulai, Anda dapat mengamati gambar utuh landmark bersejarah Islam (seperti Masjid Al Aqsa, Masjidil Haram, dll).
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-[#1F1F1F] p-3 rounded border border-[#2A2A2A]">
              <div className="w-7 h-7 rounded bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                2
              </div>
              <div>
                <h4 className="font-bold text-[#C5A059] flex items-center gap-1 uppercase tracking-wider text-xs">
                  <span>Jawab Soal di Puzzle 1 (Kiri)</span>
                  <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                </h4>
                <p className="text-[#888888] text-xs mt-0.5">
                  Klik potongan tertutup di Puzzle 1 untuk menjawab soal agama Islam. Jika jawaban benar, potongan puzzle akan terbuka!
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-[#1F1F1F] p-3 rounded border border-[#2A2A2A]">
              <div className="w-7 h-7 rounded bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                3
              </div>
              <div>
                <h4 className="font-bold text-[#C5A059] flex items-center gap-1 uppercase tracking-wider text-xs">
                  <span>Pasang ke Puzzle 2 (KANAN)</span>
                  <Target className="w-3.5 h-3.5 text-[#C5A059]" />
                </h4>
                <p className="text-[#888888] text-xs mt-0.5">
                  Klik atau geser (drag & drop) potongan yang sudah terbuka dari Puzzle 1 ke slot target di Puzzle 2.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-[#1F1F1F] p-3 rounded border border-[#2A2A2A]">
              <div className="w-7 h-7 rounded bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                4
              </div>
              <div>
                <h4 className="font-bold text-[#C5A059] flex items-center gap-1 uppercase tracking-wider text-xs">
                  <span>Selesaikan Puzzle & Dapatkan Poin</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                </h4>
                <p className="text-[#888888] text-xs mt-0.5">
                  Susun seluruh potongan hingga gambar utuh terbentuk kembali. Dapatkan skor, tingkatkan waktu, dan pelajari ilmu Islam!
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C] font-bold rounded text-xs transition-colors cursor-pointer uppercase tracking-wider mt-2 font-serif"
          >
            Paham, Mulai Main!
          </button>
        </div>
      </div>
    </div>
  );
};
