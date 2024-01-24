import { ceil } from 'lodash-es'

type VwProps = {
  size: number
  viewport: number
  comment: boolean
}

const vw = (props: VwProps) => {
  let rate = 100 / props.viewport
  return props.comment
    ? `${ceil(rate * props.size, 4)}vw /* ${props.size}px */`
    : `${ceil(rate * props.size, 4)}vw`
}

export const pxVw = (size: number, comment?: boolean) => {
  comment = comment || false
  return vw({ size, comment, viewport: 1920 })
}

export const spVw = (size: number, comment?: boolean) => {
  comment = comment || false
  return vw({ size, comment, viewport: 375 })
}
