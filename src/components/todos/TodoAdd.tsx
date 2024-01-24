'use client'

import { addTodoAction } from '@/server/todos'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { useRef, useTransition } from 'react'

export const TodoAdd = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, startTransition] = useTransition()
  return (
    <form
      ref={formRef}
      className={cn(`
        hstack gap-4 mb-6 max-w-xl
        ${isLoading ? 'pointer-events-none opacity-50' : ''}
      `)}
      action={(data) => {
        startTransition(() => {
          addTodoAction(data)
        })
        formRef.current?.reset()
      }}
    >
      <Input name={'title'} className={'flex-1'} />
      <Button type='submit'>新規作成</Button>
    </form>
  )
}
