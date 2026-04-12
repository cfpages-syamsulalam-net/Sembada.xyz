import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  canonical?: string
  noindex?: boolean
  robots?: string
}

export function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  canonical,
  noindex = false,
  robots,
}: SEOProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://sembada.xyz'
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`
  const canonicalUrl = canonical || url || siteUrl

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

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // Update or create robots meta
    let metaRobots = document.querySelector('meta[name="robots"]')
    if (!metaRobots) {
      metaRobots = document.createElement('meta')
      metaRobots.setAttribute('name', 'robots')
      document.head.appendChild(metaRobots)
    }
    metaRobots.setAttribute(
      'content',
      robots || (noindex ? 'noindex, nofollow' : 'index, follow')
    )

    // Update or create theme-color meta
    let metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta')
      metaThemeColor.setAttribute('name', 'theme-color')
      document.head.appendChild(metaThemeColor)
    }
    metaThemeColor.setAttribute('content', '#0B0C10')

    // Update Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:image': imageUrl,
      'og:url': canonicalUrl,
      'og:type': type,
      'og:locale': 'id_ID',
      'og:site_name': 'Sembada Batu Beling',
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

    // Update Twitter Card tags
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': imageUrl,
    }

    Object.entries(twitterTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('name', name)
        document.head.appendChild(metaTag)
      }
      metaTag.setAttribute('content', content)
    })
  }, [
    title,
    description,
    imageUrl,
    canonicalUrl,
    type,
    noindex,
    robots,
    siteUrl,
  ])

  return null
}
