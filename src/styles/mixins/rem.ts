import { ceil } from 'lodash-es'

const fontRatio = 0.625

export const rem = (size: number) => {
  return `${ceil(size * 0.1 * fontRatio, 4)}rem`
}
