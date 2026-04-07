import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-black uppercase tracking-widest transition-all duration-300 rounded-none whitespace-nowrap'
  
  const variants = {
    primary: 'border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-obsidian hover:shadow-gold-md',
    secondary: 'border border-gold/40 text-text-primary bg-transparent hover:bg-gradient-to-t hover:from-gold/10',
    ghost: 'text-text-primary bg-transparent hover:text-gold relative',
  }
  
  const sizes = {
    sm: 'text-xs px-6 py-2 tracking-wide',
    md: 'text-sm px-8 py-3',
    lg: 'text-base px-12 py-4',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
