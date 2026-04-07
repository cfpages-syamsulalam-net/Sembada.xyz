import { Link } from 'react-router-dom'

interface ProductCardProps {
  image: string
  title: string
  description: string
  href: string
}

export function ProductCard({ image, title, description, href }: ProductCardProps) {
  return (
    <div className="group bg-obsidian-surface border border-gold/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-glass hover:border-gold/40">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian/90 via-gold/10 to-obsidian/90" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          to={href}
          className="text-sm font-semibold text-gold tracking-wide hover:text-gold-bright transition-colors inline-flex items-center gap-2"
        >
          Pelajari Lebih Lanjut
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  )
}
