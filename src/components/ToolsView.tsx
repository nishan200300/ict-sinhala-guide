import React, { useState } from 'react';
import { Cpu, Calculator, Zap, CheckCircle2, ArrowRight, RefreshCw, Lightbulb, Sparkles } from 'lucide-react';

export const ToolsView: React.FC = () => {
  // Tool selector: 'number' | 'logic'
  const [activeToolTab, setActiveToolTab] = useState<'number' | 'logic'>('number');

  // --- NUMBER CONVERTER STATE ---
  const [decimalVal, setDecimalVal] = useState<string>('25');
  const [binaryVal, setBinaryVal] = useState<string>('11001');
  const [octalVal, setOctalVal] = useState<string>('31');
  const [hexVal, setHexVal] = useState<string>('19');

  const handleDecimalChange = (val: string) => {
    setDecimalVal(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 0) {
      setBinaryVal(num.toString(2));
      setOctalVal(num.toString(8));
      setHexVal(num.toString(16).toUpperCase());
    } else if (val === '') {
      setBinaryVal('');
      setOctalVal('');
      setHexVal('');
    }
  };

  const handleBinaryChange = (val: string) => {
    setBinaryVal(val);
    const num = parseInt(val, 2);
    if (!isNaN(num) && num >= 0) {
      setDecimalVal(num.toString(10));
      setOctalVal(num.toString(8));
      setHexVal(num.toString(16).toUpperCase());
    } else if (val === '') {
      setDecimalVal('');
      setOctalVal('');
      setHexVal('');
    }
  };

  const handleOctalChange = (val: string) => {
    setOctalVal(val);
    const num = parseInt(val, 8);
    if (!isNaN(num) && num >= 0) {
      setDecimalVal(num.toString(10));
      setBinaryVal(num.toString(2));
      setHexVal(num.toString(16).toUpperCase());
    } else if (val === '') {
      setDecimalVal('');
      setBinaryVal('');
      setHexVal('');
    }
  };

  const handleHexChange = (val: string) => {
    setHexVal(val);
    const num = parseInt(val, 16);
    if (!isNaN(num) && num >= 0) {
      setDecimalVal(num.toString(10));
      setBinaryVal(num.toString(2));
      setOctalVal(num.toString(8));
    } else if (val === '') {
      setDecimalVal('');
      setBinaryVal('');
      setOctalVal('');
    }
  };

  // --- LOGIC GATE STATE ---
  const [selectedGate, setSelectedGate] = useState<'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR'>('AND');
  const [inputA, setInputA] = useState<number>(1);
  const [inputB, setInputB] = useState<number>(0);

  const calculateGateOutput = (gate: string, a: number, b: number): number => {
    switch (gate) {
      case 'AND': return (a && b) ? 1 : 0;
      case 'OR': return (a || b) ? 1 : 0;
      case 'NOT': return a ? 0 : 1;
      case 'NAND': return !(a && b) ? 1 : 0;
      case 'NOR': return !(a || b) ? 1 : 0;
      case 'XOR': return (a !== b) ? 1 : 0;
      default: return 0;
    }
  };

  const outputValue = calculateGateOutput(selectedGate, inputA, inputB);

  const getGateExpression = () => {
    switch (selectedGate) {
      case 'AND': return 'Y = A · B';
      case 'OR': return 'Y = A + B';
      case 'NOT': return 'Y = A\'';
      case 'NAND': return 'Y = (A · B)\'';
      case 'NOR': return 'Y = (A + B)\'';
      case 'XOR': return 'Y = A ⊕ B';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sinhala space-y-8">
      
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span>ප්‍රායෝගික ICT අත්හදාබැලීම්</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          අන්තර්ක්‍රියාකාරී ICT ගණනය කිරීම් සහ තර්කන මෙවලම්
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          O/L විෂය නිර්දේශයේ සංඛ්‍යා පද්ධති (Number Systems) සහ තර්කන ද්වාර (Logic Gates) පිළිබඳ ඔබේ අවබෝධය වැඩිදියුණු කරගැනීමට මෙම සජීවී සිමියුලේටර් භාවිත කරන්න.
        </p>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => setActiveToolTab('number')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeToolTab === 'number'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>01. සංඛ්‍යා පද්ධති පරිවර්තකය</span>
          </button>

          <button
            onClick={() => setActiveToolTab('logic')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeToolTab === 'logic'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>02. තර්කන ද්වාර Simulator</span>
          </button>
        </div>
      </div>

      {/* TOOL 1: NUMBER SYSTEM CONVERTER */}
      {activeToolTab === 'number' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-8 animate-fadeIn">
          
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              <span>සංඛ්‍යා පද්ධති සජීවී පරිවර්තකය (Number System Converter)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              ඕනෑම සංඛ්‍යා පද්ධතියකට අගයක් ඇතුළත් කළ විට එය අනෙකුත් සියලුම පද්ධතිවලට තත්‍ය කාලීනව පරිවර්තනය වේ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Decimal Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                දශමය (Decimal - Base 10)
              </label>
              <input
                type="number"
                value={decimalVal}
                onChange={(e) => handleDecimalChange(e.target.value)}
                placeholder="25"
                className="w-full bg-white text-slate-900 text-lg font-bold font-mono px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
              />
              <span className="text-[11px] text-slate-400 block font-mono">සංකේත: 0-9</span>
            </div>

            {/* Binary Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                ද්විමය (Binary - Base 2)
              </label>
              <input
                type="text"
                value={binaryVal}
                onChange={(e) => handleBinaryChange(e.target.value)}
                placeholder="11001"
                className="w-full bg-white text-blue-700 text-lg font-bold font-mono px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
              />
              <span className="text-[11px] text-slate-400 block font-mono">සංකේත: 0, 1</span>
            </div>

            {/* Octal Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                අෂ්ටමය (Octal - Base 8)
              </label>
              <input
                type="text"
                value={octalVal}
                onChange={(e) => handleOctalChange(e.target.value)}
                placeholder="31"
                className="w-full bg-white text-teal-700 text-lg font-bold font-mono px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
              />
              <span className="text-[11px] text-slate-400 block font-mono">සංකේත: 0-7</span>
            </div>

            {/* Hexadecimal Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                බලපද-16 (Hexadecimal - Base 16)
              </label>
              <input
                type="text"
                value={hexVal}
                onChange={(e) => handleHexChange(e.target.value)}
                placeholder="19"
                className="w-full bg-white text-purple-700 text-lg font-bold font-mono px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
              />
              <span className="text-[11px] text-slate-400 block font-mono">සංකේත: 0-9, A-F</span>
            </div>

          </div>

          {/* Explanation Step-by-Step Card */}
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-blue-900">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>ගණනය කිරීමේ විවරණය (Calculation Summary):</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-mono">
              දශම අගය <span className="font-bold underline">{decimalVal || '0'}₁₀</span> = ද්විමය <span className="font-bold text-blue-700">{binaryVal || '0'}₂</span> = අෂ්ටමය <span className="font-bold text-teal-700">{octalVal || '0'}₈</span> = Hexadecimal <span className="font-bold text-purple-700">{hexVal || '0'}₁₆</span>
            </p>
          </div>

        </div>
      )}

      {/* TOOL 2: LOGIC GATE SIMULATOR */}
      {activeToolTab === 'logic' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-8 animate-fadeIn">
          
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>තර්කන ද්වාර අනුකාරකය (Logic Gate Simulator)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              තර්කන ද්වාරය තෝරා Input A සහ Input B ස්විච Toggle කරමින් ප්‍රතිදානය (Output Bulb) සජීවීව නිරීක්ෂණය කරන්න.
            </p>
          </div>

          {/* Gate Selection Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR'].map((gate) => (
              <button
                key={gate}
                onClick={() => setSelectedGate(gate as any)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all font-inter ${
                  selectedGate === gate
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {gate} Gate
              </button>
            ))}
          </div>

          {/* Simulator Arena Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-inner">
            
            {/* Inputs Control */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">ආදානය A (Input A):</span>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${inputA ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
                    {inputA}
                  </span>
                </div>
                <button
                  onClick={() => setInputA(inputA === 1 ? 0 : 1)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all font-inter ${
                    inputA ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  Switch A: {inputA ? 'HIGH (1)' : 'LOW (0)'}
                </button>
              </div>

              {selectedGate !== 'NOT' && (
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">ආදානය B (Input B):</span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${inputB ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
                      {inputB}
                    </span>
                  </div>
                  <button
                    onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all font-inter ${
                      inputB ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    Switch B: {inputB ? 'HIGH (1)' : 'LOW (0)'}
                  </button>
                </div>
              )}

            </div>

            {/* Circuit Expression & Gate Box */}
            <div className="lg:col-span-4 text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-slate-800 rounded-2xl border border-slate-700 text-amber-400 font-mono font-bold text-base shadow-md">
                {getGateExpression()}
              </div>

              <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center font-bold text-2xl tracking-widest text-white shadow-2xl border-2 border-blue-400/30">
                {selectedGate}
              </div>
            </div>

            {/* Output LED Lamp Visual */}
            <div className="lg:col-span-4 text-center space-y-3">
              <div className="text-xs font-bold text-slate-400">ප්‍රතිදානය (Output Y):</div>
              
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                outputValue 
                  ? 'bg-amber-400 text-slate-950 shadow-[0_0_50px_rgba(251,191,36,0.8)] scale-110' 
                  : 'bg-slate-800 text-slate-600 border border-slate-700'
              }`}>
                <Lightbulb className={`w-12 h-12 ${outputValue ? 'fill-slate-950' : ''}`} />
              </div>

              <div className="font-mono text-lg font-bold">
                Output: <span className={outputValue ? 'text-amber-400' : 'text-slate-500'}>{outputValue ? 'HIGH (1) - ON' : 'LOW (0) - OFF'}</span>
              </div>
            </div>

          </div>

          {/* TRUTH TABLE DYNAMIC HIGHLIGHT */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-slate-900">
              {selectedGate} ද්වාරයේ සත්‍යතා වගුව (Truth Table):
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-center text-xs sm:text-sm font-mono border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-3">Input A</th>
                    {selectedGate !== 'NOT' && <th className="p-3">Input B</th>}
                    <th className="p-3">Output Y ({getGateExpression()})</th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedGate === 'NOT' ? [[0], [1]] : [[0,0], [0,1], [1,0], [1,1]]).map((row, idx) => {
                    const rowA = row[0];
                    const rowB = row[1] || 0;
                    const rowOut = calculateGateOutput(selectedGate, rowA, rowB);
                    const isActiveRow = (selectedGate === 'NOT' ? rowA === inputA : (rowA === inputA && rowB === inputB));

                    return (
                      <tr 
                        key={idx}
                        className={`border-b border-slate-200 transition-colors ${
                          isActiveRow 
                            ? 'bg-amber-100 font-bold text-slate-950' 
                            : 'bg-white text-slate-700'
                        }`}
                      >
                        <td className="p-3">{rowA}</td>
                        {selectedGate !== 'NOT' && <td className="p-3">{rowB}</td>}
                        <td className="p-3">{rowOut}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
