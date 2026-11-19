import React from 'react';

interface StatusBadgeProps {
  status: 'Available' | 'In Development' | 'Planned' | 'Completed' | 'In Progress' | 'Verified OS Asset' | 'Design Preview' | 'Experimental' | 'Verified' | 'Limited Compatibility';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStyle = () => {
    switch (status) {
      case 'Available':
      case 'Completed':
      case 'Verified':
      case 'Verified OS Asset':
        return {
          bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400'
        };
      case 'In Development':
      case 'In Progress':
        return {
          bg: 'bg-blue-500/10 text-cyan-400 border-cyan-500/30',
          dot: 'bg-cyan-400 animate-pulse'
        };
      case 'Experimental':
      case 'Limited Compatibility':
        return {
          bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
          dot: 'bg-amber-400'
        };
      case 'Planned':
      case 'Design Preview':
      default:
        return {
          bg: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
          dot: 'bg-violet-400'
        };
    }
  };

  const style = getStyle();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-md ${style.bg} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
};
