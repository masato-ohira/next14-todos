import MarkdownIt from 'markdown-it'
import type { ComponentProps } from '@c/types'
import { cn } from '@/utils/cn'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
}
const md = new MarkdownIt(mdOptions)

type Props = ComponentProps & {
  children: string
  clsx?: boolean
}

export const MyMarkdown = (props: Props) => {
  const html: string = md.render(props.children || '')

  return (
    <div
      className={cn(``, props.className || '')}
      style={props.style}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}
