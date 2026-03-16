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
  const baseStyles = 'inline-block rounded-xl px-6 py-3 text-center font-semibold transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-300 to-amber-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:from-cyan-200 hover:to-amber-200',
    secondary: 'border border-cyan-300/40 text-cyan-200 hover:bg-cyan-500/15 hover:text-white',
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
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
