import React from 'react';
import { teamMembers } from '../../data';
import { Linkedin, Twitter, Github } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Meet the Team</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The passionate individuals driving the D3_TECH community forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 group-hover:border-teal-500 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="text-slate-400 hover:text-teal-500 transition-colors"><Twitter size={18} /></a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="text-slate-400 hover:text-teal-500 transition-colors"><Linkedin size={18} /></a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} className="text-slate-400 hover:text-teal-500 transition-colors"><Github size={18} /></a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
