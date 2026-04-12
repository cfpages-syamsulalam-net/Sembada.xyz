interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Generate JSON-LD for BreadcrumbList schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href ? `https://sembada.xyz${item.href}` : undefined
    }))
  }

  return (
    <>
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`container mx-auto px-4 md:px-6 py-4 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-black">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[#f2ca50]/40 text-[10px] md:text-xs">
                  ›
                </span>
              )}
              {item.href && index < items.length - 1 ? (
                <a
                  href={item.href}
                  className="text-[#94A3B8] hover:text-[#f2ca50] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : index === items.length - 1 ? (
                <span className="text-[#f2ca50]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <span className="text-[#94A3B8]">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
