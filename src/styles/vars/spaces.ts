import { times, mapKeys } from 'lodash-es'
import { pxVw, spVw } from '../mixins/vw'

const setSpaces = (device: string) => {
  const arr: Record<string, string> = {}

  const setValue = (num: number) => {
    if (device == 'pc') {
      arr[`vw-${num}`] = pxVw(num * 4)
    } else {
      arr[`sw-${num}`] = spVw(num * 4)
    }
  }

  times(300, (n) => {
    const num = n + 1
    if (num > 200) {
      if (num % 4 == 0) {
        setValue(num)
      }
    } else if (num > 100) {
      if (num % 2 == 0) {
        setValue(num)
      }
    } else {
      setValue(num)
    }
  })

  return arr
}

export const spaces = {
  ...setSpaces('pc'),
  ...setSpaces('sp'),

  // 'vw-sm': pxVw(90),
  // 'vw-md': pxVw(180),
  // 'vw-lg': pxVw(220),
  // 'vw-xl': pxVw(240),
  // 'vw-2xl': pxVw(320),
  // 'sw-sm': spVw(30),
  // 'sw-md': spVw(50),
  // 'sw-lg': spVw(70),
  // 'sw-xl': spVw(80),
  // 'sw-2xl': spVw(90),
}
