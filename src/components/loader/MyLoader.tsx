import { cn } from '@/utils/cn'
import { LuLoader2 } from 'react-icons/lu'

type Props = {
  wrapClass?: string
  iconClass?: string
}

export const MyLoader = (props: Props) => {
  return (
    <div
      className={cn(
        `
          min-h-[50vh]
          center
        `,
        props.wrapClass,
      )}
    >
      <LuLoader2
        className={cn(
          `
            text-primary
            animate-spin
            text-5xl
          `,
          props.iconClass,
        )}
      />
    </div>
  )
}
