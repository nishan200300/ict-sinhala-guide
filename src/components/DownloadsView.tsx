import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Search, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Printer, 
  Eye, 
  Share2, 
  GraduationCap,
  Calendar,
  HardDrive
} from 'lucide-react';
import { RESOURCE_ITEMS, ResourceItem } from '../data/ictData';

interface DownloadsViewProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const DownloadsView: React.FC<DownloadsViewProps> = ({ searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<number | 'All'>('All');
  
  // Download Modal state
  const [activeDownloadModal, setActiveDownloadModal] = useState<ResourceItem | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Filter items
  const filteredResources = RESOURCE_ITEMS.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesGrade = selectedGradeFilter === 'All' || res.grade === selectedGradeFilter;
    const matchesSearch = searchQuery === '' || 
      res.titleSinhala.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesGrade && matchesSearch;
  });

  const triggerDownload = (item: ResourceItem) => {
    setActiveDownloadModal(item);
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simulate PDF download progress
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sinhala space-y-8">
      
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
            <Download className="w-4 h-4 text-amber-400" />
            <span>සම්පත් සහ PDF ගබඩාව</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            ICT අධ්‍යාපනික සම්පත් සහ ප්‍රශ්න පත්‍ර පීඨය
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            ජාතික විෂය නිර්දේශයට අදාළ පසුගිය O/L විභාග ප්‍රශ්න පත්‍ර, ආදර්ශ ප්‍රශ්න පත්‍ර, කෙටි සටහන් සහ අභ්‍යාස පත්‍රිකා සියල්ල නොමිලේ PDF ලෙස ඩවුන්ලෝඩ් කරගන්න.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Search Input */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ප්‍රශ්න පත්‍රය, වර්ෂය හෝ සටහන් නම අනුව සොයන්න..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-sm text-slate-800 placeholder-slate-400 rounded-xl pl-10 pr-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-500 font-sinhala"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Grade Dropdown Filter */}
          <div className="md:col-span-4">
            <select
              value={selectedGradeFilter}
              onChange={(e) => setSelectedGradeFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
              className="w-full bg-slate-50 text-sm text-slate-800 rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-500 font-sinhala"
            >
              <option value="All">සියලුම ශ්‍රේණි (All Grades)</option>
              <option value={6}>6 ශ්‍රේණිය</option>
              <option value={7}>7 ශ්‍රේණිය</option>
              <option value={8}>8 ශ්‍රේණිය</option>
              <option value={9}>9 ශ්‍රේණිය</option>
              <option value={10}>10 ශ්‍රේණිය (O/L I)</option>
              <option value={11}>11 ශ්‍රේණිය (O/L II)</option>
            </select>
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-slate-100">
          {[
            { id: 'All', label: 'සියලුම සම්පත් (All)' },
            { id: 'Past Papers', label: 'පසුගිය ප්‍රශ්න පත්‍ර (Past Papers)' },
            { id: 'Model Papers', label: 'ආදර්ශ ප්‍රශ්න පත්‍ර (Model Papers)' },
            { id: 'Short Notes', label: 'කෙටි සටහන් (Short Notes)' },
            { id: 'Syllabus', label: 'විෂය නිර්දේශ (Syllabus)' },
            { id: 'Worksheets', label: 'වැඩපත්‍රිකා (Worksheets)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative group"
            >
              {item.isPopular && (
                <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  ප්‍රමුඛයි
                </span>
              )}

              <div className="space-y-3">
                
                {/* PDF Icon & Category */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 font-bold shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-inter">
                      {item.category}
                    </span>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-2 font-inter">
                      <span>Grade {item.grade}</span>
                      {item.year && <span>• {item.year}</span>}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.titleSinhala}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-normal">
                  {item.description}
                </p>

              </div>

              {/* Meta Info & CTA */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-400 font-inter">
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5" />
                    <span>{item.fileSize}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.downloadCount.toLocaleString()} ඩවුන්ලෝඩ්ස්</span>
                  </span>
                </div>

                <button
                  onClick={() => triggerDownload(item)}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  id={`download-btn-${item.id}`}
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>PDF ඩවුන්ලෝඩ් කරන්න</span>
                </button>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <FileText className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-base text-slate-800">
              සොයන ලද මාතෘකාවට අදාළ සම්පත් හමු නොවීය
            </h3>
            <p className="text-xs text-slate-500">
              වෙනත් සෙවුම් පදයක් හෝ ශ්‍රේණි පෙරහනක් භාවිත කර නැවත උත්සාහ කරන්න.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedGradeFilter('All');
              }}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl"
            >
              සියලු පෙරහන් ඉවත් කරන්න
            </button>
          </div>
        )}
      </div>

      {/* DOWNLOAD SIMULATION MODAL */}
      {activeDownloadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 animate-fadeIn relative">
            
            <button
              onClick={() => setActiveDownloadModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
                <FileText className="w-8 h-8" />
              </div>

              <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                {activeDownloadModal.titleSinhala}
              </h3>
              <p className="text-xs text-slate-500 font-inter">
                {activeDownloadModal.fileType} Document • {activeDownloadModal.fileSize}
              </p>
            </div>

            {/* Progress Bar */}
            {isDownloading ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-600 font-semibold font-inter">
                  <span>Downloading PDF...</span>
                  <span>{downloadProgress}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>ඔබේ PDF ලිපොත සාර්ථකව ඩවුන්ලෝඩ් වීමට සූදානම්!</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      alert(`PDF Download: ${activeDownloadModal.titleSinhala}`);
                      setActiveDownloadModal(null);
                    }}
                    className="py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>ගොනුව සුරකින්න</span>
                  </button>

                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>මුද්‍රණය (Print)</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
