import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { TextbookView } from './components/TextbookView';
import { DownloadsView } from './components/DownloadsView';
import { ToolsView } from './components/ToolsView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'textbook' | 'downloads' | 'tools'>('home');
  const [selectedGrade, setSelectedGrade] = useState<number>(10);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('g10-u1-l1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sinhala selection:bg-amber-100 selection:text-amber-900">
      {/* Global Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main View Area */}
      <div className="flex-1">
        {currentView === 'home' && (
          <HomeView
            setCurrentView={setCurrentView}
            setSelectedGrade={setSelectedGrade}
            setSelectedLessonId={setSelectedLessonId}
          />
        )}

        {currentView === 'textbook' && (
          <TextbookView
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            selectedLessonId={selectedLessonId}
            setSelectedLessonId={setSelectedLessonId}
          />
        )}

        {currentView === 'downloads' && (
          <DownloadsView
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {currentView === 'tools' && (
          <ToolsView />
        )}
      </div>

      {/* Global Footer */}
      <Footer
        setCurrentView={setCurrentView}
        setSelectedGrade={setSelectedGrade}
      />
    </div>
  );
}
