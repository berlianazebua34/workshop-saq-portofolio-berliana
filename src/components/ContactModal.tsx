import { useEffect, useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Kolaborasi Proyek & Profil Digital');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleComposeMailto = (e: FormEvent) => {
    e.preventDefault();
    const formattedBody = [
      name ? `Halo Berliana, saya ${name}.` : 'Halo Berliana,',
      '',
      message || 'Saya tertarik untuk berdiskusi mengenai kolaborasi proyek.',
    ].join('\n');

    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(formattedBody)}`;

    setSubmittedNotice(true);
    window.location.href = mailtoUrl;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-blush-200 text-neutral-900 border border-white rounded-[28px] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup dialog kontak"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 border border-blush-300 text-neutral-700 hover:bg-obsidian-950 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-blush-500" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-blush-500">
            GET IN TOUCH
          </span>
        </div>
        <h3 id="contact-modal-title" className="font-serif text-3xl text-neutral-900 font-normal mb-2">
          Let&apos;s collaborate.
        </h3>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-5">
          Terbuka untuk diskusi proyek perkuliahan Sistem Informasi, pemrograman C++, maupun pembuatan profil digital.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-2xl bg-white/75 border border-blush-300 mb-6">
          <div className="flex items-center gap-2.5 min-w-0">
            <Mail className="w-4 h-4 text-blush-600 shrink-0" />
            <span className="text-xs font-medium text-neutral-800 truncate">{PROFILE.email}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-blush-100 hover:bg-roseGlow text-neutral-800 border border-blush-300 transition cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-blush-600" />
                <span>Disalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Email</span>
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleComposeMailto} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Nama Anda
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Nadia / Rekan Tim ITPLN"
              className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-blush-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blush-500 focus:ring-2 focus:ring-roseGlow/50"
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Topik Diskusi
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-blush-300 text-sm text-neutral-900 focus:outline-none focus:border-blush-500 focus:ring-2 focus:ring-roseGlow/50"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Pesan Singkat
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan detail kolaborasi atau pesan Anda..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-blush-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blush-500 focus:ring-2 focus:ring-roseGlow/50 resize-none"
            />
          </div>

          {submittedNotice && (
            <p className="text-xs font-medium text-blush-600 bg-white/80 px-3 py-2 rounded-xl border border-blush-300">
              Membuka aplikasi email Anda ke {PROFILE.email}. Anda juga dapat menyalin alamat email di atas.
            </p>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-700 bg-white border border-blush-300 hover:bg-blush-100 transition cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-obsidian-950 text-white hover:bg-roseGlow hover:text-obsidian-950 transition-all duration-200 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim via Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
