import React from 'react';
import { Home, BookOpen, Layers, Download, Compass } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div className="pt-32 pb-24 flex items-center justify-center min-h-[75vh]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 shadow-glow">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '12s' }} />
        </div>

        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
          Error 404 &bull; Locus Not Found
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 mb-4">
          Page Does Not Exist
        </h1>

        <p className="text-sm text-giri-muted leading-relaxed max-w-md mx-auto mb-8">
          The requested path does not map to any active Giri OS system portal, documentation guide, or release specification.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="aureon-button text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </button>

          <button
            onClick={() => navigate('/docs')}
            className="umbra-button text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Documentation</span>
          </button>

          <button
            onClick={() => navigate('/features')}
            className="umbra-button text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Features</span>
          </button>

          <button
            onClick={() => navigate('/downloads')}
            className="umbra-button text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Downloads</span>
          </button>
        </div>
      </div>
    </div>
  );
};
