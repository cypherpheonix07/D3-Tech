import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, X } from 'lucide-react';
import { events } from '../../data';
import { Event } from '../../types';
import { cn } from '../../utils/cn';

const categories = ['All', 'Workshop', 'Meetup', 'Hackathon', 'Webinar'];

export const Events: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [rsvped, setRsvped] = useState<Record<string, boolean>>({});

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.category === filter);

  const toggleRsvp = (id: string) => {
    setRsvped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="events">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Upcoming Events</h2>
            <p className="text-slate-600 dark:text-slate-400">Join our sessions to learn, network, and grow.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === cat
                    ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={event.id}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all hover:shadow-xl dark:hover:shadow-teal-900/10 cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teal-600 border border-teal-100 dark:border-teal-900">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar size={14} />
                  <span>{new Date(event.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <Clock size={14} />
                  <span>{event.time}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-500 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-1">
                  {event.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                  <button 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      rsvped[event.id]
                        ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRsvp(event.id);
                    }}
                  >
                    {rsvped[event.id] ? 'Going ✓' : 'RSVP'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 relative">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="px-3 py-1 bg-teal-500 rounded-full text-xs font-bold mb-2 inline-block">
                    {selectedEvent.category}
                  </span>
                  <h3 className="text-3xl font-bold">{selectedEvent.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-6 mb-8 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-teal-500" size={20} />
                    {new Date(selectedEvent.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-teal-500" size={20} />
                    {selectedEvent.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-teal-500" size={20} />
                    {selectedEvent.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-teal-500" size={20} />
                    {selectedEvent.attendees} Attending
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">About Event</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {selectedEvent.description}
                </p>
                
                <button 
                  onClick={() => {
                    toggleRsvp(selectedEvent.id);
                    setSelectedEvent(null);
                  }}
                  className="w-full py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors"
                >
                  {rsvped[selectedEvent.id] ? 'You are registered!' : 'Confirm Registration'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
