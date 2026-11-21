import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  variant?: 'dark' | 'blush';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Portfolio Visual',
  variant = 'dark',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center p-6 text-center ${
          variant === 'dark'
            ? 'bg-gradient-to-br from-obsidian-850 via-obsidian-900 to-obsidian-950 text-roseGlow'
            : 'bg-gradient-to-br from-blush-100 via-blush-200 to-blush-300 text-blush-600'
        } ${className}`}
      >
        <Sparkles className="w-7 h-7 mb-2 opacity-80" aria-hidden="true" />
        <span className="font-serif text-base font-medium tracking-wide">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
