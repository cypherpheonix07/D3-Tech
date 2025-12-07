import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const OfficialLink: React.FC = () => {
  return (
    <section className="py-20 bg-teal-600 dark:bg-teal-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
        <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of developers building the future. Visit our official community portal for more resources.
        </p>
        <a 
          href="https://d3community.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
          aria-label="Visit the official D3 Tech Community website"
        >
          Visit d3tech.community <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
};
