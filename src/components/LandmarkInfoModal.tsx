import React from 'react';
import { X, BookOpen, MapPin, Sparkles } from 'lucide-react';
import { Landmark } from '../types';

interface LandmarkInfoModalProps {
  landmark: Landmark;
  onClose: () => void;
}

export const LandmarkInfoModal: React.FC<LandmarkInfoModalProps> = ({ landmark, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#161616] text-[#EDEDED] border border-[#2A2A2A] rounded max-w-lg w-full shadow-2xl overflow-hidden my-auto animate-in fade-in duration-200">
        {/* Header */}
        <div className="bg-[#161616] px-5 py-3.5 border-b border-[#2A2A2A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-bold text-base text-[#C5A059] font-serif uppercase tracking-wider">
              Informasi Landmark Islami
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
        <div className="p-5 space-y-4">
          <div className="relative rounded overflow-hidden border border-[#C5A059]/30 aspect-[16/9]">
            <img src={landmark.imageUrl} alt={landmark.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <h4 className="text-lg font-bold font-serif text-[#C5A059]">{landmark.name}</h4>
              <p className="text-xs text-[#888888] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{landmark.location}</span>
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#EDEDED]">
            <div>
              <h5 className="font-semibold text-[#C5A059] mb-1 uppercase tracking-wider text-xs">Sejarah & Deskripsi:</h5>
              <p className="text-[#888888] leading-relaxed bg-[#1F1F1F] p-3 rounded border border-[#2A2A2A]">
                {landmark.description}
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-[#C5A059] mb-1 uppercase tracking-wider text-xs flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Fakta Menarik:</span>
              </h5>
              <p className="text-[#EDEDED] leading-relaxed bg-[#C5A059]/10 p-3 rounded border border-[#C5A059]/30">
                {landmark.funFact}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#C5A059] hover:bg-[#b38e49] text-[#0C0C0C] font-bold rounded text-xs transition-colors cursor-pointer uppercase tracking-wider mt-2"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
