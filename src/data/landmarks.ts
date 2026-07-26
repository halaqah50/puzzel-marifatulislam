import { Landmark } from '../types';
import alAqsaImg from '../assets/images/masjid_al_aqsa_1785025323529.jpg';
import haramImg from '../assets/images/masjidil_haram_1785025336835.jpg';
import nabawiImg from '../assets/images/masjid_nabawi_1785025349067.jpg';
import istiqlalImg from '../assets/images/masjid_istiqlal_1785025362560.jpg';

export const LANDMARKS: Landmark[] = [
  {
    id: 'masjid-al-aqsa',
    name: 'Masjid Al-Aqsa & Kubah As-Sakhrah',
    arabicName: 'المسجد الأقصى',
    location: 'Yerusalem, Palestina',
    imageUrl: alAqsaImg,
    description: 'Kiblat pertama umat Islam dan tempat persinggahan Isra Mi\'raj Nabi Muhammad SAW sebelum naik ke Sidratul Muntaha.',
    funFact: 'Masjid Al-Aqsa merupakan masjid tertua kedua yang dibangun di bumi setelah Masjidil Haram.'
  },
  {
    id: 'masjidil-haram',
    name: 'Masjidil Haram & Ka\'bah',
    arabicName: 'المسجد الحرام',
    location: 'Makkah Al-Mukarramah, Arab Saudi',
    imageUrl: haramImg,
    description: 'Masjid teragung di dunia tempat berdirinya Ka\'bah, kiblat suci seluruh Umat Islam dalam melaksanakan ibadah shalat.',
    funFact: 'Pahala shalat di Masjidil Haram berlipat ganda hingga 100.000 kali lipat dibandingkan shalat di tempat lain.'
  },
  {
    id: 'masjid-nabawi',
    name: 'Masjid Nabawi',
    arabicName: 'المسجد النبوي',
    location: 'Madinah Al-Munawwarah, Arab Saudi',
    imageUrl: nabawiImg,
    description: 'Masjid suci kedua yang dibangun oleh Rasulullah SAW setelah berhijrah. Di dalamnya terdapat Raudhah Syarifah dan makam Nabi SAW.',
    funFact: 'Pahala satu kali shalat di Masjid Nabawi bernilai setara dengan 1.000 kali shalat di masjid lainnya.'
  },
  {
    id: 'masjid-istiqlal',
    name: 'Masjid Istiqlal',
    arabicName: 'مسجد الاستقلال',
    location: 'Jakarta, Indonesia',
    imageUrl: istiqlalImg,
    description: 'Masjid terbesar di Asia Tenggara yang didirikan sebagai lambang wujud syukur atas kemerdekaan bangsa Indonesia.',
    funFact: 'Nama "Istiqlal" berasal dari bahasa Arab yang bermakna Kemerdekaan, dirancang oleh arsitek Frederich Silaban.'
  }
];

export const GRID_CONFIGS = [
  {
    rows: 3,
    cols: 3,
    totalPieces: 9,
    label: '3x3 (9 Potongan)',
    difficulty: 'Mudah' as const
  },
  {
    rows: 3,
    cols: 4,
    totalPieces: 12,
    label: '3x4 (12 Potongan)',
    difficulty: 'Sedang' as const
  },
  {
    rows: 4,
    cols: 4,
    totalPieces: 16,
    label: '4x4 (16 Potongan)',
    difficulty: 'Tantangan' as const
  },
  {
    rows: 5,
    cols: 5,
    totalPieces: 25,
    label: '5x5 (25 Potongan)',
    difficulty: 'Ahli' as const
  }
];
