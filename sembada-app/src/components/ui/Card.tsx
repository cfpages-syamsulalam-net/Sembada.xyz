import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'hexagon'
}

export function Card({
  variant = 'default',
  className = '',
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-obsidian-surface border border-gold/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass hover:border-gold/40',
    glass: 'bg-obsidian/60 backdrop-blur-xl border border-gold/20 p-6 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:border-gold/40',
    hexagon: 'bg-obsidian-surface hexagon p-12',
  }

  return (
    <div
      className={variants[variant]}
      {...props}
    >
      {children}
    </div>
  )
}
