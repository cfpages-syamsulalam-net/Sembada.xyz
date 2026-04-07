interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-8 bg-obsidian-surface border border-gold/20 transition-all duration-300 hover:bg-obsidian-elevated hover:border-gold/40 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 hexagon bg-obsidian/70 backdrop-blur-sm border border-gold/40 flex items-center justify-center">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}
