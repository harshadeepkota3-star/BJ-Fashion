
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Scissors, Box, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { CustomFitStep } from '../types';

const CustomFit: React.FC = () => {
  const [step, setStep] = useState<CustomFitStep>('garment');
  const [selection, setSelection] = useState({ garment: '', fabric: '', fit: 'Classic' });

  const steps: { key: CustomFitStep; label: string; icon: any }[] = [
    { key: 'garment', label: 'Garment', icon: Scissors },
    { key: 'measurements', label: 'Measures', icon: Ruler },
    { key: 'fabric', label: 'Fabric', icon: Box },
    { key: 'review', label: 'Finish', icon: CheckCircle },
  ];

  const handleNext = () => {
    if (step === 'garment') setStep('measurements');
    else if (step === 'measurements') setStep('fabric');
    else if (step === 'fabric') setStep('review');
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-navy mb-4 uppercase">CUSTOM FIT</h1>
          <p className="text-gray-600 font-medium text-base">Guided precision tailoring for your unique silhouette.</p>
        </header>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-10 relative px-4">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 -z-0" />
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = step === s.key;
            return (
              <div key={s.key} className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isActive ? 'bg-navy text-white shadow-lg' : 'bg-white text-gray-300 border border-gray-100'
                }`}>
                  <Icon size={18} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white p-8 md:p-12 shadow-xl min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-grow"
            >
              {step === 'garment' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Blazer', 'Shirt', 'Trousers'].map(g => (
                    <button 
                      key={g}
                      onClick={() => setSelection({...selection, garment: g})}
                      className={`relative aspect-[3/4] border-2 transition-all ${selection.garment === g ? 'border-navy' : 'border-transparent'}`}
                    >
                      <img src={`https://picsum.photos/seed/${g}/600/800`} className="w-full h-full object-cover grayscale opacity-80" alt={g}/>
                      <div className="absolute bottom-4 left-4"><span className="text-white font-bold uppercase text-xs tracking-widest">{g}</span></div>
                    </button>
                  ))}
                </div>
              )}
              {step === 'measurements' && (
                <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                   {['Chest', 'Waist', 'Shoulder', 'Inseam'].map(m => (
                     <div key={m} className="space-y-1">
                       <label className="text-xs font-bold uppercase tracking-widest text-navy">{m} (cm)</label>
                       <input type="number" className="w-full border-b-2 border-gray-100 py-2 text-xl font-medium outline-none focus:border-navy" />
                     </div>
                   ))}
                </div>
              )}
              {step === 'review' && <div className="text-center py-10"><CheckCircle size={48} className="mx-auto mb-4 text-navy"/><h3 className="text-2xl font-bold uppercase">Ready to submit</h3></div>}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-between pt-6 border-t border-gray-50">
            <button onClick={() => setStep('garment')} className="text-sm font-bold uppercase tracking-widest">Back</button>
            <button onClick={handleNext} className="bg-navy text-white px-8 py-3 text-sm font-bold uppercase tracking-widest">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFit;
