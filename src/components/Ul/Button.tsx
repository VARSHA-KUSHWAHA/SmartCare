// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children,
  ...props 
}) => (
  <button 
    className={`px-6 py-3 rounded-lg font-medium transition-all ${
      variant === 'primary' 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
    {...props}
  >
    {children}
  </button>
);