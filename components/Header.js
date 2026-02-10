import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-50/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Elevate</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <a href="#features" className="text-gray-600 hover:text-brand-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-brand-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
              Resources
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors">
              Log in
            </button>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
              Start free trial
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              <a href="#features" className="text-gray-600 hover:text-brand-600 px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
                Features
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-brand-600 px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-brand-600 px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
                Pricing
              </a>
              <a href="#contact" className="text-gray-600 hover:text-brand-600 px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand-50 transition-all">
                Resources
              </a>
              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <button className="text-gray-600 hover:text-gray-900 px-4 py-2.5 text-sm font-medium text-left">
                  Log in
                </button>
                <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 text-sm font-semibold rounded-lg shadow-sm">
                  Start free trial
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
