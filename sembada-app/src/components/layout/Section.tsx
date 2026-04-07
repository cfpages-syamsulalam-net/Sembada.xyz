import type { HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alt' | 'glass'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  variant = 'default',
  padding = 'lg',
  className = '',
  children,
  ...props
}: SectionProps) {
  const variants = {
    default: 'bg-obsidian',
    alt: 'bg-obsidian-surface',
    glass: 'bg-obsidian/70 backdrop-blur-xl',
  }

  const paddings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-48',
  }

  return (
    <section
      className={`${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
