import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-xl overflow-hidden border border-giri-border bg-[#080C16] text-slate-200 shadow-xl font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-giri-surface2/60 border-b border-giri-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          {title && <span className="ml-2 text-xs text-giri-muted font-sans font-medium">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-giri-muted/70">{language}</span>
          <button
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
            className="flex items-center gap-1 px-2 py-1 rounded-md text-xs text-giri-muted hover:text-white hover:bg-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="font-sans">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed">
        <pre>
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
};
