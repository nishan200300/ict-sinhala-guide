import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  Menu, 
  X, 
  Search, 
  Cpu, 
  GraduationCap, 
  Sparkles,
  HelpCircle,
  Home
} from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'textbook' | 'downloads' | 'tools';
  setCurrentView: (view: 'home' | 'textbook' | 'downloads' | 'tools') => void;
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  selectedGrade,
  setSelectedGrade,
  searchQuery,
  setSearchQuery
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'textbook' | 'downloads' | 'tools', grade?: number) => {
    setCurrentView(view);
    if (grade) {
      setSelectedGrade(grade);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800 shadow-xl no-print">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-xs py-1.5 px-4 text-center text-blue-100 flex items-center justify-center gap-2 font-medium">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
        <span>ශ්‍රී ලංකා ජාතික ICT විෂය නිර්දේශය (6 - 11 ශ්‍රේණි) සඳහා වන නොමිලේ ඩිජිටල් අධ්‍යාපනික ද්වාරය</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg md:text-xl text-white tracking-tight leading-none">
                  ICT Sinhala Guide
                </span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-400/30 font-inter">
                  NIE Syllabus
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 font-sinhala">
                අයි.සී.ටී. සිංහල මාර්ගෝපදේශය
              </p>
            </div>
          </button>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="පාඩම්, ප්‍රශ්න පත්‍ර, සංකල්ප සොයන්න..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (currentView !== 'downloads' && currentView !== 'textbook') {
                    setCurrentView('downloads');
                  }
                }}
                className="w-full bg-slate-800/90 text-slate-100 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-2 border border-slate-700/80 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sinhala"
                id="header-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs bg-slate-700 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors font-sinhala ${
                currentView === 'home'
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              id="nav-home-btn"
            >
              <Home className="w-4 h-4" />
              <span>මුල් පිටුව</span>
            </button>

            {/* Grade Quick Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('textbook')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors font-sinhala ${
                  currentView === 'textbook'
                    ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                id="nav-grades-btn"
              >
                <GraduationCap className="w-4 h-4" />
                <span>ශ්‍රේණි (6 - 11)</span>
              </button>

              {/* Hover Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 w-52 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-2 hidden group-hover:block z-50">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1 font-inter">
                  Select Grade / ශ්‍රේණිය
                </div>
                {[6, 7, 8, 9, 10, 11].map((grade) => (
                  <button
                    key={grade}
                    onClick={() => handleNavClick('textbook', grade)}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between font-sinhala transition-colors ${
                      selectedGrade === grade && currentView === 'textbook'
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    <span>{grade} ශ්‍රේණිය ICT</span>
                    <span className="text-[10px] text-slate-400 font-inter">Grade {grade}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('textbook')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors font-sinhala ${
                currentView === 'textbook'
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              id="nav-textbook-btn"
            >
              <BookOpen className="w-4 h-4" />
              <span>ඩිජිටල් පෙළපොත</span>
            </button>

            <button
              onClick={() => handleNavClick('downloads')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors font-sinhala ${
                currentView === 'downloads'
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              id="nav-downloads-btn"
            >
              <Download className="w-4 h-4" />
              <span>ඩවුන්ලෝඩ්ස්</span>
            </button>

            <button
              onClick={() => handleNavClick('tools')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors font-sinhala ${
                currentView === 'tools'
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              id="nav-tools-btn"
            >
              <Cpu className="w-4 h-4" />
              <span>අභ්‍යාස සහ මෙවලම්</span>
            </button>
          </nav>

          {/* Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            
            {/* Quick CTA - Start Learning */}
            <button
              onClick={() => handleNavClick('textbook', 10)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs md:text-sm rounded-xl shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all font-sinhala active:scale-95"
              id="header-start-learning-btn"
            >
              <BookOpen className="w-4 h-4" />
              <span>පාඩම් ආරම්භ කරන්න</span>
            </button>

            {/* Search Toggle for Mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Search Toggle"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-hamburger-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isSearchOpen && (
          <div className="lg:hidden py-3 border-t border-slate-800">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="පාඩම්, ප්‍රශ්න පත්‍ර, සංකල්ප සොයන්න..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (currentView !== 'downloads' && currentView !== 'textbook') {
                    setCurrentView('downloads');
                  }
                }}
                className="w-full bg-slate-800 text-slate-100 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-2.5 border border-slate-700 font-sinhala"
              />
            </div>
          </div>
        )}

        {/* Mobile Drawer Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3 bg-slate-900 px-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium font-sinhala ${
                  currentView === 'home' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-200'
                }`}
              >
                <Home className="w-4 h-4 text-blue-400" />
                <span>මුල් පිටුව</span>
              </button>

              <button
                onClick={() => handleNavClick('textbook')}
                className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium font-sinhala ${
                  currentView === 'textbook' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>ඩිජිටල් පෙළපොත</span>
              </button>

              <button
                onClick={() => handleNavClick('downloads')}
                className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium font-sinhala ${
                  currentView === 'downloads' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-200'
                }`}
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>ඩවුන්ලෝඩ්ස්</span>
              </button>

              <button
                onClick={() => handleNavClick('tools')}
                className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium font-sinhala ${
                  currentView === 'tools' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-200'
                }`}
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>අභ්‍යාස සහ මෙවලම්</span>
              </button>
            </div>

            {/* Mobile Grade Quick Selector */}
            <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-sinhala">
                <GraduationCap className="w-4 h-4" />
                <span>ශ්‍රේණිය තෝරන්න (Grades 6 - 11):</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[6, 7, 8, 9, 10, 11].map((grade) => (
                  <button
                    key={grade}
                    onClick={() => handleNavClick('textbook', grade)}
                    className={`py-2 px-1 text-xs font-medium rounded-lg text-center font-sinhala transition-all ${
                      selectedGrade === grade && currentView === 'textbook'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                        : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    }`}
                  >
                    {grade} ශ්‍රේණිය
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
