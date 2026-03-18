import React, { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  strength?: number;
}

const variantStyles = {
  primary: 'bg-yellow-600 text-accent-foreground hover:shadow-glow-orange',
  secondary: 'bg-primary text-primary-foreground hover:shadow-glow-teal',
  outline: 'border-2 border-accent text-accent hover:bg-accent/10',
  ghost: 'text-foreground hover:bg-card/50',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  strength = 0.3,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      });

      const relX = ((e.clientX - rect.left) / rect.width) * 100;
      const relY = ((e.clientY - rect.top) / rect.height) * 100;
      button.style.setProperty('--mouse-x', `${relX}%`);
      button.style.setProperty('--mouse-y', `${relY}%`);
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    const ripple = rippleRef.current;
    
    if (button && ripple) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(ripple, {
        left: x,
        top: y,
        scale: 0,
        opacity: 0.5,
      });

      gsap.to(ripple, {
        scale: 4,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        'magnetic-btn relative overflow-hidden rounded-xl font-semibold font-display transition-all duration-300 transform-gpu',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <span
        ref={rippleRef}
        className="absolute w-4 h-4 rounded-full bg-foreground/30 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};
