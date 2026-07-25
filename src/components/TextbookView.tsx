import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Printer, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Lightbulb, 
  HelpCircle, 
  Share2, 
  Copy, 
  Check, 
  Download,
  Search,
  Filter,
  GraduationCap
} from 'lucide-react';
import { SAMPLE_LESSONS, GRADES_DATA, Lesson, LessonContentSection } from '../data/ictData';

interface TextbookViewProps {
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
  selectedLessonId?: string;
  setSelectedLessonId?: (id: string) => void;
}

export const TextbookView: React.FC<TextbookViewProps> = ({
  selectedGrade,
  setSelectedGrade,
  selectedLessonId,
  setSelectedLessonId
}) => {
  // Filter lessons for selected grade
  const gradeLessons = SAMPLE_LESSONS.filter(l => l.grade === selectedGrade);
  const activeLesson = gradeLessons.find(l => l.id === selectedLessonId) || gradeLessons[0] || SAMPLE_LESSONS[0];

  // Font size adjustment state: 'normal' | 'large' | 'xlarge'
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Interactive Quiz state per lesson
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Filter lessons inside table of contents sidebar
  const [sidebarSearch, setSidebarSearch] = useState('');

  // Reset quiz state when active lesson changes
  useEffect(() => {
    setUserAnswers({});
    setSubmittedQuiz(false);
    setIsBookmarked(false);
  }, [activeLesson.id]);

  const handleOptionSelect = (qId: string, optionIdx: number) => {
    if (submittedQuiz) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleCopyCode = (codeText: string, id: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-lg leading-loose';
      default: return 'text-base leading-relaxed';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sinhala">
      
      {/* Grade Selector Strip */}
      <div className="mb-6 bg-slate-900 text-white rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 no-print shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg font-inter">
            {selectedGrade}
          </div>
          <div>
            <h2 className="font-bold text-base text-white">
              {selectedGrade} ශ්‍රේණිය ICT ඩිජිටල් පෙළපොත
            </h2>
            <p className="text-xs text-slate-300">
              {GRADES_DATA.find(g => g.gradeNumber === selectedGrade)?.subtitle || "ජාතික විෂය නිර්දේශය"}
            </p>
          </div>
        </div>

        {/* Grade Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 mr-2 font-medium">ශ්‍රේණිය වෙනස් කරන්න:</span>
          {[6, 7, 8, 9, 10, 11].map((gNum) => (
            <button
              key={gNum}
              onClick={() => setSelectedGrade(gNum)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedGrade === gNum
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {gNum}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 1. LEFT SIDEBAR: Table of Contents */}
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sticky top-24 no-print max-h-[85vh] overflow-y-auto">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-sm text-slate-900">
                පාඩම් මාලා පටුන (Contents)
              </h3>
            </div>
            <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200">
              {gradeLessons.length} Lessons
            </span>
          </div>

          {/* Sidebar Search Filter */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="පාඩම් මාතෘකා සොයන්න..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className="w-full bg-slate-50 text-xs text-slate-800 placeholder-slate-400 rounded-xl pl-9 pr-3 py-2 border border-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Terms Categorized Lessons List */}
          <div className="space-y-6">
            {[1, 2, 3].map((termNum) => {
              const termLessons = gradeLessons.filter(
                l => l.term === termNum && 
                (sidebarSearch === '' || l.titleSinhala.toLowerCase().includes(sidebarSearch.toLowerCase()) || l.titleEnglish.toLowerCase().includes(sidebarSearch.toLowerCase()))
              );

              if (termLessons.length === 0 && sidebarSearch !== '') return null;

              return (
                <div key={termNum} className="space-y-2">
                  <div className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/80 flex items-center justify-between">
                    <span>{termNum} වන වාරය (Term {termNum})</span>
                    <span className="text-[10px] text-amber-800 font-inter font-medium">{termLessons.length} පාඩම්</span>
                  </div>

                  <div className="space-y-1">
                    {termLessons.length > 0 ? (
                      termLessons.map((lesson) => {
                        const isActive = activeLesson.id === lesson.id;
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              if (setSelectedLessonId) setSelectedLessonId(lesson.id);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all flex items-start gap-2.5 border ${
                              isActive
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md font-bold'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/60'
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-md text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold font-inter ${
                              isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {lesson.unitNumber}
                            </span>
                            <div className="flex-1">
                              <div className="line-clamp-2 leading-snug">{lesson.titleSinhala}</div>
                              <div className={`text-[10px] mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-400'} font-inter`}>
                                {lesson.readTime}
                              </div>
                            </div>
                          </button>
                        );
                      })
                    ) : (
                      <div className="text-[11px] text-slate-400 italic px-2 py-1">
                        මෙම වාරයේ තවත් සටහන් සම්පාදනය වෙමින් පවතී...
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </aside>

        {/* 2. MAIN TEXTBOOK CONTENT AREA (Center/Right) */}
        <main className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-lg overflow-hidden">
          
          {/* Textbook Header Toolbar */}
          <div className="bg-slate-900 text-white p-6 md:p-8 space-y-4 border-b border-slate-800">
            
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-slate-950 font-bold px-2.5 py-1 rounded-md text-[11px]">
                  {activeLesson.grade} ශ්‍රේණිය
                </span>
                <span className="bg-slate-800 text-blue-300 px-2.5 py-1 rounded-md border border-slate-700">
                  {activeLesson.term} වන වාරය • ඒකකය {activeLesson.unitNumber}
                </span>
              </div>

              {/* Toolbar Controls: Font size, Bookmark, Print */}
              <div className="flex items-center gap-2 no-print">
                <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700 text-[11px]">
                  <span className="text-slate-400 px-2">අකුරු ප්‍රමාණය:</span>
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-0.5 rounded font-bold ${fontSize === 'sm' ? 'bg-blue-600 text-white' : 'text-slate-300'}`}
                    title="Small Text"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-0.5 rounded font-bold ${fontSize === 'base' ? 'bg-blue-600 text-white' : 'text-slate-300'}`}
                    title="Normal Text"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-0.5 rounded font-bold ${fontSize === 'lg' ? 'bg-blue-600 text-white' : 'text-slate-300'}`}
                    title="Large Text"
                  >
                    A+
                  </button>
                </div>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-lg border transition-colors ${
                    isBookmarked
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                  title="Bookmark Lesson"
                >
                  {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
                </button>

                <button
                  onClick={handlePrint}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 transition-colors"
                  title="Print Lesson Page"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Lesson Titles */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {activeLesson.titleSinhala}
              </h1>
              <p className="text-xs text-blue-300/80 mt-1 font-inter font-medium">
                {activeLesson.titleEnglish} • {activeLesson.readTime}
              </p>
            </div>

            {/* Lesson Summary Callout */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs text-slate-300 leading-relaxed font-sinhala">
              <span className="font-bold text-amber-400 mr-1">පාඩමේ සාරාංශය:</span>
              {activeLesson.summary}
            </div>

          </div>

          {/* Textbook Reading Paper Page Container */}
          <div className={`p-6 sm:p-10 text-slate-800 space-y-8 bg-slate-50/50 ${getFontSizeClass()}`}>
            
            {activeLesson.sections.map((section: LessonContentSection) => {
              switch (section.type) {
                
                case 'heading1':
                  return (
                    <div key={section.id} className="pt-4 border-b border-blue-200 pb-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                  );

                case 'heading2':
                  return (
                    <div key={section.id} className="pt-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                        {section.title}
                      </h3>
                    </div>
                  );

                case 'heading3':
                  return (
                    <div key={section.id} className="pt-2">
                      <h4 className="text-base font-semibold text-slate-800">
                        {section.title}
                      </h4>
                    </div>
                  );

                case 'paragraph':
                  return (
                    <p key={section.id} className="text-slate-700 leading-relaxed">
                      {section.text}
                    </p>
                  );

                // Informative Callout (Note/Tip box)
                case 'callout_note':
                  return (
                    <div 
                      key={section.id} 
                      className="p-4 bg-sky-50 rounded-2xl border-l-4 border-sky-500 text-sky-900 shadow-sm space-y-1"
                    >
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-sky-800">
                        <Info className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{section.title || "සටහන (Note):"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  );

                // Important O/L Callout
                case 'callout_important':
                  return (
                    <div 
                      key={section.id} 
                      className="p-4 bg-amber-50 rounded-2xl border-l-4 border-amber-500 text-amber-950 shadow-sm space-y-1"
                    >
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-800">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{section.title || "වැදගත් (Important):"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  );

                // Real-world Example Callout
                case 'callout_example':
                  return (
                    <div 
                      key={section.id} 
                      className="p-4 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500 text-emerald-950 shadow-sm space-y-1"
                    >
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-800">
                        <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{section.title || "ප්‍රායෝගික උදාහරණය:"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  );

                // Neatly Styled HTML Table
                case 'table':
                  if (!section.tableData) return null;
                  return (
                    <div key={section.id} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold border-b border-slate-800">
                            {section.tableData.headers.map((h, i) => (
                              <th key={i} className="p-3.5 border-r border-slate-800 last:border-r-0">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr 
                              key={rIdx} 
                              className={`border-b border-slate-200 last:border-b-0 ${
                                rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                              } hover:bg-blue-50/50 transition-colors`}
                            >
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3.5 border-r border-slate-200 last:border-r-0 text-slate-800 font-normal">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );

                // Image Placeholder
                case 'image':
                  return (
                    <figure key={section.id} className="my-6 space-y-2">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                        <img 
                          src={section.imageUrl} 
                          alt={section.imageCaption || "ICT Diagram"} 
                          className="w-full h-auto object-cover max-h-80"
                        />
                      </div>
                      {section.imageCaption && (
                        <figcaption className="text-center text-xs text-slate-500 italic font-sinhala">
                          {section.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  );

                // Code Snippet Box
                case 'code':
                  return (
                    <div key={section.id} className="my-6 rounded-2xl overflow-hidden bg-slate-900 text-slate-100 border border-slate-800 shadow-md font-mono text-xs">
                      <div className="bg-slate-800/90 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">Code Example / Python Snippet</span>
                        <button
                          onClick={() => handleCopyCode(section.codeSnippet || '', section.id)}
                          className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-sans"
                        >
                          {copiedCodeId === section.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCodeId === section.id ? 'පිටපත් විය' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed font-mono">
                        <code>{section.codeSnippet}</code>
                      </pre>
                    </div>
                  );

                default:
                  return null;
              }
            })}

            {/* 3. INTERACTIVE END-OF-LESSON MCQ QUIZ */}
            {activeLesson.quiz && activeLesson.quiz.length > 0 && (
              <section className="mt-12 pt-8 border-t-2 border-slate-200 space-y-6 no-print">
                
                <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-lg text-white">
                      පාඩම අවසානයේ ස්වයං ඇගයීම් අභ්‍යාසය (Lesson Quiz)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    මෙම පාඩමේ ඔබ ඉගෙන ගත් කරුණු පිළිබඳ අවබෝධය පරීක්ෂා කර බැලීමට පහත ප්‍රශ්නවලට පිළිතුරු සපයන්න.
                  </p>
                </div>

                <div className="space-y-6">
                  {activeLesson.quiz.map((q, qIdx) => {
                    const selectedOpt = userAnswers[q.id];
                    const isAnswered = selectedOpt !== undefined;

                    return (
                      <div 
                        key={q.id} 
                        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-inter">
                            {qIdx + 1}
                          </span>
                          <p className="font-semibold text-sm text-slate-900 leading-relaxed">
                            {q.question}
                          </p>
                        </div>

                        {/* Options */}
                        <div className="space-y-2 pl-9">
                          {q.options.map((opt, optIdx) => {
                            let optionClass = "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200";
                            if (submittedQuiz && isAnswered) {
                              if (optIdx === q.correctIndex) {
                                optionClass = "bg-emerald-50 text-emerald-900 border-emerald-400 font-bold";
                              } else if (selectedOpt === optIdx) {
                                optionClass = "bg-rose-50 text-rose-900 border-rose-300";
                              }
                            } else if (selectedOpt === optIdx) {
                              optionClass = "bg-blue-50 text-blue-900 border-blue-400 font-semibold";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleOptionSelect(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionClass}`}
                              >
                                <span>{opt}</span>
                                {submittedQuiz && optIdx === q.correctIndex && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Box */}
                        {submittedQuiz && (
                          <div className="ml-9 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                            <span className="font-bold text-amber-700">පිළිතුර පිළිබඳ විවරණය:</span>
                            <p className="text-slate-600">{q.explanation}</p>
                          </div>
                        )}

                      </div>
                    );
                  })}

                  {/* Submit Quiz Controls */}
                  <div className="flex items-center justify-between pt-2">
                    {!submittedQuiz ? (
                      <button
                        onClick={() => setSubmittedQuiz(true)}
                        disabled={Object.keys(userAnswers).length === 0}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                      >
                        පිළිතුරු පරීක්ෂා කරන්න (Submit Answers)
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setUserAnswers({});
                          setSubmittedQuiz(false);
                        }}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                      >
                        නැවත උත්සාහ කරන්න (Try Again)
                      </button>
                    )}
                  </div>

                </div>

              </section>
            )}

            {/* Bottom Lesson Navigation */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
              <button
                onClick={() => {
                  const currentIdx = gradeLessons.findIndex(l => l.id === activeLesson.id);
                  if (currentIdx > 0 && setSelectedLessonId) {
                    setSelectedLessonId(gradeLessons[currentIdx - 1].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={gradeLessons.findIndex(l => l.id === activeLesson.id) <= 0}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>පෙර පාඩම</span>
              </button>

              <button
                onClick={() => {
                  const currentIdx = gradeLessons.findIndex(l => l.id === activeLesson.id);
                  if (currentIdx < gradeLessons.length - 1 && setSelectedLessonId) {
                    setSelectedLessonId(gradeLessons[currentIdx + 1].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={gradeLessons.findIndex(l => l.id === activeLesson.id) >= gradeLessons.length - 1}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>ඊළඟ පාඩම</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
};
