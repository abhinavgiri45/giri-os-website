import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Download, ChevronRight, ChevronDown } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { MAIN_NAV_ITEMS } from '../data/navigation';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  // Primary top links
  const primaryNav = MAIN_NAV_ITEMS.slice(0, 6); // Overview, Features, Editions, Gallery, Downloads, Docs
  const secondaryNav = MAIN_NAV_ITEMS.slice(6);  // Developers, Roadmap, Status, Changelog, Security, About

  const isSecondaryActive = secondaryNav.some(item => currentPath === item.href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-giri-surface/90 backdrop-blur-xl border-b border-giri-border py-3 shadow-sm dark:shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-giri-blue/60 rounded-md p-1"
            aria-label="Giri OS Home — Return to overview"
          >
            <div className="w-9 h-9 rounded-md overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200">
              <img
                src="/logo/giri-os-icon.png"
                alt="Giri OS Official Emblem"
                width={36}
                height={36}
                decoding="async"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.25)]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-base tracking-wider text-giri-text group-hover:text-giri-blue transition-colors">
                GIRI <span className="text-giri-violet">OS</span>
              </span>
              <span className="text-[9px]  tracking-widest text-giri-muted -mt-1 font-semibold hidden sm:inline-block">
                Genesis 0.1
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-giri-surface/80 border border-giri-border px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm"
          >
            {primaryNav.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 shadow-sm border border-giri-blue/30'
                      : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* "More" Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  isSecondaryActive || moreDropdownOpen
                    ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30'
                    : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-48 rounded-md bg-giri-surface border border-giri-border p-2 shadow-2xl backdrop-blur-2xl animate-fade-in z-50 flex flex-col gap-1"
                >
                  {secondaryNav.map((item) => {
                    const isActive = currentPath === item.href;
                    return (
                      <button
                        key={item.href}
                        role="menuitem"
                        onClick={() => handleNavClick(item.href)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`text-left px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30'
                            : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-giri-blue/50"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-giri-blue" />}
            </button>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/abhinavgiri45/giri-os"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Giri OS GitHub Repository (opens in new tab)"
              className="p-2 rounded-full text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/10 transition-colors hidden sm:flex focus:outline-none focus:ring-2 focus:ring-giri-blue/50"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Download CTA Button */}
            <button
              onClick={() => handleNavClick('/downloads')}
              className="aureon-button text-xs py-2 px-4 hidden sm:inline-flex"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-md text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/10 lg:hidden focus:outline-none focus:ring-2 focus:ring-giri-blue/50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="lg:hidden bg-giri-surface/98 backdrop-blur-2xl border-b border-giri-border px-4 pt-3 pb-6 animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto"
        >
          <nav className="flex flex-col gap-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30'
                      : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-giri-muted/50" />
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-giri-border flex items-center justify-between gap-3">
            <a
              href="https://github.com/abhinavgiri45/giri-os"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-giri-muted hover:text-giri-text px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (abhinavgiri45/giri-os)</span>
            </a>
            <button
              onClick={() => handleNavClick('/downloads')}
              className="aureon-button text-xs py-2 px-4"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
