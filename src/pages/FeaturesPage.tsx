import React, { useState } from 'react';
import { GIRI_FEATURES, FeatureStatus } from '../data/features';
import { StatusBadge } from '../components/StatusBadge';
import { 
  LayoutGrid, 
  Layers, 
  Search, 
  Sliders, 
  Sparkles, 
  Terminal, 
  FolderTree, 
  ShoppingBag, 
  Code, 
  Share2, 
  Gamepad2, 
  HardDrive, 
  Bot,
  Filter
} from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const categories = ['All', 'Desktop Experience', 'System Architecture', 'Productivity', 'Ecosystem'];
  const statuses = ['All', 'Available', 'In Development', 'Planned'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Sliders': return <Sliders className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'FolderTree': return <FolderTree className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      default: return <LayoutGrid className="w-5 h-5" />;
    }
  };

  const filteredFeatures = GIRI_FEATURES.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchCategory && matchStatus;
  });

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-giri-blue dark:text-cyan-400 uppercase">
            Feature Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-giri-text mt-2">
            The Giri OS Component Ecosystem
          </h1>
          <p className="mt-4 text-base text-giri-muted leading-relaxed">
            Every layer of Giri OS is designed to be modular, fast, and transparent. We provide honest development status indicators for all subsystem components.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-giri-surface border border-giri-border mb-10 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-giri-muted flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-giri-blue/15 text-giri-blue dark:text-cyan-300 border border-giri-blue/30 shadow-sm'
                    : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-giri-muted mr-1">Status:</span>
            {statuses.map((stat) => (
              <button
                key={stat}
                onClick={() => setSelectedStatus(stat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  selectedStatus === stat
                    ? 'bg-giri-violet/15 text-giri-violet border border-giri-violet/30 shadow-sm'
                    : 'text-giri-muted hover:text-giri-text hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid or Empty State */}
        {filteredFeatures.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl border border-giri-border text-center max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-giri-blue dark:text-cyan-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-giri-text mb-2">No Components Found</h3>
            <p className="text-xs text-giri-muted leading-relaxed mb-6">
              No Giri OS components currently match the &ldquo;{selectedCategory}&rdquo; category with &ldquo;{selectedStatus}&rdquo; status.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedStatus('All'); }}
              className="aureon-button text-xs py-2 px-5"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feat) => (
              <div
                key={feat.id}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-giri-surface2 border border-giri-border flex items-center justify-center text-giri-blue dark:text-cyan-400">
                      {getIcon(feat.icon)}
                    </div>
                    <StatusBadge status={feat.status as FeatureStatus} />
                  </div>

                  <h3 className="text-lg font-bold text-giri-text">{feat.name}</h3>
                  <p className="text-xs font-medium text-giri-blue dark:text-cyan-400/90 mb-2">{feat.tagline}</p>
                  <p className="text-xs text-giri-muted leading-relaxed mb-6">{feat.description}</p>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-giri-muted mb-2">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-giri-muted pt-2 border-t border-giri-border">
                    {feat.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-giri-blue dark:bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
