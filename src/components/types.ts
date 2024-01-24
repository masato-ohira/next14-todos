import type { CSSProperties, ReactNode } from 'react'

export type ComponentProps = {
  id?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}
