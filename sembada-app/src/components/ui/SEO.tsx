import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}

export function SEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://sembada.xyz'
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`

  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Update Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:image': imageUrl,
      'og:url': url || siteUrl,
      'og:type': type,
    }

    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', property)
        document.head.appendChild(metaTag)
      }
      metaTag.setAttribute('content', content)
    })
  }, [title, description, imageUrl, url, type, siteUrl])

  return null
}
