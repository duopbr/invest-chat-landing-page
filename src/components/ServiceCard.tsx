
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: 'default' | 'featured';
}

const ServiceCard = ({ icon, title, description, className, variant = 'default' }: ServiceCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-gray-100/50",
      variant === 'featured' && "ring-2 ring-green-500/20 bg-gradient-to-br from-green-50/50 to-emerald-50/50",
      className
    )}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        {/* Icon container with enhanced styling */}
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
          variant === 'featured' 
            ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg" 
            : "bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 group-hover:from-green-200 group-hover:to-emerald-200"
        )}>
          <div className="transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Decorative bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
};

export default ServiceCard;
