
import React from 'react';
import { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps extends LucideProps {
  icon: LucideIcon;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const iconVariants = {
  default: 'text-gray-600',
  primary: 'text-green-600',
  secondary: 'text-blue-600',
  accent: 'text-emerald-600',
};

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const Icon: React.FC<IconProps> = ({ 
  icon: IconComponent, 
  className, 
  variant = 'default', 
  size = 'md',
  ...props 
}) => {
  return (
    <IconComponent 
      className={cn(
        iconSizes[size],
        iconVariants[variant],
        'transition-colors duration-200',
        className
      )}
      {...props}
    />
  );
};

export default Icon;
