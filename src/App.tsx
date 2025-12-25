import { useEffect, useState } from 'react';
import { Wrench, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className={`max-w-4xl w-full text-center space-y-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-8 animate-float">
            <img
              src="/high-resolution-logo-black-on-transparent-background.svg"
              alt="Halogrid IT Solutions"
              className="h-24 md:h-32 brightness-0 invert"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-cyan-400 animate-spin-slow" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Under Construction
              </h1>
              <Wrench className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            </div>

            <p className="text-xl md:text-2xl text-slate-300 font-light">
              We're building something amazing
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 py-8">
            <p className="text-slate-400 text-lg leading-relaxed">
              Our team is working hard to bring you innovative IT solutions and services.
              We're crafting a digital experience that will transform the way you do business.
            </p>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Progress</span>
                  <span>{Math.floor(progress)}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-slate-400 text-sm">info@halogrid.com</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-400 text-sm">Coming Soon</p>
            </div>
          </div>

          <div className="pt-12">
            <p className="text-slate-500 text-sm">
              © 2024 Halogrid IT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
