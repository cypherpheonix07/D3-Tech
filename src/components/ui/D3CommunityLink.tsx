import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../utils/cn';

interface D3CommunityLinkProps {
  className?: string;
  showIcon?: boolean;
}

export const D3CommunityLink: React.FC<D3CommunityLinkProps> = ({ 
  className, 
  showIcon = true 
}) => {
  return (
    <a
      href="https://d3community.in"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 font-medium text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 hover:underline transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-sm",
        className
      )}
      aria-label="Visit d3tech.community (opens in a new tab)"
    >
      Visit d3tech.community
      {showIcon && <ExternalLink size={16} className="inline-block" />}
    </a>
  );
};
