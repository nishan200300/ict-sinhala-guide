import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  GraduationCap, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Award, 
  Monitor, 
  Globe, 
  Table, 
  Code, 
  Layers,
  HelpCircle,
  Zap,
  ChevronRight
} from 'lucide-react';
import { GRADES_DATA, RESOURCE_ITEMS, GradeInfo } from '../data/ictData';

interface HomeViewProps {
  setCurrentView: (view: 'home' | 'textbook' | 'downloads' | 'tools') => void;
  setSelectedGrade: (grade: number) => void;
  setSelectedLessonId?: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  setCurrentView, 
  setSelectedGrade,
  setSelectedLessonId 
}) => {
  // Quick homepage practice quiz state
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const HOMEPAGE_QUIZ = [
    {
      question: "පරිගණකයක දත්ත සහ උපදෙස් තාවකාලිකව ගබඩා කර තබා ගන්නා ප්‍රධාන මතකය කුමක්ද?",
      options: ["ROM (Read Only Memory)", "RAM (Random Access Memory)", "Hard Disk Drive", "USB Flash Drive"],
      correct: 1,
      explanation: "RAM (Random Access Memory) යනු පරිගණකය ක්‍රියාත්මක වන විට දත්ත තාවකාලිකව ගබඩා කරන නසන සුලු (Volatile) ප්‍රධාන මතකයයි."
    },
    {
      question: "දශම සංඛ්‍යා පද්ධතියේ 10 අගය ද්විමය (Binary) සංඛ්‍යාවකින් නිරූපණය කරන්නේ කෙසේද?",
      options: ["1001₂", "1010₂", "1100₂", "1110₂"],
      correct: 1,
      explanation: "10 හි ද්විමය අගය 1010₂ වේ (8x1 + 4x0 + 2x1 + 1x0 = 10)."
    },
    {
      question: "HTML හි ප්‍රධාන ශීර්ෂයක් (Main Heading) යෙදීමට භාවිත කරන ටැගය (Tag) කුමක්ද?",
      options: ["<title>", "<h6>", "<h1>", "<header>"],
      correct: 2,
      explanation: "HTML හි විශාලතම සහ ප්‍රධාන ශීර්ෂය යෙදීමට <h1> ටැගය භාවිත කෙරේ."
    }
  ];

  const handleOptionSelect = (optionIdx: number) => {
    if (showAnswer) return;
    setSelectedOption(optionIdx);
    setShowAnswer(true);
    if (optionIdx === HOMEPAGE_QUIZ[activeQuizIndex].correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setActiveQuizIndex((prev) => (prev + 1) % HOMEPAGE_QUIZ.length);
  };

  const getGradeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-6 h-6 text-blue-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-sky-400" />;
      case 'Table': return <Table className="w-6 h-6 text-teal-400" />;
      case 'Code': return <Code className="w-6 h-6 text-purple-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-amber-400" />;
      case 'Award': return <Award className="w-6 h-6 text-orange-400" />;
      default: return <GraduationCap className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-16 pb-16 font-sinhala">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text Area */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-sm shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>6 - 11 ශ්‍රේණි ජාතික විෂය නිර්දේශයට අනුකූලයි</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                ශ්‍රී ලංකා ICT අධ්‍යාපනයේ <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
                  ඩිජිටල් මාර්ගෝපදේශය
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                6 ශ්‍රේණියේ සිට සාමාන්‍ය පෙළ (G.C.E. O/L) දක්වා තොරතුරු හා සන්නිවේදන තාක්ෂණ විෂය මාලාව සිංහල මාධ්‍යයෙන් සරලව, නිවැරදිව සහ නොමිලේ ඉගෙන ගන්න.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => {
                    setSelectedGrade(10);
                    setCurrentView('textbook');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base rounded-2xl shadow-xl shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all flex items-center justify-center gap-3 group active:scale-95"
                  id="hero-start-learning-btn"
                >
                  <BookOpen className="w-5 h-5 text-slate-950" />
                  <span>පාඩම් ආරම්භ කරන්න</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setCurrentView('downloads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-4 bg-slate-800 hover:bg-slate-700/80 text-white font-semibold text-base rounded-2xl border border-slate-700 transition-all flex items-center justify-center gap-2.5 active:scale-95"
                  id="hero-download-papers-btn"
                >
                  <Download className="w-5 h-5 text-amber-400" />
                  <span>පසුගිය ප්‍රශ්න පත්‍ර ඩවුන්ලෝඩ්</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center lg:text-left">
                <div>
                  <div className="text-lg md:text-xl font-bold text-white font-inter">6 - 11</div>
                  <div className="text-xs text-slate-400">සියලුම ශ්‍රේණි</div>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-amber-400 font-inter">100% Free</div>
                  <div className="text-xs text-slate-400">සම්පූර්ණයෙන්ම නොමිලේ</div>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-blue-400 font-inter">O/L Focused</div>
                  <div className="text-xs text-slate-400">විභාග ඉලක්කගතයි</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow Backdrop */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-xl" />

                {/* Main Card */}
                <div className="relative bg-slate-800/90 rounded-2xl border border-slate-700 p-6 shadow-2xl space-y-5">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs text-slate-400 font-inter font-mono">grade_10_ict.sinhala</span>
                  </div>

                  {/* Sample Textbook Preview Box */}
                  <div className="space-y-3">
                    <div className="inline-block px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold">
                      10 ශ්‍රේණිය - 1 වන වාරය
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      තොරතුරු සහ සන්නිවේදන තාක්ෂණය හැඳින්වීම
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "දත්ත (Data) යනු යම්කිසි සැකසීමකට භාජනය නොකරන ලද අමුද්‍රව්‍ය වේ. දත්ත සැකසීමෙන් පසු තොරතුරු (Information) බවට පත්වේ..."
                    </p>
                  </div>

                  {/* Feature Pills */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>නවතම NIE විෂය නිර්දේශ සටහන්</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>ස්වයං ඇගයීම් බහුවරණ ප්‍රශ්න (MCQ)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>PDF පසුගිය විභාග ප්‍රශ්න පත්‍ර ඩවුන්ලෝඩ්</span>
                    </div>
                  </div>

                  {/* Quick Action inside Card */}
                  <button
                    onClick={() => {
                      setSelectedGrade(10);
                      setCurrentView('textbook');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>මෙම පාඩම දැන් කියවන්න</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. GRADE SELECTOR SECTION (Grades 6 to 11) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>පාසල් විෂය මාලාව</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ඔබේ ශ්‍රේණිය තෝරාගෙන පාඩම් ආරම්භ කරන්න
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            6 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා සියලුම ඒකක, නිබන්ධන සහ ප්‍රායෝගික ක්‍රියාකාරකම් මෙහි වර්ගීකරණය කර ඇත.
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GRADES_DATA.map((grade) => (
            <div
              key={grade.gradeNumber}
              className="group bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header Banner of Card */}
                <div className={`p-5 bg-gradient-to-r ${grade.bgGradient} text-white flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      {getGradeIcon(grade.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-snug">{grade.titleSinhala}</h3>
                      <p className="text-xs text-blue-100/80 font-inter font-medium">{grade.subtitle}</p>
                    </div>
                  </div>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20">
                    {grade.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {grade.description}
                  </p>

                  {/* Units List Preview */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      ප්‍රධාන ඒකක ({grade.unitCount}):
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {grade.units.slice(0, 3).map((unit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="truncate">{unit}</span>
                        </li>
                      ))}
                      {grade.units.length > 3 && (
                        <li className="text-[11px] text-blue-600 font-medium pt-1">
                          + තවත් ඒකක {grade.units.length - 3} ක් සටහන් තුළ...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0 bg-white border-t border-slate-50">
                <button
                  onClick={() => {
                    setSelectedGrade(grade.gradeNumber);
                    setCurrentView('textbook');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 bg-slate-100 group-hover:bg-blue-600 text-slate-800 group-hover:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  id={`grade-card-btn-${grade.gradeNumber}`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{grade.gradeNumber} ශ්‍රේණියේ පාඩම් බලන්න</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. INTERACTIVE TOOLS & FEATURE HIGHLIGHTS */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>ප්‍රායෝගික ඉගෙනුම් මෙවලම්</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                ගණනය කිරීම් සහ තර්කන පරිපථ සජීවීව අත්හදා බලන්න
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                පාඩම් කටපාඩම් කිරීමට අමතරව, සංඛ්‍යා පද්ධති පරිවර්තනය (Number System Conversion) සහ තර්කන ද්වාර (Logic Gates) තත්‍ය කාලීනව ක්‍රියාකරවන අන්තර්ක්‍රියාකාරී සිමියුලේටර් මගින් ඉගෙන ගන්න.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold font-inter">
                    01
                  </div>
                  <h4 className="font-bold text-sm text-white">සංඛ්‍යා පද්ධති පරිවර්තකය</h4>
                  <p className="text-xs text-slate-400">
                    දශමය, ද්විමය, අෂ්ටමය සහ බලපද-16 අතර පියවරෙන් පියවර ගණනය කිරීම්.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-inter">
                    02
                  </div>
                  <h4 className="font-bold text-sm text-white">තර්කන ද්වාර Simulator</h4>
                  <p className="text-xs text-slate-400">
                    AND, OR, NOT, NAND, NOR, XOR ද්වාරවල Input/Output සජීවීව නිරීක්ෂණය.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentView('tools');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
                  id="home-tools-cta-btn"
                >
                  <Cpu className="w-4 h-4" />
                  <span>අන්තර්ක්‍රියාකාරී මෙවලම් වෙත යන්න</span>
                </button>
              </div>

            </div>

            {/* Right Side: Interactive Quiz Preview Widget */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-base text-white">
                      ඉක්මන් දැනුම පරීක්ෂාව (Quick O/L Quiz)
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 font-inter">
                    {activeQuizIndex + 1} / {HOMEPAGE_QUIZ.length}
                  </span>
                </div>

                {/* Question */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-100 leading-relaxed">
                    {HOMEPAGE_QUIZ[activeQuizIndex].question}
                  </p>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {HOMEPAGE_QUIZ[activeQuizIndex].options.map((option, idx) => {
                      let btnStyle = "bg-slate-700/60 text-slate-200 hover:bg-slate-700 border-slate-600";
                      if (showAnswer) {
                        if (idx === HOMEPAGE_QUIZ[activeQuizIndex].correct) {
                          btnStyle = "bg-emerald-600/30 text-emerald-300 border-emerald-500/80 font-bold";
                        } else if (selectedOption === idx) {
                          btnStyle = "bg-rose-600/30 text-rose-300 border-rose-500/80";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(idx)}
                          disabled={showAnswer}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {showAnswer && idx === HOMEPAGE_QUIZ[activeQuizIndex].correct && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Answer Explanation */}
                  {showAnswer && (
                    <div className="p-4 bg-slate-900/90 rounded-xl border border-blue-500/40 space-y-2 animate-fadeIn">
                      <div className="text-xs font-bold text-amber-400">විස්තරය (Explanation):</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {HOMEPAGE_QUIZ[activeQuizIndex].explanation}
                      </p>
                      <button
                        onClick={handleNextQuestion}
                        className="mt-2 text-xs font-bold text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
                      >
                        <span>ඊළඟ ප්‍රශ්නයට යන්න</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FEATURED DOWNLOADS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
              <Download className="w-4 h-4" />
              <span>සම්පත් පීඨය</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              ජනප්‍රිය පසුගිය ප්‍රශ්න පත්‍ර සහ කෙටි සටහන්
            </h2>
          </div>

          <button
            onClick={() => {
              setCurrentView('downloads');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200"
            id="home-view-all-downloads-btn"
          >
            <span>සියලුම PDF ඩවුන්ලෝඩ්ස් බලන්න</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCE_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full font-inter">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 font-inter">
                    Grade {item.grade} • {item.fileSize}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {item.titleSinhala}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setCurrentView('downloads');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>PDF ඩවුන්ලෝඩ් කරන්න</span>
              </button>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
