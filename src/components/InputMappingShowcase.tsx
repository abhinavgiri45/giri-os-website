import React, { useState } from 'react';
import { INPUT_MAPPING_MODES, InputMappingMode } from '../data/ecosystems';
import { 
  Gamepad2, 
  MousePointer, 
  Keyboard, 
  Crosshair, 
  Move, 
  Maximize2, 
  Sliders, 
  AlertCircle
} from 'lucide-react';

export const InputMappingShowcase: React.FC = () => {
  const [activeModeId, setActiveModeId] = useState<string>('gaming-wasd');
  const [activeTestKey, setActiveTestKey] = useState<string | null>(null);

  const activeMode: InputMappingMode = INPUT_MAPPING_MODES.find(m => m.id === activeModeId) || INPUT_MAPPING_MODES[0];

  const handleTestKeyPress = (key: string) => {
    setActiveTestKey(key);
    setTimeout(() => {
      setActiveTestKey(null);
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-giri-border p-6 sm:p-8 backdrop-blur-xl shadow-xl">
      {/* Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-giri-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-2">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Giri Smart Input Mapping &bull; Giri Mobile</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-giri-text tracking-tight">
            Your Apps. Your Controls.
          </h3>
          <p className="text-xs sm:text-sm text-giri-muted mt-1 max-w-xl">
            Bridge mobile touch constraints to desktop gaming ergonomics. Seamlessly map physical keyboard keys, mouse gestures, and gamepads to virtual touch coordinates.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Status: Experimental</span>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
        {INPUT_MAPPING_MODES.map((mode) => {
          const isSelected = activeModeId === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setActiveModeId(mode.id)}
              className={`p-4 rounded-md border text-left transition-all ${
                isSelected
                  ? 'bg-emerald-500/10 dark:bg-emerald-950/20 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'bg-giri-surface/40 border-giri-border hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {mode.id === 'gaming-wasd' && <Keyboard className={`w-4 h-4 ${isSelected ? 'text-emerald-500' : 'text-giri-muted'}`} />}
                {mode.id === 'mouse-precision' && <MousePointer className={`w-4 h-4 ${isSelected ? 'text-emerald-500' : 'text-giri-muted'}`} />}
                {mode.id === 'gamepad-console' && <Gamepad2 className={`w-4 h-4 ${isSelected ? 'text-emerald-500' : 'text-giri-muted'}`} />}
                <span className="text-xs font-bold text-giri-text">{mode.name}</span>
              </div>
              <p className="text-xs text-giri-muted leading-relaxed line-clamp-2">
                {mode.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Visual Workspace: Android Window with Touch Overlay */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive Simulated Android Window */}
        <div className="lg:col-span-7 rounded-md bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl relative">
          {/* Simulated Android Window Titlebar */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs text-slate-300">Giri Mobile &bull; ShadowRun Odyssey</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">60 FPS</span>
              <Maximize2 className="w-3 h-3 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Window Canvas Area */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-center p-6 overflow-hidden">
            {/* Ambient Game Art Background Grid */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Mode 1: WASD Visual Controls */}
            {activeModeId === 'gaming-wasd' && (
              <div className="relative w-full h-full flex items-center justify-between select-none">
                {/* On-screen Virtual D-Pad (Left Side) */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-mono  tracking-widest text-emerald-400 mb-2">Virtual Analog</span>
                  <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-emerald-500/40 flex items-center justify-center bg-emerald-500/5">
                    {/* Directional Key Buttons */}
                    <button 
                      onClick={() => handleTestKeyPress('W')}
                      className={`absolute top-1.5 w-7 h-7 rounded-md font-mono text-xs font-bold transition-all ${
                        activeTestKey === 'W' ? 'bg-emerald-500 text-white scale-110 shadow-lg' : 'bg-slate-800/90 text-slate-200 border border-slate-700'
                      }`}
                    >
                      W
                    </button>
                    <button 
                      onClick={() => handleTestKeyPress('A')}
                      className={`absolute left-1.5 w-7 h-7 rounded-md font-mono text-xs font-bold transition-all ${
                        activeTestKey === 'A' ? 'bg-emerald-500 text-white scale-110 shadow-lg' : 'bg-slate-800/90 text-slate-200 border border-slate-700'
                      }`}
                    >
                      A
                    </button>
                    <button 
                      onClick={() => handleTestKeyPress('S')}
                      className={`absolute bottom-1.5 w-7 h-7 rounded-md font-mono text-xs font-bold transition-all ${
                        activeTestKey === 'S' ? 'bg-emerald-500 text-white scale-110 shadow-lg' : 'bg-slate-800/90 text-slate-200 border border-slate-700'
                      }`}
                    >
                      S
                    </button>
                    <button 
                      onClick={() => handleTestKeyPress('D')}
                      className={`absolute right-1.5 w-7 h-7 rounded-md font-mono text-xs font-bold transition-all ${
                        activeTestKey === 'D' ? 'bg-emerald-500 text-white scale-110 shadow-lg' : 'bg-slate-800/90 text-slate-200 border border-slate-700'
                      }`}
                    >
                      D
                    </button>
                    {/* Joystick Center Pivot */}
                    <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center">
                      <Move className="w-3 h-3 text-emerald-300" />
                    </div>
                  </div>
                </div>

                {/* Center Crosshair / Character Focus */}
                <div className="flex flex-col items-center justify-center text-slate-400 text-center">
                  <Crosshair className="w-8 h-8 text-cyan-400/60 animate-pulse mb-1" />
                  <span className="text-xs font-mono text-slate-400">Aim: Mouse Free Look</span>
                </div>

                {/* On-screen Action Keys (Right Side) */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-mono  tracking-widest text-emerald-400 mb-2">Mapped Actions</span>
                  <div className="grid grid-cols-2 gap-2 w-28">
                    {['Space', 'Shift', 'E', 'R'].map((key) => (
                      <button
                        key={key}
                        onClick={() => handleTestKeyPress(key)}
                        className={`h-9 rounded-md font-mono text-xs font-bold transition-all flex items-center justify-center ${
                          activeTestKey === key
                            ? 'bg-cyan-500 text-white scale-110 shadow-lg'
                            : 'bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-cyan-400'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mode 2: Mouse Precision */}
            {activeModeId === 'mouse-precision' && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 animate-bounce">
                  <MousePointer className="w-8 h-8" />
                </div>
                <h5 className="text-sm font-bold text-white mb-1">Pixel Precision Gesture Translation</h5>
                <p className="text-xs text-slate-400 max-w-sm mb-4">
                  Desktop mouse pointer is translated to multi-point touch events with sub-pixel coordinate interpolation.
                </p>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">Left-Click = Single Tap</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">Drag = Continuous Swipe</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">Wheel = Pinch Zoom</span>
                </div>
              </div>
            )}

            {/* Mode 3: Gamepad Console */}
            {activeModeId === 'gamepad-console' && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <h5 className="text-sm font-bold text-white mb-1">Direct Hardware Gamepad Handoff</h5>
                <p className="text-xs text-slate-400 max-w-sm mb-4">
                  Passes standard USB/Bluetooth controller input straight into Android evdev joydev framework without emulation delay.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-purple-300 text-xs font-mono border border-slate-700">Dual Analog Sticks</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-purple-300 text-xs font-mono border border-slate-700">Analog Triggers</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-purple-300 text-xs font-mono border border-slate-700">D-Pad & Bumpers</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Mappings Table & Description */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-giri-text flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-500" />
                <span>Active Profile Bindings</span>
              </h3>
              <span className="text-xs font-mono text-giri-muted">
                {activeMode.controls.length} Mappings
              </span>
            </div>

            <p className="text-xs text-giri-muted mb-4 leading-relaxed">
              {activeMode.description}
            </p>

            {/* Bindings List */}
            <div className="space-y-2">
              {activeMode.controls.map((ctrl, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-2.5 rounded-md bg-giri-surface border border-giri-border text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono font-bold bg-white dark:bg-slate-800 border border-giri-border text-giri-text shadow-sm">
                      {ctrl.key}
                    </span>
                  </div>
                  <span className="text-giri-muted text-xs text-right font-medium">
                    {ctrl.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-giri-border flex items-center justify-between text-xs text-giri-muted">
            <span className="font-semibold text-giri-text">Best for:</span>
            <span>{activeMode.recommendedFor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
