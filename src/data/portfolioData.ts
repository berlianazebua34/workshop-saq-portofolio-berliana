export interface RoleOption {
  id: 1 | 2;
  buttonLabel: string;
  headline: string;
  subtitle: string;
}

export interface CapabilityItem {
  id: string;
  badge: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  techStack: string;
  focus: string;
  impact: string;
  imageUrl: string;
  imageAlt: string;
  externalUrl: string;
  highlights: string[];
  codePreview?: string;
  structurePreview?: { section: string; summary: string }[];
}

export interface MilestoneItem {
  id: string;
  period: string;
  title: string;
  description: string;
}

export const PROFILE = {
  shortName: 'Berliana Putri S.Z.',
  fullName: 'Berliana Putri Sanora Zebua',
  email: 'berlianaputrizebua@gmail.com',
  location: 'Jakarta Barat, DKI Jakarta',
  university: 'Institut Teknologi PLN',
  degree: 'S1 Sistem Informasi',
  degreePeriod: 'Sep 2026 – Sekarang',
  highSchool: 'SMA Swasta Katolik Bintang Laut',
  highSchoolMajor: 'Jurusan IPA',
  highSchoolPeriod: '2023 – 2026',
  wixsiteUrl: 'https://berlianaputrizebua.wixsite.com/about-me',
  githubCppUrl: 'https://github.com/berlianazebua/cpp-program',
};

export const HERO_IMAGE = {
  url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9dAl46w97mkSoopoto8uf-k8AABg-bvFJUfD2_p-HRMmE6QSyggZLyl9lCuxIdYU8MPPu41Lh2PGk9ns781kmaUPQfy1QgzLJ3kmhPSpeMdW8Oz_WhvIW7VprthsDocbKRDmA1Wwao5sKferBxiwJUD299Miw0BeLEpOeVUuo6VefkpY0Busm2hnq2yKuxk6iU7SAmQseEUQ4CQ_8KwT6ehp7tNPbzCphY3ic6Cw',
  alt: 'Luminous ethereal translucent glowing rose-pink butterfly with soft light trails on deep obsidian background',
};

export const PORTRAIT_IMAGE = {
  url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVqAmj756jFwnXPyFdVHgvvXj5SPj13MgmUZ3lFQEo3Yui96-ijdLtedEttxoCsB2G-uoVCgVThFI62xlm3Ye1hA0ZyGBfSv3eppgbK-pCKjTHZ5SlLHfrJCX0m36A5OW1En8Ll6W9F7j8ihQDN5S8L0H2wVSAEh2mYawIJTVqeudRlGtuFG6cfeoQTsL71q3II4OZ1IwyXPf3FPaOAfHOnUO0VpEQXy8cceMYwuQ',
  alt: 'Editorial portrait of Berliana Putri Sanora Zebua with warm blush lighting',
};

export const JOURNEY_IMAGE = {
  url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEfhnTCIVm8c4aW8Es5dXqb1EvwKMhYo-rjBTC33RFNWFbW8S9zNbnLUqyS5hmV-p-MJy_f8BCrLKAoQXdO8QBAgdFc0htFmVHOGaJ5FsU-qTsQsIBDfVz2dzSWii3jmeXzK1fdK48QggvXT8SNi7mAU81jz8PXBRlvmK1YhtjXWkWHrHJMfPczuHQNBD6QOxgW6m7HDbsVlaJgjA8mbB3LclPvdIFNMhBTlwpmGc',
  alt: 'Campus life portrait of Berliana Putri Sanora Zebua starting S1 Sistem Informasi at ITPLN',
};

export const ROLES: RoleOption[] = [
  {
    id: 1,
    buttonLabel: '01 INFORMATION SYSTEMS STUDENT',
    headline: 'Information Systems Student.',
    subtitle:
      'Mahasiswa S1 Sistem Informasi di Institut Teknologi PLN yang antusias mempelajari pemrograman, pengembangan profil digital, dan kerja sama tim.',
  },
  {
    id: 2,
    buttonLabel: '02 C++ & WEB PROFILE CREATOR',
    headline: 'C++ & Web Profile Creator.',
    subtitle:
      'Mengembangkan logika pemrograman terstruktur berbasis C++ sekaligus membangun halaman profil personal dan portofolio digital melalui Wixsite.',
  },
];

export const AFFILIATIONS = [
  'INSTITUT TEKNOLOGI PLN',
  'SMA SWASTA KATOLIK BINTANG LAUT',
  'EKSKUL PRAMUKA',
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'is',
    badge: 'IS',
    title: 'Information Systems',
    description:
      'Mempelajari analisis sistem, dasar teknologi informasi, dan pengelolaan data di Institut Teknologi PLN.',
  },
  {
    id: 'cpp',
    badge: '</>',
    title: 'C++ Programming',
    description:
      'Mengembangkan logika pemrograman terstruktur, alur algoritma, dan ketelitian kode menggunakan bahasa C++.',
  },
  {
    id: 'web',
    badge: 'web',
    title: 'Web & Digital Profile',
    description:
      'Merancang halaman profil personal dan portofolio digital yang rapi serta mudah diakses melalui Wixsite.',
  },
  {
    id: 'teamwork',
    badge: 'team',
    title: 'Teamwork & Leadership',
    description:
      'Terbiasa berkolaborasi dengan disiplin dan tanggung jawab, diasah melalui pengalaman organisasi di Ekskul Pramuka (2023).',
  },
];

export const TOOLKIT_SKILLS = [
  'C++',
  'Wixsite',
  'Microsoft Word',
  'Teamwork',
  'Responsibility',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'program-cpp',
    badge: '2026 · PROGRAMMER',
    title: 'Program C++',
    description:
      'Pengembangan program berbasis bahasa C++ untuk melatih logika pemrograman dan penyelesaian masalah terstruktur.',
    techStack: 'C++',
    focus: 'Struktur logika, alur program, dan ketelitian kode.',
    impact: 'Memperkuat dasar pemrograman untuk pengembangan sistem informasi.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4BAee5N-Q_kOcHOv35KKALMhEYv3JsEjX6IW-IW8fA_dpNBGujJ_mSgcz48f25ZBSP-sjVuUfXhd-s2ZoA7v2mH4D4RCa2604R7cof9HAriB7nxzE8D_xRlSd6XobIlaBsxdcFXFyWNczGRpYX-Z2RyAwLzvXxjoMsBicuIf8U7RnZYSoZkANQYjQIO9su4WClIiF9GEKxcOJj4aX6nJaE3GUxDzr7YPQFs5BLb4',
    imageAlt:
      'Dark-themed code editor showing structured C++ programming code with pastel rose syntax accents',
    externalUrl: 'https://github.com/berlianazebua/cpp-program',
    highlights: [
      'Implementasi percabangan, perulangan, dan fungsi modular di C++',
      'Fokus pada keterbacaan alur algoritma dan validasi input sederhana',
      'Dokumentasi struktur program sebagai fondasi mata kuliah Sistem Informasi',
    ],
    codePreview: `#include <iostream>
#include <string>
using namespace std;

// Struktur logika dasar manajemen data mahasiswa
struct Mahasiswa {
    string nama;
    string prodi;
    int angkatan;
};

int main() {
    Mahasiswa mhs = {"Berliana Putri S.Z.", "S1 Sistem Informasi", 2026};
    cout << "Profil: " << mhs.nama << " (" << mhs.prodi << ")" << endl;
    return 0;
}`,
  },
  {
    id: 'project-wixsite',
    badge: '2026 · WEB & PROFILE CREATOR',
    title: 'Project Wixsite',
    description:
      'Pembuatan halaman profil dan portofolio digital interaktif melalui platform Wixsite.',
    techStack: 'Wixsite',
    focus: 'Penyajian informasi profil diri secara jelas, rapi, dan mudah diakses.',
    impact: 'Menyediakan tautan profil personal online yang terstruktur.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWJzIS25Uyo-tlmUmzzaD9wFRxmidwngLU8DgidKb8VQ4wO4CjkDHQ1DIaEZ2VUVVTEbEn3H10rABTB-ryhIzS61kG0KqmD1A6mcJ0h7-JipnNnEK0WhLE8M6jHBHprvvvHY5k85DZuxftZjsrmFjFYrlI9OOOVBm4qBsGwLEyQRzEPfDGQUHkYeTBeLT8q-N42nhp3BTM_k6p2h9Cop5vlU3pIe7Hl1MJ3MqXHOI',
    imageAlt:
      'Refined personal portfolio webpage mockup on laptop screen with blush pink and dark espresso editorial layout',
    externalUrl: 'https://berlianaputrizebua.wixsite.com/about-me',
    highlights: [
      'Penyusunan navigasi About Me, Pendidikan, dan Ringkasan Pengalaman',
      'Tata letak visual yang bersih dan responsif untuk akses desktop & mobile',
      'Tautan profil personal terpublikasi untuk kebutuhan akademik & kolaborasi',
    ],
    structurePreview: [
      { section: '01. Hero & Intro', summary: 'Perkenalan singkat dan identitas mahasiswa S1 Sistem Informasi.' },
      { section: '02. About Me', summary: 'Latar belakang pendidikan, minat teknologi, dan karakter kerja tim.' },
      { section: '03. Contact & Links', summary: 'Kanal komunikasi langsung melalui email dan tautan profil digital.' },
    ],
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: 'saq-2026',
    period: 'Workshop SAQ 2026 (2026)',
    title: 'Peserta Technical Meeting & Workshop Vibe Coding Portfolio Website',
    description:
      'Mengikuti lokakarya intensif untuk pembuatan portofolio website modern berbasis kode dan tren estetika terkini.',
  },
  {
    id: 'pramuka-2023',
    period: 'Organisasi Kepanduan (2023)',
    title: 'Anggota Aktif Ekskul Pramuka',
    description:
      'Membentuk karakter disiplin, mandiri, bertanggung jawab, kepemimpinan, dan kerja sama tim yang tangguh.',
  },
];

export const SOCIAL_LINKS = [
  { label: 'WhatsApp', href: 'https://wa.me/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Website (Wixsite)', href: 'https://berlianaputrizebua.wixsite.com/about-me' },
];
