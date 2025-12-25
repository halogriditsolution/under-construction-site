import { useEffect, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/high-resolution-logo-black-on-transparent-background.svg"
              alt="Halogrid IT Solutions"
              className="h-10"
            />
            <span className="ml-2 font-semibold text-gray-900 text-lg">Halogrid</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-medium">
              Get Updates
            </button>
          </nav>
        </div>
      </header>

      <main className="relative">
        <svg className="absolute top-0 right-0 w-96 h-96 text-blue-50 pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 80 20 Q 100 30 90 50 Q 100 70 80 80 L 80 20" fill="currentColor" opacity="0.5" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-80 h-80 text-amber-50 pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" fill="currentColor" opacity="0.3" transform="rotate(45 25 25)" />
          <rect x="50" y="50" width="40" height="40" fill="currentColor" opacity="0.2" transform="rotate(30 70 70)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Under<br />Construction
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We're actively building transformative IT solutions tailored to elevate your business. Our expert team is crafting innovative services that will redefine your digital infrastructure.
            </p>

            <button className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition transform hover:scale-105">
              Learn More
              <ArrowRight size={20} />
            </button>

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enterprise Solutions</h3>
                  <p className="text-gray-600 text-sm">Scalable IT infrastructure</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600 text-sm">Dedicated technical assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation First</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge technology solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-96 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="120" fill="#E8E8FF" opacity="0.5"/>

              <g className="animate-float-slow">
                <circle cx="200" cy="120" r="60" fill="#1e3a8a" opacity="0.9"/>
                <circle cx="160" cy="140" r="20" fill="#fbbf24" opacity="0.8"/>
                <rect x="190" y="100" width="20" height="40" fill="white" opacity="0.6"/>
              </g>

              <circle cx="100" cy="200" r="35" fill="#fbbf24" opacity="0.7"/>
              <circle cx="300" cy="220" r="40" fill="#1e3a8a" opacity="0.6"/>

              <g className="animate-pulse" style={{animationDelay: '0.5s'}}>
                <circle cx="200" cy="200" r="8" fill="#3b82f6" opacity="0.5"/>
                <circle cx="200" cy="200" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
              </g>

              <path d="M 120 280 L 280 280" stroke="#9ca3af" strokeWidth="2" opacity="0.4"/>
              <circle cx="140" cy="280" r="8" fill="#fbbf24" opacity="0.6"/>
              <circle cx="260" cy="280" r="8" fill="#1e3a8a" opacity="0.6"/>

              <text x="200" y="340" textAnchor="middle" className="text-gray-700 font-bold" fontSize="24" fill="#374151">
                Building Innovation
              </text>
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 border-t border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                <p className="text-gray-600">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">99.9%</div>
                <p className="text-gray-600">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8">Get notified when we launch. Be the first to experience our solutions.</p>

            <form className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition flex items-center gap-2"
              >
                <Mail size={18} />
                Notify
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">IT Consulting</a></li>
                <li><a href="#" className="hover:text-white transition">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>info@halogrid.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Halogrid IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
