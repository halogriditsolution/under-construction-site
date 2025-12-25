import { useEffect, useState } from 'react';
import { Mail, Phone, Sparkles, Zap, Shield } from 'lucide-react';

function App() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        return prev + 0.3;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow-delayed"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-6 py-8 md:px-12 md:py-10">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/high-resolution-logo-black-on-transparent-background.svg"
                  alt="HaloGrid IT Solutions"
                  className="h-32 md:h-48 lg:h-56 brightness-0 invert opacity-100 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-2xl -z-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
          <div className={`max-w-6xl w-full transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="max-w-4xl mx-auto">
              {/* Hero Content */}
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Empower Your Business with{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Smart IT Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                    We're crafting an innovative digital experience that will transform the way you do business.
                  </p>
                </div>

                {/* Progress Section */}
                <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400 font-medium">Development Progress</span>
                      <span className="text-cyan-400 font-semibold text-lg">{Math.floor(progress)}%</span>
                    </div>
                    <div className="w-full bg-slate-700/30 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 text-center group hover:border-cyan-500/50 transition-all duration-300">
                    <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-slate-400 font-medium">Innovation</p>
                  </div>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 text-center group hover:border-blue-500/50 transition-all duration-300">
                    <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-slate-400 font-medium">Security</p>
                  </div>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 text-center group hover:border-purple-500/50 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-slate-400 font-medium">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full px-6 py-8 md:px-12 border-t border-slate-800/50">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-500 text-sm">
                Copyright © 2025 HaloGrid IT Solutions - All Rights Reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <a href="mailto:halogriditsolutions@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">halogriditsolutions@gmail.com</span>
                </a>
                {/* <a href="tel:+15551234567" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
