import { split } from 'lodash-es'

export const mdTitle = (md: string) => {
  const lines = md.split('\n')
  let title = ''
  let n = 0
  for (const line of lines) {
    if (line.startsWith('# ')) {
      n++
      title = line
    }
  }

  if (split(title, '# ').length > 1) {
    return split(title, '# ')[1]
  } else {
    return 'Untitled'
  }
}
