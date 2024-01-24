import fs from 'fs-extra'
import plugin from 'tailwindcss/plugin'
import type { CSSRuleObject } from 'tailwindcss/types/config'
import { zipObject } from 'lodash'
import { globSync } from 'glob'

const tailwindDir = `src/styles`

// 使用しているCustomClass一覧を取得し
// tailwind intellisenceに認識させる
export const twClasses = () => {
  const regex = /\s\s\.([a-zA-Z0-9_-]+)/g
  const targets = [
    ...globSync(`${tailwindDir}/components/**/*.scss`),
    `${tailwindDir}/utilities.scss`,
  ]
  const customStyles = targets.map((path) => {
    return fs.readFileSync(path, 'utf-8')
  })
  const classNames = []

  let match
  while ((match = regex.exec(customStyles.join('\n'))) !== null) {
    classNames.push(match[1])
  }

  const keys = classNames.map((i) => `.${i}`)
  const values = classNames.map((i) => {
    return {}
  })
  // console.log({ classes: keys })
  return zipObject(keys, values)
}

export const classesPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ...(twClasses() as CSSRuleObject),
  })
})
