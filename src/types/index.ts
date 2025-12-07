export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Workshop' | 'Meetup' | 'Hackathon' | 'Webinar';
  description: string;
  image: string;
  attendees: number;
}

export interface GalleryItem {
  id: string;
  type: 'Offline Meetup' | 'Online Session';
  image: string;
  caption: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DomainItem {
  id: string;
  title: string;
  count: number;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
}
