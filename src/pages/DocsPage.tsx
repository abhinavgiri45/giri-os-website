import React, { useState, useEffect } from 'react';
import { GIRI_DOCS, DocArticle } from '../data/docs';
import { CodeBlock } from '../components/CodeBlock';
import { updatePageSeo, SITE_ORIGIN, ORGANIZATION_SCHEMA } from '../utils/seo';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Wrench, 
  Hash,
  XCircle,
  Clock,
  UserCheck
} from 'lucide-react';

export const DocsPage: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(() => {
    // Check initial hash on mount
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (!hash) return GIRI_DOCS[0].id;

    const matched = GIRI_DOCS.find(
      a => a.id.toLowerCase() === hash || 
           a.slug.toLowerCase() === hash ||
           (hash === 'virtualbox' && a.id === 'virtualbox-installation') ||
           (hash === 'getting-started' && a.id === 'intro') ||
           (hash === 'calamares' && a.id === 'calamares-guide')
    );
    return matched ? matched.id : GIRI_DOCS[0].id;
  });

  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle hash changes from browser history or footer clicks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) return;
      const matched = GIRI_DOCS.find(
        a => a.id.toLowerCase() === hash || 
             a.slug.toLowerCase() === hash ||
             (hash === 'virtualbox' && a.id === 'virtualbox-installation') ||
             (hash === 'getting-started' && a.id === 'intro') ||
             (hash === 'calamares' && a.id === 'calamares-guide')
      );
      if (matched) {
        setSelectedArticleId(matched.id);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentArticle: DocArticle = GIRI_DOCS.find((a) => a.id === selectedArticleId) || GIRI_DOCS[0];

  // Update article-specific SEO metadata and Schema.org TechArticle
  useEffect(() => {
    const articleTitle = `${currentArticle.title} — Giri OS Documentation`;
    const canonicalUrl = `${SITE_ORIGIN}/docs#${currentArticle.slug}`;

    updatePageSeo('/docs', {
      title: articleTitle,
      description: currentArticle.description,
      keywords: currentArticle.keywords?.join(', ') || 'Giri OS documentation, Linux guides, Debian Linux',
      canonical: canonicalUrl,
      ogType: 'article',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          ORGANIZATION_SCHEMA,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'Documentation', item: `${SITE_ORIGIN}/docs` },
              { '@type': 'ListItem', position: 3, name: currentArticle.title, item: canonicalUrl }
            ]
          },
          {
            '@type': 'TechArticle',
            '@id': `${canonicalUrl}#techarticle`,
            headline: currentArticle.title,
            description: currentArticle.description,
            articleSection: currentArticle.category,
            inLanguage: 'en-US',
            author: {
              '@type': 'Organization',
              name: currentArticle.author || 'Giri OS Architecture Team'
            },
            publisher: { '@id': `${SITE_ORIGIN}/#organization` },
            url: canonicalUrl
          }
        ]
      }
    });
  }, [currentArticle]);

  const selectArticle = (id: string, slug: string) => {
    setSelectedArticleId(id);
    window.location.hash = slug;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    'Getting Started', 
    'Installation & Setup', 
    'Using Giri OS', 
    'Engineering & Linux Architecture'
  ] as const;

  const filteredArticles = GIRI_DOCS.filter((a) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.content.toLowerCase().includes(q);
  });

  const currentIndex = GIRI_DOCS.findIndex(a => a.id === currentArticle.id);
  const prevArticle = currentIndex > 0 ? GIRI_DOCS[currentIndex - 1] : null;
  const nextArticle = currentIndex < GIRI_DOCS.length - 1 ? GIRI_DOCS[currentIndex + 1] : null;

  // Render markdown paragraphs and code fences
  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const lines = part.slice(3, -3).trim().split('\n');
        const language = lines[0].trim();
        const code = lines.slice(1).join('\n');
        return <CodeBlock key={index} code={code} language={language || 'bash'} />;
      }

      // Format basic markdown headers and text
      return (
        <div key={index} className="space-y-4 my-4 text-giri-muted text-sm sm:text-base leading-relaxed">
          {part.split('\n\n').map((paragraph, pIdx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('# ')) {
              return (
                <h1 key={pIdx} className="text-2xl sm:text-3xl font-extrabold text-giri-text pt-4 pb-2 border-b border-giri-border flex items-center gap-2">
                  <Hash className="w-5 h-5 text-giri-blue dark:text-cyan-400 shrink-0" />
                  <span>{trimmed.replace('# ', '')}</span>
                </h1>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h2 key={pIdx} className="text-lg font-bold text-giri-text pt-3 pb-1">
                  {trimmed.replace('### ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('#### ')) {
              return (
                <h3 key={pIdx} className="text-base font-semibold text-giri-blue dark:text-cyan-300 pt-2 pb-1">
                  {trimmed.replace('#### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('- ')) {
              return (
                <ul key={pIdx} className="space-y-1.5 pl-4 list-disc list-inside text-giri-muted text-sm">
                  {trimmed.split('\n').map((li, lIdx) => (
                    <li key={lIdx}>{li.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }

            return <p key={pIdx}>{trimmed}</p>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Header */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-giri-muted mb-8">
          <span>Documentation</span>
          <ChevronRight className="w-3.5 h-3.5 text-giri-muted/60" />
          <span className="text-giri-blue dark:text-cyan-400 font-medium">{currentArticle.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-giri-muted/60" />
          <span className="text-giri-text truncate max-w-xs sm:max-w-md">{currentArticle.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 glass-panel p-5 rounded-md border border-giri-border space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-giri-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 16 guides & articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 rounded-md bg-giri-surface text-xs text-giri-text placeholder-giri-muted border border-giri-border focus:outline-none focus:ring-2 focus:ring-giri-blue/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-giri-muted hover:text-giri-text"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Categorized Index */}
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-1">
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-6 text-xs text-giri-muted">
                    No articles match &ldquo;{searchQuery}&rdquo;.
                  </div>
                ) : (
                  categories.map((cat) => {
                    const catArticles = filteredArticles.filter((a) => a.category === cat);
                    if (catArticles.length === 0) return null;

                    return (
                      <div key={cat} className="space-y-2">
                        <div className="text-xs font-bold  tracking-wider text-giri-muted px-2 flex items-center gap-1.5">
                          {cat === 'Getting Started' && <BookOpen className="w-3.5 h-3.5 text-giri-blue dark:text-cyan-400 shrink-0" />}
                          {cat === 'Installation & Setup' && <Wrench className="w-3.5 h-3.5 text-giri-blue shrink-0" />}
                          {cat === 'Using Giri OS' && <Layers className="w-3.5 h-3.5 text-giri-violet shrink-0" />}
                          {cat === 'Engineering & Linux Architecture' && <Terminal className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />}
                          <span>{cat}</span>
                        </div>

                        <div className="space-y-1">
                          {catArticles.map((article) => {
                            const isSelected = article.id === selectedArticleId;
                            return (
                              <button
                                key={article.id}
                                onClick={() => selectArticle(article.id, article.slug)}
                                className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                                  isSelected
                                    ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30 shadow-sm'
                                    : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                              >
                                {article.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </aside>

          {/* Main Article Content Body */}
          <main className="lg:col-span-8 xl:col-span-9">
            <article className="glass-panel p-8 sm:p-12 rounded-3xl border border-giri-border">
              {/* Category & Metadata Pill Bar */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-giri-blue/10 text-giri-blue dark:text-cyan-400 border border-giri-blue/25">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{currentArticle.category}</span>
                </div>

                {currentArticle.readingTime && (
                  <div className="inline-flex items-center gap-1 text-xs text-giri-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentArticle.readingTime}</span>
                  </div>
                )}

                {currentArticle.author && (
                  <div className="inline-flex items-center gap-1 text-xs text-giri-muted hidden sm:inline-flex">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{currentArticle.author}</span>
                  </div>
                )}
              </div>

              {/* Subtitle / summary */}
              <p className="text-sm text-giri-muted mb-8 italic">
                {currentArticle.description}
              </p>

              {/* Rendered Body */}
              <div className="max-w-none">
                {renderContent(currentArticle.content)}
              </div>

              {/* Bottom Pagination Links */}
              <div className="mt-12 pt-8 border-t border-giri-border flex flex-col sm:flex-row items-center justify-between gap-4">
                {prevArticle ? (
                  <button
                    onClick={() => selectArticle(prevArticle.id, prevArticle.slug)}
                    className="flex items-center gap-2 text-xs font-semibold text-giri-muted hover:text-giri-text transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 text-giri-blue dark:text-cyan-400" />
                    <span>Previous: {prevArticle.title}</span>
                  </button>
                ) : <div />}

                {nextArticle ? (
                  <button
                    onClick={() => selectArticle(nextArticle.id, nextArticle.slug)}
                    className="flex items-center gap-2 text-xs font-semibold text-giri-blue dark:text-cyan-400 hover:text-giri-text transition-colors ml-auto"
                  >
                    <span>Next: {nextArticle.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : <div />}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};
