import { nl2br } from '@/utils/nl2br'
import type { ComponentProps } from '@c/types'
import { cn } from '@/utils/cn'

type Props = ComponentProps & {
  children: string
}

export const MyText = (props: Props) => {
  const html = nl2br(props.children)
  return (
    <span
      className={cn(
        //
        `inline-block`,
        props.className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
