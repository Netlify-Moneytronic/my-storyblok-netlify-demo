import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 border-b border-navy-700 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-display text-2xl font-bold text-white tracking-wide">
                <span className="text-gold-400">Mariner</span> Finance
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-charcoal-300 hover:text-gold-400 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200">
                Services
              </a>
              <a href="#about" className="text-charcoal-300 hover:text-gold-400 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200">
                About
              </a>
              <a href="#testimonials" className="text-charcoal-300 hover:text-gold-400 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200">
                Testimonials
              </a>
              <a href="#insights" className="text-charcoal-300 hover:text-gold-400 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200">
                Insights
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-charcoal-300 hover:text-white px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                Client Login
              </button>
              <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal-300 hover:text-gold-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-navy-700">
            <div className="px-2 pt-4 pb-6 space-y-1">
              <a href="#services" className="text-charcoal-300 hover:text-gold-400 block px-3 py-3 text-sm font-medium tracking-wide uppercase">
                Services
              </a>
              <a href="#about" className="text-charcoal-300 hover:text-gold-400 block px-3 py-3 text-sm font-medium tracking-wide uppercase">
                About
              </a>
              <a href="#testimonials" className="text-charcoal-300 hover:text-gold-400 block px-3 py-3 text-sm font-medium tracking-wide uppercase">
                Testimonials
              </a>
              <a href="#insights" className="text-charcoal-300 hover:text-gold-400 block px-3 py-3 text-sm font-medium tracking-wide uppercase">
                Insights
              </a>
              <div className="pt-4 mt-4 border-t border-navy-700">
                <button className="text-charcoal-300 hover:text-white block px-3 py-3 text-sm font-medium w-full text-left">
                  Client Login
                </button>
                <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-3 py-3 text-sm font-semibold tracking-wide uppercase w-full mt-2">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
