
import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", height = 60 }) => {
  return (
    <img
      src="dist/assets/bandjlogo.png"
      alt="B&J Luxe Logo"
      style={{ height: `${height}px` }}
      className={`w-auto object-contain block mix-blend-multiply ${className}`}
    />
  );
};

export default Logo;
