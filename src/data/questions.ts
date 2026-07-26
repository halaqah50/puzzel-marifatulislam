import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // --- A. Soal Benar / Salah (1-15) ---
  {
    id: 1,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Rukun Islam berjumlah lima.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Rukun Islam ada 5: Syahadat, Shalat, Zakat, Puasa Ramadhan, dan Haji bagi yang mampu.'
  },
  {
    id: 2,
    category: 'Akidah',
    type: 'boolean',
    text: 'Nabi Muhammad SAW adalah nabi terakhir (Khatamun Nabiyyin).',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Nabi Muhammad SAW adalah penutup para nabi dan rasul Allah.'
  },
  {
    id: 3,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Al-Qur\'an terdiri dari 120 surat.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Al-Qur\'an terdiri dari 114 surat, 30 juz, dan 6.236 ayat.'
  },
  {
    id: 4,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Shalat lima waktu wajib dilaksanakan oleh setiap muslim yang baligh dan berakal.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Shalat fardhu 5 waktu hukumnya fardhu \'ain bagi setiap Muslim baligh & berakal.'
  },
  {
    id: 5,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Puasa Ramadhan dilaksanakan selama satu bulan penuh.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Umat Islam berpuasa di bulan Ramadhan selama 29 atau 30 hari.'
  },
  {
    id: 6,
    category: 'Akidah',
    type: 'boolean',
    text: 'Malaikat Jibril bertugas mencabut nyawa manusia.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Malaikat Jibril bertugas menyampaikan wahyu, sedangkan mencabut nyawa adalah tugas Malaikat Izrail.'
  },
  {
    id: 7,
    category: 'Akidah',
    type: 'boolean',
    text: 'Asmaul Husna berjumlah 99 nama Allah yang maha indah.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Allah memiliki 99 nama-nama indah dan sifat sempurna (Asmaul Husna).'
  },
  {
    id: 8,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Sedekah hanya boleh diberikan kepada orang kaya.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Sedekah diutamakan untuk fakir miskin, anak yatim, dan yang membutuhkan.'
  },
  {
    id: 9,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Membaca basmalah sebelum makan merupakan sunnah Rasulullah SAW.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Mengucapkan Bismillah sebelum makan membawa keberkahan pada makanan.'
  },
  {
    id: 10,
    category: 'Sejarah Islam',
    type: 'boolean',
    text: 'Ka\'bah berada di Kota Madinah.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Ka\'bah (Masjidil Haram) terletak di Kota Makkah Al-Mukarramah.'
  },
  {
    id: 11,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Wudhu membatalkan shalat.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Wudhu adalah syarat sah shalat untuk bersuci dari hadats kecil.'
  },
  {
    id: 12,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Berbohong merupakan akhlak yang dianjurkan dalam Islam.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Berbohong (dusta) termasuk dosa dan ciri sifat munafik. Islam mewajibkan kejujuran.'
  },
  {
    id: 13,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Al-Qur\'an diturunkan pertama kali di Gua Hira.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Wahyu pertama (Surah Al-\'Alaq 1-5) turun di Gua Hira kepada Nabi Muhammad SAW.'
  },
  {
    id: 14,
    category: 'Akidah',
    type: 'boolean',
    text: 'Rukun Iman terdiri dari enam perkara.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Rukun Iman 6: Iman kepada Allah, Malaikat, Kitab, Rasul, Hari Kiamat, serta Qada & Qadar.'
  },
  {
    id: 15,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Islam mengajarkan untuk saling menghormati sesama manusia.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Islam adalah agama rahmatan lil \'alamin yang menjunjung tinggi toleransi dan rasa hormat.'
  },

  // --- B. Soal Pilihan Ganda (16-30) ---
  {
    id: 16,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Siapa nabi terakhir penutup para anbiya?',
    options: ['Nabi Musa AS', 'Nabi Isa AS', 'Nabi Muhammad SAW', 'Nabi Ibrahim AS'],
    correctIndex: 2,
    explanation: 'Nabi Muhammad SAW adalah Nabi dan Rasul terakhir yang diutus oleh Allah SWT.'
  },
  {
    id: 17,
    category: 'Pilar Islami',
    type: 'multiple_choice',
    text: 'Jumlah Rukun Islam adalah...',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanation: 'Rukun Islam ada 5 perkara.'
  },
  {
    id: 18,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Kitab suci utama umat Islam adalah...',
    options: ['Taurat', 'Injil', 'Al-Qur\'an', 'Zabur'],
    correctIndex: 2,
    explanation: 'Al-Qur\'an adalah kitab suci penutup yang diturunkan kepada Nabi Muhammad SAW.'
  },
  {
    id: 19,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Malaikat yang bertugas menyampaikan wahyu adalah...',
    options: ['Malaikat Israfil', 'Malaikat Mikail', 'Malaikat Jibril', 'Malaikat Malik'],
    correctIndex: 2,
    explanation: 'Malaikat Jibril AS menyampaikan wahyu Allah SWT kepada para Rasul.'
  },
  {
    id: 20,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Kiblat umat Islam dalam melaksanakan shalat menghadap ke...',
    options: ['Masjid Nabawi', 'Palestina', 'Ka\'bah (Makkah)', 'Gunung Uhud'],
    correctIndex: 2,
    explanation: 'Kiblat shalat umat Islam adalah Ka\'bah di Masjidil Haram Makkah.'
  },
  {
    id: 21,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Surat pertama dalam urutan mushaf Al-Qur\'an adalah...',
    options: ['Surat Al-Ikhlas', 'Surat Yasin', 'Surat Al-Fatihah', 'Surat An-Nas'],
    correctIndex: 2,
    explanation: 'Surat Al-Fatihah (Pembuka) adalah surat ke-1 dalam Al-Qur\'an.'
  },
  {
    id: 22,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Berapa jumlah shalat fardhu/wajib dalam sehari semalam?',
    options: ['3 Waktu', '4 Waktu', '5 Waktu', '6 Waktu'],
    correctIndex: 2,
    explanation: 'Shalat fardhu 5 waktu: Subuh, Dzuhur, Ashar, Maghrib, Isya.'
  },
  {
    id: 23,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Puasa wajib dilaksanakan oleh umat Islam pada bulan...',
    options: ['Muharram', 'Syawal', 'Ramadhan', 'Rajab'],
    correctIndex: 2,
    explanation: 'Bulan Ramadhan adalah bulan penuh berkah untuk menunaikan puasa wajib.'
  },
  {
    id: 24,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Nabi yang mendapat julukan Abul Anbiya (Bapak Para Nabi) adalah...',
    options: ['Nabi Adam AS', 'Nabi Nuh AS', 'Nabi Ibrahim AS', 'Nabi Musa AS'],
    correctIndex: 2,
    explanation: 'Nabi Ibrahim AS dijuluki Abul Anbiya karena dari keturunannya lahir banyak para nabi.'
  },
  {
    id: 25,
    category: 'Adab Sehari-Hari',
    type: 'multiple_choice',
    text: 'Membaca "Bismillah" sebelum makan termasuk hukum...',
    options: ['Makruh', 'Haram', 'Sunnah', 'Wajib'],
    correctIndex: 2,
    explanation: 'Mengucapkan Bismillah sebelum aktivitas kebaikan adalah Sunnah Rasulullah.'
  },
  {
    id: 26,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Rukun Iman yang pertama adalah...',
    options: ['Iman kepada Rasul', 'Iman kepada Allah SWT', 'Iman kepada Kitab', 'Iman kepada Hari Akhir'],
    correctIndex: 1,
    explanation: 'Rukun Iman ke-1 adalah beriman dan meyakini Allah SWT.'
  },
  {
    id: 27,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Hari raya umat Islam yang dirayakan setelah menunaikan puasa Ramadhan adalah...',
    options: ['Idul Adha', 'Idul Fitri', 'Maulid Nabi', 'Isra Mi\'raj'],
    correctIndex: 1,
    explanation: 'Idul Fitri dirayakan pada tanggal 1 Syawal setelah Ramadhan.'
  },
  {
    id: 28,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Siapa malaikat yang bertugas mencatat amal baik manusia?',
    options: ['Malaikat Malik', 'Malaikat Munkar', 'Malaikat Nakir', 'Malaikat Raqib'],
    correctIndex: 3,
    explanation: 'Malaikat Raqib mencatat amal kebaikan, sedangkan Atid mencatat amal keburukan.'
  },
  {
    id: 29,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Perilaku berikut yang menunjukkan akhlak mulia (Mahmudah) adalah...',
    options: ['Berbohong', 'Mencuri', 'Menghina teman', 'Menolong orang lain'],
    correctIndex: 3,
    explanation: 'Saling menolong dalam kebaikan adalah perbuatan teruji dan terpuji.'
  },
  {
    id: 30,
    category: 'Adab Sehari-Hari',
    type: 'multiple_choice',
    text: 'Mengucapkan salam ketika bertemu sesama muslim hukumnya...',
    options: ['Haram', 'Makruh', 'Sunnah', 'Mubah'],
    correctIndex: 2,
    explanation: 'Mengucapkan salam adalah Sunnah yang dianjurkan, dan menjawabnya hukumnya Wajib.'
  },

  // --- KATEGORI 1 — AKIDAH (31-45) ---
  {
    id: 31,
    category: 'Akidah',
    type: 'boolean',
    text: 'Allah SWT Maha Melihat (Al-Bashir) segala sesuatu di langit dan bumi.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Al-Bashir artinya Allah Maha Melihat segala perbuatan hamba-Nya.'
  },
  {
    id: 32,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Sifat Asmaul Husna Allah yang berarti Maha Pengasih adalah...',
    options: ['Al-Malik', 'Ar-Rahman', 'Al-Quddus', 'Al-\'Aziz'],
    correctIndex: 1,
    explanation: 'Ar-Rahman artinya Maha Pengasih kepada seluruh makhluk.'
  },
  {
    id: 33,
    category: 'Akidah',
    type: 'boolean',
    text: 'Allah SWT memiliki 99 Asmaul Husna.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Nama-nama indah Allah (Asmaul Husna) ada 99.'
  },
  {
    id: 34,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Iman kepada kitab-kitab Allah termasuk Rukun Iman ke...',
    options: ['Rukun ke-2', 'Rukun ke-3', 'Rukun ke-4', 'Rukun ke-5'],
    correctIndex: 1,
    explanation: 'Urutan Rukun Iman: 1. Allah, 2. Malaikat, 3. Kitab, 4. Rasul, 5. Hari Akhir, 6. Qada & Qadar.'
  },
  {
    id: 35,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Kitab suci yang diturunkan kepada Nabi Musa AS adalah...',
    options: ['Taurat', 'Injil', 'Zabur', 'Al-Qur\'an'],
    correctIndex: 0,
    explanation: 'Kitab Taurat diturunkan kepada Nabi Musa AS.'
  },
  {
    id: 36,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Kitab Zabur diwahyukan oleh Allah SWT kepada Nabi...',
    options: ['Nabi Musa AS', 'Nabi Isa AS', 'Nabi Daud AS', 'Nabi Ibrahim AS'],
    correctIndex: 2,
    explanation: 'Kitab Zabur diturunkan kepada Nabi Daud AS.'
  },
  {
    id: 37,
    category: 'Akidah',
    type: 'boolean',
    text: 'Hari Kiamat (Yaumul Qiyamah) pasti akan datang.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Setiap Muslim wajib meyakini kedatangan hari kiamat.'
  },
  {
    id: 38,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Beriman kepada qada dan qadar (ketetapan Allah) termasuk Rukun Iman ke...',
    options: ['4', '5', '6', '7'],
    correctIndex: 2,
    explanation: 'Rukun Iman ke-6 adalah iman kepada Qada dan Qadar.'
  },
  {
    id: 39,
    category: 'Akidah',
    type: 'boolean',
    text: 'Allah SWT tidak pernah ngantuk dan tidak pernah tidur (Al-Hayyu Al-Qayyuum).',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Dalam Ayat Kursi dijelaskan Allah tidak mengantuk dan tidak tidur.'
  },
  {
    id: 40,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Malaikat diciptakan oleh Allah SWT dari...',
    options: ['Tanah', 'Air', 'Cahaya (Nur)', 'Api'],
    correctIndex: 2,
    explanation: 'Malaikat diciptakan dari Nur (Cahaya), Jin dari Api, dan Manusia dari Tanah.'
  },
  {
    id: 41,
    category: 'Akidah',
    type: 'boolean',
    text: 'Jin diciptakan dari kobaran api yang sangat panas.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Jin diciptakan dari nyala api (Maarij min naar).'
  },
  {
    id: 42,
    category: 'Akidah',
    type: 'boolean',
    text: 'Nabi dan Rasul adalah manusia pilihan Allah SWT yang diberi wahyu.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Nabi & Rasul utusan Allah menyampaikan kabar gembira dan peringatan.'
  },
  {
    id: 43,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Maksud dari iman kepada Rasul Allah adalah...',
    options: [
      'Hanya percaya kepada satu nabi saja',
      'Percaya dan meyakini seluruh Rasul utusan Allah',
      'Menganggap nabi sebagai tuhan',
      'Tidak mempercayai kitab-kitab nabi'
    ],
    correctIndex: 1,
    explanation: 'Iman kepada Rasul berarti meyakini bahwa Allah mengutus para Rasul sebagai pemandu manusia.'
  },
  {
    id: 44,
    category: 'Akidah',
    type: 'multiple_choice',
    text: 'Jumlah Nabi dan Rasul yang wajib diketahui oleh umat Islam adalah...',
    options: ['20 Rasul', '25 Rasul', '30 Rasul', '40 Rasul'],
    correctIndex: 1,
    explanation: 'Ada 25 Nabi dan Rasul yang namanya disebutkan dalam Al-Qur\'an.'
  },
  {
    id: 45,
    category: 'Akidah',
    type: 'boolean',
    text: 'Nabi Adam AS adalah manusia pertama yang diciptakan oleh Allah SWT.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Nabi Adam AS dijuluki Abul Basyar (Bapak seluruh manusia).'
  },

  // --- KATEGORI 2 — IBADAH (46-60) ---
  {
    id: 46,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Shalat Subuh terdiri atas berapa rakaat?',
    options: ['3 rakaat', '2 rakaat', '4 rakaat', '5 rakaat'],
    correctIndex: 1,
    explanation: 'Shalat Subuh dilaksanakan 2 rakaat di waktu fajar.'
  },
  {
    id: 47,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Shalat Maghrib dilaksanakan sebanyak...',
    options: ['2 rakaat', '3 rakaat', '4 rakaat', '5 rakaat'],
    correctIndex: 1,
    explanation: 'Shalat Maghrib berjumlah 3 rakaat saat matahari terbenam.'
  },
  {
    id: 48,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Sebelum melaksanakan shalat, seorang muslim hendaknya bersuci dengan...',
    options: ['Tidur', 'Makan', 'Berwudhu', 'Bermain'],
    correctIndex: 2,
    explanation: 'Berwudhu adalah syarat sah bersuci dari hadats kecil sebelum shalat.'
  },
  {
    id: 49,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Adzan adalah panggilan penanda masuknya waktu shalat fardhu.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Adzan dikumandangkan muazin untuk mengundang shalat berjamaah.'
  },
  {
    id: 50,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Hukum melaksanakan Puasa Ramadhan bagi muslim baligh adalah...',
    options: ['Sunnah', 'Wajib', 'Makruh', 'Haram'],
    correctIndex: 1,
    explanation: 'Puasa Ramadhan adalah Rukun Islam ke-4 yang hukumnya wajib.'
  },
  {
    id: 51,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Zakat fitrah hendaknya dibayarkan paling lambat sebelum...',
    options: ['Shalat Idul Fitri', 'Shalat Jumat', 'Shalat Subuh Hari Raya', 'Hari Raya Idul Adha'],
    correctIndex: 0,
    explanation: 'Zakat fitrah wajib dikeluarkan sebelum Shalat Idul Fitri dilaksanakan.'
  },
  {
    id: 52,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Umat Islam yang mampu secara fisik dan finansial wajib menunaikan...',
    options: ['Umrah saja', 'Ibadah Haji', 'Sedekah saja', 'Nazar'],
    correctIndex: 1,
    explanation: 'Ibadah Haji ke Makkah adalah Rukun Islam ke-5 bagi yang mampu (istitha\'ah).'
  },
  {
    id: 53,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Bersuci pengganti wudhu menggunakan debu yang suci disebut...',
    options: ['Mandi wajib', 'Tayamum', 'Istinja\'', 'Sujud sahwi'],
    correctIndex: 1,
    explanation: 'Tayamum adalah rukhsah bersuci dengan debu bersih ketika tidak ada air.'
  },
  {
    id: 54,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Berwudhu membatalkan puasa seseorang.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Wudhu tidak membatalkan puasa, asalkan tidak tertelan air wudhu dengan sengaja.'
  },
  {
    id: 55,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Menghadap ke arah kiblat (Ka\'bah) merupakan salah satu syarat sah shalat.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Menghadap kiblat wajib dilakukan saat shalat.'
  },
  {
    id: 56,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Jumlah total rakaat shalat fardhu lima waktu dalam sehari semalam adalah...',
    options: ['12 rakaat', '15 rakaat', '17 rakaat', '20 rakaat'],
    correctIndex: 2,
    explanation: 'Subuh(2) + Dzuhur(4) + Ashar(4) + Maghrib(3) + Isya(4) = 17 rakaat.'
  },
  {
    id: 57,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Shalat Jumat hukumnya wajib bagi laki-laki Muslim yang sehat dan mukim.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Shalat Jumat wajib berjamaah 2 rakaat didahului khutbah bagi laki-laki.'
  },
  {
    id: 58,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Puasa sunnah di bulan Syawal dianjurkan dilakukan selama...',
    options: ['3 hari', '5 hari', '6 hari', '7 hari'],
    correctIndex: 2,
    explanation: 'Puasa sunnah Syawal 6 hari pahalanya seperti berpuasa setahun penuh.'
  },
  {
    id: 59,
    category: 'Ibadah',
    type: 'boolean',
    text: 'Takbiratul ihram (Allahu Akbar) dilakukan di awal pembuka shalat.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Takbiratul ihram adalah rukun fi\'li awal memulainya ibadah shalat.'
  },
  {
    id: 60,
    category: 'Ibadah',
    type: 'multiple_choice',
    text: 'Doa qunut dalam tradisi mazhab Syafi\'i biasanya dibaca pada shalat...',
    options: ['Dzuhur', 'Ashar', 'Subuh', 'Isya'],
    correctIndex: 2,
    explanation: 'Doa qunut dibaca pada rakaat kedua Shalat Subuh setelah iktidal.'
  },

  // --- KATEGORI 3 — AKHLAK (61-75) ---
  {
    id: 61,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Mengucapkan salam "Assalamu\'alaikum" adalah akhlak mulia penebar kedamaian.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Menebarkan salam menumbuhkan rasa kasih sayang sesama muslim.'
  },
  {
    id: 62,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Berbohong dan berdusta merupakan perbuatan dosa yang dibenci Allah.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Kejujuran menuntun ke kebaikan, sedangkan kebohongan menuntun ke keburukan.'
  },
  {
    id: 63,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Bentuk akhlak terpuji terhadap kedua orang tua (Birrul Walidain) adalah...',
    options: ['Membentak mereka', 'Berbakti dan patuh', 'Acuh tak acuh', 'Melawan perintah baik'],
    correctIndex: 1,
    explanation: 'Berbakti kepada orang tua adalah perintah Allah setelah tauhid.'
  },
  {
    id: 64,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Sikap sopan dan menghormati guru di sekolah merupakan...',
    options: ['Akhlak tercela', 'Akhlak terpuji (Mahmudah)', 'Perbuatan yang merugikan', 'Sifat tercela'],
    correctIndex: 1,
    explanation: 'Guru adalah pemandu ilmu yang wajib dihormati dan didoakan.'
  },
  {
    id: 65,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Sifat terpuji "Amanah" yang dimiliki Rasulullah SAW berarti...',
    options: ['Pemarah', 'Dapat dipercaya', 'Suka menyendiri', 'Sombong'],
    correctIndex: 1,
    explanation: 'Amanah artinya jujur, bertanggung jawab, dan dapat dipercaya.'
  },
  {
    id: 66,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Mengucapkan terima kasih dan bersyukur termasuk adab mulia dalam Islam.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Barangsiapa tidak bersyukur kepada manusia, ia belum bersyukur kepada Allah.'
  },
  {
    id: 67,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Islam sangat melarang sifat Takabbur, yaitu sifat...',
    options: ['Rendah hati (Tawadhu)', 'Sombong dan membanggakan diri', 'Jujur', 'Sabar'],
    correctIndex: 1,
    explanation: 'Tidak akan masuk surga orang yang di hatinya terdapat kesombongan.'
  },
  {
    id: 68,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Menolong teman yang sedang kesulitan akan mendapat pahala dari Allah.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Allah akan senantiasa menolong hamba-Nya selama hamba itu menolong saudaranya.'
  },
  {
    id: 69,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Perilaku menggunjing atau membicarakan keburukan orang lain disebut...',
    options: ['Ghibah', 'Riya\'', 'Hasad', 'Ananiyah'],
    correctIndex: 0,
    explanation: 'Ghibah diibaratkan seperti memakan daging saudaranya yang sudah mati.'
  },
  {
    id: 70,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Memaafkan kesalahan orang lain merupakan salah satu ciri akhlak mulia.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Sifat pemaaf adalah keluhuran budi pekerti yang dicintai Allah.'
  },
  {
    id: 71,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Bersedekah akan membuat harta kita berkurang dan habis selamanya.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Sedekah tidak akan mengurangi harta, melainkan membawa keberkahan dan ganti melimpah.'
  },
  {
    id: 72,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Orang yang sabar dalam menghadapi ujian akan mendapatkan...',
    options: ['Kerugian', 'Pahala tanpa batas', 'Dosa', 'Kekecewaan'],
    correctIndex: 1,
    explanation: 'Sesungguhnya Allah bersama orang-orang yang sabar dan memberi pahala tanpa batas.'
  },
  {
    id: 73,
    category: 'Akhlak',
    type: 'multiple_choice',
    text: 'Sifat "Ikhlas" dalam beramal memiliki arti...',
    options: [
      'Melakukan sesuatu karena ingin dipuji teman',
      'Melakukan sesuatu semata-mata karena mengharap rida Allah',
      'Menginginkan imbalan uang yang banyak',
      'Terpaksa mengerjakan ibadah'
    ],
    correctIndex: 1,
    explanation: 'Ikhlas adalah memurnikan niat ibadah hanya untuk Allah SWT.'
  },
  {
    id: 74,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Menghina atau mengejek teman adalah perbuatan akhlak yang baik.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Islam melarang saling mencela dan memanggil dengan julukan buruk.'
  },
  {
    id: 75,
    category: 'Akhlak',
    type: 'boolean',
    text: 'Senyum yang tulus kepada saudara muslim bernilai ibadah sedekah.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Senyummu di hadapan saudaramu adalah sedekah (HR. Tirmidzi).'
  },

  // --- KATEGORI 4 — AL-QUR'AN (76-90) ---
  {
    id: 76,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Al-Qur\'an secara keseluruhan terdiri atas berapa surat?',
    options: ['100 surat', '110 surat', '114 surat', '120 surat'],
    correctIndex: 2,
    explanation: 'Jumlah surat dalam Al-Qur\'an adalah 114 surat.'
  },
  {
    id: 77,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Surat penutup atau surat terakhir dalam susunan Al-Qur\'an adalah...',
    options: ['Surat Al-Fatihah', 'Surat Al-Ikhlas', 'Surat An-Nas', 'Surat Al-Falaq'],
    correctIndex: 2,
    explanation: 'Surat An-Nas adalah surat ke-114 (terakhir).'
  },
  {
    id: 78,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Surat Al-Ikhlas terdiri atas berapa ayat?',
    options: ['3 ayat', '4 ayat', '5 ayat', '6 ayat'],
    correctIndex: 1,
    explanation: 'Surat Al-Ikhlas berisi 4 ayat menegaskan keesaan Allah.'
  },
  {
    id: 79,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Surat Al-Fatihah mendapat julukan Ummul Kitab (Induk Al-Qur\'an).',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Al-Fatihah dinamai Ummul Kitab karena merangkum seluruh inti ajaran Al-Qur\'an.'
  },
  {
    id: 80,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Setiap membaca satu huruf Al-Qur\'an diganjar dengan 10 kebaikan.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Membaca Al-Qur\'an bernilai pahala melimpah per satu hurufnya.'
  },
  {
    id: 81,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Kata pertama dari wahyu pertama Al-Qur\'an yang diturunkan adalah...',
    options: ['Al-Hamdu', 'Iqra\' (Bacalah)', 'Qul', 'Subhanallah'],
    correctIndex: 1,
    explanation: 'Wahyu pertama diawali dengan perintah "Iqra\'" (Bacalah) dalam Surah Al-\'Alaq.'
  },
  {
    id: 82,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Al-Qur\'an diturunkan secara bertahap kepada Nabi Muhammad selama...',
    options: ['10 tahun', '15 tahun', '23 tahun', '30 tahun'],
    correctIndex: 2,
    explanation: 'Masa turunnya Al-Qur\'an berlangsung sekitar 22 tahun 2 bulan 22 hari (±23 tahun).'
  },
  {
    id: 83,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Membaca Al-Qur\'an tanpa menjaga adab bersuci dan kesopanan diperbolehkan.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Membaca Al-Qur\'an hendaknya dalam keadaan suci dan khusyuk menghadap kiblat.'
  },
  {
    id: 84,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Al-Qur\'an mulai diturunkan pada malam yang mulia, yaitu malam...',
    options: ['Nisfu Sya\'ban', 'Lailatul Qadar', 'Isra Mi\'raj', 'Mawlid'],
    correctIndex: 1,
    explanation: 'Innaa anzalnaahu fii lailatil qadr (Malam Lailatul Qadar).'
  },
  {
    id: 85,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Surat terpanjang dalam Al-Qur\'an yang berisi 286 ayat adalah...',
    options: ['Surat Al-Baqarah', 'Surat Ali \'Imran', 'Surat An-Nisa\'', 'Surat Al-Ma\'idah'],
    correctIndex: 0,
    explanation: 'Surat Al-Baqarah (Sapi Betina) adalah surat terpanjang.'
  },
  {
    id: 86,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Surat terpendek dalam Al-Qur\'an yang hanya terdiri dari 3 ayat adalah...',
    options: ['Surat Al-Ikhlas', 'Surat Al-Kautsar', 'Surat An-Nas', 'Surat Al-Asr'],
    correctIndex: 1,
    explanation: 'Surat Al-Kautsar adalah surat terpendek (3 ayat).'
  },
  {
    id: 87,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Huruf dasar penulisan bahasa Arab / Al-Qur\'an (Hijaiyah) berjumlah...',
    options: ['25 huruf', '28 huruf', '29 huruf', '30 huruf'],
    correctIndex: 2,
    explanation: 'Huruf Hijaiyah standar berjumlah 29 huruf dari Alif hingga Ya.'
  },
  {
    id: 88,
    category: 'Al-Qur\'an',
    type: 'multiple_choice',
    text: 'Sebelum membaca ayat-ayat Al-Qur\'an dianjurkan membaca...',
    options: ['Takbir', 'Ta\'awudz & Basmalah', 'Shalawat', 'Salam'],
    correctIndex: 1,
    explanation: 'Membaca Ta\'awudz (A\'udzubillahi minash-shaitanir-rajim) memohon perlindungan Allah.'
  },
  {
    id: 89,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Al-Qur\'an adalah pedoman dan petunjuk hidup (Hudan lin-naas) bagi seluruh manusia.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Al-Qur\'an memberikan petunjuk ke jalan yang lurus dan kebenaran.'
  },
  {
    id: 90,
    category: 'Al-Qur\'an',
    type: 'boolean',
    text: 'Mushaf Al-Qur\'an harus kita junjung tinggi dan dirawat dengan penuh kehormatan.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Menghormati kitab suci Al-Qur\'an adalah bukti ketakwaan.'
  },

  // --- KATEGORI 5 — SEJARAH ISLAM (91-105) ---
  {
    id: 91,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Nabi Muhammad SAW dilahirkan di kota suci...',
    options: ['Makkah Al-Mukarramah', 'Madinah Al-Munawwarah', 'Yerusalem', 'Thaif'],
    correctIndex: 0,
    explanation: 'Nabi Muhammad SAW lahir pada Tahun Gajah di Kota Makkah.'
  },
  {
    id: 92,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Peristiwa Hijrah Nabi Muhammad SAW dan para sahabat adalah perjalanan menuju...',
    options: ['Makkah', 'Madinah (Yatsrib)', 'Mesir', 'Sham'],
    correctIndex: 1,
    explanation: 'Nabi berhijrah ke Madinah yang menjadi awal penanggalan Tahun Hijriyah.'
  },
  {
    id: 93,
    category: 'Sejarah Islam',
    type: 'boolean',
    text: 'Sahabat Abu Bakar Ash-Shiddiq RA adalah Khalifah pertama dalam Khulafaur Rasyidin.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Abu Bakar RA memimpin kekhalifahan pertama setelah wafatnya Nabi SAW.'
  },
  {
    id: 94,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Sahabat Umar bin Khattab RA adalah Khalifah ke...',
    options: ['Khalifah 1', 'Khalifah 2', 'Khalifah 3', 'Khalifah 4'],
    correctIndex: 1,
    explanation: 'Urutan Khulafaur Rasyidin: 1. Abu Bakar, 2. Umar bin Khattab, 3. Utsman, 4. Ali.'
  },
  {
    id: 95,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Khalifah yang dikenal menyatukan bacaan Al-Qur\'an dalam Mushaf Utsmani adalah...',
    options: ['Abu Bakar RA', 'Umar bin Khattab RA', 'Utsman bin Affan RA', 'Ali bin Abi Thalib RA'],
    correctIndex: 2,
    explanation: 'Khalifah Utsman bin Affan RA membukukan dan menggandakan Mushaf Al-Qur\'an.'
  },
  {
    id: 96,
    category: 'Sejarah Islam',
    type: 'boolean',
    text: 'Sahabat Ali bin Abi Thalib RA adalah khalifah ke-4 Khulafaur Rasyidin.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Ali bin Abi Thalib RA adalah sepupu dan menantu Nabi SAW serta khalifah ke-4.'
  },
  {
    id: 97,
    category: 'Sejarah Islam',
    type: 'boolean',
    text: 'Perang Badar Kubra dimenangkan secara gemilang oleh pasukan kaum Muslimin.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Dengan pertolongan Allah, 313 pasukan muslim menang melawan 1000 pasukan musuh.'
  },
  {
    id: 98,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Masjid pertama yang dibangun Nabi Muhammad SAW saat berhijrah adalah...',
    options: ['Masjid Quba', 'Masjid Nabawi', 'Masjidil Haram', 'Masjid Al-Aqsa'],
    correctIndex: 0,
    explanation: 'Masjid Quba adalah masjid pertama yang didirikan atas dasar takwa.'
  },
  {
    id: 99,
    category: 'Sejarah Islam',
    type: 'boolean',
    text: 'Peristiwa Isra Mi\'raj adalah perjalanan mukjizat Nabi menerima perintah shalat 5 waktu.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Nabi diajak malam hari dari Makkah ke Al-Aqsa lalu naik ke Sidratul Muntaha.'
  },
  {
    id: 100,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Nabi Muhammad SAW wafat di Madinah pada usia...',
    options: ['60 tahun', '62 tahun', '63 tahun', '65 tahun'],
    correctIndex: 2,
    explanation: 'Nabi Muhammad SAW wafat pada hari Senin tanggal 12 Rabiul Awal usia 63 tahun.'
  },
  {
    id: 101,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Paman Nabi yang sangat membenci dan memusuhi dakwah tauhid adalah...',
    options: ['Hamzah bin Abdul Muthalib', 'Abbas bin Abdul Muthalib', 'Abu Talib', 'Abu Lahab'],
    correctIndex: 3,
    explanation: 'Abu Lahab dan istrinya menentang keras dakwah Nabi hingga diabadikan di Surah Al-Lahab.'
  },
  {
    id: 102,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Istri pertama Nabi Muhammad SAW yang paling dicintai dan setia mendukung dakwah adalah...',
    options: ['Aisyah binti Abu Bakar', 'Khadijah binti Khuwailid', 'Hafsah binti Umar', 'Sawdah binti Zam\'ah'],
    correctIndex: 1,
    explanation: 'Sayyidatinah Khadijah Al-Kubra RA adalah orang pertama yang beriman kepada Nabi.'
  },
  {
    id: 103,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Muazin pertama dalam sejarah Islam yang bersuara merdu dan teguh keimanannya adalah...',
    options: ['Bilal bin Rabah', 'Abdullah bin Mas\'ud', 'Zaid bin Haritsah', 'Abu Hurairah'],
    correctIndex: 0,
    explanation: 'Bilal bin Rabah RA adalah muazin pertama Rasulullah SAW.'
  },
  {
    id: 104,
    category: 'Sejarah Islam',
    type: 'boolean',
    text: 'Perjanjian Hudaibiyah terjadi antara pihak kaum Muslimin Madinah dan kaum Quraisy Makkah.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Perjanjian gencatan senjata yang membuka jalan kemenangan Fathu Makkah.'
  },
  {
    id: 105,
    category: 'Sejarah Islam',
    type: 'multiple_choice',
    text: 'Peristiwa Fathu Makkah bermakna perayaan...',
    options: ['Perang Besar di Makkah', 'Penaklukan/Pembebasan Kota Makkah secara damai', 'Perpindahan ke luar Makkah', 'Pembangunan Ka\'bah'],
    correctIndex: 1,
    explanation: 'Pembebasan Makkah tanpa pertumpahan darah pada tahun 8 Hijriyah.'
  },

  // --- KATEGORI 6 — ADAB SEHARI-HARI (106-120) ---
  {
    id: 106,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Saat memasuki rumah hendaknya kita mengucapkan salam.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Mengucapkan salam membawa keberkahan bagi penghuni rumah.'
  },
  {
    id: 107,
    category: 'Adab Sehari-Hari',
    type: 'multiple_choice',
    text: 'Masuk ke dalam masjid dianjurkan mendahulukan kaki...',
    options: ['Kaki Kanan', 'Kaki Kiri', 'Kedua kaki sekaligus', 'Bebas mana saja'],
    correctIndex: 0,
    explanation: 'Sunnah mendahulukan kaki kanan saat memasuki tempat mulia seperti masjid.'
  },
  {
    id: 108,
    category: 'Adab Sehari-Hari',
    type: 'multiple_choice',
    text: 'Ketika keluar dari rumah atau masjid, dianjurkan melangkah dengan kaki...',
    options: ['Kaki Kanan', 'Kaki Kiri', 'Kedua kaki', 'Bebas'],
    correctIndex: 1,
    explanation: 'Mendahulukan kaki kiri saat keluar tempat ibadah sambil berdoa.'
  },
  {
    id: 109,
    category: 'Adab Sehari-Hari',
    type: 'multiple_choice',
    text: 'Saat makan dan minum, adab Islami mengajarkan untuk menggunakan...',
    options: ['Tangan Kiri', 'Tangan Kanan', 'Kedua Tangan', 'Gigi saja'],
    correctIndex: 1,
    explanation: 'Rasulullah SAW bersabda: Makanlah dengan tangan kananmu dan ambil yang terdekat.'
  },
  {
    id: 110,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Tidur dengan posisi miring ke kanan dan menghadap kiblat adalah adab yang dianjurkan.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Rasulullah mencontohkan tidur berbantal tangan kanan menghadap kiblat.'
  },
  {
    id: 111,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Minum sambil berdiri lebih utama dan lebih sehat daripada minum sambil duduk.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Islam dan ilmu kesehatan menganjurkan minum sambil duduk dengan tenang.'
  },
  {
    id: 112,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Sebelum memulai aktivitas belajar, hendaknya kita membaca doa terlebih dahulu.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Berdoa "Rabbi zidnii \'ilman warzuqnii fahman" memohon kurnia ilmu.'
  },
  {
    id: 113,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Mengucapkan "Alhamdulillah" saat selesai bersin adalah adab Islami.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Orang yang bersin memuji Allah dengan Alhamdulillah, lalu dijawab Yarhamukallah.'
  },
  {
    id: 114,
    category: 'Adab Sehari-Hari',
    type: 'multiple_choice',
    text: 'Hukum menjawab ucapan salam sesama muslim adalah...',
    options: ['Sunnah', 'Wajib (Fardhu)', 'Makruh', 'Mubah'],
    correctIndex: 1,
    explanation: 'Memulai salam adalah sunnah, sedangkan menjawab salam hukumnya wajib.'
  },
  {
    id: 115,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Membuang sampah sembarangan adalah perilaku teruji yang dianjurkan.',
    options: ['Benar', 'Salah'],
    correctIndex: 1,
    explanation: 'Menjaga kebersihan tempat umum dan menyingkirkan gangguan di jalan adalah sedekah.'
  },
  {
    id: 116,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Menjaga kebersihan badan, pakaian, dan lingkungan adalah bagian dari iman.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'An-Nadhafatu minal iimaan (Kebersihan adalah sebagian dari iman).'
  },
  {
    id: 117,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Meminta izin dan mengetuk pintu sebelum masuk rumah orang lain adalah adab wajib.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Al-Qur\'an mengajarkan meminta izin dan mengucapkan salam sebelum memasuki rumah orang.'
  },
  {
    id: 118,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Memuliakan tamu yang berkunjung merupakan bukti keimanan kepada Allah dan Hari Akhir.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Barangsiapa beriman kepada Allah & Hari Akhir, hendaklah ia memuliakan tamunya.'
  },
  {
    id: 119,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Mengucapkan "Insya Allah" saat berjanji melakukan sesuatu di masa depan adalah adab baik.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Insya Allah artinya "Jika Allah menghendaki".'
  },
  {
    id: 120,
    category: 'Adab Sehari-Hari',
    type: 'boolean',
    text: 'Mengakhiri doa dengan mengaminkan ("Aamiin") artinya "Kabulkanlah wahai Allah".',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Aamiin adalah permohonan agar Allah berkenan mengabulkan doa kita.'
  },

  // --- KATEGORI 7 — PILAR ISLAMI (121-130) ---
  {
    id: 121,
    category: 'Pilar Islami',
    type: 'multiple_choice',
    text: 'Pondasi utama kehidupan beragama seorang Muslim adalah...',
    options: ['Akidah Tauhid', 'Kekayaan', 'Pangkat Jabatan', 'Gelar Kehormatan'],
    correctIndex: 0,
    explanation: 'Akidah tauhid yang lurus adalah landasan utama diterimanya seluruh ibadah.'
  },
  {
    id: 122,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Akhlak mulia seseorang merupakan cerminan kesempurnaan keimanannya.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Mukmin yang paling sempurna imannya adalah yang paling baik akhlaknya.'
  },
  {
    id: 123,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Ilmu yang dipelajari hendaknya diamalkan dalam kehidupan nyata.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Ilmu tanpa amal bagaikan pohon yang tidak berbuah.'
  },
  {
    id: 124,
    category: 'Pilar Islami',
    type: 'multiple_choice',
    text: 'Hukum menuntut ilmu (Thalabul \'ilmi) bagi setiap Muslim dan Muslimah adalah...',
    options: ['Sunnah', 'Wajib (Fardhu)', 'Mubah', 'Makruh'],
    correctIndex: 1,
    explanation: 'Menuntut ilmu wajib bagi setiap Muslim dari ayunan hingga liang lahat.'
  },
  {
    id: 125,
    category: 'Pilar Islami',
    type: 'multiple_choice',
    text: 'Tali ikatan persaudaraan kasih sayang sesama umat Islam disebut...',
    options: ['Ukhuwah Islamiyah', 'Silaturahmi biasa', 'Musyawarah', 'Toleransi'],
    correctIndex: 0,
    explanation: 'Innamal mu\'minuuna ikhwah (Sesungguhnya orang-orang beriman itu bersaudara).'
  },
  {
    id: 126,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Islam mengajarkan keseimbangan (Tawazun) antara ibadah akhirat dan urusan dunia.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Seorang muslim berikhtiar mencari rezeki halal sekaligus rajin beribadah.'
  },
  {
    id: 127,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Musyawarah dianjurkan dalam mengambil keputusan bersama demi kebaikan bersama.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Musyawarah mencerminkan persatuan dan kebijaksanaan Islam.'
  },
  {
    id: 128,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Menjaga kelestarian alam lingkungan adalah bentuk amanah manusia sebagai khalifah di bumi.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: 'Manusia bertugas merawat bumi dan tidak berbuat kerusakan.'
  },
  {
    id: 129,
    category: 'Pilar Islami',
    type: 'boolean',
    text: 'Kejujuran (Siddiq) merupakan salah satu sifat wajib Rasulullah SAW.',
    options: ['Benar', 'Salah'],
    correctIndex: 0,
    explanation: '4 sifat wajib Rasul: Siddiq (Jujur), Amanah (Terpercaya), Tabligh (Sampaikan), Fathanah (Cerdas).'
  },
  {
    id: 130,
    category: 'Pilar Islami',
    type: 'multiple_choice',
    text: 'Tujuan utama dari seluruh ibadah dan ikhtiar hidup seorang Muslim adalah...',
    options: ['Mengejar Kekayaan', 'Mengejar Popularitas', 'Mencari Kekuasaan', 'Memperoleh Rida Allah SWT'],
    correctIndex: 3,
    explanation: 'Mencapai Rida Allah SWT (Mardhatillah) dan surga-Nya adalah cita-cita tertinggi setiap Muslim.'
  }
];

export function getQuestionsByCategory(category?: string): Question[] {
  if (!category || category === 'Semua Kategori') {
    return QUESTIONS_DATA;
  }
  return QUESTIONS_DATA.filter((q) => q.category === category);
}

export function getRandomQuestion(
  usedQuestionIds: number[] = [],
  category?: string
): Question {
  const pool = getQuestionsByCategory(category).filter(
    (q) => !usedQuestionIds.includes(q.id)
  );

  if (pool.length === 0) {
    // Reset pool if all used
    const fullPool = getQuestionsByCategory(category);
    const randIndex = Math.floor(Math.random() * fullPool.length);
    return fullPool[randIndex];
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}
