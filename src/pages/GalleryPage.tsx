import React, { useState, useEffect } from 'react';
import { GIRI_GALLERY_ITEMS, GalleryCategory, GalleryItem } from '../data/gallery';
import { StatusBadge } from '../components/StatusBadge';
import { Modal } from '../components/Modal';
import { Eye, Download, Info, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = ['All', 'Desktop', 'Boot & Theme', 'Wallpapers', 'Installer', 'Concept Previews'];

  const filteredItems = GIRI_GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const currentIdx = activeItem ? filteredItems.findIndex(i => i.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (currentIdx > 0) {
      setActiveItem(filteredItems[currentIdx - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIdx < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIdx + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  // Keyboard navigation inside lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, currentIdx, filteredItems]);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
            Visual Media
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
            System & Design Gallery
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Inspect verified OS assets, official 4K wallpapers, Plymouth boot themes, GRUB themes, and design concepts currently undergoing development.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-2 rounded-2xl bg-giri-surface border border-giri-border w-fit shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30 shadow-sm'
                  : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl border border-giri-border text-center max-w-md mx-auto">
            <ImageIcon className="w-10 h-10 text-giri-blue dark:text-cyan-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-bold text-giri-text mb-2">No Visual Assets Found</h3>
            <p className="text-xs text-giri-muted leading-relaxed mb-4">
              No media is cataloged under &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="aureon-button text-xs py-2 px-4"
            >
              Show All Media
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-giri-border"
                onClick={() => setActiveItem(item)}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5 dark:bg-black/40 flex items-center justify-center">
                  <img
                    src={item.imageSrc}
                    alt={`Giri OS Wallpaper / Visual — ${item.title}`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      item.id === 'theme-plymouth' ? 'object-contain max-h-[160px] p-4' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <StatusBadge status={item.label} />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-giri-text group-hover:text-giri-blue dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-giri-muted mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-giri-border flex items-center justify-between text-[11px] text-giri-muted">
                    <span className="font-mono">{item.category}</span>
                    <span className="text-giri-blue dark:text-cyan-400 font-semibold">Click to inspect</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <Modal
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          title={activeItem.title}
        >
          <div className="space-y-4">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/5 dark:bg-black/80 flex items-center justify-center border border-giri-border">
              <img
                src={activeItem.imageSrc}
                alt={`Giri OS Lightbox View — ${activeItem.title}`}
                decoding="async"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Overlay Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-giri-blue hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-giri-blue hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <StatusBadge status={activeItem.label} />
                  <span className="text-xs font-mono text-giri-muted">
                    {activeItem.category} &bull; {currentIdx + 1} of {filteredItems.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-giri-muted leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {activeItem.category === 'Wallpapers' && (
                <a
                  href={activeItem.imageSrc}
                  download
                  className="aureon-button text-xs py-2 px-4 shrink-0 inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Wallpaper</span>
                </a>
              )}
            </div>

            {activeItem.label === 'Design Preview' && (
              <div className="p-3 rounded-lg bg-giri-violet/10 border border-giri-violet/20 text-xs text-giri-violet flex items-center gap-2">
                <Info className="w-4 h-4 shrink-0" />
                <span>
                  This item is a design preview illustrating the planned UI layout. It will be replaced with verified live screenshots once desktop shell stabilization concludes.
                </span>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
