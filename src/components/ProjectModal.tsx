import { useEffect } from 'react';
import { ArrowUpRight, Code2, Globe, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-obsidian-900 border border-roseGlow/35 rounded-[28px] shadow-2xl glow-rose-md text-[#FBF4F4]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail proyek"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-obsidian-950/85 border border-roseGlow/40 text-[#FBF4F4] hover:bg-roseGlow hover:text-obsidian-950 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-roseGlow"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden bg-obsidian-950 border-b border-white/10">
          <ResilientImage
            src={project.imageUrl}
            alt={project.imageAlt}
            fallbackTitle={project.title}
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-obsidian-950/85 text-roseGlow border border-roseGlow/40 backdrop-blur-md">
              {project.badge}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 id="project-modal-title" className="font-serif text-3xl sm:text-4xl text-white font-normal mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/10 py-5 text-xs">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-roseGlow mb-1">Tech Stack</p>
              <p className="text-neutral-200 font-medium">{project.techStack}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-roseGlow mb-1">Fokus Utama</p>
              <p className="text-neutral-200 leading-relaxed">{project.focus}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-roseGlow mb-1">Dampak</p>
              <p className="text-neutral-200 leading-relaxed">{project.impact}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-roseGlow mb-3">
              Key Highlights
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-roseGlow mt-0.5" aria-hidden="true">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.codePreview && (
            <div className="rounded-2xl bg-obsidian-950 border border-white/10 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-roseGlow mb-3">
                <Code2 className="w-4 h-4" />
                <span>Contoh Struktur Kode C++</span>
              </div>
              <pre className="text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed">
                <code>{project.codePreview}</code>
              </pre>
            </div>
          )}

          {project.structurePreview && (
            <div className="rounded-2xl bg-obsidian-950 border border-white/10 p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-roseGlow">
                <Globe className="w-4 h-4" />
                <span>Struktur Halaman Profil Wixsite</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.structurePreview.map((item) => (
                  <div key={item.section} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-semibold text-white mb-1">{item.section}</p>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-neutral-200 border border-white/15 hover:border-roseGlow/50 transition cursor-pointer"
            >
              Tutup
            </button>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-roseGlow text-obsidian-950 hover:bg-roseGlow-bright glow-rose-sm transition"
            >
              <span>Kunjungi Tautan Proyek</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
