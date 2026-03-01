interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-block text-center';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
