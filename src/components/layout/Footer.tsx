import React from 'react';
import { Code2, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { D3CommunityLink } from '../ui/D3CommunityLink';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-teal-500 text-white p-1.5 rounded-lg">
                <Code2 size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                D3_<span className="text-teal-500">TECH</span>
              </span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              Empowering developers to build better software through community, collaboration, and open-source innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-200 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-200 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-200 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-teal-500 transition-colors">Events</a></li>
              <li>
                <D3CommunityLink className="text-sm" />
              </li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} /> hello@d3tech.community
              </li>
              <li>123 Tech Avenue, Innovation City</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>© 2025 D3_TECH Community. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
