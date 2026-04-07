import type { HTMLAttributes } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4
  variant?: 'default' | 'gold'
}

export function Heading({
  level = 1,
  variant = 'default',
  className = '',
  children,
  ...props
}: HeadingProps) {
  const baseStyles = 'font-black uppercase leading-tight'
  
  const levels = {
    1: 'text-4xl md:text-5xl lg:text-6xl tracking-wider',
    2: 'text-3xl md:text-4xl tracking-wide',
    3: 'text-2xl md:text-3xl tracking-normal font-bold',
    4: 'text-xl md:text-2xl font-semibold',
  }
  
  const variants = {
    default: 'text-text-primary',
    gold: 'text-gold-gradient',
  }

  const Tag = `h${level}` as React.ElementType

  return (
    <Tag
      className={`${baseStyles} ${levels[level]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
