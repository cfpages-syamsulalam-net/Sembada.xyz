interface StarryBackgroundProps {
  className?: string
  variant?: 'subtle' | 'normal' | 'dense'
}

export function StarryBackground({ className = '', variant = 'normal' }: StarryBackgroundProps) {
  // Generate stars based on variant
  const starCounts = {
    subtle: 15,
    normal: 25,
    dense: 40,
  }

  const count = starCounts[variant]

  // Pre-generate star positions (deterministic for consistent rendering)
  const stars = Array.from({ length: count }, (_, i) => ({
    top: `${((i * 37 + 13) % 100)}%`,
    left: `${((i * 53 + 7) % 100)}%`,
    size: i % 5 === 0 ? `${1.5 + (i % 3)}px` : `${0.5 + (i % 3) * 0.3}px`,
    duration: `${2 + (i % 5)}s`,
    delay: `${(i % 4) * 0.5}s`,
    color: i % 4 === 0 ? 'rgba(212, 175, 55, 0.6)' : `rgba(255, 255, 255, ${0.2 + (i % 4) * 0.15})`,
  }))

  // Accent stars (larger, gold)
  const accentCount = Math.floor(count / 5)
  const accentStars = Array.from({ length: accentCount }, (_, i) => ({
    top: `${((i * 41 + 23) % 100)}%`,
    left: `${((i * 47 + 11) % 100)}%`,
    size: `${1.5 + (i % 3)}px`,
    duration: `${3 + (i % 4)}s`,
    delay: `${(i % 3) * 0.7}s`,
    color: 'rgba(212, 175, 55, 0.7)',
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ zIndex: 0 }}>
      {/* Small Stars */}
      {stars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animation: `twinkle ${star.duration} ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Accent Gold Stars */}
      {accentStars.map((star, i) => (
        <div
          key={`accent-${i}`}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animation: `twinkle-fast ${star.duration} ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
