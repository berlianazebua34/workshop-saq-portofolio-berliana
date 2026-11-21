/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Globe,
  GraduationCap,
  MapPin,
  Menu,
  School,
  Users,
  X,
} from 'lucide-react';
import {
  AFFILIATIONS,
  CAPABILITIES,
  HERO_IMAGE,
  JOURNEY_IMAGE,
  MILESTONES,
  PORTRAIT_IMAGE,
  PROFILE,
  PROJECTS,
  ROLES,
  SOCIAL_LINKS,
  TOOLKIT_SKILLS,
  type ProjectItem,
} from './data/portfolioData';
import { ResilientImage } from './components/ResilientImage';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';

const NAV_ITEMS = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'JOURNEY', href: '#journey' },
];

export default function App() {
  const [activeRoleId, setActiveRoleId] = useState<1 | 2>(1);
  const [activeNav, setActiveNav] = useState<string>('#hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const activeRole = ROLES.find((r) => r.id === activeRoleId) ?? ROLES[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2600);
    } catch {
      setContactOpen(true);
    }
  };

  const renderCapabilityBadge = (id: string) => {
    switch (id) {
      case 'is':
        return <span className="font-bold text-sm">IS</span>;
      case 'cpp':
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
      case 'web':
        return <Globe className="w-4 h-4" aria-hidden="true" />;
      case 'teamwork':
        return <Users className="w-4 h-4" aria-hidden="true" />;
      default:
        return <span className="font-bold text-sm">✦</span>;
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-950 font-sans text-neutral-800 antialiased selection:bg-roseGlow selection:text-obsidian-950">
      {/* Main Hero Container */}
      <div className="relative w-full px-2 sm:px-4 pt-3 pb-8 max-w-7xl mx-auto">
        <header className="relative bg-obsidian-900 text-[#FBF4F4] rounded-[36px] overflow-hidden border border-roseGlow/25 glow-rose-md pb-12 sm:pb-16 pt-5 px-5 sm:px-10 lg:px-12 editorial-dots">
          {/* Top Ambient Gradient Light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-roseGlow/15 rounded-full blur-[120px]"
          />

          {/* Primary Navigation (3-zone Top Bar) */}
          <nav
            aria-label="Primary Navigation"
            className="relative z-20 flex items-center justify-between gap-8 pb-6 sm:pb-8 border-b border-white/10"
          >
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={() => setActiveNav('#hero')}
              className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-roseGlow rounded-md"
            >
              <span className="w-2 h-2 rounded-full bg-roseGlow inline-block" aria-hidden="true" />
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#FBF4F4] group-hover:text-roseGlow transition duration-200">
                {PROFILE.shortName}
              </span>
            </a>

            {/* Zone 2: Desktop Menu Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest-plus text-neutral-300">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className={`whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-roseGlow focus-visible:outline-2 focus-visible:outline-roseGlow rounded-sm ${
                      isActive ? 'text-roseGlow' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Zone 3: Primary CTA + Mobile Toggle */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-roseGlow text-obsidian-950 hover:bg-roseGlow-bright transition-all duration-200 glow-rose-sm hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                CONTACT
              </button>
              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/15 text-[#FBF4F4] hover:border-roseGlow/60 flex items-center justify-center transition cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>

          {/* Mobile Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden relative z-20 mt-4 p-4 rounded-2xl bg-obsidian-850/95 border border-roseGlow/25 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest-plus transition ${
                    activeNav === item.href
                      ? 'bg-roseGlow/15 text-roseGlow'
                      : 'text-neutral-200 hover:bg-white/5 hover:text-roseGlow'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Hero Main Grid */}
          <div
            id="hero"
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 sm:pt-14 items-center"
          >
            {/* Left Hero Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-roseGlow/30 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-roseGlow" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-roseGlow">
                  PORTFOLIO · BERLIANA PUTRI SANORA ZEBUA
                </span>
              </div>

              {/* Editorial Serif Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FBF4F4] leading-[1.08] mb-6 [text-wrap:balance]">
                <span className="block italic text-roseGlow/90 font-normal">
                  Design with purpose.
                </span>
                <span className="block font-medium transition-opacity duration-200">
                  {activeRole.headline}
                </span>
              </h1>

              {/* Subtitle / Bio summary */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-light">
                {activeRole.subtitle}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-9">
                <a
                  href="#projects"
                  onClick={() => setActiveNav('#projects')}
                  className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-roseGlow text-obsidian-950 hover:bg-roseGlow-bright glow-rose-md hover:glow-rose-lg transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#about"
                  onClick={() => setActiveNav('#about')}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white/5 text-neutral-200 border border-white/15 hover:border-roseGlow/60 hover:text-white transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  ABOUT ME
                </a>
              </div>

              {/* Interactive Role Switcher Pills */}
              <div
                className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10"
                role="group"
                aria-label="Pilih fokus peran"
              >
                {ROLES.map((role) => {
                  const isActive = role.id === activeRoleId;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setActiveRoleId(role.id)}
                      aria-pressed={isActive}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[11px] font-semibold tracking-wider cursor-pointer transition-all duration-200 whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-roseGlow/20 border border-roseGlow text-roseGlow glow-rose-sm'
                          : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-neutral-200 hover:border-white/25'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? 'bg-roseGlow' : 'bg-neutral-500'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{role.buttonLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Hero Visual Stage */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-roseGlow/30 via-roseGlow/10 to-transparent glow-rose-md border border-roseGlow/40">
                <div className="relative rounded-2xl overflow-hidden bg-obsidian-950 aspect-[4/3] sm:aspect-square flex items-center justify-center">
                  <ResilientImage
                    src={HERO_IMAGE.url}
                    alt={HERO_IMAGE.alt}
                    fallbackTitle="Berliana Putri S.Z."
                    className="w-full h-full object-cover object-center hover:scale-105 transition duration-700"
                  />
                  {/* Soft Rose Rim Overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-roseGlow/15"
                  />
                  {/* Floating Glass Badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass-obsidian p-3 rounded-2xl border border-roseGlow/30 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-roseGlow/20 border border-roseGlow/50 flex items-center justify-center text-roseGlow text-xs shrink-0">
                        ✦
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white tracking-wide truncate">
                          {PROFILE.degree}
                        </p>
                        <p className="text-[11px] text-roseGlow/85 truncate">
                          {PROFILE.university}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase px-2.5 py-1 bg-white/5 rounded-full border border-white/10 shrink-0">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Affiliations Strip */}
      <section aria-label="Academic and Organizational Journey" className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-obsidian-900/90 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blush-400 text-center md:text-left">
            ACADEMIC &amp; ORGANIZATIONAL JOURNEY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {AFFILIATIONS.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-white/5 text-neutral-200 border border-white/10 hover:border-roseGlow/40 transition whitespace-nowrap">
                  {item}
                </span>
                {idx < AFFILIATIONS.length - 1 && (
                  <span className="text-roseGlow/40 text-xs hidden sm:inline" aria-hidden="true">
                    ✦
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2-Column Blush Surface Bento Layout */}
      <main id="about" className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT BENTO: About Berliana */}
          <article className="lg:col-span-7 bg-blush-200 rounded-[28px] p-6 sm:p-8 md:p-10 border border-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blush-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-blush-500">
                  ABOUT ME
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal leading-snug mb-5 [text-wrap:balance]">
                Building logic, structure, and meaningful digital presence.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-7 space-y-3.5 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
                  <p className="font-medium text-neutral-900">
                    Hi, Berliana here! Welcome to my portfolio.
                  </p>
                  <p>
                    Mahasiswa S1 Sistem Informasi yang sedang berkuliah di Institut Teknologi PLN
                    (ITPLN) dengan ketertarikan pada pengembangan teknologi informasi dan
                    pemrograman.
                  </p>
                  <p>
                    Memiliki dasar pemrograman C++, pembuatan profil digital melalui Wixsite, serta
                    terbiasa bekerja sama dalam tim dengan penuh tanggung jawab dan disiplin.
                  </p>
                </div>

                {/* Portrait Frame */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[210px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white shadow-md bg-blush-300">
                    <ResilientImage
                      src={PORTRAIT_IMAGE.url}
                      alt={PORTRAIT_IMAGE.alt}
                      fallbackTitle={PROFILE.shortName}
                      variant="blush"
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-900/70 to-transparent p-2.5 text-center">
                      <p className="text-[11px] font-medium text-white tracking-wide">
                        {PROFILE.shortName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Meta Info */}
            <div className="mt-8 pt-6 border-t border-blush-300/80 flex flex-col gap-2.5 text-xs text-neutral-700">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-blush-500 shrink-0" aria-hidden="true" />
                <span className="font-medium">{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-3.5 h-3.5 text-blush-500 shrink-0" aria-hidden="true" />
                <span>
                  {PROFILE.degree} —{' '}
                  <strong className="text-neutral-900">{PROFILE.university}</strong> (
                  {PROFILE.degreePeriod})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <School className="w-3.5 h-3.5 text-blush-500 shrink-0" aria-hidden="true" />
                <span>
                  {PROFILE.highSchoolMajor} —{' '}
                  <strong className="text-neutral-900">{PROFILE.highSchool}</strong> (
                  {PROFILE.highSchoolPeriod})
                </span>
              </div>
            </div>
          </article>

          {/* RIGHT BENTO: What We Do & Core Capabilities */}
          <section
            id="skills"
            className="lg:col-span-5 bg-blush-200 rounded-[28px] p-6 sm:p-8 md:p-10 border border-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blush-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-blush-500">
                  WHAT WE DO / CORE CAPABILITIES
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal mb-6 [text-wrap:balance]">
                Disciplined logic &amp; modern execution.
              </h3>

              <div className="space-y-3.5">
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap.id}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/60 hover:bg-white transition duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-blush-300 text-blush-600 flex items-center justify-center shrink-0">
                      {renderCapabilityBadge(cap.id)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">{cap.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Toolkit Pills */}
            <div className="mt-8 pt-5 border-t border-blush-300/80">
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                Toolkit &amp; Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {TOOLKIT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-neutral-800 border border-blush-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Recent Work / Selected Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-roseGlow" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-roseGlow">
                RECENT WORK
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF4F4] font-normal">
              Selected Projects.
            </h2>
          </div>

          <a
            href={PROFILE.wixsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-roseGlow hover:text-white transition duration-200 group w-fit"
          >
            <span>VIEW WIXSITE PROFILE</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-200" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="bg-obsidian-900 border border-white/10 rounded-3xl overflow-hidden hover:border-roseGlow/50 transition-all duration-300 flex flex-col group glow-border-hover"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Lihat detail ${project.title}`}
                className="relative aspect-video w-full overflow-hidden bg-black text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-roseGlow"
              >
                <ResilientImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-obsidian-950/80 text-roseGlow border border-roseGlow/40 backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>
              </button>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-6 border-y border-white/10 py-4">
                    <li className="flex items-center gap-2">
                      <span className="text-roseGlow" aria-hidden="true">
                        ✦
                      </span>
                      <span>
                        <strong>Tech Stack:</strong> {project.techStack}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-roseGlow mt-0.5" aria-hidden="true">
                        ✦
                      </span>
                      <span>
                        <strong>Fokus Utama:</strong> {project.focus}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-roseGlow mt-0.5" aria-hidden="true">
                        ✦
                      </span>
                      <span>
                        <strong>Dampak:</strong> {project.impact}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-roseGlow hover:text-white transition duration-200"
                  >
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/5 text-neutral-200 border border-white/15 hover:border-roseGlow/60 hover:text-roseGlow transition cursor-pointer"
                  >
                    Ringkasan Proyek
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Digital Profile Showcase Strip */}
        <div className="bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-roseGlow/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-roseGlow/20 text-roseGlow border border-roseGlow/40">
              FREE DIGITAL PROFILE
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-white">
              Halaman Profil Personal (Wixsite)
            </h4>
          </div>
          <a
            href={PROFILE.wixsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white hover:bg-roseGlow hover:text-obsidian-950 transition-all duration-300 whitespace-nowrap shrink-0"
          >
            <span>VISIT LIVE SITE</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-roseGlow" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-roseGlow">
              COLLABORATION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF4F4] font-normal">
            Work With Me.
          </h2>
        </div>

        <div className="bg-blush-200 rounded-3xl p-6 sm:p-10 border border-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-blush-300 rounded-full text-xs font-semibold text-neutral-800">
                Online / Jakarta
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-blush-600 tabular-nums">
                2+ Featured Works
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-neutral-900 font-medium">
              Digital Profile &amp; C++ Basics
            </h3>
            <p className="text-neutral-600 text-sm max-w-xl font-light leading-relaxed">
              Siap berkolaborasi dalam proyek tim sistem informasi, penyusunan dokumentasi, maupun
              pembuatan profil digital berbasis web.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Wixsite', 'C++', 'Collaboration'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-neutral-700 bg-white/80 px-2.5 py-1 rounded-md border border-blush-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-obsidian-950 text-white hover:bg-roseGlow hover:text-obsidian-950 transition-all duration-300 text-center glow-rose-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>LET&apos;S COLLAB</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full text-xs font-medium tracking-wide bg-white text-neutral-700 border border-blush-300 hover:bg-blush-100 text-center transition inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blush-600" aria-hidden="true" />
                  <span className="text-blush-600 font-semibold">Email disalin ke clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
                  <span>Copy Email: {PROFILE.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial & Achievements */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: What They Said */}
          <div className="lg:col-span-6 bg-obsidian-900 border border-roseGlow/30 rounded-3xl p-6 sm:p-10 flex flex-col justify-between glow-rose-sm">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-roseGlow" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-roseGlow">
                  WHAT THEY SAID
                </span>
              </div>
              <blockquote className="font-serif italic text-2xl sm:text-3xl text-neutral-100 leading-snug mb-8">
                “Dapat bekerja sama dalam tim serta bertanggung jawab dalam menjalankan tugas yang
                diberikan.”
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-roseGlow/20 border border-roseGlow/40 flex items-center justify-center text-roseGlow font-serif font-bold">
                R
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Rekan Tim</p>
                <p className="text-xs text-roseGlow/80">Kolaborator Kegiatan</p>
              </div>
            </div>
          </div>

          {/* Right Card: Achievements & Workshops */}
          <div className="lg:col-span-6 bg-blush-200 rounded-3xl p-6 sm:p-10 border border-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blush-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-blush-500">
                  ACHIEVEMENTS &amp; WORKSHOPS
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal mb-6">
                Milestones.
              </h3>

              <div className="space-y-5">
                {MILESTONES.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-white/70 border border-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-blush-600 mb-1">
                      {item.period}
                    </p>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                      <span className="text-blush-500 mr-1.5" aria-hidden="true">
                        ✦
                      </span>
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section id="journey" className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-roseGlow" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-roseGlow">
                THE JOURNEY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF4F4] font-normal">
              Moments &amp; Milestones.
            </h2>
          </div>
          <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-roseGlow/20 text-roseGlow border border-roseGlow/40 w-fit tabular-nums">
            2026
          </span>
        </div>

        {/* Scrapbook Card */}
        <div className="bg-obsidian-900 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-obsidian-950 border border-roseGlow/20">
            <ResilientImage
              src={JOURNEY_IMAGE.url}
              alt={JOURNEY_IMAGE.alt}
              fallbackTitle="Campus Life · 2026"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 text-roseGlow border border-roseGlow/30">
              CAMPUS LIFE · 2026
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Mulai kuliah S1 Sistem Informasi di ITPLN
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Langkah awal perjalanan akademik mendalami teknologi informasi, analisis logika
              perancangan sistem, serta membangun jejaring dengan rekan-rekan mahasiswa di Institut
              Teknologi PLN Jakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-roseGlow via-roseGlow-bright to-roseGlow rounded-3xl p-8 sm:p-12 text-obsidian-950 glow-rose-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-4xl font-semibold tracking-tight mb-2">
              ✦ Let&apos;s create something meaningful together.
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-900/80 font-medium">
              Terbuka untuk diskusi proyek perkuliahan, profil digital, dan kolaborasi positif.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-obsidian-950 text-white hover:bg-neutral-900 transition-all duration-300 shrink-0 shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-obsidian-950 border-t border-white/10 text-neutral-400 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-1">
            <p className="font-serif text-xl text-white font-medium">{PROFILE.fullName}</p>
            <p className="text-xs text-neutral-400">
              {PROFILE.degree} · {PROFILE.university} · Jakarta Barat
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-white/5 text-neutral-200 border border-white/10 hover:border-roseGlow/50 hover:text-roseGlow transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right text-xs text-neutral-500">
            <p>© 2026 {PROFILE.fullName}.</p>
            <p className="text-[11px] text-neutral-600 mt-0.5">All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
