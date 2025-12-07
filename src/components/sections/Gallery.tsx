import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../data';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Offline Meetup' | 'Online Session'>('Offline Meetup');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(item => item.type === activeTab);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">Community Moments</h2>
          
          <div className="inline-flex p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            {['Offline Meetup', 'Online Session'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={cn(
                  "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all",
                  activeTab === tab
                    ? "bg-teal-500 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {tab}s
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X size={32} />
            </button>
            <img 
              src={lightboxImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
