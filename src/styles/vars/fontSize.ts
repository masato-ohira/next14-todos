import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config'
import { rem } from '../mixins/rem'
import { pxVw, spVw } from '../mixins/vw'

type SizeConf = ResolvableTo<KeyValuePair<string, [string, string]>>

export const fontSize: SizeConf = {
  '2xs': [rem(10), '1.8'],
  xs: [rem(12), '1.8'],
  sm: [rem(14), '1.8'],
  base: [rem(16), '1.8'],
  lg: [rem(18), '1.4'],
  xl: [rem(20), '1.4'],
  '2xl': [rem(24), '1.2'],
  '3xl': [rem(32), '1.2'],
  '3.5xl': [rem(36), '1.2'],
  '4xl': [rem(40), '1.2'],
  '5xl': [rem(54), '1.2'],
  '6xl': [rem(64), '1.1'],
  '7xl': [rem(72), '1'],
  '7.5xl': [rem(80), '1'],
  '8xl': [rem(96), '1'],
  '9xl': [rem(128), '1'],
}

export const fontSizeVw: SizeConf = {
  'vw-2xs': [pxVw(10, true), '1.8'],
  'vw-xs': [pxVw(12, true), '1.8'],
  'vw-sm': [pxVw(14, true), '1.8'],
  'vw-base': [pxVw(16, true), '1.8'],
  'vw-lg': [pxVw(18, true), '1.4'],
  'vw-xl': [pxVw(20, true), '1.4'],
  'vw-2xl': [pxVw(24, true), '1.2'],
  'vw-3xl': [pxVw(32, true), '1.2'],
  'vw-3.5xl': [pxVw(36, true), '1.2'],
  'vw-4xl': [pxVw(40, true), '1.2'],
  'vw-5xl': [pxVw(54, true), '1.2'],
  'vw-6xl': [pxVw(64, true), '1.1'],
  'vw-7xl': [pxVw(72, true), '1'],
  'vw-7.5xl': [pxVw(80, true), '1'],
  'vw-8xl': [pxVw(96, true), '1'],
  'vw-9xl': [pxVw(128, true), '1'],
}

export const fontSizeSw: SizeConf = {
  'sw-2xs': [spVw(10, true), '1.8'],
  'sw-xs': [spVw(12, true), '1.8'],
  'sw-sm': [spVw(14, true), '1.8'],
  'sw-base': [spVw(16, true), '1.8'],
  'sw-lg': [spVw(18, true), '1.4'],
  'sw-xl': [spVw(20, true), '1.4'],
  'sw-2xl': [spVw(24, true), '1.2'],
  'sw-3xl': [spVw(32, true), '1.2'],
  'sw-3.5xl': [spVw(36, true), '1.2'],
  'sw-4xl': [spVw(40, true), '1.2'],
  'sw-5xl': [spVw(54, true), '1.2'],
  'sw-6xl': [spVw(64, true), '1.1'],
  'sw-7xl': [spVw(72, true), '1'],
  'sw-7.5xl': [spVw(80, true), '1'],
  'sw-8xl': [spVw(96, true), '1'],
  'sw-9xl': [spVw(128, true), '1'],
}
