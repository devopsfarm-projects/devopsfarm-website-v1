'use client';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transform active:scale-95";
  
const variants = {
  primary: "bg-brand text-white hover:bg-brand/80 active:bg-brand focus:bg-brand shadow-lg shadow-brand/20 hover:shadow-brand/40 border border-transparent transition-all",
  secondary: "bg-brand text-white hover:bg-brand/80 border border-brand/20 transition-all",
  outline: "bg-transparent border-2 border-black text-brand hover:bg-brand hover:text-white transition-all",
}; 
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};