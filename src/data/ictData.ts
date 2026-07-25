export interface LessonQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonContentSection {
  id: string;
  type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'callout_note' | 'callout_important' | 'callout_example' | 'table' | 'image' | 'code';
  title?: string;
  text?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  imageUrl?: string;
  imageCaption?: string;
  codeSnippet?: string;
}

export interface Lesson {
  id: string;
  grade: number;
  term: 1 | 2 | 3;
  unitNumber: number;
  titleSinhala: string;
  titleEnglish: string;
  readTime: string;
  summary: string;
  sections: LessonContentSection[];
  quiz: LessonQuizQuestion[];
}

export interface GradeInfo {
  gradeNumber: number;
  titleSinhala: string;
  subtitle: string;
  unitCount: number;
  lessonCount: number;
  description: string;
  badge: string;
  iconName: string;
  bgGradient: string;
  units: string[];
}

export interface ResourceItem {
  id: string;
  titleSinhala: string;
  category: 'Syllabus' | 'Past Papers' | 'Model Papers' | 'Short Notes' | 'Worksheets';
  grade: number;
  year?: string;
  fileSize: string;
  fileType: string;
  downloadCount: number;
  description: string;
  isPopular?: boolean;
}

export const GRADES_DATA: GradeInfo[] = [
  {
    gradeNumber: 6,
    titleSinhala: "6 ශ්‍රේණිය ICT",
    subtitle: "පරිගණක ලෝකයට මුල් පියවර",
    unitCount: 5,
    lessonCount: 12,
    description: "පරිගණකයේ මූලික කොටස්, භාවිතයන්, යතුරුපුවරුව සහ මවුසය නිවැරදිව භාවිතය පිළිබඳ ප්‍රායෝගික දැනුම.",
    badge: "ආරම්භක මට්ටම",
    iconName: "Monitor",
    bgGradient: "from-blue-600 to-indigo-700",
    units: [
      "1. තොරතුරු තාක්ෂණය සහ අපගේ ජීවිතය",
      "2. පරිගණක පද්ධතියේ මූලික උපාංග",
      "3. මෙහෙයුම් පද්ධතිය සහ ගොනු කළමනාකරණය",
      "4. චිත්‍ර ඇඳීමේ මෘදුකාංග (MS Paint / Tux Paint)",
      "5. වචන සැකසුම් මෘදුකාංග (Word Processing Basics)"
    ]
  },
  {
    gradeNumber: 7,
    titleSinhala: "7 ශ්‍රේණිය ICT",
    subtitle: "තොරතුරු තාක්ෂණ මූලධර්ම",
    unitCount: 6,
    lessonCount: 15,
    description: "දත්ත සහ තොරතුරු අතර වෙනස, අන්තර්ජාලය සහ විද්‍යුත් තැපෑල (Email) ආරක්ෂිතව භාවිත කරන ආකාරය.",
    badge: "මූලික සංකල්ප",
    iconName: "Globe",
    bgGradient: "from-sky-600 to-blue-800",
    units: [
      "1. දත්ත සහ තොරතුරු (Data vs Information)",
      "2. පරිගණක මතක වර්ග (Primary & Secondary Memory)",
      "3. අන්තර්ජාලය සහ වෙබ් අඩවි භාවිතය",
      "4. විද්‍යුත් තැපෑල (E-mail) සහ සන්නිවේදනය",
      "5. ලිපි ලේඛන සකස් කිරීම (Word Processing)",
      "6. පරිගණක ඉදිරිපත් කිරීම් (PowerPoint Presentations)"
    ]
  },
  {
    gradeNumber: 8,
    titleSinhala: "8 ශ්‍රේණිය ICT",
    subtitle: "විද්‍යුත් පැතිරිරුම් සහ පරිගණක ජාල",
    unitCount: 6,
    lessonCount: 16,
    description: "පැතිරිරුම් පත්‍ර (Spreadsheets), තර්කන සංකල්ප සහ සරල ගැටලු විසඳීමේ ඇල්ගොරිතම.",
    badge: "ප්‍රායෝගික කුසලතා",
    iconName: "Table",
    bgGradient: "from-teal-600 to-emerald-800",
    units: [
      "1. පැතිරිරුම් පත්‍ර මෘදුකාංග භාවිතය (MS Excel Basics)",
      "2. පරිගණක ජාලකරණය (Computer Networks & Topologies)",
      "3. ඇල්ගොරිතම සහ ගැටලු විසඳීම (Algorithms)",
      "4. සරල ගැලීම් සටහන් (Flowcharts)",
      "5. තොරතුරු තාක්ෂණයේ සන්නිවේදන මාධ්‍ය",
      "6. පරිගණක පද්ධති ආරක්ෂාව"
    ]
  },
  {
    gradeNumber: 9,
    titleSinhala: "9 ශ්‍රේණිය ICT",
    subtitle: "ක්‍රමලේඛනය සහ වෙබ් අඩවි නිර්මාණය",
    unitCount: 7,
    lessonCount: 18,
    description: "Scratch මෘදුකාංගය මගින් ක්‍රමලේඛන අඩිතාලම දමමින් වෙබ් අඩවි නිර්මාණයේ මූලික HTML සංකල්ප.",
    badge: "ක්‍රමලේඛන මූලාරම්භය",
    iconName: "Code",
    bgGradient: "from-indigo-600 to-purple-800",
    units: [
      "1. Scratch මෘදුකාංගය මගින් ක්‍රමලේඛනය",
      "2. වෙබ් අඩවි නිර්මාණය සඳහා HTML මූලධර්ම",
      "3. දත්ත සමුදා සංකල්ප (Database Concepts)",
      "4. බහුමාධ්‍ය තාක්ෂණය (Multimedia Technology)",
      "5. උසස් පැතිරිරුම් පත්‍ර ශ්‍රිත (Advanced Excel Formulae)",
      "6. පරිගණක සදාචාරය සහ නීතිය"
    ]
  },
  {
    gradeNumber: 10,
    titleSinhala: "10 ශ්‍රේණිය ICT",
    subtitle: "සාමාන්‍ය පෙළ (O/L) විෂය නිර්දේශය - I කොටස",
    unitCount: 8,
    lessonCount: 22,
    description: "තොරතුරු සහ සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප, සංඛ්‍යා පද්ධති (Number Systems), තර්කන ද්වාර (Logic Gates) සහ මෙහෙයුම් පද්ධති.",
    badge: "සාමාන්‍ය පෙළ විෂයය",
    iconName: "BookOpen",
    bgGradient: "from-blue-700 to-slate-900",
    units: [
      "1. තොරතුරු හා සන්නිවේදන තාක්ෂණය පිළිබඳ හැඳින්වීම",
      "2. පරිගණක පද්ධතියක උපාංග සහ ව්‍යුහය",
      "3. දත්ත නිරූපණය සහ සංඛ්‍යා පද්ධති (Number Systems)",
      "4. තර්කන ද්වාර සහ පරිපථ (Logic Gates & Boolean Logic)",
      "5. මෙහෙයුම් පද්ධති (Operating Systems)",
      "6. වචන සැකසුම් මෘදුකාංග (Word Processing)",
      "7. පැතිරිරුම් පත්‍ර මෘදුකාංග (Spreadsheets)",
      "8. දත්ත සමුදා කළමනාකරණය (DBMS & Access)"
    ]
  },
  {
    gradeNumber: 11,
    titleSinhala: "11 ශ්‍රේණිය ICT",
    subtitle: "සාමාන්‍ය පෙළ (O/L) විෂය නිර්දේශය - II කොටස",
    unitCount: 8,
    lessonCount: 24,
    description: "ක්‍රමලේඛන සංකල්ප (Python), ඇල්ගොරිතම, HTML/CSS වෙබ් නිර්මාණය, පරිගණක ජාල සහ සමාජීය බලපෑම.",
    badge: "සාමාන්‍ය පෙළ විභාගය",
    iconName: "Award",
    bgGradient: "from-amber-600 to-orange-800",
    units: [
      "1. ඇල්ගොරිතම සහ ගැලීම් සටහන් (Algorithms & Flowcharts)",
      "2. පයිතන් ක්‍රමලේඛන භාෂාව (Python Programming Language)",
      "3. HTML සහ CSS භාවිතයෙන් වෙබ් අඩවි නිර්මාණය",
      "4. පරිගණක ජාලකරණය සහ අන්තර්ජාල තාක්ෂණය",
      "5. පරිගණක පද්ධති සංවර්ධන ආකෘති (SDLC)",
      "6. තොරතුරු තාක්ෂණය සහ සමාජය (ICT and Society)",
      "7. තොරතුරු පද්ධති සහ අනාගත ප්‍රවණතා"
    ]
  }
];

export const SAMPLE_LESSONS: Lesson[] = [
  {
    id: "g10-u1-l1",
    grade: 10,
    term: 1,
    unitNumber: 1,
    titleSinhala: "තොරතුරු හා සන්නිවේදන තාක්ෂණය පිළිබඳ හැඳින්වීම",
    titleEnglish: "Introduction to Information & Communication Technology",
    readTime: "මිනිත්තු 15 කියවීම් කාලය",
    summary: "දත්ත සහ තොරතුරු අතර වෙනස, තොරතුරුවල ගුණාංග, තොරතුරු පද්ධති සහ දෛනික ජීවිතයේදී ICT වල වැදගත්කම පිළිබඳ පූර්ණ සටහන.",
    sections: [
      {
        id: "s1",
        type: "heading1",
        title: "1.1 දත්ත සහ තොරතුරු (Data vs Information)"
      },
      {
        id: "s2",
        type: "paragraph",
        text: "අප දෛනික ජීවිතයේදී 'දත්ත' (Data) සහ 'තොරතුරු' (Information) යන වචන දෙක නිතර භාවිතා කළද, තොරතුරු තාක්ෂණ විෂය පථයේදී මේවා අතර පැහැදිලි වෙනසක් ඇත."
      },
      {
        id: "s3",
        type: "heading2",
        title: "දත්ත (Data) යනු මොනවාද?"
      },
      {
        id: "s4",
        type: "paragraph",
        text: "යම්කිසි සැකසීමකට භාජනය නොකරන ලද, අමුද්‍රව්‍ය ලෙස පවතින අමු කරුණු හෝ සංඛ්‍යා දත්ත ලෙස හැඳින්වේ. දත්තවලට ස්වාධීනව අර්ථයක් නොමැත."
      },
      {
        id: "s5",
        type: "callout_note",
        title: "සටහන (Note):",
        text: "උදාහරණයක් ලෙස: 85, 'සුනිල්', 'ගණිතය', 92 යන පද වෙන වෙනම ගත් විට ඉන් කිසිදු තේරුමක් නොලැබේ. මේවා දත්ත වේ."
      },
      {
        id: "s6",
        type: "heading2",
        title: "තොරතුරු (Information) යනු මොනවාද?"
      },
      {
        id: "s7",
        type: "paragraph",
        text: "දත්ත යම්කිසි ක්‍රමවේදයකට හෝ පටිපාටියකට අනුව සැකසීමෙන් (Processing) පසු ලබාගන්නා අර්ථවත් ප්‍රතිදානය තොරතුරු ලෙස හැඳින්වේ. තොරතුරු මගින් නිවැරදි තීරණ ගැනීමට උපකාරී වේ."
      },
      {
        id: "s8",
        type: "callout_example",
        title: "ප්‍රායෝගික උදාහරණය (Real-World Example):",
        text: "සුනිල්ගේ ගණිත විෂයේ ලකුණු 92 කි. ඔහු පන්තියේ ප්‍රථමයා වේ. මෙහිදී අර්ථවත් වාක්‍යයක් ගොඩනැගී ඇති බැවින් එය තොරතුරකි."
      },
      {
        id: "s9",
        type: "heading2",
        title: "දත්ත සහ තොරතුරු අතර සසඳන වගුව"
      },
      {
        id: "s10",
        type: "table",
        tableData: {
          headers: ["ලක්ෂණය", "දත්ත (Data)", "තොරතුරු (Information)"],
          rows: [
            ["සැකසීම", "සැකසීමට භාජනය නොකළ අමු කරුණු වේ.", "දත්ත සැකසීමෙන් පසු ලබාගන්නා ඵලය වේ."],
            ["අර්ථය", "තනිව ගත් කල අර්ථයක් නොමැත.", "පැහැදිලි අර්ථයක් සහ වටිනාකමක් ඇත."],
            ["ආදානය/ප්‍රතිදානය", "පරිගණක පද්ධතියකට ආදානය (Input) කෙරේ.", "පරිගණක පද්ධතියෙන් ප්‍රතිදානය (Output) වේ."],
            ["උදාහරණ", "පන්තියක සිසුන්ගේ ලකුණු ලැයිස්තුව.", "ලකුණු විශ්ලේෂණය කර සකස් කළ වාර්තා පත."]
          ]
        }
      },
      {
        id: "s11",
        type: "heading1",
        title: "1.2 ගුණාත්මක තොරතුරක පවතින ප්‍රධාන ලක්ෂණ"
      },
      {
        id: "s12",
        type: "paragraph",
        text: "නිවැරදි තීරණ ගැනීමට නම් තොරතුරු ගුණාත්මකභාවයෙන් යුක්ත විය යුතුය. තොරතුරක තිබිය යුතු ප්‍රධාන ගුණාංග පහත පරිදි වේ:"
      },
      {
        id: "s13",
        type: "callout_important",
        title: "වැදගත් (Important O/L Syllabus Point):",
        text: "සාමාන්‍ය පෙළ විභාගයේදී 'තොරතුරක ගුණාංග' පිළිබඳ නිතර ප්‍රශ්න ඇසෙන අතර: නිවැරදිතාව (Accuracy), කාලෝචිතබව (Timeliness), අදාළබව (Relevance), සහ පූර්ණබව (Completeness) ප්‍රධාන වේ."
      },
      {
        id: "s14",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
        imageCaption: "රූපය 1.1: දත්ත සැකසීමේ ක්‍රියාවලිය (Data Processing Cycle: Input -> Processing -> Output -> Storage)"
      },
      {
        id: "s15",
        type: "heading1",
        title: "1.3 තොරතුරු පද්ධතියක ප්‍රධාන සංරචක"
      },
      {
        id: "s16",
        type: "paragraph",
        text: "තොරතුරු පද්ධතියක් (Information System) සාර්ථකව ක්‍රියාත්මක වීමට ප්‍රධාන සංරචක 5 ක් අවශ්‍ය වේ: යටිතල පහසුකම් / හාඩ්වෙයාර් (Hardware), මෘදුකාංග (Software), ජනකාංග / පරිශීලකයින් (Liveware/People), පටිපාටි (Procedures), සහ දත්ත (Data)."
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "පරිගණක පද්ධතියකට ඇතුළත් කරන අමු කරුණු හෝ සංඛ්‍යා හඳුන්වනු ලබන්නේ කුමන නමකින්ද?",
        options: ["තොරතුරු (Information)", "දත්ත (Data)", "ප්‍රතිදාන (Output)", "සංඥා (Signals)"],
        correctIndex: 1,
        explanation: "සැකසීමට භාජනය නොකළ අමු කරුණු හෝ සංඛ්‍යා 'දත්ත' (Data) ලෙස හැඳින්වේ."
      },
      {
        id: "q2",
        question: "පහත සඳහන් ඒවායින් ගුණාත්මක තොරතුරක ලක්ෂණයක් නොවන්නේ කුමක්ද?",
        options: ["කාලෝචිත බව (Timeliness)", "අදාළ බව (Relevance)", "සංකීර්ණ බව (Complexity)", "නිවැරදි බව (Accuracy)"],
        correctIndex: 2,
        explanation: "තොරතුරක් සෑම විටම සරල හා පැහැදිලි විය යුතුය. සංකීර්ණ බව ගුණාත්මක තොරතුරක ලක්ෂණයක් නොවේ."
      },
      {
        id: "q3",
        question: "දත්ත සැකසීමේ චක්‍රයේ (Data Processing Cycle) නිවැරදි අනුපිළිවෙල කුමක්ද?",
        options: [
          "Processing -> Input -> Output",
          "Input -> Processing -> Output",
          "Output -> Input -> Processing",
          "Input -> Output -> Processing"
        ],
        correctIndex: 1,
        explanation: "නිවැරදි අනුපිළිවෙල වන්නේ ආදානය (Input) -> සැකසීම (Processing) -> ප්‍රතිදානය (Output) වේ."
      }
    ]
  },
  {
    id: "g10-u3-l1",
    grade: 10,
    term: 1,
    unitNumber: 3,
    titleSinhala: "සංඛ්‍යා පද්ධති සහ දත්ත නිරූපණය",
    titleEnglish: "Number Systems & Data Representation",
    readTime: "මිනිත්තු 20 කියවීම් කාලය",
    summary: "දශමය, ද්විමය, අෂ්ටමය සහ බලපද-16 (Hexadecimal) සංඛ්‍යා පද්ධති පරිවර්තනය සහ සංඛ්‍යා පද්ධතිවල පදනම (Base/Radix).",
    sections: [
      {
        id: "s201",
        type: "heading1",
        title: "3.1 සංඛ්‍යා පද්ධති හැඳින්වීම (Introduction to Number Systems)"
      },
      {
        id: "s202",
        type: "paragraph",
        text: "පරිගණක සියලු දත්ත සහ උපදෙස් ගබඩා කරන්නේ සහ සකසන්නේ ද්විමය සංඛ්‍යා (Binary Numbers) ලෙසිනි. විෂය නිර්දේශයේ ප්‍රධාන සංඛ්‍යා පද්ධති 4 ක් අධ්‍යයනය කෙරේ."
      },
      {
        id: "s203",
        type: "table",
        tableData: {
          headers: ["සංඛ්‍යා පද්ධතිය", "පදනම (Base)", "භාවිත වන සංකේත / ඉලක්කම්", "උදාහරණය"],
          rows: [
            ["දශමය (Decimal)", "10", "0, 1, 2, 3, 4, 5, 6, 7, 8, 9", "254₁₀"],
            ["ද්විමය (Binary)", "2", "0, 1", "10110₂"],
            ["අෂ්ටමය (Octal)", "8", "0, 1, 2, 3, 4, 5, 6, 7", "370₈"],
            ["බලපද-16 (Hexadecimal)", "16", "0-9 සහ A, B, C, D, E, F", "1A4₁₆"]
          ]
        }
      },
      {
        id: "s204",
        type: "callout_important",
        title: "බලපද-16 (Hexadecimal) අකුරු සංකේත:",
        text: "Hexadecimal හි 10 සිට 15 දක්වා අගයන් සඳහා අකුරු භාවිත වේ: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15."
      },
      {
        id: "s205",
        type: "heading2",
        title: "දශමය සංඛ්‍යාවක් ද්විමය සංඛ්‍යාවක් බවට පරිවර්තනය කිරීම"
      },
      {
        id: "s206",
        type: "paragraph",
        text: "දශම සංඛ්‍යාවක් ද්විමය බවට හැරවීමට එම සංඛ්‍යාව ලැබෙන ශේෂයන් ලියා තබමින් දිගින් දිගටම 2 න් බෙදිය යුතුය. පසුව ශේෂයන් පහළ සිට ඉහළට පිළිවෙලට ලියනු ලැබේ."
      },
      {
        id: "s207",
        type: "code",
        codeSnippet: `උදාහරණය: දශමය 25 ද්විමය බවට හැරවීම
25 / 2 = 12 (ශේෂය 1)
12 / 2 = 6  (ශේෂය 0)
6 / 2  = 3  (ශේෂය 0)
3 / 2  = 1  (ශේෂය 1)
1 / 2  = 0  (ශේෂය 1)

පහළ සිට ඉහළට ශේෂ ලියූ විට: 11001₂`
      }
    ],
    quiz: [
      {
        id: "q201",
        question: "අෂ්ටමය (Octal) සංඛ්‍යා පද්ධතියේ පදනම (Base) කොපමණද?",
        options: ["2", "8", "10", "16"],
        correctIndex: 1,
        explanation: "අෂ්ටමය සංඛ්‍යා පද්ධතියේ පදනම 8 වන අතර එහි 0 සිට 7 දක්වා සංකේත භාවිත වේ."
      },
      {
        id: "q202",
        question: "Hexadecimal (බලපද-16) සංඛ්‍යා පද්ධතියේ 'C' අකුරෙන් නිරූපණය වන දශම අගය කුමක්ද?",
        options: ["10", "11", "12", "13"],
        correctIndex: 2,
        explanation: "Hexadecimal හි A=10, B=11, C=12 වේ."
      }
    ]
  },
  {
    id: "g11-u2-l1",
    grade: 11,
    term: 1,
    unitNumber: 2,
    titleSinhala: "පයිතන් ක්‍රමලේඛනය (Python Programming)",
    titleEnglish: "Python Programming Basics",
    readTime: "මිනිත්තු 25 කියවීම් කාලය",
    summary: "Python විචල්‍යයන් (Variables), දත්ත වර්ග (Data Types), කොන්දේසි සහිත ප්‍රකාශන (if-else) සහ ලූප් (for/while loops).",
    sections: [
      {
        id: "s301",
        type: "heading1",
        title: "2.1 පයිතන් ක්‍රමලේඛන භාෂාව හැඳින්වීම"
      },
      {
        id: "s302",
        type: "paragraph",
        text: "පයිතන් (Python) යනු ඉහළ මට්ටමේ (High-Level) ක්‍රමලේඛන භාෂාවකි. එය කියවීමට සහ ලිවීමට ඉතා සරල වන අතර O/L විෂය නිර්දේශයේ ප්‍රධාන වශයෙන් අධ්‍යයනය කෙරේ."
      },
      {
        id: "s303",
        type: "heading2",
        title: "පයිතන්හි මූලික දත්ත වර්ග (Data Types)"
      },
      {
        id: "s304",
        type: "table",
        tableData: {
          headers: ["දත්ත වර්ගය", "විස්තරය", "උදාහරණය"],
          rows: [
            ["int", "පූර්ණ සංඛ්‍යා (Integers)", "age = 16"],
            ["float", "දශම සංඛ්‍යා (Floating point)", "marks = 85.5"],
            ["str", "පාඨ/අක්ෂර මාලා (Strings)", "name = 'Nimal'"],
            ["bool", "බූලීය අගයන් (Boolean)", "isPassed = True"]
          ]
        }
      },
      {
        id: "s305",
        type: "heading2",
        title: "කොන්දේසි ප්‍රකාශන (if - elif - else)"
      },
      {
        id: "s306",
        type: "code",
        codeSnippet: `# සාමාර්ථය තීරණය කරන සරල Python කේතයක්
marks = float(input("ලකුණු ඇතුළත් කරන්න: "))

if marks >= 75:
    print("ඔබට A සාමාර්ථයක් හිමිවී ඇත!")
elif marks >= 65:
    print("ඔබට B සාමාර්ථයක් හිමිවී ඇත!")
elif marks >= 50:
    print("ඔබට C සාමාර්ථයක් හිමිවී ඇත!")
else:
    print("නැවත උත්සාහ කරන්න.")`
      }
    ],
    quiz: [
      {
        id: "q301",
        question: "පයිතන්හි දත්ත වර්ගයක් පරික්ෂා කිරීමට භාවිත කරන ශ්‍රිතය (Function) කුමක්ද?",
        options: ["type()", "typeof()", "check()", "datatype()"],
        correctIndex: 0,
        explanation: "Python හි ඕනෑම විචල්‍යයක දත්ත වර්ගය හඳුනාගැනීමට `type()` ශ්‍රිතය භාවිත කෙරේ."
      }
    ]
  }
];

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: "res-1",
    titleSinhala: "G.C.E. O/L 2023 ICT පසුගිය විභාග ප්‍රශ්න පත්‍රය (Sinhala Medium)",
    category: "Past Papers",
    grade: 11,
    year: "2023",
    fileSize: "3.8 MB",
    fileType: "PDF",
    downloadCount: 14250,
    description: "2023 සාමාන්‍ය පෙළ ICT I සහ II ප්‍රශ්න පත්‍රය නිල පිළිතුරු පත්‍රය සමඟ.",
    isPopular: true
  },
  {
    id: "res-2",
    titleSinhala: "10 සහ 11 ශ්‍රේණි ICT සමස්ත විෂය නිර්දේශ කෙටි සටහන් (Short Notes Complete Bundle)",
    category: "Short Notes",
    grade: 10,
    year: "2024",
    fileSize: "5.2 MB",
    fileType: "PDF",
    downloadCount: 22800,
    description: "විභාගයට පෙර ඉක්මන් පුනරීක්ෂණය සඳහා සියලුම ඒකක ආවරණය වන කෙටි සටහන් පෙළ.",
    isPopular: true
  },
  {
    id: "res-3",
    titleSinhala: "G.C.E. O/L ICT 2024 ආදර්ශ ප්‍රශ්න පත්‍ර සහ ලකුණු දීමේ පටිපාටිය (Model Paper set)",
    category: "Model Papers",
    grade: 11,
    year: "2024",
    fileSize: "2.9 MB",
    fileType: "PDF",
    downloadCount: 9400,
    description: "ජාතික අධ්‍යාපන ආයතනය (NIE) මගින් නිකුත් කළ විශේෂ ආදර්ශ ප්‍රශ්න පත්‍ර 05 ක්.",
    isPopular: true
  },
  {
    id: "res-4",
    titleSinhala: "6 - 11 ශ්‍රේණි ICT ජාතික විෂය නිර්දේශය (National Syllabus Guide - NIE)",
    category: "Syllabus",
    grade: 10,
    year: "2024",
    fileSize: "1.8 MB",
    fileType: "PDF",
    downloadCount: 6100,
    description: "අධ්‍යාපන අමාත්‍යාංශය මගින් සම්පාදනය කළ 6 සිට 11 ශ්‍රේණි දක්වා නිල ICT විෂය නිර්දේශ මාර්ගෝපදේශය."
  },
  {
    id: "res-5",
    titleSinhala: "G.C.E. O/L 2022 ICT පසුගිය ප්‍රශ්න පත්‍රය සහ විවරණය",
    category: "Past Papers",
    grade: 11,
    year: "2022",
    fileSize: "4.1 MB",
    fileType: "PDF",
    downloadCount: 11200,
    description: "2022 සාමාන්‍ය පෙළ ICT විභාගයේ බහුවරණ සහ රචනා ප්‍රශ්න පත්‍ර සඳහා විස්තරාත්මක විවරණය."
  },
  {
    id: "res-6",
    titleSinhala: "10 ශ්‍රේණිය - සංඛ්‍යා පද්ධති සහ තර්කන ද්වාර ප්‍රායෝගික අභ්‍යාස පත්‍රිකාව",
    category: "Worksheets",
    grade: 10,
    year: "2024",
    fileSize: "1.5 MB",
    fileType: "PDF",
    downloadCount: 7800,
    description: "Number Systems සහ Logic Gates ගණනය කිරීම් පුහුණු වීම සඳහා විශේෂ වැඩපත්‍රිකා."
  },
  {
    id: "res-7",
    titleSinhala: "9 ශ්‍රේණිය Scratch & HTML මූලික ක්‍රමලේඛන ප්‍රායෝගික මාර්ගෝපදේශය",
    category: "Worksheets",
    grade: 9,
    year: "2024",
    fileSize: "2.4 MB",
    fileType: "PDF",
    downloadCount: 4900,
    description: "Scratch බ්ලොක්ස් සහ HTML ටැග් භාවිතයෙන් ප්‍රායෝගික ක්‍රියාකාරකම් කිරීමේ උපදෙස්."
  },
  {
    id: "res-8",
    titleSinhala: "G.C.E. O/L 2021 ICT පසුගිය විභාග ප්‍රශ්න පත්‍රය",
    category: "Past Papers",
    grade: 11,
    year: "2021",
    fileSize: "3.5 MB",
    fileType: "PDF",
    downloadCount: 8900,
    description: "2021 O/L ICT ප්‍රශ්න පත්‍රය සහ සලකුණු කිරීමේ පටිපාටිය."
  }
];
