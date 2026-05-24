import type { ReactNode } from 'react';

type TwinBadgeProps = {
  children: ReactNode;
  tone?: 'brand' | 'ink' | 'green' | 'paper';
};

export function TwinBadge({ children, tone = 'brand' }: TwinBadgeProps) {
  return <span className={`twin-badge twin-badge-${tone}`}>{children}</span>;
}
