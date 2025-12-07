import React from 'react';
import { motion } from 'framer-motion';
import { domains } from '../../data';

export const Domains: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="domains">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Domains of Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore the diverse technical fields our community specializes in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 group hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg w-fit text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <domain.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{domain.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{domain.count} Projects</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
