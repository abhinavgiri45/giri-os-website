import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ApplicationEcosystemPage } from './pages/ApplicationEcosystemPage';
import { GiriBridgePage } from './pages/products/GiriBridgePage';
import { GiriMobilePage } from './pages/products/GiriMobilePage';
import { GiriStorePage } from './pages/products/GiriStorePage';
import { EditionsPage } from './pages/EditionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { DocsPage } from './pages/DocsPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { StatusPage } from './pages/StatusPage';
import { SecurityPage } from './pages/SecurityPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { updatePageSeo } from './utils/seo';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Synchronize browser history and hash events
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic page title, meta description, Open Graph, and structured data per route
  useEffect(() => {
    updatePageSeo(currentPath);
  }, [currentPath]);

  // Spatial navigation support for Smart TVs and Keyboard ergonomics
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow user to navigate focus with TV remote D-Pad or Arrow keys when focus is active
      if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        const focusableElements = Array.from(
          document.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);

        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        if (currentIndex !== -1) {
          if (e.key === 'ArrowDown' && currentIndex < focusableElements.length - 1) {
            focusableElements[currentIndex + 1].focus();
            e.preventDefault();
          } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            focusableElements[currentIndex - 1].focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Normalise path (strip trailing slash and hash for routing)
    const base = currentPath.split('#')[0];
    const normalized = base === '/' ? '/' : base.replace(/\/$/, '');

    switch (normalized) {
      case '':
      case '/':
        return <HomePage navigate={navigate} />;
      case '/features':
        return <FeaturesPage />;
      case '/features/application-ecosystem':
        return <ApplicationEcosystemPage navigate={navigate} />;
      case '/products/giri-bridge':
        return <GiriBridgePage navigate={navigate} />;
      case '/products/giri-mobile':
        return <GiriMobilePage navigate={navigate} />;
      case '/products/giri-store':
        return <GiriStorePage navigate={navigate} />;
      case '/editions':
        return <EditionsPage navigate={navigate} />;
      case '/gallery':
        return <GalleryPage />;
      case '/downloads':
        return <DownloadsPage navigate={navigate} />;
      case '/docs':
        return <DocsPage />;
      case '/developers':
        return <DevelopersPage />;
      case '/roadmap':
        return <RoadmapPage navigate={navigate} />;
      case '/changelog':
        return <ChangelogPage navigate={navigate} />;
      case '/status':
        return <StatusPage />;
      case '/security':
        return <SecurityPage />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-giri-navy text-giri-text bg-isometric-grid overflow-x-hidden flex flex-col justify-between selection:bg-giri-blue/20 selection:text-giri-blue">
      {/* Accessibility Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-giri-blue focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
      >
        Skip to main content
      </a>

      {/* ThreeUI Ambient Radial Gradients */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-giri-blue/5 dark:bg-giri-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-giri-violet/5 dark:bg-giri-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Global Navigation */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Page Viewport */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
