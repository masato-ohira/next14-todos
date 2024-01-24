import { twMerge as tw } from 'tailwind-merge'
import { colord } from 'colord'

export const createColors = (
  name: string,
  hex: string,
): Record<string, string> => {
  return {
    [`${name}-50`]: colord(hex).lighten(0.25).toHex(),
    [`${name}-100`]: colord(hex).lighten(0.2).toHex(),
    [`${name}-200`]: colord(hex).lighten(0.15).toHex(),
    [`${name}-300`]: colord(hex).lighten(0.1).toHex(),
    [`${name}-400`]: colord(hex).lighten(0.05).toHex(),
    [`${name}-500`]: colord(hex).toHex(),
    [`${name}-600`]: colord(hex).darken(0.05).toHex(),
    [`${name}-700`]: colord(hex).darken(0.1).toHex(),
    [`${name}-800`]: colord(hex).darken(0.15).toHex(),
    [`${name}-900`]: colord(hex).darken(0.2).toHex(),
  }
}

const primary = '#5BB431'

export const colors = {
  [`primary-50`]: colord(primary).lighten(0.25).toHex(),
  [`primary-100`]: colord(primary).lighten(0.2).toHex(),
  [`primary-200`]: colord(primary).lighten(0.15).toHex(),
  [`primary-300`]: colord(primary).lighten(0.1).toHex(),
  [`primary-400`]: colord(primary).lighten(0.05).toHex(),
  [`primary-500`]: primary,
  [`primary-600`]: '#66BF33',
  [`primary-700`]: colord(primary).darken(0.1).toHex(),
  [`primary-800`]: colord(primary).darken(0.15).toHex(),
  [`primary-900`]: colord(primary).darken(0.2).toHex(),
}
