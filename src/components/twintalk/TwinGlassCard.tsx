import type { HTMLAttributes, ReactNode } from 'react';

type TwinGlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: 'paper' | 'brand' | 'dark';
};

export function TwinGlassCard({ children, tone = 'paper', className = '', ...props }: TwinGlassCardProps) {
  return (
    <div className={`twin-card twin-card-${tone} ${className}`} {...props}>
      {children}
    </div>
  );
}
