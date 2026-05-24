import type { ButtonHTMLAttributes, ReactNode } from 'react';

type TwinButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
};

export function TwinButton({ variant = 'primary', className = '', children, ...props }: TwinButtonProps) {
  return (
    <button type="button" className={`twin-button twin-button-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
