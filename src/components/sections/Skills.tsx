import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone, Cloud, Cpu } from 'lucide-react';

const skills = [
  { name: 'Frontend Dev', level: 90, icon: Layout },
  { name: 'Backend Systems', level: 85, icon: Database },
  { name: 'Mobile Apps', level: 75, icon: Smartphone },
  { name: 'Cloud Infra', level: 80, icon: Cloud },
  { name: 'UI/UX Design', level: 70, icon: Code }, // Using Code as generic placeholder
  { name: 'DevOps', level: 65, icon: Cpu },
];

export const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our community thrives on diverse technical expertise. Here is what we specialize in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-teal-500">
                <skill.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900 dark:text-slate-200">{skill.name}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-teal-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
