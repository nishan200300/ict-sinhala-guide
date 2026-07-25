import React from 'react';
import { Cpu, BookOpen, Download, GraduationCap, ExternalLink, Heart, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: 'home' | 'textbook' | 'downloads' | 'tools') => void;
  setSelectedGrade: (grade: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, setSelectedGrade }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 no-print font-sinhala">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white font-inter">ICT Sinhala Guide</h3>
                <p className="text-xs text-amber-400 font-sinhala">අයි.සී.ටී. සිංහල මාර්ගෝපදේශය</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sinhala">
              ශ්‍රී ලාංකික පාසල් සිසුන් උදෙසා ජාතික අධ්‍යාපන ආයතනයේ (NIE) නවතම ICT විෂය නිර්දේශයට අනුකූලව නිර්මාණය කරන ලද නිදහස් අධ්‍යාපනික ද්වාරය.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>කොළඹ, ශ්‍රී ලංකාව</span>
            </div>
          </div>

          {/* Column 2: Grades Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-inter border-b border-slate-800 pb-2">
              ශ්‍රේණි (Grades 6 - 11)
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { grade: 6, title: "6 ශ්‍රේණිය ICT - මූලික සංකල්ප" },
                { grade: 7, title: "7 ශ්‍රේණිය ICT - දත්ත හා තොරතුරු" },
                { grade: 8, title: "8 ශ්‍රේණිය ICT - පැතිරිරුම් පත්‍ර" },
                { grade: 9, title: "9 ශ්‍රේණිය ICT - Scratch & HTML" },
                { grade: 10, title: "10 ශ්‍රේණිය ICT - O/L විෂය නිර්දේශය I" },
                { grade: 11, title: "11 ශ්‍රේණිය ICT - O/L විෂය නිර්දේශය II" }
              ].map((item) => (
                <li key={item.grade}>
                  <button
                    onClick={() => {
                      setSelectedGrade(item.grade);
                      setCurrentView('textbook');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-500">›</span>
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resource Downloads */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-inter border-b border-slate-800 pb-2">
              සම්පත් සහ ප්‍රශ්න පත්‍ර
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('downloads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-blue-500">›</span>
                  <span>O/L ICT පසුගිය විභාග ප්‍රශ්න පත්‍ර (Past Papers)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('downloads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-blue-500">›</span>
                  <span>සාමාන්‍ය පෙළ ICT ආදර්ශ ප්‍රශ්න පත්‍ර (Model Papers)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('downloads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-blue-500">›</span>
                  <span>10 සහ 11 ශ්‍රේණි කෙටි සටහන් (Short Notes)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('tools');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-blue-500">›</span>
                  <span>සංඛ්‍යා පද්ධති පරිවර්තකය (Number Converter)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('tools');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-blue-500">›</span>
                  <span>තර්කන ද්වාර අනුකාරකය (Logic Gate Simulator)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: National Educational References */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-inter border-b border-slate-800 pb-2">
              නිල අධ්‍යාපනික සබැඳි
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ශ්‍රී ලංකා ජාතික අධ්‍යාපන ආයතනය (NIE) සහ විභාග දෙපාර්තමේන්තුවේ අධ්‍යාපනික මගපෙන්වීම්.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a 
                href="http://www.nie.lk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-blue-400 hover:underline"
              >
                <span>ජාතික අධ්‍යාපන ආයතනය (NIE Website)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="http://www.doenets.lk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-blue-400 hover:underline block"
              >
                <span>ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව (DoENets)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ICT Sinhala Guide. සියලුම හිමිකම් ඇවිරිණි.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>ශ්‍රී ලාංකීය සිසු දරුවන් වෙනුවෙන් නිර්මාණය කරන ලදී</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-1 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
