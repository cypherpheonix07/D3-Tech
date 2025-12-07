import { TeamMember, Project, Event, GalleryItem, Stat, FAQItem, DomainItem } from '../types';
import { 
  Code, Database, Brain, Smartphone, Cloud, Shield, 
  Server, Zap, Lock, Radio, Layers, Gamepad2 
} from 'lucide-react';

export const stats: Stat[] = [
  { id: '1', label: 'Community Members', value: 5000, suffix: '+' },
  { id: '2', label: 'Events Hosted', value: 120, suffix: '+' },
  { id: '3', label: 'Projects Shipped', value: 45, suffix: '' },
  { id: '4', label: 'Countries Reached', value: 30, suffix: '+' },
];

export const domains: DomainItem[] = [
  { id: '1', title: 'Web Development', count: 156, icon: Code },
  { id: '2', title: 'Data Structures', count: 89, icon: Database },
  { id: '3', title: 'AI & Machine Learning', count: 124, icon: Brain },
  { id: '4', title: 'Mobile Development', count: 67, icon: Smartphone },
  { id: '5', title: 'Cloud Computing', count: 93, icon: Cloud },
  { id: '6', title: 'Cybersecurity', count: 78, icon: Shield },
  { id: '7', title: 'Database Management', count: 102, icon: Server },
  { id: '8', title: 'DevOps', count: 85, icon: Zap },
  { id: '9', title: 'Blockchain', count: 54, icon: Lock },
  { id: '10', title: 'IoT', count: 61, icon: Radio },
  { id: '11', title: 'Full Stack Development', count: 137, icon: Layers },
  { id: '12', title: 'Game Development', count: 42, icon: Gamepad2 },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Community Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Tech Evangelist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    socials: { github: '#', twitter: '#' }
  },
  {
    id: '3',
    name: 'Elena Kim',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#' }
  },
  {
    id: '4',
    name: 'David Okafor',
    role: 'Open Source Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    socials: { github: '#', linkedin: '#' }
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'OpenUI Library',
    description: 'A community-driven UI component library for modern web applications.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'TypeScript', 'A11y'],
    link: '#'
  },
  {
    id: '2',
    title: 'DevDash',
    description: 'An open-source developer dashboard for tracking productivity metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    tags: ['Vue', 'D3.js', 'Node'],
    link: '#'
  },
  {
    id: '3',
    title: 'EcoTrack',
    description: 'Mobile app for tracking carbon footprint with gamification elements.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=600',
    tags: ['React Native', 'Firebase'],
    link: '#'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Future of Frontend 2025',
    date: '2025-04-15',
    time: '18:00 EST',
    location: 'Tech Hub, NY',
    category: 'Meetup',
    description: 'Join us for an evening discussing the latest trends in frontend development, from AI-assisted coding to new CSS features.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
    attendees: 142
  },
  {
    id: '2',
    title: 'Rust for Beginners',
    date: '2025-04-20',
    time: '10:00 EST',
    location: 'Online (Zoom)',
    category: 'Workshop',
    description: 'A hands-on workshop to get you started with Rust programming language. No prior experience required.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600',
    attendees: 89
  },
  {
    id: '3',
    title: 'Global Hackathon 2025',
    date: '2025-05-01',
    time: '48 Hours',
    location: 'Hybrid',
    category: 'Hackathon',
    description: 'Build solutions for global challenges in our annual 48-hour hackathon. Prizes worth $10k up for grabs.',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=600',
    attendees: 500
  },
  {
    id: '4',
    title: 'System Design Deep Dive',
    date: '2025-05-10',
    time: '14:00 EST',
    location: 'Online',
    category: 'Webinar',
    description: 'Learn how to design scalable systems from senior engineers at top tech companies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    attendees: 320
  }
];

export const galleryItems: GalleryItem[] = [
  { id: '1', type: 'Offline Meetup', caption: 'Summer Social 2024', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600' },
  { id: '2', type: 'Online Session', caption: 'Virtual Workshop', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=600' },
  { id: '3', type: 'Offline Meetup', caption: 'Hackathon Winners', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600' },
  { id: '4', type: 'Offline Meetup', caption: 'Networking Night', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600' },
  { id: '5', type: 'Online Session', caption: 'Guest Speaker Series', image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600' },
  { id: '6', type: 'Offline Meetup', caption: 'Code & Coffee', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600' },
];

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'How do I join the D3_TECH community?',
    answer: 'Joining is easy! Simply click the "Join Now" button at the top of the page to access our Discord server and newsletter subscription.'
  },
  {
    id: '2',
    question: 'Are the events free to attend?',
    answer: 'Most of our community meetups and online sessions are completely free. Some specialized workshops or major conferences may have a ticket fee to cover costs.'
  },
  {
    id: '3',
    question: 'Can I contribute to open source projects?',
    answer: 'Absolutely! We have a dedicated "Projects" section where we list active open-source initiatives looking for contributors of all skill levels.'
  },
  {
    id: '4',
    question: 'Is this community suitable for beginners?',
    answer: 'Yes! We pride ourselves on being inclusive. We have mentorship programs and "beginner-friendly" tagged events specifically designed for those starting their tech journey.'
  }
];
