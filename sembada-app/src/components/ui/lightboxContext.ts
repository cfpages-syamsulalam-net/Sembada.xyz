import { createContext, useContext } from 'react'

export interface LightboxItem {
  src: string
  alt: string
}

export interface LightboxContextValue {
  open: (items: LightboxItem[], index?: number) => void
  isOpen: boolean
}

export const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const context = useContext(LightboxContext)
  if (!context) throw new Error('useLightbox harus dipakai di dalam LightboxProvider')
  return context
}
